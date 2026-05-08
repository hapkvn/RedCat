package com.redcat.coffeeshop.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    // Hàm 1: Tạo mã ngẫu nhiên 6 số
    public String generateVerificationCode() {
        Random random = new Random();
        int code = 100000 + random.nextInt(900000); // Đảm bảo luôn ra 6 số
        return String.valueOf(code);
    }

    // Hàm 2: Gửi email
    public void sendResetCode(String toEmail, String code) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("huyhoangpkvnn75@gmail.com");
        message.setTo(toEmail);
        message.setSubject("Mã xác nhận khôi phục mật khẩu - Red Cat Coffee");
        message.setText("Mã xác nhận của bạn là: " + code + "\nMã này có hiệu lực trong 2 phút.");

        mailSender.send(message);
    }
}