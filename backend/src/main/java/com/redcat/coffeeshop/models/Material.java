package com.redcat.coffeeshop.models;
import jakarta.persistence.*;

@Entity
@Table(name = "materials")
public class Material {
    @Id
    private String id; // Mã NL là chuỗi (VD: NL001)

    @Column(nullable = false)
    private String name;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    @ManyToOne
    @JoinColumn(name = "supplier_id")
    private Supplier supplier;

    private String unit;

    @Column(name = "stock_quantity")
    private double stockQuantity;

    @Column(name = "min_stock_level")
    private double minStockLevel;

    @Column(name = "unit_price")
    private double unitPrice;

    // Getters and Setters (Tự động sinh bằng IDE hoặc viết tay)
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public Category getCategory() { return category; }
    public void setCategory(Category category) { this.category = category; }
    public Supplier getSupplier() { return supplier; }
    public void setSupplier(Supplier supplier) { this.supplier = supplier; }
    public String getUnit() { return unit; }
    public void setUnit(String unit) { this.unit = unit; }
    public double getStockQuantity() { return stockQuantity; }
    public void setStockQuantity(double stockQuantity) { this.stockQuantity = stockQuantity; }
    public double getMinStockLevel() { return minStockLevel; }
    public void setMinStockLevel(double minStockLevel) { this.minStockLevel = minStockLevel; }
    public double getUnitPrice() { return unitPrice; }
    public void setUnitPrice(double unitPrice) { this.unitPrice = unitPrice; }
}