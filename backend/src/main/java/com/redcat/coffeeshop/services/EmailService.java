package com.redcat.coffeeshop.services;

import com.resend.Resend;
import com.resend.core.exception.ResendException;
import com.resend.services.emails.model.CreateEmailOptions;
import com.resend.services.emails.model.CreateEmailResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class EmailService {

    // Lấy API Key từ file application.properties
    @Value("${resend.api.key}")
    private String resendApiKey;

    // Hàm 1: Tạo mã ngẫu nhiên 6 số
    public String generateVerificationCode() {
        Random random = new Random();
        int code = 100000 + random.nextInt(900000);
        return String.valueOf(code);
    }

    // Hàm 2: Gửi email bằng Resend API
    public void sendResetCode(String toEmail, String code) {
        // Khởi tạo Resend với API Key
        Resend resend = new Resend(resendApiKey);

        // Thiết lập các thông số của Email
        CreateEmailOptions params = CreateEmailOptions.builder()
                // Lưu ý quan trọng: Khi test bằng gói Free, bạn BẮT BUỘC phải để người gửi là email onboarding này
                .from("Red Cat Coffee <onboarding@resend.dev>")
                .to(toEmail)
                .subject("Mã xác nhận khôi phục mật khẩu - Red Cat Coffee")
                .html("<h2>Yêu cầu đặt lại mật khẩu</h2>" +
                        "<p>Mã xác nhận của bạn là: <strong style='color: #e53935; font-size: 24px;'>" + code + "</strong></p>" +
                        "<p>Mã này có hiệu lực trong 2 phút. Vui lòng không chia sẻ mã này cho người khác.</p>")
                .build();

        try {
            // Thực hiện gửi
            CreateEmailResponse data = resend.emails().send(params);
            System.out.println("Đã gửi email thành công! Resend ID: " + data.getId());
        } catch (ResendException e) {
            System.err.println("Lỗi khi gửi email qua Resend: " + e.getMessage());
        }
    }
}