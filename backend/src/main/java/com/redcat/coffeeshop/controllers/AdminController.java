package com.redcat.coffeeshop.controllers;

import com.redcat.coffeeshop.models.User;
import com.redcat.coffeeshop.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "*") // CORS
public class AdminController {

    @Autowired
    private UserRepository userRepository;

    // Endpoint lấy danh sách tất cả nhân viên
    @GetMapping("/users")
    // Tạm bỏ @PreAuthorize vì chưa cài đặt xác thực JWT
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userRepository.findAll();
        return ResponseEntity.ok(users);
    }

    // Endpoint API: PATCH /api/admin/users/{userId}/status
    @PatchMapping("/users/{userId}/status")
    // Tạm bỏ @PreAuthorize vì chưa cài đặt xác thực JWT
    public ResponseEntity<?> updateEmployeeStatus(@PathVariable Long userId, @RequestBody Map<String, Boolean> statusData) {
        Optional<User> userOpt = userRepository.findById(userId);

        if (userOpt.isPresent()) {
            User user = userOpt.get();
            Boolean newStatus = statusData.get("isActive");

            if (newStatus == null) {
                return ResponseEntity.badRequest().body(Map.of("message", "Dữ liệu trạng thái không hợp lệ"));
            }

            user.setActive(newStatus);
            userRepository.save(user);

            String message = newStatus ? "Mở khóa nhân viên thành công" : "Khóa nhân viên thành công";
            return ResponseEntity.ok(Map.of("message", message, "userId", user.getId(), "username", user.getUsername(), "isActive", user.isActive()));
        } else {
            return ResponseEntity.status(404).body(Map.of("message", "Không tìm thấy nhân viên"));
        }
    }
}