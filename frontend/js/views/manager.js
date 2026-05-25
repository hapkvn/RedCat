// ==========================================
// 1. CẤU HÌNH TỰ ĐỘNG & ICON
// ==========================================
// Tự động nhận diện IP của máy tính để kết nối API mà không cần gõ tay nữa!
const API_BASE = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
    ? 'http://localhost:8080'
    : `http://${window.location.hostname}:8080`;

// Ảnh mặc định thay thế cho placeholder.com (Chống lỗi rách ảnh khi không có mạng)
const FALLBACK_IMG = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Crect width='80' height='80' fill='%23f1f5f9'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='11' font-weight='600' fill='%2394a3b8'%3EChưa có ảnh%3C/text%3E%3C/svg%3E";

const managerIcons = {
    menu: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`,
    table: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`,
    qr: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>`,
    plus: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>`,
    edit: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>`,
    trash: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>`,
    close: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`,
    box: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`,
    order: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
    chart: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`,
    clock: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
    checkCircle: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`,
    dollar: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`,
    cart: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>`,
    trendUp: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>`,
    eye: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`
};

const ordersMockData = [
    { id: 'ORD-00001', table: 'Bàn 1', total: '508.646đ', status: 'Hoàn thành', statusClass: 'text-green-500 bg-green-50', time: '21:01:47 13/4/2026', items: [{name: 'Cappuccino', qty: 2}, {name: 'Bánh croissant', qty: 1}] },
    { id: 'ORD-00002', table: 'Bàn 1', total: '382.173đ', status: 'Hoàn thành', statusClass: 'text-green-500 bg-green-50', time: '21:01:47 12/4/2026', items: [{name: 'Bạc xỉu', qty: 1}] }
];

const orderDomain = window.location.href.split('#')[0] + "#/customer?table=";

let tablesData = [
    { id: 1, name: 'Bàn 1', status: 'Trống', statusClass: 'bg-green-100 text-green-600' },
    { id: 2, name: 'Bàn 2', status: 'Đang sử dụng', statusClass: 'bg-red-50 text-red-500' }
];

// Lưu trữ nguyên liệu kho tạm thời để fill vào select box
window.warehouseMaterials = [];

// ==========================================
// 2. LAYOUT CHUNG TRANG QUẢN LÝ
// ==========================================
function getManagerLayout(contentHTML, activeMenu = 'menu') {
    const activeClass = "bg-red-50 text-red-500 font-bold";
    const inactiveClass = "text-gray-600 hover:bg-gray-50 font-medium";

    const isMenu = activeMenu === 'menu' ? activeClass : inactiveClass;
    const isInventory = activeMenu === 'inventory' ? activeClass : inactiveClass;
    const isTables = activeMenu === 'tables' ? activeClass : inactiveClass;
    const isOrders = activeMenu === 'orders' ? activeClass : inactiveClass;
    const isRevenue = activeMenu === 'revenue' ? activeClass : inactiveClass;

    return `
        <div class="flex h-screen bg-gray-50 font-sans">
            <aside class="hidden md:flex flex-col w-64 bg-white border-r border-gray-200">
                <div class="h-16 flex items-center px-6 border-b border-gray-100">
                    <div class="flex items-center text-red-500 font-bold text-xl gap-2">
                        <div class="bg-red-500 text-white p-1.5 rounded-lg">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>
                        </div>
                        Red Cat
                    </div>
                </div>

                <nav class="flex-1 p-4 space-y-2">
                    <a href="#/manager/menu" class="flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${isMenu}">
                        ${managerIcons.menu} Thực đơn
                    </a>
                    <a href="#/manager/tables" class="flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${isTables}">
                        ${managerIcons.table} Bàn & QR
                    </a>
                    <a href="#/manager/orders" class="flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${isOrders}">
                        ${managerIcons.order} Đơn hàng
                    </a>
                    <a href="#/manager/revenue" class="flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${isRevenue}">
                        ${managerIcons.chart} Doanh thu
                    </a>
                    <a href="#/manager/inventory" class="flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${isInventory}">
                        ${managerIcons.box} Xem kho nguyên liệu
                    </a>
                </nav>
            </aside>

            <div class="flex-1 flex flex-col overflow-hidden">
                <header class="h-16 bg-white flex justify-end items-center px-8 border-b border-gray-100">
                    <button class="text-gray-600 font-medium hover:text-red-500 flex items-center gap-2">
                        Đăng xuất <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                    </button>
                </header>

                <main class="flex-1 overflow-x-hidden overflow-y-auto p-4 md:p-8 relative">
                    ${contentHTML}
                </main>
            </div>
        </div>
    `;
}

