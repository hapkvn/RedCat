package com.redcat.coffeeshop.controllers;

import com.redcat.coffeeshop.models.User;
import com.redcat.coffeeshop.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*") // RẤT QUAN TRỌNG: Cho phép Frontend (chạy port khác) gọi API này mà không bị chặn lỗi CORS
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> loginData) {
        String username = loginData.get("username");
        String password = loginData.get("password"); // Thực tế bạn sẽ phải mã hóa RSA hoặc Bcrypt ở đây

        // Tìm user trong MySQL
        Optional<User> userOpt = userRepository.findByUsername(username);

        if (userOpt.isPresent()) {
            User user = userOpt.get();

            // Kiểm tra mật khẩu
            if (user.getPassword().equals(password)) {
                // Đăng nhập thành công, chuẩn bị dữ liệu gửi về Frontend
                Map<String, String> response = new HashMap<>();
                response.put("message", "Đăng nhập thành công");
                response.put("role", user.getRole()); // Lấy Role từ database (VD: ADMIN, STAFF)
                response.put("token", "token-tam-thoi-chua-co-jwt"); // Sẽ thay bằng JWT thật sau

                return ResponseEntity.ok(response);
            }
        }


        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("message", "Sai tài khoản hoặc mật khẩu"));
    }
}