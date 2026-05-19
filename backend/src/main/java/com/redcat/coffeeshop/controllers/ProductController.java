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
    private CategoryRepository categoryRepository; // Cần để tìm Category theo ID

    // Lấy tất cả sản phẩm
    @GetMapping
    public ResponseEntity<List<Product>> getAllProducts() {
        List<Product> products = productRepository.findAll();
        return ResponseEntity.ok(products);
    }

    // Thêm sản phẩm mới
    @PostMapping
    public ResponseEntity<?> createProduct(@RequestBody Product product) {
        // Đảm bảo category được set đúng cách
        if (product.getCategory() != null && product.getCategory().getId() != null) {
            Optional<Category> categoryOpt = categoryRepository.findById(product.getCategory().getId());
            if (categoryOpt.isPresent()) {
                product.setCategory(categoryOpt.get());
            } else {
                return ResponseEntity.badRequest().body(Map.of("message", "Category không tồn tại"));
            }
        } else {
            return ResponseEntity.badRequest().body(Map.of("message", "Category là bắt buộc"));
        }

        Product savedProduct = productRepository.save(product);
        return ResponseEntity.ok(savedProduct);
    }

    // Cập nhật sản phẩm
    @PutMapping("/{id}")
    public ResponseEntity<?> updateProduct(@PathVariable Long id, @RequestBody Product productDetails) {
        Optional<Product> productOpt = productRepository.findById(id);
        if (!productOpt.isPresent()) {
            return ResponseEntity.notFound().build();
        }

        Product existingProduct = productOpt.get();
        existingProduct.setName(productDetails.getName());
        existingProduct.setDescription(productDetails.getDescription());
        existingProduct.setPrice(productDetails.getPrice());
        existingProduct.setImageUrl(productDetails.getImageUrl());

        // Cập nhật category
        if (productDetails.getCategory() != null && productDetails.getCategory().getId() != null) {
            Optional<Category> categoryOpt = categoryRepository.findById(productDetails.getCategory().getId());
            if (categoryOpt.isPresent()) {
                existingProduct.setCategory(categoryOpt.get());
            } else {
                return ResponseEntity.badRequest().body(Map.of("message", "Category không tồn tại"));
            }
        }

        Product updatedProduct = productRepository.save(existingProduct);
        return ResponseEntity.ok(updatedProduct);
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