// ==========================================
// 3. TRANG THỰC ĐƠN (MENU) CÓ ĐỊNH LƯỢNG
// ==========================================
function getManagerMenuContent(products) {
    const productCardsHTML = products.map(p => {
        // Lấy danh sách nguyên liệu cấu thành (nếu API có trả về)
        // Chuyển JSON thành String để truyền qua dataset
        const recipeStr = p.productMaterials ? encodeURIComponent(JSON.stringify(p.productMaterials)) : '';

        return `
        <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col relative group">
            <div class="w-full h-40 bg-gray-100 rounded-lg mb-4 overflow-hidden relative border border-gray-100">
                <img src="${p.imageUrl ? API_BASE + p.imageUrl : FALLBACK_IMG}" alt="${p.name}" class="w-full h-full object-cover" onerror="this.src='${FALLBACK_IMG}'">
            </div>

            <div class="flex-1">
                <p class="text-xs text-gray-400 mb-1">${p.categoryName || 'Món ăn'}</p>
                <h3 class="font-bold text-gray-900 mb-1">${p.name}</h3>
                <p class="text-xs text-gray-500 mb-3 line-clamp-2">${p.description || ''}</p>
                <p class="font-bold text-[#E33539] text-base">${p.price.toLocaleString('vi-VN')}đ</p>
            </div>

            <div class="absolute inset-0 bg-white bg-opacity-90 flex flex-col justify-center items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl">
                <button class="btn-edit-product w-3/4 bg-blue-500 text-white py-2.5 rounded-xl text-sm font-bold shadow-sm hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
                    data-id="${p.id}" data-name="${p.name}" data-price="${p.price}" data-desc="${p.description || ''}" data-cat="${p.category?.id || p.categoryId}" data-img="${p.imageUrl || ''}" data-recipe="${recipeStr}">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg> Chỉnh sửa
                </button>
                <button class="btn-delete-product w-3/4 bg-red-500 text-white py-2.5 rounded-xl text-sm font-bold shadow-sm hover:bg-red-600 transition-colors flex items-center justify-center gap-2" data-id="${p.id}">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg> Xóa món
                </button>
            </div>
        </div>
        `;
    }).join('');

    return `
        <div class="max-w-7xl mx-auto">
            <div class="flex justify-between items-center mb-6">
                <h1 class="text-2xl md:text-3xl font-extrabold text-gray-900">Quản lý Thực đơn</h1>
                <button id="btnAddProduct" class="bg-[#16A34A] hover:bg-green-700 text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 shadow-sm transition-colors">
                    ${managerIcons.plus} Thêm món mới
                </button>
            </div>

            ${products.length === 0 ?
                `<div class="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
                    <p class="text-gray-500 font-medium mb-4">Chưa có món ăn nào trong thực đơn</p>
                    <button id="btnEmptyAddProduct" class="bg-[#16A34A] hover:bg-green-700 text-white px-5 py-2.5 rounded-xl font-bold inline-flex items-center gap-2 shadow-sm transition-colors">Thêm ngay</button>
                </div>`
                :
                `<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">${productCardsHTML}</div>`
            }
        </div>

        <div id="productModal" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center hidden opacity-0 transition-opacity duration-300">
            <div class="bg-white rounded-2xl w-full max-w-2xl p-6 mx-4 transform scale-95 transition-transform duration-300 max-h-[90vh] overflow-y-auto" id="productModalContent">
                <h2 id="productModalTitle" class="text-xl font-bold mb-6 text-gray-900">Thêm món mới</h2>
                <form id="productForm" class="space-y-4">
                    <input type="hidden" id="productId">

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="space-y-4">
                            <div class="flex items-center gap-4 mb-2">
                                <img id="productPreview" src="${FALLBACK_IMG}" alt="Product Preview" class="w-20 h-20 rounded-lg object-cover border border-gray-200 bg-gray-50">
                                <div>
                                    <label for="productImageUpload" id="uploadLabel" class="cursor-pointer bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-lg text-sm transition-colors flex items-center gap-2">
                                        ${managerIcons.box} Tải ảnh lên
                                    </label>
                                    <input type="file" id="productImageUpload" class="hidden" accept="image/*">
                                    <input type="hidden" id="productImageUrl">
                                </div>
                            </div>
                            <div>
                                <label class="block text-sm font-semibold mb-1 text-gray-800">Tên món <span class="text-red-500">*</span></label>
                                <input type="text" id="productName" required class="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-red-400 outline-none">
                            </div>
                            <div class="grid grid-cols-2 gap-4">
                                <div>
                                    <label class="block text-sm font-semibold mb-1 text-gray-800">Giá tiền <span class="text-red-500">*</span></label>
                                    <input type="number" id="productPrice" required class="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-red-400 outline-none">
                                </div>
                                <div>
                                    <label class="block text-sm font-semibold mb-1 text-gray-800">Danh mục <span class="text-red-500">*</span></label>
                                    <select id="productCategory" required class="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-red-400 outline-none bg-white text-gray-700">
                                        <option value="" disabled selected>-- Chọn --</option>
                                        <option value="1">Cà phê</option>
                                        <option value="2">Trà</option>
                                        <option value="3">Bánh ngọt</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label class="block text-sm font-semibold mb-1 text-gray-800">Mô tả</label>
                                <textarea id="productDescription" rows="2" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-red-400 outline-none"></textarea>
                            </div>
                        </div>

                        <div class="bg-gray-50 border border-gray-200 rounded-xl p-4">
                            <div class="flex justify-between items-center mb-3">
                                <label class="block text-sm font-semibold text-gray-800 m-0">Định lượng Công thức</label>
                                <button type="button" id="btnAddRecipeRow" class="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded font-bold hover:bg-blue-200 transition-colors">
                                    + Thêm nguyên liệu
                                </button>
                            </div>
                            <p class="text-[11px] text-gray-500 mb-3 leading-relaxed">Chọn nguyên liệu trong kho để hệ thống tự động trừ khi khách mua món này.</p>

                            <div id="recipeContainer" class="space-y-2 max-h-[220px] overflow-y-auto pr-1">
                                </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-4 mt-8 pt-4 border-t border-gray-100">
                        <button type="button" id="btnCancelProductModal" class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 rounded-lg transition-colors">Hủy</button>
                        <button type="submit" id="btnSaveProduct" class="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition-colors shadow-sm">Lưu món & Công thức</button>
                    </div>
                </form>
            </div>
        </div>
    `;
}

// (Các hàm render nội dung khác giữ nguyên)
function getTableManagementContent(tables = tablesData) {
    const tableRows = tables.map(table => `
        <tr class="border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <td class="py-4 px-6 font-bold text-gray-900">${table.name}</td>

            <td class="py-4 px-6">
                <a href="${orderDomain}${table.qrToken || table.id}" target="_blank" class="text-blue-500 hover:text-blue-700 text-sm font-medium underline flex items-center gap-1 w-max">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    Xem link
                </a>
            </td>

            <td class="py-4 px-6">
                <span class="${table.status === 'Trống' ? 'bg-green-100 text-green-600' : 'bg-red-50 text-red-500'} px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">${table.status}</span>
            </td>
            <td class="py-4 px-6">
                <div class="flex gap-2">
                    <button class="btn-view-qr bg-[#2ECA6A] text-white p-2 rounded-lg hover:bg-green-600 shadow-sm transition-colors" data-table="${table.id}" data-token="${table.qrToken || table.id}" data-name="${table.name}" title="Xem QR">
                        ${managerIcons.qr}
                    </button>
                    <button class="btn-toggle-status bg-[#4285F4] text-white p-2 rounded-lg hover:bg-blue-600 shadow-sm transition-colors" data-table="${table.id}" title="Chuyển trạng thái">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.59-9.21l-5.6 5.6"/></svg>
                    </button>
                    <button class="btn-delete-table bg-[#EA4335] text-white p-2 rounded-lg hover:bg-red-600 shadow-sm transition-colors" data-table="${table.id}" title="Xóa">
                        ${managerIcons.trash}
                    </button>
                </div>
            </td>
        </tr>
    `).join('');

    return `
        <div class="max-w-5xl mx-auto">
            <div class="flex justify-between items-center mb-8">
                <h1 class="text-2xl md:text-3xl font-extrabold text-gray-900">Danh sách bàn</h1>
                <button id="btnOpenAddTable" class="bg-[#2ECA6A] hover:bg-green-600 text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 shadow-sm transition-colors">
                    ${managerIcons.plus} Thêm bàn mới
                </button>
            </div>
            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="bg-gray-50 text-[11px] text-gray-500 font-bold uppercase tracking-wider border-b border-gray-100">
                            <th class="py-4 px-6">Bàn</th><th class="py-4 px-6">QR Code</th><th class="py-4 px-6">Trạng thái</th><th class="py-4 px-6">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody id="tableBody">${tableRows}</tbody>
                </table>
            </div>
        </div>

        <div id="addTableModal" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center hidden opacity-0 transition-opacity duration-300">
            <div class="bg-white rounded-3xl w-full max-w-sm p-6 mx-4 transform scale-95 transition-transform duration-300 shadow-xl" id="addTableContent">
                <h2 class="text-xl font-extrabold mb-6 text-gray-900">Thêm bàn mới</h2>
                <form id="addTableForm">
                    <div class="mb-8">
                        <label class="block text-[11px] font-bold text-gray-900 mb-2">Số bàn (Để trống sẽ tự động thêm)</label>
                        <input type="number" id="newTableNumber" class="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-red-400 outline-none text-sm font-medium text-gray-700">
                    </div>
                    <div class="grid grid-cols-2 gap-3">
                        <button type="submit" class="bg-[#EA4335] hover:bg-red-600 text-white font-bold py-3 rounded-xl">Thêm bàn</button>
                        <button type="button" id="btnCancelAddTable" class="bg-[#E2E8F0] hover:bg-gray-300 text-gray-700 font-bold py-3 rounded-xl">Hủy</button>
                    </div>
                </form>
            </div>
        </div>

        <div id="qrModal" class="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center hidden opacity-0 transition-opacity duration-300">
            <div class="bg-white rounded-3xl p-8 transform scale-95 transition-transform duration-300 flex flex-col items-center shadow-2xl relative" id="qrContent">
                <button id="btnCloseQr" class="absolute top-4 right-4 text-gray-400 hover:text-gray-800">${managerIcons.close}</button>
                <h3 class="text-lg font-extrabold text-gray-900 mb-6" id="qrModalTitle">QR Bàn 1</h3>
                <div class="w-64 h-64 border-4 border-gray-100 rounded-2xl overflow-hidden mb-6 flex items-center justify-center">
                    <img id="qrImage" src="" alt="QR Code" class="w-full h-full object-cover">
                </div>
                <p class="text-xs text-gray-500 mb-6 text-center max-w-[250px]">Khách quét mã này để gọi món trực tiếp vào máy tính tiền.</p>
            </div>
        </div>
    `;
}

function getManagerInventoryContent(materialsData) {
    const safeData = materialsData || [];
    const tableRows = safeData.map(item => `
        <tr class="border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <td class="py-4 px-4"><div class="font-bold text-gray-900">${item.name}</div><div class="text-[11px] text-gray-500 mt-0.5">${item.id} · ${item.type}</div></td>
            <td class="py-4 px-4 font-medium text-gray-600">${item.supplier}</td>
            <td class="py-4 px-4 text-center"><span class="text-base font-extrabold ${item.isLowStock ? 'text-red-600' : 'text-gray-900'}">${item.stock}</span><span class="text-xs text-gray-500"> ${item.unit}</span></td>
            <td class="py-4 px-4 text-center"><span class="${item.statusClass} px-3 py-1 rounded-full text-xs font-bold border border-current/10">${item.status}</span></td>
        </tr>
    `).join('');
    return `
        <div class="max-w-5xl mx-auto">
            <div class="mb-8"><h1 class="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Xem kho nguyên liệu</h1></div>
            <div class="hidden md:block bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <table class="w-full text-left border-collapse">
                    <thead><tr class="bg-gray-50 text-xs text-gray-500 font-bold uppercase tracking-wider border-b border-gray-100"><th class="py-4 px-4">Nguyên liệu</th><th class="py-4 px-4">Nhà cung cấp</th><th class="py-4 px-4 text-center">Tồn kho</th><th class="py-4 px-4 text-center">Trạng thái</th></tr></thead>
                    <tbody>${tableRows}</tbody>
                </table>
            </div>
        </div>
    `;
}

function getManagerOrdersContent() { return `<div class="max-w-6xl mx-auto"><h1 class="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8">Quản lý đơn hàng</h1></div>`; }
function getManagerRevenueContent() { return `<div class="max-w-6xl mx-auto"><h1 class="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8">Doanh thu</h1></div>`; }

// ==========================================
// CÁC HÀM XUẤT ROUTER
// ==========================================
export function renderManagerMenu(products = []) { return getManagerLayout(getManagerMenuContent(products), 'menu'); }
export function renderManagerTables(tables = tablesData) { return getManagerLayout(getTableManagementContent(tables), 'tables'); }
export function renderManagerInventoryView(data) { return getManagerLayout(getManagerInventoryContent(data), 'inventory'); }
export function renderManagerOrders() { return getManagerLayout(getManagerOrdersContent(), 'orders'); }
export function renderManagerRevenue() { return getManagerLayout(getManagerRevenueContent(), 'revenue'); }

// ==========================================
// KHỞI TẠO SỰ KIỆN (EVENTS)
// ==========================================
export function initManagerEvents() {
    const toggleModal = (modal, content, show) => {
        if (!modal) return;
        if (show) {
            modal.classList.remove('hidden');
            setTimeout(() => { modal.classList.remove('opacity-0'); if (content) content.classList.remove('scale-95'); }, 10);
        } else {
            modal.classList.add('opacity-0');
            if (content) content.classList.add('scale-95');
            setTimeout(() => modal.classList.add('hidden'), 300);
        }
    };

    // Hàm tạo 1 dòng cấu hình nguyên liệu mới
    const addRecipeRow = (materialId = '', quantity = '') => {
        const container = document.getElementById('recipeContainer');
        if (!container) return;

        // Render dropdown dựa trên mảng nguyên liệu kho đã lấy
        const optionsHtml = window.warehouseMaterials.map(m =>
            `<option value="${m.id}" ${m.id == materialId ? 'selected' : ''}>${m.name} (${m.unit})</option>`
        ).join('');

        const row = document.createElement('div');
        row.className = 'flex gap-2 items-center recipe-row mb-2 bg-white p-2 rounded border border-gray-100 shadow-sm';
        row.innerHTML = `
            <select class="flex-1 border border-gray-200 rounded px-2 py-1.5 text-xs outline-none focus:border-red-400 recipe-mat-id" required>
                <option value="" disabled ${!materialId ? 'selected' : ''}>Chọn nguyên liệu...</option>
                ${optionsHtml}
            </select>
            <input type="number" step="0.01" class="w-16 border border-gray-200 rounded px-2 py-1.5 text-xs outline-none focus:border-red-400 recipe-mat-qty" placeholder="SL" value="${quantity}" required>
            <button type="button" class="text-red-400 hover:text-red-600 bg-red-50 p-1.5 rounded btn-remove-recipe">
                <i class="fa-solid fa-trash text-xs"></i>
            </button>
        `;
        container.appendChild(row);

        // Sự kiện xóa dòng
        row.querySelector('.btn-remove-recipe').addEventListener('click', () => {
            row.remove();
        });
    };

    // TẢI DANH SÁCH KHO NGUYÊN LIỆU ĐỂ BỎ VÀO FORM
    if (window.location.hash.includes('menu')) {
        fetch(`${API_BASE}/api/warehouse/materials`)
            .then(res => res.json())
            .then(data => {
                window.warehouseMaterials = data; // Lưu vào biến toàn cục tạm thời
            })
            .catch(err => console.error("Không tải được danh sách kho", err));
    }


    // --- LOGIC MENU: UPLOAD VÀ LƯU ẢNH ---
    const productModal = document.getElementById('productModal');
    const productModalContent = document.getElementById('productModalContent');
    const productImageUpload = document.getElementById('productImageUpload');
    const productPreview = document.getElementById('productPreview');
    const productImageUrlInput = document.getElementById('productImageUrl');

    const openProductModal = (isEdit = false, pData = {}) => {
        if (!productModal) return;
        document.getElementById('productModalTitle').textContent = isEdit ? 'Sửa món ăn & Công thức' : 'Thêm món mới';

        // Xóa sạch form nguyên liệu cũ
        const recipeContainer = document.getElementById('recipeContainer');
        if(recipeContainer) recipeContainer.innerHTML = '';

        // Reset lại nút input file
        const fileInput = document.getElementById('productImageUpload');
        if (fileInput) fileInput.value = '';

        if (isEdit) {
            document.getElementById('productId').value = pData.id || '';
            document.getElementById('productName').value = pData.name || '';
            document.getElementById('productPrice').value = pData.price || '';
            document.getElementById('productDescription').value = pData.desc || '';

            const catSelect = document.getElementById('productCategory');
            if (catSelect && pData.cat) {
                Array.from(catSelect.options).forEach(opt => { if (opt.value === pData.cat) opt.selected = true; });
            }

            if (pData.img) {
                productPreview.src = API_BASE + pData.img;
                productImageUrlInput.value = pData.img;
            } else {
                productPreview.src = FALLBACK_IMG;
                productImageUrlInput.value = '';
            }

            // Parse công thức (Recipe)
            if (pData.recipe) {
                try {
                    const recipes = JSON.parse(decodeURIComponent(pData.recipe));
                    recipes.forEach(r => {
                        // Tùy cấu trúc JSON backend trả ra (r.materialId hoặc r.material.id)
                        const matId = r.material ? r.material.id : r.materialId;
                        addRecipeRow(matId, r.quantity);
                    });
                } catch(e) {}
            }
        } else {
            document.getElementById('productForm').reset();
            document.getElementById('productId').value = '';
            productPreview.src = FALLBACK_IMG;
            productImageUrlInput.value = '';
        }
        toggleModal(productModal, productModalContent, true);
    };

    // Sự kiện mở Modal Thêm / Sửa / Đóng / Thêm dòng công thức
    document.addEventListener('click', (e) => {
        if (e.target.closest('#btnAddProduct') || e.target.closest('#btnEmptyAddProduct')) {
            openProductModal(false);
        }

        // Nút Thêm dòng Nguyên liệu
        if (e.target.closest('#btnAddRecipeRow')) {
            addRecipeRow();
        }

        const btnEditProduct = e.target.closest('.btn-edit-product');
        if (btnEditProduct) {
            const pData = {
                id: btnEditProduct.getAttribute('data-id'),
                name: btnEditProduct.getAttribute('data-name'),
                price: btnEditProduct.getAttribute('data-price'),
                desc: btnEditProduct.getAttribute('data-desc'),
                cat: btnEditProduct.getAttribute('data-cat'),
                img: btnEditProduct.getAttribute('data-img'),
                recipe: btnEditProduct.getAttribute('data-recipe')
            };
            openProductModal(true, pData);
        }
        if (e.target.closest('#btnCancelProductModal')) {
            toggleModal(productModal, productModalContent, false);
        }
    });

    // UPLOAD ẢNH QUA API
    if (productImageUpload) {
        const oldUploadClone = productImageUpload.cloneNode(true);
        productImageUpload.parentNode.replaceChild(oldUploadClone, productImageUpload);

        oldUploadClone.addEventListener('change', async (e) => {
            const file = e.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = (event) => { document.getElementById('productPreview').src = event.target.result; };
            reader.readAsDataURL(file);

            const formData = new FormData();
            formData.append('file', file);

            try {
                const response = await fetch(`${API_BASE}/api/upload/products`, {
                    method: 'POST',
                    body: formData,
                });
                if (response.ok) {
                    const data = await response.json();
                    document.getElementById('productImageUrl').value = data.imageUrl;
                } else {
                    alert('Lỗi tải ảnh lên server');
                }
            } catch (error) {}
        });
    }

    // SUBMIT LƯU MÓN ĂN KÈM CÔNG THỨC VÀO DB
    const realProductForm = document.getElementById('productForm');
    if (realProductForm) {
        const oldFormClone = realProductForm.cloneNode(true);
        realProductForm.parentNode.replaceChild(oldFormClone, realProductForm);

        oldFormClone.addEventListener('submit', async (e) => {
            e.preventDefault();
            const productId = document.getElementById('productId').value;
            const productName = document.getElementById('productName').value.trim();
            const productPrice = parseFloat(document.getElementById('productPrice').value);
            const productDescription = document.getElementById('productDescription').value.trim();
            const productCategory = document.getElementById('productCategory').value;
            const productImageUrl = document.getElementById('productImageUrl').value;

            // Thu thập các dòng nguyên liệu
            const productMaterials = [];
            const recipeRows = document.querySelectorAll('.recipe-row');
            recipeRows.forEach(row => {
                const matId = row.querySelector('.recipe-mat-id').value;
                const qty = parseFloat(row.querySelector('.recipe-mat-qty').value);
                if (matId && qty > 0) {
                    productMaterials.push({
                        material: { id: matId },
                        quantity: qty
                    });
                }
            });

            const productPayload = {
                name: productName,
                price: productPrice,
                description: productDescription,
                category: { id: productCategory },
                imageUrl: productImageUrl,
                productMaterials: productMaterials // <== Dữ liệu công thức đẩy xuống Java
            };

            const method = productId ? 'PUT' : 'POST';
            const url = productId ? `${API_BASE}/api/products/${productId}` : `${API_BASE}/api/products`;

            try {
                const response = await fetch(url, {
                    method: method,
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(productPayload)
                });
                if (response.ok) {
                    alert(`Đã ${productId ? 'cập nhật' : 'thêm'} món và công thức thành công!`);
                    toggleModal(document.getElementById('productModal'), document.getElementById('productModalContent'), false);
                    window.location.reload();
                } else {
                    alert(`Lỗi khi ${productId ? 'cập nhật' : 'thêm'} món ăn.`);
                }
            } catch (error) {
                alert('Không thể kết nối đến máy chủ.');
            }
        });
    }

    // XÓA MÓN ĂN
    document.addEventListener('click', async (e) => {
        const btnDeleteProduct = e.target.closest('.btn-delete-product');
        if (btnDeleteProduct) {
            const productId = btnDeleteProduct.getAttribute('data-id');
            if (confirm('Bạn có chắc chắn muốn xóa món này?')) {
                try {
                    const response = await fetch(`${API_BASE}/api/products/${productId}`, { method: 'DELETE' });
                    if (response.ok) {
                        window.location.reload();
                    } else {
                        alert('Lỗi khi xóa.');
                    }
                } catch (error) {}
            }
        }
    });

    // ... (Phần Bàn và QR giữ nguyên phía dưới)
    const addTableModal = document.getElementById('addTableModal');
    const addTableContent = document.getElementById('addTableContent');
    const addTableForm = document.getElementById('addTableForm');

    document.addEventListener('click', (e) => {
        if (e.target.closest('#btnOpenAddTable')) { toggleModal(addTableModal, addTableContent, true); }
        if (e.target.closest('#btnCancelAddTable')) { toggleModal(addTableModal, addTableContent, false); if(addTableForm) addTableForm.reset(); }
    });

    if (addTableForm) {
        const oldFormClone = addTableForm.cloneNode(true);
        addTableForm.parentNode.replaceChild(oldFormClone, addTableForm);
        oldFormClone.addEventListener('submit', async (e) => {
            e.preventDefault();
            const numInput = document.getElementById('newTableNumber').value;
            let payload = {}; if (numInput) { payload.name = `Bàn ${numInput}`; }
            try {
                const response = await fetch(`${API_BASE}/api/tables`, {
                    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload)
                });
                if (response.ok) {
                    window.location.reload();
                }
            } catch (error) { }
        });
    }

    document.addEventListener('click', async (e) => {
        const btnDeleteTable = e.target.closest('.btn-delete-table');
        if (btnDeleteTable) {
            const tableId = btnDeleteTable.getAttribute('data-table');
            if (confirm("Chắc chắn muốn xóa bàn này?")) {
                try {
                    const response = await fetch(`${API_BASE}/api/tables/${tableId}`, { method: 'DELETE' });
                    if (response.ok) { window.location.reload(); }
                } catch (error) {}
            }
        }

        const btnToggleStatus = e.target.closest('.btn-toggle-status');
        if (btnToggleStatus) {
            const tableId = btnToggleStatus.getAttribute('data-table');
            try {
                const response = await fetch(`${API_BASE}/api/tables/${tableId}/status`, {
                    method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({})
                });
                if (response.ok) { window.location.reload(); }
            } catch (error) {}
        }

        // ĐÃ SỬA: Bỏ class btn-view-link khỏi sự kiện mở popup QR
        const btnViewQr = e.target.closest('.btn-view-qr');
        if (btnViewQr) {
            const qrModal = document.getElementById('qrModal');
            const qrContent = document.getElementById('qrContent');
            const qrImage = document.getElementById('qrImage');
            const qrModalTitle = document.getElementById('qrModalTitle');
            const tableToken = btnViewQr.getAttribute('data-token');
            const tableName = btnViewQr.getAttribute('data-name');
            const tableId = btnViewQr.getAttribute('data-table');

            // Fix lỗi truyền tableId thay vì tableToken cho mã QR
            const tableUrl = `${orderDomain}${tableToken}`;
            if(qrImage) qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(tableUrl)}`;
            if(qrModalTitle) qrModalTitle.textContent = `QR ${tableName || 'Bàn ' + tableId}`;
            toggleModal(qrModal, qrContent, true);
        }

        if (e.target.closest('#btnCloseQr')) {
            toggleModal(document.getElementById('qrModal'), document.getElementById('qrContent'), false);
        }
    });
}