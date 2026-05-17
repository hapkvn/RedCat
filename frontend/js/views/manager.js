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
    eye: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`
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
function getTableManagementContent() {
    const tableRows = tablesData.map(table => `
        <tr class="border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <td class="py-4 px-6 font-bold text-gray-900">${table.name}</td>
            <td class="py-4 px-6">
                <button class="text-blue-500 hover:text-blue-700 text-sm font-medium btn-view-link" data-table="${table.id}">Xem link</button>
            </td>
            <td class="py-4 px-6">
                <span class="${table.statusClass} px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">${table.status}</span>
            </td>
            <td class="py-4 px-6">
                <div class="flex gap-2">
                    <button class="btn-view-qr bg-[#2ECA6A] text-white p-2 rounded-lg hover:bg-green-600 shadow-sm transition-colors" data-table="${table.id}" title="Xem QR">
                        ${managerIcons.qr}
                    </button>
                    <button class="bg-[#4285F4] text-white p-2 rounded-lg hover:bg-blue-600 shadow-sm transition-colors" title="Sửa">
                        ${managerIcons.edit}
                    </button>
                    <button class="bg-[#EA4335] text-white p-2 rounded-lg hover:bg-red-600 shadow-sm transition-colors" title="Xóa">
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
                        <label class="block text-[11px] font-bold text-gray-900 mb-2">Số bàn</label>
                        <input type="number" id="newTableNumber" class="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-red-400 outline-none text-sm font-medium text-gray-700" placeholder="Nhập số bàn mới" required>
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
                    <h4 class="text-sm font-bold text-gray-900">Trùng số bàn</h4>
                    <p class="text-[11px] text-gray-500 mt-1">Bàn số <span id="duplicateTableNum" class="font-bold"></span> đã tồn tại trong hệ thống. Vui lòng chọn số khác.</p>
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

// Export hàm ra để app.js gọi
export function renderManagerInventoryView(data) {
    return getManagerLayout(getManagerInventoryContent(data), 'inventory');
}

export function renderManagerTables() {
    return getManagerLayout(getTableManagementContent(), 'tables');
}

// Các hàm render
export function renderManagerOrders() {
    return getManagerLayout(getManagerOrdersContent(), 'orders');
}

export function renderManagerRevenue() {
    return getManagerLayout(getManagerRevenueContent(), 'revenue');
}


