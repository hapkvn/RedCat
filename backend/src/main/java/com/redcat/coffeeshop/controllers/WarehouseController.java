package com.redcat.coffeeshop.controllers;

import com.redcat.coffeeshop.models.Material;
import com.redcat.coffeeshop.repositories.MaterialRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.DecimalFormat;
import java.util.List;
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