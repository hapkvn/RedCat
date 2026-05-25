package com.redcat.coffeeshop.models;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "orders")
public class Order {

    @Id
    private String id;

    @ManyToOne
    @JoinColumn(name = "table_id")
    private CoffeeTable table;

    @Column(name = "server_name")
    private String serverName;

    @Column(name = "order_time")
    private LocalDateTime orderTime = LocalDateTime.now();

    @Column(name = "total_amount")
    private double totalAmount;

    private String status;

    // 1 Order có nhiều OrderItem
    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private List<OrderItem> items;

    // =========================
    // GETTER & SETTER
    // =========================

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public CoffeeTable getTable() {
        return table;
    }

    public void setTable(CoffeeTable table) {
        this.table = table;
    }

    public String getServerName() {
        return serverName;
    }

    public void setServerName(String serverName) {
        this.serverName = serverName;
    }

    public LocalDateTime getOrderTime() {
        return orderTime;
    }

    public void setOrderTime(LocalDateTime orderTime) {
        this.orderTime = orderTime;
    }

    public double getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(double totalAmount) {
        this.totalAmount = totalAmount;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public List<OrderItem> getItems() {
        return items;
    }

    public void setItems(List<OrderItem> items) {
        this.items = items;
    }
}