// ==========================================
// 1. ICON CHO TRANG QUẢN LÝ
// ==========================================
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
    eye: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`,
    image: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>`
};

// Dữ liệu mẫu danh sách Đơn hàng
const ordersMockData = [
    { id: 'ORD-00001', table: 'Bàn 1', total: '508.646đ', status: 'Hoàn thành', statusClass: 'text-green-500 bg-green-50', time: '21:01:47 13/4/2026', items: [{name: 'Cappuccino', qty: 2}, {name: 'Bánh croissant', qty: 1}] },
    { id: 'ORD-00002', table: 'Bàn 1', total: '382.173đ', status: 'Hoàn thành', statusClass: 'text-green-500 bg-green-50', time: '21:01:47 12/4/2026', items: [{name: 'Bạc xỉu', qty: 1}] },
    { id: 'ORD-00003', table: 'Bàn 1', total: '222.901đ', status: 'Hoàn thành', statusClass: 'text-green-500 bg-green-50', time: '21:01:47 11/4/2026', items: [{name: 'Trà đào', qty: 3}] },
    { id: 'ORD-00004', table: 'Bàn 1', total: '413.086đ', status: 'Hoàn thành', statusClass: 'text-green-500 bg-green-50', time: '21:01:47 10/4/2026', items: [{name: 'Cà phê đen', qty: 2}] }
];

// ==========================================
// 2. DỮ LIỆU MẪU: DANH SÁCH BÀN
// ==========================================
// Domain giả định dùng để tạo QR code đặt hàng cho từng bàn
const orderDomain = "https://redcatcoffee.com/order?table=";

let tablesData = [
    { id: 1, name: 'Bàn 1', status: 'Trống', statusClass: 'bg-green-100 text-green-600' },
    { id: 2, name: 'Bàn 2', status: 'Trống', statusClass: 'bg-green-100 text-green-600' },
    { id: 3, name: 'Bàn 3', status: 'Đang sử dụng', statusClass: 'bg-red-50 text-red-500' },
    { id: 4, name: 'Bàn 4', status: 'Đang sử dụng', statusClass: 'bg-red-50 text-red-500' }
];

