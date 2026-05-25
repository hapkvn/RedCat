package com.redcat.coffeeshop.repositories;

import com.redcat.coffeeshop.models.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface OrderRepository extends JpaRepository<Order, String> {

    List<Order> findByStatus(String status);

    // Tìm đơn hàng đang hoạt động của bàn cụ thể để thực hiện gộp đơn
    Optional<Order> findByTableIdAndStatusIn(Long tableId, List<String> statuses);
}