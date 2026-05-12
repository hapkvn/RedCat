// Chỉ import duy nhất login.js vì ta đã viết code cho nó
import { renderLoginView, initLoginEvents } from './views/login.js';
import { renderForgotPasswordView, initForgotPasswordEvents } from './views/forgotPassword.js';
import { renderAdminView, initAdminEvents } from './views/admin.js';
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
        const token = localStorage.getItem('jwtToken');

        // Gọi API lấy dữ liệu nhân viên
        fetch('http://localhost:8080/api/admin/users', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (!response.ok) throw new Error('Không thể lấy dữ liệu');
                return response.json();
            })
            .then(data => {
                // 'data' chính là danh sách nhân viên từ MySQL
                appDiv.innerHTML = renderAdminView(data);
                initAdminEvents();
            })
            .catch(error => {
                console.error(error);
                appDiv.innerHTML = `<h2 class="text-center mt-10 text-red-500">Lỗi khi tải dữ liệu từ máy chủ</h2>`;
            });
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