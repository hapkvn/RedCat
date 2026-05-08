package com.redcat.coffeeshop;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CoffeeShopApplication {

    public static void main(String[] args) {
        SpringApplication.run(CoffeeShopApplication.class, args);
        System.out.println("====== MÁY CHỦ RED CAT ĐÃ KHỞI ĐỘNG THÀNH CÔNG Ở PORT 8080 ======");
    }

}