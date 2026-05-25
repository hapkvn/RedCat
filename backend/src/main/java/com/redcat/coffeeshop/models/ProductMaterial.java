package com.redcat.coffeeshop.models;

import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "product_materials")
public class ProductMaterial {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "product_id")
    @JsonIgnore // Tránh lỗi vòng lặp JSON
    private Product product;

    @ManyToOne
    @JoinColumn(name = "material_id")
    private Material material;

    @Column(nullable = false)
    private double quantity; // Số lượng cần dùng (VD: 50 ml sữa)

    public Long getId() {
        return id;
    }

    public Product getProduct() {
        return product;
    }

    public Material getMaterial() {
        return material;
    }

    public double getQuantity() {
        return quantity;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public void setMaterial(Material material) {
        this.material = material;
    }

    public void setQuantity(double quantity) {
        this.quantity = quantity;
    }
}