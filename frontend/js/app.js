// Chỉ import duy nhất login.js vì ta đã viết code cho nó
import { renderLoginView, initLoginEvents } from './views/login.js';
import { renderForgotPasswordView, initForgotPasswordEvents } from './views/forgotPassword.js';
const appDiv = document.getElementById('app');

function router() {
    const hash = window.location.hash;
    
    // Tạm thời bỏ qua việc kiểm tra token để dễ test giao diện
    if (hash === '#/login' || hash === '') {
        // Gắn giao diện HTML vào div#app
        appDiv.innerHTML = renderLoginView();
        // Kích hoạt các sự kiện click, submit cho form
        initLoginEvents(); 
    }
    else if (hash === '#/forgot-password') {
        appDiv.innerHTML = renderForgotPasswordView();
        initForgotPasswordEvents(); // Gọi hàm gắn sự kiện cho các nút Gửi mã/Xác nhận
    }
    else if (hash === '#/admin') {
        // Tạo giao diện tạm thời cho trang Admin
        appDiv.innerHTML = `<h2 class="text-2xl text-center mt-10">Đây là trang Admin (Sẽ làm sau)</h2>`;
    }
    else {
        appDiv.innerHTML = `<h2 class="text-2xl text-center mt-10">Trang không tồn tại</h2>`;
    }
}

// Lắng nghe sự thay đổi URL
window.addEventListener('hashchange', router);

// Chạy hàm router ngay khi web vừa tải xong
window.addEventListener('DOMContentLoaded', () => {
    // Nếu vừa vào web mà chưa có hash gì, tự động chuyển đến #/login
    if (!window.location.hash) {
        window.location.hash = '#/login';
    }
    else {
        router();
    }
});