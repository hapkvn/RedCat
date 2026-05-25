package com.redcat.coffeeshop.repositories;

import com.redcat.coffeeshop.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    // Thêm phương thức này để tìm sản phẩm theo ID của Category
    List<Product> findByCategoryId(Long categoryId);
    Product findByName(String name);
}
