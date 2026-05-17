package com.redcat.coffeeshop.controllers;

import com.redcat.coffeeshop.models.Order;
import com.redcat.coffeeshop.repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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

    // Hàm lấy đơn hàng theo Trạng thái (Hàng chờ / Chế biến / Hoàn thành)
    @GetMapping
    public ResponseEntity<?> getOrders(@RequestParam(required = false) String status) {
        List<Order> orders;
        if (status != null && !status.isEmpty()) {
            orders = orderRepository.findByStatus(status);
        } else {
            orders = orderRepository.findAll();
        }
        
        // Tạm thời trả thẳng Object Order ra, bạn có thể map sang DTO sau để format HTML như ý muốn
        return ResponseEntity.ok(orders);
    }

    // Hàm nhận lệnh CHẾ BIẾN
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

    // Hàm nhận lệnh HOÀN THÀNH (Lưu DB)
    @PatchMapping("/{orderId}/complete")
    public ResponseEntity<?> completeOrder(@PathVariable String orderId) {
        Optional<Order> orderOpt = orderRepository.findById(orderId);
        if (orderOpt.isPresent()) {
            Order order = orderOpt.get();
            order.setStatus("Hoàn thành");
            
            // Tương lai: Thêm hàm gọi trừ nguyên liệu trong kho ở đây
            
            orderRepository.save(order);
            return ResponseEntity.ok(Map.of("message", "Đã hoàn thành đơn hàng"));
        }
        return ResponseEntity.status(404).body(Map.of("message", "Không tìm thấy đơn"));
    }
}