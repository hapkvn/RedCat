// ==========================================
// IMPORT CÁC VIEWS
// ==========================================
import { renderLoginView, initLoginEvents } from './views/login.js';
import { renderForgotPasswordView, initForgotPasswordEvents } from './views/forgotPassword.js';
import { renderAdminView, initAdminEvents } from './views/admin.js';
import { renderWarehouseDashboard, renderWarehouseInventory, renderWarehouseLowStock, renderWarehouseExportDetails, renderWarehouseOrders, renderWarehouseImportList, renderWarehouseCreateImport, renderWarehouseExportList, renderWarehouseCreateExport, renderWarehouseMaterials, initWarehouseEvents } from './views/warehouse.js';
import { renderManagerMenu, renderManagerInventoryView, renderManagerTables, renderManagerOrders, renderManagerRevenue, initManagerEvents } from './views/manager.js';
import { renderStaffNewOrders, renderStaffProcessingOrders, renderStaffCompletedOrders, initStaffEvents } from './views/staff.js';
import { renderAccountantIncome, renderAccountantExpense, renderAccountantReport, renderAccountantArchive, initAccountantEvents } from './views/accountant.js';

// BỔ SUNG ĐẦY ĐỦ CÁC HÀM CỦA TRANG KHÁCH HÀNG (Bao gồm Payment và Receipt)
import {
    renderCustomerHome, renderCustomerMenu, renderCustomerCart,
    renderCustomerCheckout, renderCustomerSuccess, renderCustomerPayment,
    renderCustomerReceipt, initCustomerEvents
} from './views/customer.js';

const appDiv = document.getElementById('app');

// Tự động nhận diện IP để dùng được trên cả máy tính và điện thoại
const API_BASE = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
    ? 'http://localhost:8080'
    : `http://${window.location.hostname}:8080`;

