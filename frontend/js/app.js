// Chỉ import duy nhất login.js vì ta đã viết code cho nó
import { renderLoginView, initLoginEvents } from './views/login.js';
import { renderForgotPasswordView, initForgotPasswordEvents } from './views/forgotPassword.js';
import { renderAdminView, initAdminEvents } from './views/admin.js';
import { renderWarehouseDashboard, renderWarehouseInventory, renderWarehouseLowStock, renderWarehouseExportDetails, renderWarehouseOrders, renderWarehouseImportList, renderWarehouseCreateImport, renderWarehouseExportList, renderWarehouseCreateExport, renderWarehouseMaterials, initWarehouseEvents } from './views/warehouse.js';
import { renderManagerMenu, renderManagerInventoryView, renderManagerTables, renderManagerOrders, renderManagerRevenue, initManagerEvents } from './views/manager.js';
import { renderStaffNewOrders, renderStaffProcessingOrders, renderStaffCompletedOrders, initStaffEvents } from './views/staff.js';
import { renderAccountantIncome, renderAccountantExpense, renderAccountantReport, renderAccountantArchive, initAccountantEvents } from './views/accountant.js';
import { renderCustomerHome, renderCustomerMenu, renderCustomerCart, renderCustomerCheckout, initCustomerEvents } from './views/customer.js';

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
    else if (hash === '#/warehouse/inventory') {
        fetch('http://localhost:8080/api/warehouse/dashboard')
            .then(res => res.json())
            .then(data => {
                appDiv.innerHTML = renderWarehouseInventory(data.topItemsData);
                initWarehouseEvents();
            });
    }
    else if (hash === '#/warehouse/imports/create') {
        appDiv.innerHTML = renderWarehouseCreateImport();
        initWarehouseEvents();
    }
    else if (hash === '#/warehouse/exports/create') {
        appDiv.innerHTML = renderWarehouseCreateExport();
        initWarehouseEvents();
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
    } else if (hash === '#/manager' || hash === '#/manager/menu') {
        fetch('http://localhost:8080/api/products')
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then(data => {
                appDiv.innerHTML = renderManagerMenu(data);
                initManagerEvents();
            }).catch(e => {
                console.error("Lỗi tải Menu:", e);
                const errorHTML = `
                    <div class="text-center p-8 bg-red-50 rounded-lg">
                        <h2 class="text-lg font-bold text-red-700">Không thể tải dữ liệu Menu</h2>
                        <p class="text-red-600 mt-2">Có vẻ như máy chủ Backend chưa được khởi động hoặc đã xảy ra lỗi kết nối.</p>
                        <p class="text-sm text-gray-500 mt-4">Vui lòng kiểm tra lại ứng dụng Spring Boot và đảm bảo API <code>/api/products</code> đang hoạt động.</p>
                    </div>
                `;
                appDiv.innerHTML = renderManagerMenu([], errorHTML); // Render layout trống với thông báo lỗi
                initManagerEvents();
            });
    }
    else if (hash === '#/manager/inventory') {
        // Dùng chung API lấy danh sách nguyên liệu của Warehouse
        fetch('http://localhost:8080/api/warehouse/materials')
            .then(res => res.json())
            .then(data => {
                appDiv.innerHTML = renderManagerInventoryView(data);
                // Gắn sự kiện (đăng xuất, đóng mở sidebar mobile) nếu có
                // initManagerEvents();
            })
            .catch(e => {
                console.error(e);
                appDiv.innerHTML = `<h2 class="text-center mt-10 text-red-500">Lỗi kết nối máy chủ</h2>`;
            });
    } else if (hash === '#/manager/tables') {
        appDiv.innerHTML = renderManagerTables();
        initManagerEvents();
    } else if (hash === '#/manager/orders') {
        appDiv.innerHTML = renderManagerOrders();
        initManagerEvents();
    } else if (hash === '#/manager/revenue') {
        appDiv.innerHTML = renderManagerRevenue();
        initManagerEvents();
    } else if (hash === '#/staff/new') {
        // Lấy danh sách các đơn mới đẩy từ POS xuống hàng chờ
        fetch('http://localhost:8080/api/warehouse/orders?status=Chờ xử lý')
            .then(res => res.json())
            .then(data => {
                appDiv.innerHTML = renderStaffNewOrders(data);
                initStaffEvents();
            }).catch(e => {
                 appDiv.innerHTML = renderStaffNewOrders();
                 initStaffEvents();
            });

    } else if (hash === '#/staff/processing') {
        // Hàng chờ chế biến
        fetch('http://localhost:8080/api/warehouse/orders?status=Đang chế biến')
            .then(res => res.json())
            .then(data => {
                appDiv.innerHTML = renderStaffProcessingOrders(data);
                initStaffEvents();
            }).catch(e => {
                appDiv.innerHTML = renderStaffProcessingOrders();
                initStaffEvents();
           });

    } else if (hash === '#/staff/completed') {
        // Lấy lịch sử các đơn đã hoàn thành lưu trong SQL
        fetch('http://localhost:8080/api/warehouse/orders?status=Hoàn thành')
            .then(res => res.json())
            .then(data => {
                appDiv.innerHTML = renderStaffCompletedOrders(data);
                initStaffEvents();
            }).catch(e => {
                appDiv.innerHTML = renderStaffCompletedOrders();
                initStaffEvents();
           });
    }
    else if (hash === '#/accountant/income' || hash === '#/accountant') {
        // Sau này thay dữ liệu cứng bằng fetch API tương tự như làm với warehouse
        appDiv.innerHTML = renderAccountantIncome();
        initAccountantEvents();
    } else if (hash === '#/accountant/expense') {
        appDiv.innerHTML = renderAccountantExpense();
        initAccountantEvents();
    } else if (hash === '#/accountant/report') {
        appDiv.innerHTML = renderAccountantReport();
        initAccountantEvents();
    } else if (hash === '#/accountant/archive') {
        appDiv.innerHTML = renderAccountantArchive();
        initAccountantEvents();
    } else if (hash === '#/customer') {
        appDiv.innerHTML = renderCustomerHome();
        initCustomerEvents();
    } else if (hash === '#/customer/menu/coffee') {
        appDiv.innerHTML = renderCustomerMenu('coffee');
        initCustomerEvents();
    } else if (hash === '#/customer/menu/tea') {
        appDiv.innerHTML = renderCustomerMenu('tea');
        initCustomerEvents();
    } else if (hash === '#/customer/cart') {
        appDiv.innerHTML = renderCustomerCart();
        initCustomerEvents();
    } else if (hash === '#/customer/checkout') {
        appDiv.innerHTML = renderCustomerCheckout();
        initCustomerEvents();
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