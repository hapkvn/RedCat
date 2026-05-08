package com.redcat.coffeeshop.repositories;

import com.redcat.coffeeshop.models.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // Spring Data JPA sẽ tự động dịch hàm này thành câu lệnh:
    // SELECT * FROM users WHERE username = ?
    Optional<User> findByUsername(String username);
}