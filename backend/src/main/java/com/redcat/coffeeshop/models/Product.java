package com.redcat.coffeeshop.models;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    // Liên kết với bảng Danh mục
    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Column(nullable = false)
    private double price;

    @Column(name = "image_url", length = 500)
    private String imageUrl;

    // BỔ SUNG: Liên kết với bảng Công thức (ProductMaterial)
    // CascadeType.ALL giúp khi lưu Product, Java sẽ tự lưu luôn các dòng nguyên liệu
    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ProductMaterial> productMaterials;


    // --- Getters and Setters ---
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public Category getCategory() { return category; }
    public void setCategory(Category category) { this.category = category; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public double getPrice() { return price; }
    public void setPrice(double price) { this.price = price; }

    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }

    // Getter & Setter đặc biệt cho danh sách nguyên liệu
    public List<ProductMaterial> getProductMaterials() {
        return productMaterials;
    }

    public void setProductMaterials(List<ProductMaterial> productMaterials) {
        if(this.productMaterials == null) {
            this.productMaterials = productMaterials;
        } else {
            this.productMaterials.clear();
            if(productMaterials != null) {
                this.productMaterials.addAll(productMaterials);
            }
        }
        // Gắn ngược món ăn (Product) vào từng dòng nguyên liệu để database hiểu
        if (this.productMaterials != null) {
            for (ProductMaterial pm : this.productMaterials) {
                pm.setProduct(this);
            }
        }
    }
}