package com.redcat.coffeeshop.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("*")
                .allowedMethods("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS")
                .allowedHeaders("*");
    }

    // Cấu hình để Spring Boot phục vụ file tĩnh từ thư mục uploads/ (ngang hàng với project root)
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // Ánh xạ link web /uploads/** vào thư mục uploads/ nằm ngang hàng với thư mục backend
        registry.addResourceHandler("/uploads/**")
                .addResourceLocations("file:./uploads/");
        
        // Giữ lại cấu hình cho assets nếu frontend vẫn cần truy cập trực tiếp
        registry.addResourceHandler("/assets/**")
                .addResourceLocations("file:../frontend/assets/");
    }
}