package com.redcat.coffeeshop.controllers;

import com.redcat.coffeeshop.models.CoffeeTable;
import com.redcat.coffeeshop.repositories.CoffeeTableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/tables")
@CrossOrigin(origins = "*")
public class TableController {

    @Autowired
    private CoffeeTableRepository tableRepository;

    // Lấy danh sách bàn
    @GetMapping
    public ResponseEntity<List<CoffeeTable>> getAllTables() {
        List<CoffeeTable> tables = tableRepository.findAll();
        return ResponseEntity.ok(tables);
    }

    // Lấy thông tin bàn bằng qr_token
    @GetMapping("/by-qr-token/{qrToken}")
    public ResponseEntity<?> getTableByQrToken(@PathVariable String qrToken) {
        Optional<CoffeeTable> tableOpt = tableRepository.findByQrToken(qrToken);
        if (tableOpt.isPresent()) {
            return ResponseEntity.ok(tableOpt.get());
        }
        return ResponseEntity.status(404).body(Map.of("message", "Không tìm thấy bàn với QR token này"));
    }

    // Thêm bàn mới
    @PostMapping
    public ResponseEntity<?> createTable(@RequestBody CoffeeTable newTable) {
        if (newTable.getName() == null || newTable.getName().isEmpty()) {
            // Tự động tăng số bàn nếu không nhập
            long tableCount = tableRepository.count();
            newTable.setName("Bàn " + (tableCount + 1));
        }

        if (tableRepository.findByName(newTable.getName()).isPresent()) {
            return ResponseEntity.badRequest().body(Map.of("message", "Bàn đã tồn tại"));
        }

        newTable.setStatus("Trống");

        // FIX BUG 1: Lấy đúng số bàn làm mã QR thay vì dùng UUID ngẫu nhiên
        String tokenNumber = newTable.getName().replace("Bàn ", "").trim();
        newTable.setQrToken(tokenNumber);

        CoffeeTable savedTable = tableRepository.save(newTable);
        return ResponseEntity.ok(savedTable);
    }

    // Cập nhật trạng thái bàn
    @PatchMapping("/{id}/status")
    public ResponseEntity<?> updateTableStatus(@PathVariable Long id, @RequestBody Map<String, String> statusData) {
        Optional<CoffeeTable> tableOpt = tableRepository.findById(id);
        if (!tableOpt.isPresent()) {
            return ResponseEntity.notFound().build();
        }

        CoffeeTable table = tableOpt.get();
        String currentStatus = table.getStatus();
        String newStatus = "Trống".equals(currentStatus) ? "Đang sử dụng" : "Trống"; // Toggle trạng thái

        // Nếu client gửi status cụ thể, dùng status đó
        if (statusData != null && statusData.containsKey("status")) {
            newStatus = statusData.get("status");
        }

        table.setStatus(newStatus);
        tableRepository.save(table);
        return ResponseEntity.ok(table);
    }

    // Xóa bàn
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteTable(@PathVariable Long id) {
        Optional<CoffeeTable> tableOpt = tableRepository.findById(id);
        if (!tableOpt.isPresent()) {
            return ResponseEntity.notFound().build();
        }

        tableRepository.deleteById(id);

        // FIX BUG 2: Cập nhật lại TÊN và MÃ QR của các bàn sau khi xóa để dồn số khít lại
        List<CoffeeTable> remainingTables = tableRepository.findAll();
        for (int i = 0; i < remainingTables.size(); i++) {
            CoffeeTable table = remainingTables.get(i);

            String correctNumber = String.valueOf(i + 1);
            table.setName("Bàn " + correctNumber);
            table.setQrToken(correctNumber); // Đảm bảo Mã QR cũng được dồn theo

            tableRepository.save(table);
        }

        return ResponseEntity.ok(Map.of("message", "Đã xóa bàn và dồn số bàn thành công"));
    }
}