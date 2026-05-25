package com.redcat.coffeeshop.controllers;

import com.redcat.coffeeshop.models.Category;
import com.redcat.coffeeshop.models.Product;
import com.redcat.coffeeshop.repositories.CategoryRepository;
import com.redcat.coffeeshop.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "*")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    // Lấy tất cả sản phẩm hoặc lọc theo categoryId
    @GetMapping
    public ResponseEntity<List<Product>> getProducts(@RequestParam(required = false) Long categoryId) {
        List<Product> products;
        if (categoryId != null) {
            products = productRepository.findByCategoryId(categoryId);
        } else {
            products = productRepository.findAll();
        }
        return ResponseEntity.ok(products);
    }

    // HÀM THÊM MÓN MỚI
    @PostMapping
    public ResponseEntity<?> createProduct(@RequestBody Product newProduct) {
        // Đảm bảo category được set đúng cách
        if (newProduct.getCategory() != null && newProduct.getCategory().getId() != null) {
            Optional<Category> categoryOpt = categoryRepository.findById(newProduct.getCategory().getId());
            if (categoryOpt.isPresent()) {
                newProduct.setCategory(categoryOpt.get());
            } else {
                return ResponseEntity.badRequest().body(Map.of("message", "Category không tồn tại"));
            }
        } else {
            return ResponseEntity.badRequest().body(Map.of("message", "Category là bắt buộc"));
        }

        // BỔ SUNG: Liên kết Công thức (Nguyên liệu) vào Món ăn trước khi lưu
        if (newProduct.getProductMaterials() != null) {
            // Gọi hàm setter đặc biệt trong Product.java để nối Món ăn và Nguyên liệu lại với nhau
            newProduct.setProductMaterials(newProduct.getProductMaterials());
        }

        productRepository.save(newProduct);
        return ResponseEntity.ok(Map.of("message", "Đã thêm món mới"));
    }

    // HÀM CHỈNH SỬA MÓN
    @PutMapping("/{id}")
    public ResponseEntity<?> updateProduct(@PathVariable Long id, @RequestBody Product productDetails) {
        Optional<Product> productOpt = productRepository.findById(id);
        if (productOpt.isPresent()) {
            Product existingProduct = productOpt.get();
            existingProduct.setName(productDetails.getName());
            existingProduct.setPrice(productDetails.getPrice());
            existingProduct.setDescription(productDetails.getDescription());

            // Cập nhật category
            if (productDetails.getCategory() != null && productDetails.getCategory().getId() != null) {
                Optional<Category> categoryOpt = categoryRepository.findById(productDetails.getCategory().getId());
                if (categoryOpt.isPresent()) {
                    existingProduct.setCategory(categoryOpt.get());
                } else {
                    return ResponseEntity.badRequest().body(Map.of("message", "Category không tồn tại"));
                }
            }

            // QUAN TRỌNG: Cập nhật ảnh mới nếu người dùng có đổi ảnh
            if (productDetails.getImageUrl() != null && !productDetails.getImageUrl().isEmpty()) {
                existingProduct.setImageUrl(productDetails.getImageUrl());
            }

            // BỔ SUNG: Cập nhật lại danh sách nguyên liệu (Công thức)
            if (productDetails.getProductMaterials() != null) {
                // Hàm này sẽ tự động xóa nguyên liệu cũ và lưu nguyên liệu mới vào
                existingProduct.setProductMaterials(productDetails.getProductMaterials());
            }

            productRepository.save(existingProduct);
            return ResponseEntity.ok(Map.of("message", "Cập nhật thành công"));
        }
        return ResponseEntity.notFound().build();
    }

    // Xóa sản phẩm
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable Long id) {
        if (!productRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        productRepository.deleteById(id);
        return ResponseEntity.ok(Map.of("message", "Đã xóa sản phẩm"));
    }
}