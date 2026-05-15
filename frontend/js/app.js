// Chỉ import duy nhất login.js vì ta đã viết code cho nó
import { renderLoginView, initLoginEvents } from './views/login.js';
import { renderForgotPasswordView, initForgotPasswordEvents } from './views/forgotPassword.js';
import { renderAdminView, initAdminEvents } from './views/admin.js';
import { renderWarehouseDashboard, renderWarehouseInventory, renderWarehouseLowStock, renderWarehouseExportDetails, renderWarehouseOrders, renderWarehouseImportList, renderWarehouseCreateImport, renderWarehouseExportList, renderWarehouseCreateExport, renderWarehouseMaterials, initWarehouseEvents } from './views/warehouse.js';

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
    } else if (hash === '#/warehouse') {
        fetch('http://localhost:8080/api/warehouse/dashboard')
            .then(res => res.json())
            .then(data => {
                appDiv.innerHTML = renderWarehouseDashboard(data);
                initWarehouseEvents();
            }).catch(e => console.error("Lỗi tải Dashboard:", e));

    } else if (hash === '#/warehouse/low-stock') {
        fetch('http://localhost:8080/api/warehouse/dashboard') // Dùng chung API dashboard hoặc tách riêng
            .then(res => res.json())
            .then(data => {
                appDiv.innerHTML = renderWarehouseLowStock(data.lowStockData);
                initWarehouseEvents();
            });

    } else if (hash === '#/warehouse/orders') {
        fetch('http://localhost:8080/api/warehouse/orders')
            .then(res => res.json())
            .then(data => {
                appDiv.innerHTML = renderWarehouseOrders(data);
                initWarehouseEvents();
            });

    } else if (hash === '#/warehouse/imports') {
        fetch('http://localhost:8080/api/warehouse/imports')
            .then(res => res.json())
            .then(data => {
                appDiv.innerHTML = renderWarehouseImportList(data);
                initWarehouseEvents();
            });

    } else if (hash === '#/warehouse/exports') {
        fetch('http://localhost:8080/api/warehouse/exports')
            .then(res => res.json())
            .then(data => {
                appDiv.innerHTML = renderWarehouseExportList(data);
                initWarehouseEvents();
            });

    } else if (hash === '#/warehouse/materials') {
        // Lấy token (nếu sau này có làm bảo mật JWT)
        const token = localStorage.getItem('jwtToken');

        fetch('http://localhost:8080/api/warehouse/materials', {
            method: 'GET',
            headers: {
                // 'Authorization': 'Bearer ' + token, // Bật lên sau nếu cần
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (!response.ok) throw new Error('Không thể tải dữ liệu kho');
                return response.json();
            })
            .then(data => {
                // 'data' giờ là JSON trả về từ MySQL
                appDiv.innerHTML = renderWarehouseMaterials(data);
                initWarehouseEvents();
            })
            .catch(error => {
                console.error(error);
                appDiv.innerHTML = `<h2 class="text-center mt-10 text-red-500">Lỗi mất kết nối với máy chủ Backend</h2>`;
            });
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