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

    // Endpoint thêm nhân viên mới
    @PostMapping("/users")
    public ResponseEntity<?> createEmployee(@RequestBody User newUser) {
        // Kiểm tra xem username đã tồn tại chưa
        if (userRepository.findByUsername(newUser.getUsername()).isPresent()) {
            return ResponseEntity.badRequest().body(Map.of("message", "Tên đăng nhập đã tồn tại"));
        }

        // Lưu user vào cơ sở dữ liệu
        newUser.setActive(true); // Mặc định kích hoạt khi mới tạo
        User savedUser = userRepository.save(newUser);
        
        return ResponseEntity.ok(savedUser);
    }

    // Endpoint API: PUT /api/admin/users/{userId} - Cập nhật thông tin nhân viên
    @PutMapping("/users/{userId}")
    public ResponseEntity<?> updateEmployee(@PathVariable Long userId, @RequestBody User updatedData) {
        Optional<User> userOpt = userRepository.findById(userId);

        if (!userOpt.isPresent()) {
            return ResponseEntity.status(404).body(Map.of("message", "Không tìm thấy nhân viên"));
        }

        User existingUser = userOpt.get();

        // Cập nhật các trường thông tin cơ bản
        if (updatedData.getFullName() != null) existingUser.setFullName(updatedData.getFullName());
        if (updatedData.getRole() != null) existingUser.setRole(updatedData.getRole());
        if (updatedData.getPhoneNumber() != null) existingUser.setPhoneNumber(updatedData.getPhoneNumber());

        // Nếu có gửi mật khẩu mới và mật khẩu không rỗng
        if (updatedData.getPassword() != null && !updatedData.getPassword().trim().isEmpty()) {
            // (Thực tế phải mã hóa mật khẩu ở đây trước khi lưu)
            existingUser.setPassword(updatedData.getPassword());
        }

        userRepository.save(existingUser);
        return ResponseEntity.ok(Map.of("message", "Cập nhật thành công", "user", existingUser));
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

    // Endpoint xóa nhân viên
    @DeleteMapping("/users/{userId}")
    public ResponseEntity<?> deleteEmployee(@PathVariable Long userId) {
        Optional<User> userOpt = userRepository.findById(userId);

        if (userOpt.isPresent()) {
            User user = userOpt.get();
            // Tránh xóa chính bản thân admin đang đăng nhập (Nên kiểm tra JWT)
            // Ở đây tạm thời cho phép xóa thoải mái để test
            userRepository.delete(user);
            return ResponseEntity.ok(Map.of("message", "Đã xóa nhân viên thành công"));
        } else {
            return ResponseEntity.status(404).body(Map.of("message", "Không tìm thấy nhân viên"));
        }
    }
}