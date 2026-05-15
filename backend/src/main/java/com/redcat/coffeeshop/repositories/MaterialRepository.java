package com.redcat.coffeeshop.repositories;

import com.redcat.coffeeshop.models.Material;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MaterialRepository extends JpaRepository<Material, String> {
    // Kiểu String ở đây tương ứng với khóa chính (id) của Material là VARCHAR
}