package com.redcat.coffeeshop.repositories;

import com.redcat.coffeeshop.models.CoffeeTable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CoffeeTableRepository extends JpaRepository<CoffeeTable, Long> {
    Optional<CoffeeTable> findByName(String name);
}