// ==========================================
// HÀM ĐIỀU HƯỚNG CHÍNH (ROUTER)
// ==========================================
function router() {
    const rawHash = window.location.hash;

    // Cắt bỏ phần đuôi "?table=..." để router nhận diện đúng trang
    // Ví dụ: '#/customer/payment?table=5' sẽ được cắt thành '#/customer/payment'
    const hash = rawHash.split('?')[0];

    // --- XỬ LÝ TRANG ĐĂNG NHẬP ---
    if (hash === '#/login' || hash === '') {
        appDiv.innerHTML = renderLoginView();
        initLoginEvents();
    }
    else if (hash === '#/forgot-password') {
        appDiv.innerHTML = renderForgotPasswordView();
        initForgotPasswordEvents();
    }

    // --- XỬ LÝ CÁC TRANG CỦA NHÂN VIÊN QUẢN LÝ / ADMIN ---
    else if (hash === '#/warehouse') {
        fetch(`${API_BASE}/api/warehouse/dashboard`)
            .then(res => res.json())
            .then(data => {
                appDiv.innerHTML = renderWarehouseDashboard(data);
                initWarehouseEvents();
            }).catch(e => console.error("Lỗi tải Dashboard:", e));

    } else if (hash === '#/warehouse/low-stock') {
        fetch(`${API_BASE}/api/warehouse/dashboard`)
            .then(res => res.json())
            .then(data => {
                appDiv.innerHTML = renderWarehouseLowStock(data.lowStockData);
                initWarehouseEvents();
            });

    } else if (hash === '#/warehouse/orders') {
        fetch(`${API_BASE}/api/warehouse/orders`)
            .then(res => res.json())
            .then(data => {
                appDiv.innerHTML = renderWarehouseOrders(data);
                initWarehouseEvents();
            });

    } else if (hash === '#/warehouse/imports') {
        fetch(`${API_BASE}/api/warehouse/imports`)
            .then(res => res.json())
            .then(data => {
                appDiv.innerHTML = renderWarehouseImportList(data);
                initWarehouseEvents();
            });

    } else if (hash === '#/warehouse/exports') {
        fetch(`${API_BASE}/api/warehouse/exports`)
            .then(res => res.json())
            .then(data => {
                appDiv.innerHTML = renderWarehouseExportList(data);
                initWarehouseEvents();
            });

    } else if (hash === '#/warehouse/materials') {
        fetch(`${API_BASE}/api/warehouse/materials`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => {
                if (!response.ok) throw new Error('Không thể tải dữ liệu kho');
                return response.json();
            })
            .then(data => {
                appDiv.innerHTML = renderWarehouseMaterials(data);
                initWarehouseEvents();
            })
            .catch(error => {
                console.error(error);
                appDiv.innerHTML = `<h2 class="text-center mt-10 text-red-500">Lỗi mất kết nối với máy chủ Backend</h2>`;
            });
    }
    else if (hash === '#/warehouse/inventory') {
        fetch(`${API_BASE}/api/warehouse/dashboard`)
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
        fetch(`${API_BASE}/api/admin/users`, {
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
                appDiv.innerHTML = renderAdminView(data);
                initAdminEvents();
            })
            .catch(error => {
                console.error(error);
                appDiv.innerHTML = `<h2 class="text-center mt-10 text-red-500">Lỗi khi tải dữ liệu từ máy chủ</h2>`;
            });
    } else if (hash === '#/manager' || hash === '#/manager/menu') {
        fetch(`${API_BASE}/api/products`)
            .then(res => {
                if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
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
                    </div>
                `;
                appDiv.innerHTML = renderManagerMenu([], errorHTML);
                initManagerEvents();
            });
    }
    else if (hash === '#/manager/inventory') {
        fetch(`${API_BASE}/api/warehouse/materials`)
            .then(res => res.json())
            .then(data => {
                appDiv.innerHTML = renderManagerInventoryView(data);
            })
            .catch(e => {
                console.error(e);
                appDiv.innerHTML = `<h2 class="text-center mt-10 text-red-500">Lỗi kết nối máy chủ</h2>`;
            });
    } else if (hash === '#/manager/tables') {
        fetch(`${API_BASE}/api/tables`)
            .then(res => {
                if(!res.ok) throw new Error("Lỗi khi tải danh sách bàn");
                return res.json();
            })
            .then(data => {
                 appDiv.innerHTML = renderManagerTables(data);
                 initManagerEvents();
            })
            .catch(e => {
                console.error(e);
                appDiv.innerHTML = renderManagerTables();
                initManagerEvents();
            });
    } else if (hash === '#/manager/orders') {
        appDiv.innerHTML = renderManagerOrders();
        initManagerEvents();
    } else if (hash === '#/manager/revenue') {
        appDiv.innerHTML = renderManagerRevenue();
        initManagerEvents();
    } else if (hash === '#/staff/new' || hash === '#/staff') {
        fetch(`${API_BASE}/api/warehouse/orders?status=Chờ xử lý`)
            .then(res => res.json())
            .then(data => {
                appDiv.innerHTML = renderStaffNewOrders(data);
                initStaffEvents();
            }).catch(e => {
                 appDiv.innerHTML = renderStaffNewOrders();
                 initStaffEvents();
            });

    } else if (hash === '#/staff/processing') {
        fetch(`${API_BASE}/api/warehouse/orders?status=Đang chế biến`)
            .then(res => res.json())
            .then(data => {
                appDiv.innerHTML = renderStaffProcessingOrders(data);
                initStaffEvents();
            }).catch(e => {
                appDiv.innerHTML = renderStaffProcessingOrders();
                initStaffEvents();
           });

    } else if (hash === '#/staff/completed') {
        fetch(`${API_BASE}/api/warehouse/orders?status=Hoàn thành`)
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
    }

    // ==========================================
    // KHU VỰC CỦA KHÁCH HÀNG (MOBILE)
    // ==========================================
    else if (hash === '#/customer') {
        appDiv.innerHTML = renderCustomerHome();
        initCustomerEvents();
    } else if (hash.startsWith('#/customer/menu/')) {
        const categoryId = hash.split('/')[3];
        fetch(`${API_BASE}/api/products?categoryId=${categoryId}`)
            .then(res => res.json())
            .then(data => {
                appDiv.innerHTML = renderCustomerMenu(data, categoryId);
                initCustomerEvents();
            }).catch(e => {
                console.error(`Lỗi tải menu cho category ${categoryId}:`, e);
                appDiv.innerHTML = renderCustomerMenu([], categoryId);
                initCustomerEvents();
            });
    } else if (hash === '#/customer/cart') {
        appDiv.innerHTML = renderCustomerCart();
        initCustomerEvents();
    } else if (hash === '#/customer/checkout') {
        appDiv.innerHTML = renderCustomerCheckout();
        initCustomerEvents();
    } else if (hash === '#/customer/success') {
        appDiv.innerHTML = renderCustomerSuccess();
        initCustomerEvents();
    }

    // ĐÂY LÀ 2 ROUTE BỊ THIẾU GÂY LỖI "TRANG KHÔNG TỒN TẠI"
    else if (hash === '#/customer/payment') {
        renderCustomerPayment(); // Gọi hàm render có fetch API lấy thông tin hóa đơn
        // Không dùng appDiv.innerHTML ở đây vì hàm renderCustomerPayment sẽ tự điền dữ liệu khi fetch xong
    }
    else if (hash === '#/customer/receipt') {
        appDiv.innerHTML = renderCustomerReceipt();
        initCustomerEvents();
    }

    // --- XỬ LÝ LỖI KHÔNG TÌM THẤY TRANG ---
    else {
        appDiv.innerHTML = `<div class="flex flex-col items-center justify-center min-h-screen">
            <h2 class="text-2xl font-bold text-gray-800 mb-2">Trang không tồn tại</h2>
            <p class="text-gray-500 mb-6">Đường dẫn bạn truy cập không đúng.</p>
            <a href="#/login" class="text-blue-500 hover:underline font-bold">Quay về trang đăng nhập</a>
        </div>`;
    }
}

// Lắng nghe sự thay đổi URL
window.addEventListener('hashchange', router);

// Chạy hàm router ngay khi web vừa tải xong
window.addEventListener('DOMContentLoaded', () => {
    if (!window.location.hash) {
        window.location.hash = '#/login';
    }
    else {
        router();
    }
});