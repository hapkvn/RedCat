package com.redcat.coffeeshop.controllers;

import com.redcat.coffeeshop.models.*;
import com.redcat.coffeeshop.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/warehouse/orders")
@CrossOrigin(origins = "*")
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private MaterialRepository materialRepository;

    @GetMapping
    public ResponseEntity<?> getOrders(@RequestParam(required = false) String status) {
        if (status != null && !status.isEmpty()) {
            return ResponseEntity.ok(orderRepository.findByStatus(status));
        }
        return ResponseEntity.ok(orderRepository.findAll());
    }

    // Lấy thông tin đơn hàng cụ thể theo ID
    @GetMapping("/{orderId}")
    public ResponseEntity<?> getOrderById(@PathVariable String orderId) {
        return orderRepository.findById(orderId)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // HÀM NHẬN ĐƠN VÀ TỰ ĐỘNG GỘP ĐƠN THEO BÀN
    @PostMapping
    @Transactional
    public ResponseEntity<?> createOrder(@RequestBody Order newOrder) {
        if (newOrder.getTable() != null && newOrder.getTable().getId() != null) {
            // Tìm đơn hàng đang ở trạng thái "Chờ xử lý" hoặc "Đang chế biến" tại bàn này
            List<String> activeStatuses = List.of("Chờ xử lý", "Đang chế biến");
            Optional<Order> existingOrderOpt = orderRepository.findByTableIdAndStatusIn(
                    newOrder.getTable().getId(), activeStatuses);

            if (existingOrderOpt.isPresent()) {
                Order activeOrder = existingOrderOpt.get();

                // Gộp các OrderItem mới vào đơn hàng đang chạy
                if (newOrder.getItems() != null) {
                    for (OrderItem newItem : newOrder.getItems()) {
                        newItem.setOrder(activeOrder);
                        activeOrder.getItems().add(newItem);
                    }
                }
                // Cộng dồn tổng tiền hóa đơn tổng hợp
                activeOrder.setTotalAmount(activeOrder.getTotalAmount() + newOrder.getTotalAmount());
                Order savedOrder = orderRepository.save(activeOrder);
                return ResponseEntity.ok(savedOrder);
            }
        }

        // Nếu bàn chưa có đơn mở hoặc là khách mua mang đi -> Tạo đơn mới tinh
        if (newOrder.getItems() != null) {
            for (OrderItem item : newOrder.getItems()) {
                item.setOrder(newOrder);
            }
        }
        Order savedOrder = orderRepository.save(newOrder);
        return ResponseEntity.ok(savedOrder);
    }

    @PatchMapping("/{orderId}/processing")
    public ResponseEntity<?> processOrder(@PathVariable String orderId) {
        Optional<Order> orderOpt = orderRepository.findById(orderId);
        if (orderOpt.isPresent()) {
            Order order = orderOpt.get();
            order.setStatus("Đang chế biến");
            orderRepository.save(order);
            return ResponseEntity.ok(Map.of("message", "Đã chuyển sang chế biến"));
        }
        return ResponseEntity.status(404).body(Map.of("message", "Không tìm thấy đơn"));
    }

    // HÀM HOÀN THÀNH & TỰ ĐỘNG TRỪ KHO NGUYÊN LIỆU ĐỊNH LƯỢNG (CHỐT PHIÊN ĂN)
    @PatchMapping("/{orderId}/complete")
    @Transactional
    public ResponseEntity<?> completeOrder(@PathVariable String orderId) {
        Optional<Order> orderOpt = orderRepository.findById(orderId);
        if (orderOpt.isPresent()) {
            Order order = orderOpt.get();
            order.setStatus("Hoàn thành");

            if (order.getItems() != null) {
                for (OrderItem item : order.getItems()) {
                    Product product = productRepository.findByName(item.getProductName());
                    if (product != null && product.getProductMaterials() != null) {
                        for (ProductMaterial pm : product.getProductMaterials()) {
                            Material material = pm.getMaterial();
                            // Tính tổng định lượng tiêu hao thực tế: Định lượng cấu thành x Số lượng cốc đặt
                            double totalUsed = pm.getQuantity() * item.getQuantity();
                            double currentStock = material.getStockQuantity();
                            material.setStockQuantity(currentStock - totalUsed);
                            materialRepository.save(material);
                        }
                    }
                }
            }
            orderRepository.save(order);
            return ResponseEntity.ok(Map.of("message", "Đã thanh toán hóa đơn và trừ kho thành công!"));
        }
        return ResponseEntity.status(404).body(Map.of("message", "Không tìm thấy đơn"));
    }
}