export function initManagerEvents() {
    // ---- LOGIC THÊM BÀN ----
    const addTableModal = document.getElementById('addTableModal');
    const addTableContent = document.getElementById('addTableContent');
    const addTableForm = document.getElementById('addTableForm');

    const errorToast = document.getElementById('errorTableToast');
    let toastTimeout;

    // Mở popup Thêm
    document.addEventListener('click', (e) => {
        if (e.target.closest('#btnOpenAddTable')) {
            addTableModal.classList.remove('hidden');
            setTimeout(() => {
                addTableModal.classList.remove('opacity-0');
                addTableContent.classList.remove('scale-95');
            }, 10);
        }
    });

    // Đóng popup Thêm
    const closeAddModal = () => {
        addTableModal.classList.add('opacity-0');
        addTableContent.classList.add('scale-95');
        setTimeout(() => addTableModal.classList.add('hidden'), 300);
    };
    const btnCancelAddTable = document.getElementById('btnCancelAddTable');
    if (btnCancelAddTable) btnCancelAddTable.addEventListener('click', closeAddModal);

    // Báo lỗi trùng lặp (Toast)
    const showDuplicateToast = (num) => {
        document.getElementById('duplicateTableNum').textContent = num;
        errorToast.classList.remove('-translate-y-[150%]', 'opacity-0');
        clearTimeout(toastTimeout);
        toastTimeout = setTimeout(hideToast, 4000);
    };
    const hideToast = () => errorToast.classList.add('-translate-y-[150%]', 'opacity-0');

    document.addEventListener('click', (e) => {
        if (e.target.closest('#closeTableToast') || e.target.closest('#btnUnderstandToast')) {
            hideToast();
        }
    });

    // Xử lý Submit form thêm bàn mới
    if (addTableForm) {
        addTableForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const newNum = parseInt(document.getElementById('newTableNumber').value);

            // Check trùng
            const isDuplicate = tablesData.some(t => t.id === newNum);
            if (isDuplicate) {
                showDuplicateToast(newNum);
            } else {
                // Thêm vào data giả lập (Trạng thái mặc định là Trống)
                tablesData.push({
                    id: newNum,
                    name: `Bàn ${newNum}`,
                    status: 'Trống',
                    statusClass: 'bg-green-100 text-green-600'
                });

                // Alert thành công & Tải lại trang để hiện bàn mới (Trong thực tế là gọi API lưu SQL)
                alert(`Đã thêm Bàn ${newNum} thành công! Mã QR đã tự động được tạo.`);
                closeAddModal();
                // Rerender trang thay vì reload (để thấy thay đổi tạm thời nếu dùng data giả)
                const appDiv = document.getElementById('app');
                if (appDiv) {
                    appDiv.innerHTML = renderManagerTables();
                    initManagerEvents();
                }
            }
        });
    }

    // ---- LOGIC HIỂN THỊ MÃ QR ----
    const qrModal = document.getElementById('qrModal');
    const qrContent = document.getElementById('qrContent');
    const qrImage = document.getElementById('qrImage');
    const qrModalTitle = document.getElementById('qrModalTitle');

    const openQrModal = (tableId) => {
        // TỰ ĐỘNG TẠO QR: Tạo chuỗi URL chứa ID bàn
        const tableUrl = `${orderDomain}${tableId}`;

        // Gọi API miễn phí để vẽ URL thành hình ảnh QR
        // Hàm encodeURIComponent giúp url không bị lỗi ký tự đặc biệt
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(tableUrl)}`;

        qrModalTitle.textContent = `QR Bàn ${tableId}`;

        qrModal.classList.remove('hidden');
        setTimeout(() => {
            qrModal.classList.remove('opacity-0');
            qrContent.classList.remove('scale-95');
        }, 10);
    };

    const closeQrModal = () => {
        qrModal.classList.add('opacity-0');
        qrContent.classList.add('scale-95');
        setTimeout(() => qrModal.classList.add('hidden'), 300);
    };

    // Bắt sự kiện khi click vào nút màu xanh "Xem QR" hoặc "Xem link"
    document.addEventListener('click', (e) => {
        const btnQr = e.target.closest('.btn-view-qr') || e.target.closest('.btn-view-link');
        if (btnQr) {
            const tableId = btnQr.getAttribute('data-table');
            openQrModal(tableId);
        }

        if (e.target.closest('#btnCloseQr')) {
            closeQrModal();
        }
    });

    // ==========================================
    // LOGIC MODAL CHI TIẾT ĐƠN HÀNG
    // ==========================================
    const detailModal = document.getElementById('orderDetailModal');
    const detailContent = document.getElementById('orderDetailContent');
    const btnClose = document.getElementById('btnCloseOrderDetail');

    // Ủy quyền sự kiện click cho nút "Xem"
    document.addEventListener('click', (e) => {
        const btnView = e.target.closest('.btn-view-order');
        if (btnView && detailModal) {
            const orderId = btnView.getAttribute('data-id');
            // Tìm order trong data mẫu
            const order = ordersMockData.find(o => o.id === orderId);

            if (order) {
                // Đổ dữ liệu vào Modal
                document.getElementById('modalOrderId').textContent = order.id;
                document.getElementById('modalOrderTable').textContent = order.table.replace('Bàn ', '');
                document.getElementById('modalOrderStatus').textContent = order.status;
                document.getElementById('modalOrderTime').textContent = order.time;
                document.getElementById('modalOrderTotal').textContent = order.total;

                // Render danh sách món ăn
                const itemsHtml = order.items.map(i => `<li class="flex justify-between"><span>${i.name}</span> <span class="text-gray-900">x${i.qty}</span></li>`).join('');
                document.getElementById('modalOrderItems').innerHTML = itemsHtml;

                // Hiển thị
                detailModal.classList.remove('hidden');
                setTimeout(() => {
                    detailModal.classList.remove('opacity-0');
                    detailContent.classList.remove('scale-95');
                }, 10);
            }
        }
    });

    const closeModal = () => {
        if (!detailModal) return;
        detailModal.classList.add('opacity-0');
        if (detailContent) detailContent.classList.add('scale-95');
        setTimeout(() => detailModal.classList.add('hidden'), 300);
    };

    if (btnClose) btnClose.addEventListener('click', closeModal);
}