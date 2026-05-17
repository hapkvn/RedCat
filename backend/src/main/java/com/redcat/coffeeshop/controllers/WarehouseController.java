package com.redcat.coffeeshop.controllers;

import com.redcat.coffeeshop.models.Material;
import com.redcat.coffeeshop.repositories.MaterialRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.DecimalFormat;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/warehouse")
@CrossOrigin(origins = "*") // Cho phép Frontend gọi API
public class WarehouseController {

    @Autowired
    private MaterialRepository materialRepository;

    // API lấy danh sách nguyên liệu: GET /api/warehouse/materials
    @GetMapping("/materials")
    public ResponseEntity<?> getAllMaterials() {
        List<Material> materials = materialRepository.findAll();
        DecimalFormat df = new DecimalFormat("#,###");

        // Chuyển đổi từ Material (DB) sang MaterialDTO (Cho Frontend)
        List<MaterialDTO> response = materials.stream().map(mat -> {
            MaterialDTO dto = new MaterialDTO();
            dto.id = mat.getId();
            dto.name = mat.getName();
            dto.supplier = mat.getSupplier() != null ? mat.getSupplier().getName() : "N/A";
            dto.type = mat.getCategory() != null ? mat.getCategory().getName() : "Khác";
            dto.unit = mat.getUnit();

            // Format số sang chuỗi giống JSON cũ (VD: "15", "150.000đ")
            dto.stock = df.format(mat.getStockQuantity());
            dto.min = df.format(mat.getMinStockLevel()) + " " + mat.getUnit();
            dto.price = df.format(mat.getUnitPrice()) + "đ";

            // Tính tổng giá trị tồn kho = Tồn * Đơn giá
            double totalValue = mat.getStockQuantity() * mat.getUnitPrice();
            dto.value = df.format(totalValue) + "đ";

            // Tạm thời fix cứng ngày nhập cuối
            dto.lastImport = "07/04";

            // Logic Cảnh báo tồn kho
            dto.isLowStock = mat.getStockQuantity() <= mat.getMinStockLevel();
            if (dto.isLowStock) {
                dto.status = "Sắp hết";
                dto.statusClass = "text-red-600 bg-red-50";
            } else {
                dto.status = "Ổn định";
                dto.statusClass = "text-green-600 bg-green-50";
            }

            return dto;
        }).collect(Collectors.toList());

        return ResponseEntity.ok(response);
    }

    // 1. API TRANG DASHBOARD (Lấy Top Tồn kho & Cảnh báo sắp hết)
    @GetMapping("/dashboard")
    public ResponseEntity<?> getDashboardData() {
        Map<String, Object> response = new HashMap<>();

        // TODO: Dùng MaterialRepository để SELECT TOP 7 nguyên liệu có giá trị tồn cao nhất
        // Dưới đây là code map dữ liệu giả lập SQL trả về đúng format Frontend cần:
        List<Map<String, Object>> topItems = List.of(
            Map.of("rank", 1, "name", "Cà phê hạt xay", "value", "2.250.000đ", "qty", "15 kg", "percent", 85),
            Map.of("rank", 2, "name", "Sữa tươi Vinamilk", "value", "560.000đ", "qty", "20 lít", "percent", 25)
        );

        // TODO: Dùng MaterialRepository để SELECT các nguyên liệu có stock_quantity <= min_stock_level
        List<Map<String, Object>> lowStock = List.of(
            Map.of("id", "NL002", "name", "Sữa đặc Ngôi Sao", "category", "Nguyên liệu", "supplier", "Dairy Farm", "current", "4 lon", "min", "5 lon", "need", "21 lon", "price", "20.000đ/lon", "cost", "420.000đ", "percent", 80)
        );

        response.put("topItemsData", topItems);
        response.put("lowStockData", lowStock);
        return ResponseEntity.ok(response);
    }

    // 2. API TRANG DANH SÁCH NHẬP KHO
    @GetMapping("/imports")
    public ResponseEntity<?> getImportOrders() {
        // TODO: Dùng ImportOrderRepository.findAll() rồi map sang DTO
        List<Map<String, Object>> imports = List.of(
            Map.of("id", "PN-219", "date", "07/04/2026", "supplier", "Highland Beans", "items", 2, "total", "3.100.000đ", "status", "Hoàn tất", "statusClass", "text-green-600 bg-green-50"),
            Map.of("id", "PN-217", "date", "06/04/2026", "supplier", "Tea Craft", "items", 2, "total", "2.450.000đ", "status", "Đang xử lý", "statusClass", "text-orange-500 bg-orange-50")
        );
        return ResponseEntity.ok(imports);
    }

    // 3. API TRANG DANH SÁCH XUẤT KHO
    @GetMapping("/exports")
    public ResponseEntity<?> getExportOrders() {
        // TODO: Dùng ExportOrderRepository.findAll() rồi map sang DTO
        List<Map<String, Object>> exports = List.of(
            Map.of("id", "PX-102", "reasonTitle", "Hoàn tất", "reasonSub", "Tự động (POS)", "date", "07/04/2026", "itemsCount", "5 mặt hàng", "total", "520.000đ", "status", "Hoàn tất", "statusClass", "text-green-600 bg-green-50")
        );
        return ResponseEntity.ok(exports);
    }

    // Class DTO nội bộ để định dạng JSON trả về
    public static class MaterialDTO {
        public String id;
        public String name;
        public String supplier;
        public String type;
        public String unit;
        public String stock;
        public String min;
        public String price;
        public String value;
        public String lastImport;
        public String status;
        public String statusClass;
        public boolean isLowStock;
    }
}