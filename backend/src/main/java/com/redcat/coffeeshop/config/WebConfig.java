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

    // THÊM ĐOẠN NÀY ĐỂ CHO PHÉP ĐỌC ẢNH TỪ THƯ MỤC BÊN NGOÀI
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // Mọi yêu cầu web có dạng http://localhost:8080/uploads/anh-cafe.jpg
        // Sẽ được Spring Boot tìm kiếm trong thư mục "uploads" ở ngay thư mục chạy project
        registry.addResourceHandler("/uploads/**")
                .addResourceLocations("file:uploads/");
    }
}