// ==========================================
// 3. LAYOUT CHUNG TRANG QUẢN LÝ
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
// 4. NỘI DUNG TRANG BÀN & QR
// ==========================================
function getTableManagementContent(tables = tablesData) {
    const tableRows = tables.map(table => `
        <tr class="border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <td class="py-4 px-6 font-bold text-gray-900">${table.name}</td>
            <td class="py-4 px-6">
                <button class="text-blue-500 hover:text-blue-700 text-sm font-medium btn-view-link" data-table="${table.id}">Xem link</button>
            </td>
            <td class="py-4 px-6">
                <span class="${table.status === 'Trống' ? 'bg-green-100 text-green-600' : 'bg-red-50 text-red-500'} px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">${table.status}</span>
            </td>
            <td class="py-4 px-6">
                <div class="flex gap-2">
                    <button class="btn-view-qr bg-[#2ECA6A] text-white p-2 rounded-lg hover:bg-green-600 shadow-sm transition-colors" data-table="${table.id}" title="Xem QR">
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
                            <th class="py-4 px-6">Bàn</th>
                            <th class="py-4 px-6">QR Code</th>
                            <th class="py-4 px-6">Trạng thái</th>
                            <th class="py-4 px-6">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody id="tableBody">
                        ${tableRows}
                    </tbody>
                </table>
            </div>
        </div>

        <div id="addTableModal" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center hidden opacity-0 transition-opacity duration-300">
            <div class="bg-white rounded-3xl w-full max-w-sm p-6 mx-4 transform scale-95 transition-transform duration-300 shadow-xl" id="addTableContent">
                <h2 class="text-xl font-extrabold mb-6 text-gray-900">Thêm bàn mới</h2>
                <form id="addTableForm">
                    <div class="mb-8">
                        <label class="block text-[11px] font-bold text-gray-900 mb-2">Số bàn (Để trống sẽ tự động thêm)</label>
                        <input type="number" id="newTableNumber" class="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-red-400 outline-none text-sm font-medium text-gray-700" placeholder="Ví dụ: 5">
                    </div>
                    <div class="grid grid-cols-2 gap-3">
                        <button type="submit" class="bg-[#EA4335] hover:bg-red-600 text-white font-bold py-3 rounded-xl transition-colors text-sm shadow-sm">
                            Thêm bàn
                        </button>
                        <button type="button" id="btnCancelAddTable" class="bg-[#E2E8F0] hover:bg-gray-300 text-gray-700 font-bold py-3 rounded-xl transition-colors text-sm">
                            Hủy
                        </button>
                    </div>
                </form>
            </div>
        </div>

        <div id="errorTableToast" class="fixed top-10 right-10 bg-white rounded-2xl shadow-xl border border-gray-100 p-5 flex flex-col transform transition-all duration-300 -translate-y-[150%] opacity-0 z-[60] w-[320px]">
            <div class="flex items-start gap-4 mb-4">
                <div class="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0 border border-red-100">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EA4335" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                </div>
                <div class="flex-1">
                    <h4 class="text-sm font-bold text-gray-900" id="toastTitle">Trùng số bàn</h4>
                    <p class="text-[11px] text-gray-500 mt-1" id="toastMessage">Bàn số <span id="duplicateTableNum" class="font-bold"></span> đã tồn tại trong hệ thống. Vui lòng chọn số khác.</p>
                </div>
                <button id="closeTableToast" class="text-gray-400 hover:text-gray-600">${managerIcons.close}</button>
            </div>
            <button id="btnUnderstandToast" class="w-full bg-[#EA4335] hover:bg-red-600 text-white font-bold py-2.5 rounded-xl transition-colors text-sm">Đóng</button>
        </div>

        <div id="qrModal" class="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center hidden opacity-0 transition-opacity duration-300">
            <div class="bg-white rounded-3xl p-8 transform scale-95 transition-transform duration-300 flex flex-col items-center shadow-2xl relative" id="qrContent">
                <button id="btnCloseQr" class="absolute top-4 right-4 text-gray-400 hover:text-gray-800">
                    ${managerIcons.close}
                </button>
                <h3 class="text-lg font-extrabold text-gray-900 mb-6" id="qrModalTitle">QR Bàn 1</h3>

                <div class="w-64 h-64 border-4 border-gray-100 rounded-2xl overflow-hidden mb-6 flex items-center justify-center">
                    <img id="qrImage" src="" alt="QR Code" class="w-full h-full object-cover">
                </div>

                <p class="text-xs text-gray-500 mb-6 text-center max-w-[250px]">Khách quét mã này để gọi món trực tiếp vào máy POS.</p>
                <button class="bg-[#2ECA6A] hover:bg-green-600 text-white font-bold py-3 px-8 rounded-xl transition-colors text-sm w-full shadow-sm">
                    Tải mã QR xuống
                </button>
            </div>
        </div>
    `;
}

// Hàm render nội dung trang Xem kho
function getManagerInventoryContent(materialsData) {
    const safeData = materialsData || [];

    // Bảng Desktop
    const tableRows = safeData.map(item => `
        <tr class="border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <td class="py-4 px-4">
                <div class="font-bold text-gray-900">${item.name}</div>
                <div class="text-[11px] text-gray-500 mt-0.5">${item.id} · ${item.type}</div>
            </td>
            <td class="py-4 px-4 font-medium text-gray-600">${item.supplier}</td>
            <td class="py-4 px-4 text-center">
                <span class="text-base font-extrabold ${item.isLowStock ? 'text-red-600' : 'text-gray-900'}">${item.stock}</span>
                <span class="text-xs text-gray-500"> ${item.unit}</span>
            </td>
            <td class="py-4 px-4 text-center">
                <span class="${item.statusClass} px-3 py-1 rounded-full text-xs font-bold border border-current/10">${item.status}</span>
            </td>
        </tr>
    `).join('');

    // Thẻ Mobile
    const mobileCards = safeData.map(item => `
        <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-3">
            <div class="flex justify-between items-start mb-2">
                <div>
                    <h3 class="font-bold text-gray-900 text-sm">${item.name}</h3>
                    <p class="text-[11px] text-gray-500">${item.supplier}</p>
                </div>
                <span class="${item.statusClass} px-2 py-1 rounded-md text-[10px] font-bold border border-current/10">${item.status}</span>
            </div>
            <div class="flex justify-between items-end mt-4">
                <div class="text-xs text-gray-500">Tồn kho hiện tại:</div>
                <div class="font-extrabold text-lg ${item.isLowStock ? 'text-red-600' : 'text-gray-900'}">${item.stock} <span class="text-xs text-gray-500 font-medium">${item.unit}</span></div>
            </div>
        </div>
    `).join('');

    return `
        <div class="max-w-5xl mx-auto">
            <div class="mb-8">
                <h1 class="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Xem kho nguyên liệu</h1>
                <p class="text-sm text-gray-500">Theo dõi số lượng nguyên liệu tồn kho theo thời gian thực</p>
            </div>

            <div class="relative w-full max-w-md mb-6">
                <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="gray" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </div>
                <input type="text" class="bg-white border border-gray-200 w-full text-gray-700 rounded-xl pl-11 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400 shadow-sm text-sm" placeholder="Tìm kiếm nguyên liệu...">
            </div>

            <div class="hidden md:block bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="bg-gray-50 text-xs text-gray-500 font-bold uppercase tracking-wider border-b border-gray-100">
                            <th class="py-4 px-4">Nguyên liệu</th>
                            <th class="py-4 px-4">Nhà cung cấp</th>
                            <th class="py-4 px-4 text-center">Tồn kho</th>
                            <th class="py-4 px-4 text-center">Trạng thái</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${tableRows}
                    </tbody>
                </table>
            </div>

            <div class="md:hidden">
                ${mobileCards}
            </div>
        </div>
    `;
}

// ==========================================
// TRANG QUẢN LÝ ĐƠN HÀNG & MODAL CHI TIẾT
// ==========================================
function getManagerOrdersContent() {
    const tableRows = ordersMockData.map(order => `
        <tr class="border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <td class="py-4 px-6 font-bold text-gray-900 text-sm">${order.id}</td>
            <td class="py-4 px-6 text-gray-500 text-sm">${order.table}</td>
            <td class="py-4 px-6 font-extrabold text-[#EA4335] text-sm">${order.total}</td>
            <td class="py-4 px-6">
                <span class="${order.statusClass} px-3 py-1 rounded-full text-xs font-bold border border-current/10">${order.status}</span>
            </td>
            <td class="py-4 px-6 text-gray-400 text-sm">${order.time}</td>
            <td class="py-4 px-6">
                <button class="bg-[#4285F4] hover:bg-blue-600 text-white px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-[11px] font-bold shadow-sm transition-colors btn-view-order" data-id="${order.id}">
                    ${managerIcons.eye} Xem
                </button>
            </td>
        </tr>
    `).join('');

    return `
        <div class="max-w-6xl mx-auto">
            <h1 class="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8">Quản lý đơn hàng</h1>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div class="bg-white rounded-3xl p-6 shadow-sm border border-gray-50 flex justify-between items-center">
                    <div>
                        <div class="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-1">Chờ xử lý</div>
                        <div class="text-3xl font-extrabold text-[#F59E0B]">0</div>
                    </div>
                    <div class="text-[#F59E0B] opacity-40">${managerIcons.clock}</div>
                </div>
                <div class="bg-white rounded-3xl p-6 shadow-sm border border-gray-50 flex justify-between items-center">
                    <div>
                        <div class="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-1">Đang chuẩn bị</div>
                        <div class="text-3xl font-extrabold text-[#4285F4]">0</div>
                    </div>
                    <div class="text-[#4285F4] opacity-40">${managerIcons.clock}</div>
                </div>
                <div class="bg-white rounded-3xl p-6 shadow-sm border border-gray-50 flex justify-between items-center">
                    <div>
                        <div class="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-1">Hoàn thành hôm nay</div>
                        <div class="text-3xl font-extrabold text-[#2ECA6A]">1</div>
                    </div>
                    <div class="text-[#2ECA6A] opacity-40">${managerIcons.checkCircle}</div>
                </div>
            </div>

            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse min-w-[700px]">
                        <thead>
                            <tr class="bg-white border-b border-gray-100 text-[11px] text-gray-900 font-extrabold uppercase tracking-wider">
                                <th class="py-4 px-6">Mã đơn</th>
                                <th class="py-4 px-6">Bàn</th>
                                <th class="py-4 px-6">Tổng tiền</th>
                                <th class="py-4 px-6">Trạng thái</th>
                                <th class="py-4 px-6">Thời gian</th>
                                <th class="py-4 px-6">Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${tableRows}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div id="orderDetailModal" class="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center hidden opacity-0 transition-opacity duration-300">
            <div class="bg-white rounded-3xl w-full max-w-md p-6 md:p-8 mx-4 transform scale-95 transition-transform duration-300 shadow-2xl relative" id="orderDetailContent">
                <h2 class="text-xl font-extrabold mb-6 text-gray-900">Chi tiết đơn hàng</h2>

                <div class="grid grid-cols-2 gap-4 mb-6 border-b border-gray-100 pb-6">
                    <div>
                        <div class="text-[11px] text-gray-400 font-bold mb-1">Mã đơn hàng</div>
                        <div class="font-bold text-gray-900 text-sm" id="modalOrderId">ORD-00001</div>
                    </div>
                    <div>
                        <div class="text-[11px] text-gray-400 font-bold mb-1">Bàn số</div>
                        <div class="font-bold text-gray-900 text-sm" id="modalOrderTable">1</div>
                    </div>
                    <div>
                        <div class="text-[11px] text-gray-400 font-bold mb-1">Trạng thái</div>
                        <span class="text-green-500 bg-green-50 px-2.5 py-1 rounded-md text-[10px] font-bold" id="modalOrderStatus">Hoàn thành</span>
                    </div>
                    <div>
                        <div class="text-[11px] text-gray-400 font-bold mb-1">Thời gian đặt</div>
                        <div class="font-bold text-gray-900 text-xs" id="modalOrderTime">21:01:47 13/4/2026</div>
                    </div>
                </div>

                <div class="mb-6">
                    <h3 class="font-bold text-gray-900 text-sm mb-3">Các món đã order</h3>
                    <ul class="space-y-2 text-sm text-gray-600 font-medium" id="modalOrderItems">
                        </ul>
                </div>

                <div class="flex justify-between items-center pt-4 border-t border-gray-100 mb-6">
                    <span class="font-extrabold text-gray-900 text-sm">Tổng cộng</span>
                    <span class="font-extrabold text-[#EA4335] text-lg" id="modalOrderTotal">508.646đ</span>
                </div>

                <button id="btnCloseOrderDetail" class="w-full bg-[#E2E8F0] hover:bg-gray-300 text-gray-700 font-bold py-3 rounded-xl transition-colors text-sm">
                    Đóng
                </button>
            </div>
        </div>
    `;
}

// ==========================================
// TRANG BÁO CÁO DOANH THU
// ==========================================
function getManagerRevenueContent() {
    const tableRows = ordersMockData.slice(0, 3).map(order => `
        <tr class="border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <td class="py-4 px-6 font-bold text-gray-900 text-sm">${order.id}</td>
            <td class="py-4 px-6 text-gray-500 text-sm">${order.table}</td>
            <td class="py-4 px-6 font-extrabold text-[#2ECA6A] text-sm">${order.total}</td>
            <td class="py-4 px-6 text-gray-400 text-sm">${order.time}</td>
        </tr>
    `).join('');

    return `
        <div class="max-w-6xl mx-auto">
            <div class="flex justify-between items-center mb-8">
                <h1 class="text-2xl md:text-3xl font-extrabold text-gray-900">Báo cáo Doanh thu</h1>
                <select class="border border-gray-200 bg-white rounded-xl px-4 py-2 text-sm font-bold text-gray-700 outline-none shadow-sm cursor-pointer appearance-none pr-8 relative">
                    <option>Hôm nay</option>
                    <option>Tuần này</option>
                    <option>Tháng này</option>
                </select>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
                <div class="bg-[#4285F4] text-white rounded-3xl p-6 shadow-md relative overflow-hidden">
                    <div class="absolute right-4 top-4 opacity-20">${managerIcons.dollar}</div>
                    <div class="mb-4">${managerIcons.dollar}</div>
                    <div class="text-[11px] font-bold uppercase tracking-wider mb-1 opacity-80">Doanh thu hôm nay</div>
                    <div class="text-2xl md:text-3xl font-extrabold">508.646đ</div>
                </div>
                <div class="bg-[#2ECA6A] text-white rounded-3xl p-6 shadow-md relative overflow-hidden">
                    <div class="mb-4">${managerIcons.cart}</div>
                    <div class="text-[11px] font-bold uppercase tracking-wider mb-1 opacity-80">Đơn hàng hôm nay</div>
                    <div class="text-2xl md:text-3xl font-extrabold">1</div>
                </div>
                <div class="bg-[#EA4335] text-white rounded-3xl p-6 shadow-md relative overflow-hidden">
                    <div class="mb-4">${managerIcons.trendUp}</div>
                    <div class="text-[11px] font-bold uppercase tracking-wider mb-1 opacity-80">Doanh thu tuần</div>
                    <div class="text-2xl md:text-3xl font-extrabold">508.646đ</div>
                </div>
                <div class="bg-[#F97316] text-white rounded-3xl p-6 shadow-md relative overflow-hidden">
                    <div class="mb-4">${managerIcons.trendUp}</div>
                    <div class="text-[11px] font-bold uppercase tracking-wider mb-1 opacity-80">Doanh thu tháng</div>
                    <div class="text-2xl md:text-3xl font-extrabold">508.646đ</div>
                </div>
            </div>

            <div class="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden p-6">
                <h3 class="font-bold text-gray-900 text-base mb-4">Chi tiết đơn hàng gần đây</h3>
                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse min-w-[500px]">
                        <thead>
                            <tr class="bg-gray-50 border-b border-gray-100 text-[11px] text-gray-900 font-extrabold uppercase tracking-wider">
                                <th class="py-4 px-6 rounded-l-xl">Mã đơn</th>
                                <th class="py-4 px-6">Bàn</th>
                                <th class="py-4 px-6">Tổng tiền</th>
                                <th class="py-4 px-6 rounded-r-xl">Thời gian</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${tableRows}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

// ==========================================
// TRANG QUẢN LÝ THỰC ĐƠN (MENU)
// ==========================================
function getManagerMenuContent(products) {
    const productCardsHTML = products.map(p => `
        <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col relative group">
            <div class="w-full h-40 bg-gray-100 rounded-lg mb-4 overflow-hidden relative">
                <img src="${p.imageUrl ? 'http://localhost:8080' + p.imageUrl : 'https://via.placeholder.com/300?text=No+Image'}" alt="${p.name}" class="w-full h-full object-cover">
            </div>

            <div class="flex-1">
                <p class="text-xs text-gray-400 mb-1">${p.categoryName || 'Món ăn'}</p>
                <h3 class="font-bold text-gray-900 mb-1">${p.name}</h3>
                <p class="text-xs text-gray-500 mb-3 line-clamp-2">${p.description || ''}</p>
                <p class="font-bold text-[#E33539] text-base">${p.price.toLocaleString('vi-VN')}đ</p>
            </div>

            <!-- Nút tương tác ẩn hiện khi hover -->
            <div class="absolute inset-0 bg-white bg-opacity-90 flex flex-col justify-center items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl">
                <button class="btn-edit-product w-3/4 bg-blue-500 text-white py-2.5 rounded-xl text-sm font-bold shadow-sm hover:bg-blue-600 transition-colors flex items-center justify-center gap-2" data-id="${p.id}" data-name="${p.name}" data-price="${p.price}" data-desc="${p.description || ''}" data-cat="${p.categoryId}" data-img="${p.imageUrl || ''}">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg> Chỉnh sửa
                </button>
                <button class="btn-delete-product w-3/4 bg-red-500 text-white py-2.5 rounded-xl text-sm font-bold shadow-sm hover:bg-red-600 transition-colors flex items-center justify-center gap-2" data-id="${p.id}">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg> Xóa món
                </button>
            </div>
        </div>
    `).join('');

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

        <!-- Modal Thêm/Sửa Món -->
        <div id="productModal" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center hidden opacity-0 transition-opacity duration-300">
            <div class="bg-white rounded-2xl w-full max-w-lg p-6 mx-4 transform scale-95 transition-transform duration-300" id="productModalContent">
                <h2 id="productModalTitle" class="text-xl font-bold mb-6 text-gray-900">Thêm món mới</h2>
                <form id="productForm" class="space-y-4">
                    <input type="hidden" id="productId">

                    <div class="flex items-center gap-4 mb-4">
                        <img id="productPreview" src="https://via.placeholder.com/80" alt="Product Preview" class="w-20 h-20 rounded-lg object-cover border border-gray-200">
                        <div>
                            <label for="productImageUpload" class="cursor-pointer bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-lg text-sm transition-colors flex items-center gap-2">
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
                    <div>
                        <label class="block text-sm font-semibold mb-1 text-gray-800">Giá tiền <span class="text-red-500">*</span></label>
                        <input type="number" id="productPrice" required class="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-red-400 outline-none">
                    </div>
                    <div>
                        <label class="block text-sm font-semibold mb-1 text-gray-800">Mô tả</label>
                        <textarea id="productDescription" rows="3" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-red-400 outline-none"></textarea>
                    </div>
                    <div>
                        <label class="block text-sm font-semibold mb-1 text-gray-800">Danh mục <span class="text-red-500">*</span></label>
                        <select id="productCategory" required class="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-red-400 outline-none bg-white text-gray-700">
                            <option value="" disabled selected>-- Chọn danh mục --</option>
                            <option value="1">Cà phê</option>
                            <option value="2">Trà</option>
                            <option value="3">Đồ ăn vặt</option>
                        </select>
                    </div>

                    <div class="grid grid-cols-2 gap-4 mt-8">
                        <button type="submit" class="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition-colors shadow-sm">Lưu món</button>
                        <button type="button" id="btnCancelProductModal" class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 rounded-lg transition-colors">Hủy</button>
                    </div>
                </form>
            </div>
        </div>
    `;
}


export function renderManagerInventoryView(data) {
    return getManagerLayout(getManagerInventoryContent(data), 'inventory');
}

export function renderManagerTables(tables = tablesData) {
    return getManagerLayout(getTableManagementContent(tables), 'tables');
}

// Các hàm render
export function renderManagerOrders() {
    return getManagerLayout(getManagerOrdersContent(), 'orders');
}

export function renderManagerRevenue() {
    return getManagerLayout(getManagerRevenueContent(), 'revenue');
}

export function renderManagerMenu(products = []) {
    return getManagerLayout(getManagerMenuContent(products), 'menu');
}


export function initManagerEvents() {
    // ==========================================
    // LOGIC CHUNG: ĐÓNG/MỞ MODAL & TOAST
    // ==========================================
    const toggleModal = (modal, content, show) => {
        if (!modal) return;
        if (show) {
            modal.classList.remove('hidden');
            setTimeout(() => {
                modal.classList.remove('opacity-0');
                if (content) content.classList.remove('scale-95');
            }, 10);
        } else {
            modal.classList.add('opacity-0');
            if (content) content.classList.add('scale-95');
            setTimeout(() => modal.classList.add('hidden'), 300);
        }
    };

    const showToast = (title, message) => {
        const errorToast = document.getElementById('errorTableToast');
        if (!errorToast) return;
        document.getElementById('toastTitle').textContent = title;
        document.getElementById('toastMessage').innerHTML = message;
        errorToast.classList.remove('-translate-y-[150%]', 'opacity-0');
        setTimeout(() => {
            errorToast.classList.add('-translate-y-[150%]', 'opacity-0');
        }, 4000);
    };

    // Đóng toast
    document.addEventListener('click', (e) => {
        if (e.target.closest('#closeTableToast') || e.target.closest('#btnUnderstandToast')) {
            const errorToast = document.getElementById('errorTableToast');
            if (errorToast) errorToast.classList.add('-translate-y-[150%]', 'opacity-0');
        }
    });

    // ==========================================
    // LOGIC QUẢN LÝ BÀN & QR
    // ==========================================
    const addTableModal = document.getElementById('addTableModal');
    const addTableContent = document.getElementById('addTableContent');
    const addTableForm = document.getElementById('addTableForm');

    // Mở popup Thêm Bàn
    document.addEventListener('click', (e) => {
        if (e.target.closest('#btnOpenAddTable')) {
            toggleModal(addTableModal, addTableContent, true);
        }
    });

    // Đóng popup Thêm Bàn
    const btnCancelAddTable = document.getElementById('btnCancelAddTable');
    if (btnCancelAddTable) {
        btnCancelAddTable.addEventListener('click', () => {
            toggleModal(addTableModal, addTableContent, false);
            if(addTableForm) addTableForm.reset();
        });
    }

    // Xử lý Submit form thêm bàn mới
    if (addTableForm) {
        addTableForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const numInput = document.getElementById('newTableNumber').value;

            // Xây dựng payload, nếu không có numInput, Backend sẽ tự xử lý
            let payload = {};
            if (numInput) {
                 payload.name = `Bàn ${numInput}`;
            }

            try {
                const response = await fetch('http://localhost:8080/api/tables', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });

                if (response.ok) {
                    alert("Đã thêm bàn thành công!");
                    toggleModal(addTableModal, addTableContent, false);
                    window.location.reload();
                } else {
                    const error = await response.json();
                    showToast('Lỗi thêm bàn', error.message || 'Có lỗi xảy ra');
                }
            } catch (error) {
                console.error("Lỗi:", error);
                alert("Không thể kết nối đến server");
            }
        });
    }

    // Sự kiện Xóa Bàn và Cập nhật trạng thái bàn sử dụng Event Delegation
    document.addEventListener('click', async (e) => {
        // Xóa Bàn
        const btnDeleteTable = e.target.closest('.btn-delete-table');
        if (btnDeleteTable) {
            const tableId = btnDeleteTable.getAttribute('data-table');
            if (confirm("Bạn có chắc chắn muốn xóa bàn này? Hệ thống sẽ tự động điều chỉnh lại số thứ tự bàn để không bị trống.")) {
                try {
                    const response = await fetch(`http://localhost:8080/api/tables/${tableId}`, {
                        method: 'DELETE'
                    });
                    if (response.ok) {
                        alert("Đã xóa bàn thành công!");
                        window.location.reload();
                    } else {
                        alert("Lỗi khi xóa bàn.");
                    }
                } catch (error) {
                    console.error("Lỗi:", error);
                }
            }
            return; // Tránh chạy tiếp code bên dưới
        }

        // Cập nhật trạng thái Bàn
        const btnToggleStatus = e.target.closest('.btn-toggle-status');
        if (btnToggleStatus) {
            const tableId = btnToggleStatus.getAttribute('data-table');
            try {
                const response = await fetch(`http://localhost:8080/api/tables/${tableId}/status`, {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({}) // Gửi body rỗng để backend tự toggle
                });
                if (response.ok) {
                    window.location.reload(); // Tải lại để cập nhật UI
                } else {
                    alert("Lỗi khi cập nhật trạng thái.");
                }
            } catch (error) {
                console.error("Lỗi:", error);
            }
            return;
        }

        // Xem QR Code Bàn
        const btnViewQr = e.target.closest('.btn-view-qr') || e.target.closest('.btn-view-link');
        if (btnViewQr) {
            const qrModal = document.getElementById('qrModal');
            const qrContent = document.getElementById('qrContent');
            const qrImage = document.getElementById('qrImage');
            const qrModalTitle = document.getElementById('qrModalTitle');

            const tableId = btnViewQr.getAttribute('data-table');
            const tableUrl = `${orderDomain}${tableId}`;

            if(qrImage) qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(tableUrl)}`;
            if(qrModalTitle) qrModalTitle.textContent = `QR Bàn ${tableId}`;

            toggleModal(qrModal, qrContent, true);
        }

        // Đóng modal QR
        if (e.target.closest('#btnCloseQr')) {
            toggleModal(document.getElementById('qrModal'), document.getElementById('qrContent'), false);
        }
    });

    // ==========================================
    // LOGIC MODAL CHI TIẾT ĐƠN HÀNG
    // ==========================================
    const detailModal = document.getElementById('orderDetailModal');
    const detailContent = document.getElementById('orderDetailContent');

    // Ủy quyền sự kiện click cho nút "Xem" Đơn hàng
    document.addEventListener('click', (e) => {
        const btnViewOrder = e.target.closest('.btn-view-order');
        if (btnViewOrder && detailModal) {
            const orderId = btnViewOrder.getAttribute('data-id');
            const order = ordersMockData.find(o => o.id === orderId);

            if (order) {
                document.getElementById('modalOrderId').textContent = order.id;
                document.getElementById('modalOrderTable').textContent = order.table.replace('Bàn ', '');
                document.getElementById('modalOrderStatus').textContent = order.status;
                document.getElementById('modalOrderTime').textContent = order.time;
                document.getElementById('modalOrderTotal').textContent = order.total;

                const itemsHtml = order.items.map(i => `<li class="flex justify-between"><span>${i.name}</span> <span class="text-gray-900">x${i.qty}</span></li>`).join('');
                document.getElementById('modalOrderItems').innerHTML = itemsHtml;

                toggleModal(detailModal, detailContent, true);
            }
        }

        // Đóng modal chi tiết đơn
        if (e.target.closest('#btnCloseOrderDetail')) {
            toggleModal(detailModal, detailContent, false);
        }
    });


    // ==========================================
    // LOGIC TRANG QUẢN LÝ THỰC ĐƠN (MENU)
    // ==========================================
    const productModal = document.getElementById('productModal');
    const productModalContent = document.getElementById('productModalContent');
    const productForm = document.getElementById('productForm');
    const productImageUpload = document.getElementById('productImageUpload');
    const productPreview = document.getElementById('productPreview');
    const productImageUrlInput = document.getElementById('productImageUrl');

    // Hàm Mở Modal Thêm/Sửa Món
    const openProductModal = (isEdit = false, pData = {}) => {
        if (!productModal) return;

        document.getElementById('productModalTitle').textContent = isEdit ? 'Sửa món ăn' : 'Thêm món mới';

        if (isEdit) {
            document.getElementById('productId').value = pData.id || '';
            document.getElementById('productName').value = pData.name || '';
            document.getElementById('productPrice').value = pData.price || '';
            document.getElementById('productDescription').value = pData.desc || '';

            // Set danh mục
            const catSelect = document.getElementById('productCategory');
            if (catSelect && pData.cat) {
                Array.from(catSelect.options).forEach(opt => {
                    if (opt.value === pData.cat) opt.selected = true;
                });
            }

            // Set ảnh
            if (pData.img) {
                productPreview.src = 'http://localhost:8080' + pData.img;
                productImageUrlInput.value = pData.img;
            } else {
                productPreview.src = 'https://via.placeholder.com/80';
                productImageUrlInput.value = '';
            }

        } else {
            productForm.reset();
            document.getElementById('productId').value = '';
            productPreview.src = 'https://via.placeholder.com/80';
            productImageUrlInput.value = '';
        }

        toggleModal(productModal, productModalContent, true);
    };

    // Lắng nghe sự kiện bật các modal của Menu
    document.addEventListener('click', (e) => {
        // Nút Thêm Món
        if (e.target.closest('#btnAddProduct') || e.target.closest('#btnEmptyAddProduct')) {
            openProductModal(false);
        }

        // Nút Sửa Món
        const btnEditProduct = e.target.closest('.btn-edit-product');
        if (btnEditProduct) {
            const pData = {
                id: btnEditProduct.getAttribute('data-id'),
                name: btnEditProduct.getAttribute('data-name'),
                price: btnEditProduct.getAttribute('data-price'),
                desc: btnEditProduct.getAttribute('data-desc'),
                cat: btnEditProduct.getAttribute('data-cat'),
                img: btnEditProduct.getAttribute('data-img')
            };
            openProductModal(true, pData);
        }

        // Nút Đóng Modal Thêm/Sửa Món
        if (e.target.closest('#btnCancelProductModal')) {
            toggleModal(productModal, productModalContent, false);
        }
    });

    // --- Upload Ảnh Sản Phẩm ---
    if (productImageUpload) {
        // Hủy event listener cũ nếu có để tránh gọi 2 lần
        const oldUploadClone = productImageUpload.cloneNode(true);
        productImageUpload.parentNode.replaceChild(oldUploadClone, productImageUpload);

        oldUploadClone.addEventListener('change', async (e) => {
            const file = e.target.files[0];
            if (!file) return;

            // Preview local
            const reader = new FileReader();
            reader.onload = (event) => {
                document.getElementById('productPreview').src = event.target.result;
            };
            reader.readAsDataURL(file);

            // Fetch upload
            const formData = new FormData();
            formData.append('file', file);

            try {
                const response = await fetch('http://localhost:8080/api/upload/products', {
                    method: 'POST',
                    body: formData,
                });
                if (response.ok) {
                    const data = await response.json();
                    document.getElementById('productImageUrl').value = data.imageUrl;
                } else {
                    alert('Lỗi tải ảnh lên máy chủ');
                }
            } catch (error) {
                console.error('Lỗi upload ảnh:', error);
                alert('Không thể kết nối đến máy chủ lưu trữ ảnh.');
            }
        });
    }

    // --- Submit Form Thêm/Sửa Sản Phẩm ---
    if (productForm) {
        const oldFormClone = productForm.cloneNode(true);
        productForm.parentNode.replaceChild(oldFormClone, productForm);

        oldFormClone.addEventListener('submit', async (e) => {
            e.preventDefault();
            const productId = document.getElementById('productId').value;
            const productName = document.getElementById('productName').value.trim();
            const productPrice = parseFloat(document.getElementById('productPrice').value);
            const productDescription = document.getElementById('productDescription').value.trim();
            const productCategory = document.getElementById('productCategory').value;
            const productImageUrl = document.getElementById('productImageUrl').value;

            const productPayload = {
                name: productName,
                price: productPrice,
                description: productDescription,
                category: { id: productCategory },
                imageUrl: productImageUrl
            };

            const method = productId ? 'PUT' : 'POST';
            const url = productId ? `http://localhost:8080/api/products/${productId}` : 'http://localhost:8080/api/products';

            try {
                const response = await fetch(url, {
                    method: method,
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(productPayload)
                });

                if (response.ok) {
                    alert(`Đã ${productId ? 'cập nhật' : 'thêm'} món ăn thành công!`);
                    toggleModal(document.getElementById('productModal'), document.getElementById('productModalContent'), false);
                    window.location.reload();
                } else {
                    alert(`Lỗi khi ${productId ? 'cập nhật' : 'thêm'} món ăn.`);
                }
            } catch (error) {
                console.error('Lỗi API:', error);
                alert('Không thể kết nối đến máy chủ.');
            }
        });
    }

    // --- Xóa Sản Phẩm ---
    document.addEventListener('click', async (e) => {
        const btnDeleteProduct = e.target.closest('.btn-delete-product');
        if (btnDeleteProduct) {
            const productId = btnDeleteProduct.getAttribute('data-id');
            if (confirm('Bạn có chắc chắn muốn xóa món ăn này khỏi hệ thống?')) {
                try {
                    const response = await fetch(`http://localhost:8080/api/products/${productId}`, {
                        method: 'DELETE',
                    });
                    if (response.ok) {
                        alert('Đã xóa món ăn thành công!');
                        window.location.reload();
                    } else {
                        alert('Lỗi khi xóa món ăn.');
                    }
                } catch (error) {
                    console.error('Lỗi API:', error);
                    alert('Không thể kết nối đến máy chủ.');
                }
            }
        }
    });
}