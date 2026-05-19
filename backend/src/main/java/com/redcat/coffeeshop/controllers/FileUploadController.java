package com.redcat.coffeeshop.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api/upload")
@CrossOrigin(origins = "*")
public class FileUploadController {

    // Đường dẫn gốc của project
    private static final String PROJECT_ROOT = System.getProperty("user.dir");

    // Đường dẫn lưu file avatar của user, trỏ tới thư mục uploads/avatars/
    private static final String AVATAR_UPLOAD_DIR = Paths.get(PROJECT_ROOT, "uploads", "avatars").toString() + File.separator;
    // Đường dẫn lưu file ảnh sản phẩm, trỏ tới thư mục uploads/products/
    private static final String PRODUCT_UPLOAD_DIR = Paths.get(PROJECT_ROOT, "uploads", "products").toString() + File.separator;


    @PostMapping("/avatar")
    public ResponseEntity<?> uploadAvatar(@RequestParam("file") MultipartFile file) {
        return handleFileUpload(file, AVATAR_UPLOAD_DIR, "/uploads/avatars/");
    }

    @PostMapping("/products")
    public ResponseEntity<?> uploadProductImage(@RequestParam("file") MultipartFile file) {
        return handleFileUpload(file, PRODUCT_UPLOAD_DIR, "/uploads/products/");
    }

    private ResponseEntity<?> handleFileUpload(MultipartFile file, String uploadDir, String baseUrl) {
        if (file.isEmpty()) {
            return ResponseEntity.badRequest().body(Map.of("message", "File trống"));
        }

        try {
            File directory = new File(uploadDir);
            if (!directory.exists()) {
                directory.mkdirs();
            }

            String originalFileName = file.getOriginalFilename();
            String extension = "";
            if (originalFileName != null && originalFileName.contains(".")) {
                extension = originalFileName.substring(originalFileName.lastIndexOf("."));
            }
            String uniqueFilename = UUID.randomUUID().toString() + extension;
            Path filePath = Paths.get(uploadDir + uniqueFilename);

            Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

            String fileUrl = baseUrl + uniqueFilename;
            
            return ResponseEntity.ok(Map.of("imageUrl", fileUrl));
            
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("message", "Lỗi khi lưu file: " + e.getMessage()));
        }
    }
}