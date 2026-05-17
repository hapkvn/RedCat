// ==========================================
// 1. CÁC ICON DÙNG CHUNG CHO KẾ TOÁN
// ==========================================
const accIcons = {
    logo: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>`,
    income: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`,
    expense: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`,
    report: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`,
    archive: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
    logout: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>`,
    plus: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>`,
    search: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,
    edit: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>`,
    trash: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>`,
    menu: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`,
    close: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`,
    trendUp: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>`,
    trendDown: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline></svg>`,
    printer: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>`,
    document: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`
};

// ==========================================
// 2. DỮ LIỆU MẪU (THU, CHI, HÓA ĐƠN)
// ==========================================
const revenueData = [
    { date: '17/04/2026', category: 'Dịch vụ đi kèm', desc: 'Workshop pha cà phê thủ công (10 học viên)', amount: '+2.000.000đ', color: 'text-teal-600 bg-teal-50' },
    { date: '15/04/2026', category: 'Doanh thu bán hàng', desc: 'Doanh thu giữa tháng (ngày cao điểm)', amount: '+4.100.000đ', color: 'text-green-600 bg-green-50' },
];

const expenseData = [
    { date: '14/04/2026', category: 'Chi phí phát sinh', desc: 'Sửa chữa máy pha cà phê La Marzocco', amount: '-850.000đ', color: 'text-yellow-600 bg-yellow-50' },
    { date: '10/04/2026', category: 'Chi phí biến đổi', desc: 'Nhập nguyên liệu: đường, sữa tươi, trà, syrup', amount: '-1.200.000đ', color: 'text-orange-600 bg-orange-50' },
];

const invoiceData = [
    { id: 'HD-2604-005', type: 'Internet', typeClass: 'bg-green-100 text-green-600', supplier: 'Viettel Telecom', subDesc: 'Cước internet cáp quang tháng 4', amount: '350.000đ', date: '12/04/2026' },
    { id: 'HD-2604-004', type: 'Nước', typeClass: 'bg-blue-100 text-blue-500', supplier: 'Sawaco – Cấp nước Sài Gòn', subDesc: 'Tiền nước tháng 3/2026', amount: '450.000đ', date: '10/04/2026' },
    { id: 'HD-2604-003', type: 'Điện', typeClass: 'bg-yellow-100 text-yellow-600', supplier: 'EVN TP.HCM – Chi nhánh Q.1', subDesc: 'Tiền điện tháng 3/2026 - CS: 485 kWh', amount: '2.300.000đ', date: '08/04/2026' },
    { id: 'HD-2604-001', type: 'Hóa đơn thuế', typeClass: 'bg-red-100 text-red-500', supplier: 'Cục Thuế Quận 1 – TP.HCM', subDesc: 'Thuế GTGT tháng 3/2026', amount: '1.500.000đ', date: '05/04/2026' },
    { id: 'HD-2604-002', type: 'Bảng lương', typeClass: 'bg-teal-100 text-teal-500', supplier: 'Nội bộ – Red Cat Coffee', subDesc: 'Bảng lương 3 nhân viên tháng 4', amount: '12.000.000đ', date: '05/04/2026' },
    { id: 'HD-2604-006', type: 'Nguyên liệu', typeClass: 'bg-orange-100 text-orange-500', supplier: 'Công ty TNHH Cà Phê Việt Nam', subDesc: 'Hóa đơn mua cà phê nhân xanh 20kg', amount: '3.500.000đ', date: '02/04/2026' },
];

// ==========================================
// 3. HÀM TẠO LAYOUT KẾ TOÁN (CẬP NHẬT MÀU)
// ==========================================
function getAccountantLayout(contentHTML, activeMenu = 'income') {
    // Định nghĩa các class cho từng menu (Màu sắc theo Figma)
    const isIncome = activeMenu === 'income' ? 'bg-green-50 text-green-600 font-bold border-l-4 border-green-500 rounded-r-xl' : 'text-gray-500 hover:bg-gray-50 font-medium rounded-xl border-l-4 border-transparent';
    const isExpense = activeMenu === 'expense' ? 'bg-red-50 text-[#D93843] font-bold border-l-4 border-[#D93843] rounded-r-xl' : 'text-gray-500 hover:bg-gray-50 font-medium rounded-xl border-l-4 border-transparent';
    const isReport = activeMenu === 'report' ? 'bg-blue-50 text-blue-600 font-bold border-l-4 border-blue-500 rounded-r-xl' : 'text-gray-500 hover:bg-gray-50 font-medium rounded-xl border-l-4 border-transparent';
    const isArchive = activeMenu === 'archive' ? 'bg-orange-50 text-orange-600 font-bold border-l-4 border-orange-500 rounded-r-xl' : 'text-gray-500 hover:bg-gray-50 font-medium rounded-xl border-l-4 border-transparent';

    // Xác định tiêu đề hiển thị trên thanh top bar mobile
    const titleMap = { 'income': 'Quản lý Thu', 'expense': 'Quản lý Chi', 'report': 'Báo cáo Tài chính', 'archive': 'Lưu trữ Hóa đơn' };

    return `
        <div class="flex h-screen bg-gray-50 font-sans">
            <aside class="hidden md:flex flex-col w-64 bg-white border-r border-gray-200 z-20">
                <div class="h-20 flex items-center px-6 gap-3">
                    <div class="bg-[#D93843] text-white p-2 rounded-xl shadow-sm">${accIcons.logo}</div>
                    <div class="font-extrabold text-lg text-gray-900">Red Cat</div>
                </div>

                <nav class="flex-1 py-6 space-y-1 px-4">
                    <a href="#/accountant/income" class="flex items-center gap-3 px-4 py-3 transition-colors text-sm ${isIncome}">${accIcons.income} Quản lý Thu</a>
                    <a href="#/accountant/expense" class="flex items-center gap-3 px-4 py-3 transition-colors text-sm ${isExpense}">${accIcons.expense} Quản lý Chi</a>
                    <a href="#/accountant/report" class="flex items-center gap-3 px-4 py-3 transition-colors text-sm ${isReport}">${accIcons.report} Báo cáo Tài chính</a>
                    <a href="#/accountant/archive" class="flex items-center gap-3 px-4 py-3 transition-colors text-sm ${isArchive}">${accIcons.archive} Lưu trữ Hóa đơn</a>
                </nav>

                <div class="p-6 border-t border-gray-100">
                    <button id="btnAccLogout" class="flex items-center gap-3 text-gray-500 hover:text-red-600 font-bold text-sm w-full transition-colors hover:bg-red-50 p-3 rounded-xl">
                        ${accIcons.logout} Đăng xuất
                    </button>
                </div>
            </aside>

            <div id="accMobileOverlay" class="fixed inset-0 bg-black bg-opacity-50 z-40 hidden transition-opacity"></div>
            <aside id="accMobileDrawer" class="fixed top-0 left-0 w-[280px] h-full bg-white z-50 transform -translate-x-full transition-transform duration-300 flex flex-col md:hidden shadow-2xl">
                <div class="h-16 flex items-center justify-between px-6 border-b border-gray-100">
                    <div class="flex items-center gap-3">
                        <div class="bg-[#D93843] text-white p-1.5 rounded-lg shadow-sm">${accIcons.logo}</div>
                        <span class="font-extrabold text-lg text-gray-900">Kế Toán</span>
                    </div>
                    <button id="btnCloseAccMenu" class="text-gray-400 hover:text-gray-800">${accIcons.close}</button>
                </div>

                <nav class="flex-1 py-6 space-y-2 px-4 overflow-y-auto">
                    <a href="#/accountant/income" class="flex items-center gap-3 px-4 py-3.5 transition-colors text-base ${isIncome}">${accIcons.income} Quản lý Thu</a>
                    <a href="#/accountant/expense" class="flex items-center gap-3 px-4 py-3.5 transition-colors text-base ${isExpense}">${accIcons.expense} Quản lý Chi</a>
                    <a href="#/accountant/report" class="flex items-center gap-3 px-4 py-3.5 transition-colors text-base ${isReport}">${accIcons.report} Báo cáo</a>
                    <a href="#/accountant/archive" class="flex items-center gap-3 px-4 py-3.5 transition-colors text-base ${isArchive}">${accIcons.archive} Lưu trữ</a>
                </nav>
            </aside>

            <div class="flex-1 flex flex-col overflow-hidden bg-white shadow-[-10px_0_15px_-5px_rgba(0,0,0,0.05)] md:rounded-l-3xl z-10 relative">
                <div class="md:hidden flex items-center p-4 border-b border-gray-100 bg-white sticky top-0 z-30">
                    <button id="btnOpenAccMenu" class="text-gray-700 p-2 -ml-2 rounded-full hover:bg-gray-100">${accIcons.menu}</button>
                    <span class="font-bold text-gray-900 ml-2 text-lg">${titleMap[activeMenu]}</span>
                </div>
                <main class="flex-1 overflow-x-hidden overflow-y-auto p-4 md:p-8">
                    ${contentHTML}
                </main>
            </div>
        </div>
    `;
}

// ==========================================
// 4. CÁC HÀM RENDER NỘI DUNG TỪNG TRANG
// ==========================================

// --- 4.1 TRANG QUẢN LÝ THU --- (Giữ nguyên cấu trúc HTML, rút gọn code logic ở đây để tập trung)
function getIncomeContent() {
    const tableRows = revenueData.map(item => `
        <tr class="border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <td class="py-4 px-6 text-sm text-gray-500 font-medium">${item.date}</td>
            <td class="py-4 px-6"><span class="${item.color} px-3 py-1 rounded-full text-xs font-bold border border-current/10">${item.category}</span></td>
            <td class="py-4 px-6 text-sm text-gray-700 font-medium">${item.desc}</td>
            <td class="py-4 px-6 text-sm font-extrabold text-green-600 text-right">${item.amount}</td>
            <td class="py-4 px-6 text-right">
                <button class="text-gray-400 hover:text-gray-700 p-1 btn-edit-income" data-date="${item.date}" data-category="${item.category}" data-desc="${item.desc}" data-amount="${item.amount}">${accIcons.edit}</button>
                <button class="text-gray-400 hover:text-red-500 p-1 ml-1 btn-delete-income">${accIcons.trash}</button>
            </td>
        </tr>
    `).join('');

    const mobileCards = revenueData.map(item => `
        <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-4">
            <div class="flex justify-between items-start mb-3">
                <span class="${item.color} px-2.5 py-1 rounded-md text-[10px] font-bold border border-current/10">${item.category}</span>
                <span class="text-xs text-gray-400 font-medium flex items-center gap-1">${item.date}</span>
            </div>
            <div class="text-sm font-bold text-gray-800 mb-3 leading-snug">${item.desc}</div>
            <div class="flex justify-between items-end border-t border-gray-50 pt-3">
                <div class="flex gap-3">
                    <button class="text-gray-400 hover:text-gray-700 p-1.5 bg-gray-50 rounded-lg btn-edit-income"
                            data-date="${item.date}" data-category="${item.category}" data-desc="${item.desc}" data-amount="${item.amount}">
                        ${accIcons.edit}
                    </button>
                    <button class="text-gray-400 hover:text-red-500 p-1.5 bg-gray-50 rounded-lg btn-delete-income">
                        ${accIcons.trash}
                    </button>
                </div>
                <div class="text-lg font-extrabold text-green-600">${item.amount}</div>
            </div>
        </div>
    `).join('');

    return `
        <div class="max-w-6xl mx-auto pb-10 relative">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div class="hidden md:block">
                    <h1 class="text-2xl md:text-3xl font-extrabold text-gray-900 mb-1">Quản lý Thu</h1>
                    <p class="text-sm text-gray-500 font-medium">Theo dõi doanh thu và các khoản thu nhập</p>
                </div>
                <button id="btnAddIncome" class="w-full md:w-auto bg-[#16A34A] hover:bg-green-700 text-white px-5 py-2.5 rounded-xl font-bold flex items-center justify-center gap-2 shadow-sm transition-colors">
                    ${accIcons.plus} Thêm giao dịch
                </button>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div class="bg-[#EAF6F0] rounded-2xl p-5 md:p-6 shadow-sm border border-green-50 flex justify-between items-center md:col-span-1">
                    <div>
                        <div class="text-[11px] text-green-700 font-bold uppercase tracking-wider mb-2">Tổng doanh thu</div>
                        <div class="text-2xl md:text-3xl font-extrabold text-green-600 mb-1">15.980.000đ</div>
                        <div class="text-xs text-green-600 font-medium">8 giao dịch</div>
                    </div>
                    <div class="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                        <span class="font-extrabold text-xl">$</span>
                    </div>
                </div>

                <div class="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div class="flex flex-col justify-end">
                        <label class="block text-[11px] font-bold text-gray-500 mb-1.5">Lọc theo danh mục</label>
                        <select class="w-full border border-gray-200 bg-white text-gray-700 rounded-xl px-4 py-3.5 md:py-3 focus:ring-2 focus:ring-green-400 outline-none text-sm font-medium appearance-none cursor-pointer">
                            <option>Tất cả danh mục</option>
                            <option>Doanh thu bán hàng</option>
                            <option>Dịch vụ đi kèm</option>
                            <option>Thu nhập khác</option>
                        </select>
                    </div>
                    <div class="flex flex-col justify-end">
                        <label class="block text-[11px] font-bold text-gray-500 mb-1.5">Lọc theo ngày</label>
                        <input type="date" class="w-full border border-gray-200 bg-white text-gray-700 rounded-xl px-4 py-3.5 md:py-3 focus:ring-2 focus:ring-green-400 outline-none text-sm font-medium">
                    </div>
                </div>
            </div>

            <div class="flex gap-3 mb-6">
                <div class="relative flex-1">
                    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">${accIcons.search}</div>
                    <input type="text" class="w-full border border-gray-200 bg-white text-gray-700 rounded-xl pl-11 pr-4 py-3 focus:ring-2 focus:ring-green-400 outline-none text-sm font-medium shadow-sm" placeholder="Tìm kiếm mô tả...">
                </div>
                <select class="border border-gray-200 bg-white text-gray-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-400 outline-none text-sm font-medium appearance-none cursor-pointer shadow-sm">
                    <option>Ngày ▼</option>
                    <option>Số tiền</option>
                </select>
            </div>

            <div class="hidden md:block bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="bg-white text-[11px] text-gray-500 font-bold uppercase tracking-wider border-b border-gray-200">
                            <th class="py-4 px-6">Ngày</th>
                            <th class="py-4 px-6">Danh mục</th>
                            <th class="py-4 px-6">Mô tả</th>
                            <th class="py-4 px-6 text-right">Số tiền</th>
                            <th class="py-4 px-6 text-right">Thao tác</th>
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

            <div id="incomeModal" class="fixed inset-0 bg-[#222222] bg-opacity-90 z-50 flex items-center justify-center hidden opacity-0 transition-opacity duration-300">
                <div class="bg-white rounded-xl w-full max-w-[420px] mx-4 transform scale-95 transition-transform duration-300 shadow-2xl flex flex-col max-h-[90vh]" id="incomeModalContent">

                    <div class="flex justify-between items-center p-5 border-b border-gray-100">
                        <h2 id="incomeModalTitle" class="text-lg font-extrabold text-gray-900">Thêm giao dịch thu</h2>
                        <button id="btnCloseIncomeModal" class="text-gray-400 hover:text-gray-800 transition-colors">
                            ${accIcons.close}
                        </button>
                    </div>

                    <div class="p-5 overflow-y-auto custom-scrollbar">
                        <form id="incomeForm" class="space-y-4">
                            <div>
                                <label class="block text-xs font-bold text-gray-700 mb-1.5">Ngày giao dịch <span class="text-red-500">*</span></label>
                                <input type="date" id="incomeDate" required class="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-green-400 outline-none text-sm text-gray-700">
                            </div>

                            <div>
                                <label class="block text-xs font-bold text-gray-700 mb-1.5">Danh mục <span class="text-red-500">*</span></label>
                                <select id="incomeCategory" required class="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-green-400 outline-none text-sm text-gray-700 appearance-none bg-white">
                                    <option value="">-- Chọn danh mục --</option>
                                    <option value="Doanh thu bán hàng">Doanh thu bán hàng</option>
                                    <option value="Dịch vụ đi kèm">Dịch vụ đi kèm</option>
                                    <option value="Thu nhập khác">Thu nhập khác</option>
                                </select>
                            </div>

                            <div>
                                <label class="block text-xs font-bold text-gray-700 mb-1.5">Mô tả <span class="text-red-500">*</span></label>
                                <textarea id="incomeDesc" required rows="3" class="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-green-400 outline-none text-sm text-gray-700 resize-none" placeholder="Nhập mô tả giao dịch..."></textarea>
                            </div>

                            <div>
                                <label class="block text-xs font-bold text-gray-700 mb-1.5">Số tiền (đồng) <span class="text-red-500">*</span></label>
                                <input type="number" id="incomeAmount" required class="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-green-400 outline-none text-sm text-gray-700" placeholder="Ví dụ: 1500000">
                            </div>
                        </form>
                    </div>

                    <div class="p-5 border-t border-gray-100 flex gap-3">
                        <button id="btnCancelIncomeModal" class="flex-1 bg-white border border-gray-200 text-gray-700 font-bold py-2.5 rounded-lg hover:bg-gray-50 transition-colors text-sm">Hủy</button>
                        <button form="incomeForm" type="submit" id="btnSaveIncomeModal" class="flex-1 bg-[#16A34A] text-white font-bold py-2.5 rounded-lg hover:bg-green-700 transition-colors text-sm shadow-sm">Lưu</button>
                    </div>

                </div>
            </div>

            <div id="deleteModal" class="fixed inset-0 bg-[#222222] bg-opacity-90 z-50 flex items-center justify-center hidden opacity-0 transition-opacity duration-300">
                <div class="bg-white rounded-xl w-full max-w-[400px] p-6 mx-4 transform scale-95 transition-transform duration-300 shadow-2xl" id="deleteModalContent">
                    <div class="flex items-start gap-4 mb-6">
                        <div class="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0 border border-red-100 text-red-500">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                        </div>
                        <div>
                            <h3 class="text-base font-extrabold text-gray-900 mb-1">Xóa giao dịch</h3>
                            <p class="text-sm text-gray-500 leading-relaxed">Bạn có chắc muốn xóa giao dịch này? Hành động không thể hoàn tác.</p>
                        </div>
                    </div>
                    <div class="flex justify-end gap-3">
                        <button id="btnCancelDelete" class="bg-white border border-gray-200 text-gray-700 font-bold py-2 px-5 rounded-lg hover:bg-gray-50 transition-colors text-sm">Hủy</button>
                        <button id="btnConfirmDelete" class="bg-[#D93843] text-white font-bold py-2 px-5 rounded-lg hover:bg-red-700 transition-colors text-sm shadow-sm">Xóa</button>
                    </div>
                </div>
            </div>

        </div>
    `;
}

// --- 4.2 TRANG QUẢN LÝ CHI ---
function getExpenseContent() {
    const tableRows = expenseData.map(item => `
        <tr class="border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <td class="py-4 px-6 text-sm text-gray-500 font-medium">${item.date}</td>
            <td class="py-4 px-6"><span class="${item.color} px-3 py-1 rounded-full text-xs font-bold border border-current/10">${item.category}</span></td>
            <td class="py-4 px-6 text-sm text-gray-700 font-medium">${item.desc}</td>
            <td class="py-4 px-6 text-sm font-extrabold text-[#D93843] text-right">${item.amount}</td>
            <td class="py-4 px-6 text-right">
                <button class="text-gray-400 hover:text-gray-700 p-1 btn-edit-expense" data-date="${item.date}" data-category="${item.category}" data-desc="${item.desc}" data-amount="${item.amount}">${accIcons.edit}</button>
                <button class="text-gray-400 hover:text-red-500 p-1 ml-1 btn-delete-expense">${accIcons.trash}</button>
            </td>
        </tr>
    `).join('');

    return `
        <div class="max-w-6xl mx-auto pb-10 relative">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div class="hidden md:block">
                    <h1 class="text-2xl md:text-3xl font-extrabold text-gray-900 mb-1">Quản lý Chi</h1>
                    <p class="text-sm text-gray-500 font-medium">Theo dõi các khoản chi phí kinh doanh</p>
                </div>
                <button id="btnAddExpense" class="w-full md:w-auto bg-[#D93843] hover:bg-red-700 text-white px-5 py-2.5 rounded-xl font-bold flex items-center justify-center gap-2 shadow-sm transition-colors">
                    ${accIcons.plus} Thêm giao dịch
                </button>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div class="bg-[#FFF5F5] rounded-2xl p-5 md:p-6 shadow-sm border border-red-100 flex justify-between items-center">
                    <div>
                        <div class="text-[11px] text-red-700 font-bold uppercase tracking-wider mb-2">Tổng chi phí</div>
                        <div class="text-2xl md:text-3xl font-extrabold text-[#D93843] mb-1">25.550.000đ</div>
                        <div class="text-xs text-red-600 font-medium">5 giao dịch</div>
                    </div>
                    <div class="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-[#D93843]">${accIcons.trendDown}</div>
                </div>
                <div class="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div class="flex flex-col justify-end">
                        <label class="block text-[11px] font-bold text-gray-500 mb-1.5">Lọc theo danh mục</label>
                        <select class="w-full border border-gray-200 bg-white rounded-xl px-4 py-3 focus:ring-2 focus:ring-red-400 outline-none text-sm font-medium">
                            <option>Tất cả danh mục</option><option>Chi phí cố định</option><option>Chi phí biến đổi</option>
                        </select>
                    </div>
                    <div class="flex flex-col justify-end">
                        <label class="block text-[11px] font-bold text-gray-500 mb-1.5">Lọc theo ngày</label>
                        <input type="date" class="w-full border border-gray-200 bg-white rounded-xl px-4 py-3 focus:ring-2 focus:ring-red-400 outline-none text-sm font-medium text-gray-700">
                    </div>
                </div>
            </div>

            <div class="relative mb-6">
                <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">${accIcons.search}</div>
                <input type="text" class="w-full border border-gray-200 bg-white text-gray-700 rounded-xl pl-11 pr-4 py-3 focus:ring-2 focus:ring-red-400 outline-none text-sm shadow-sm" placeholder="Tìm kiếm mô tả...">
            </div>

            <div class="hidden md:block bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="bg-gray-50 text-[11px] text-gray-500 font-bold uppercase tracking-wider border-b border-gray-100">
                            <th class="py-4 px-6">Ngày</th><th class="py-4 px-6">Danh mục</th><th class="py-4 px-6">Mô tả</th><th class="py-4 px-6 text-right">Số tiền</th><th class="py-4 px-6 text-right">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>${tableRows}</tbody>
                </table>
            </div>

            <div id="expenseModal" class="fixed inset-0 bg-[#222222] bg-opacity-90 z-50 flex items-center justify-center hidden opacity-0 transition-opacity duration-300">
                <div class="bg-white rounded-xl w-full max-w-[420px] mx-4 transform scale-95 transition-transform duration-300 shadow-2xl flex flex-col max-h-[90vh]" id="expenseModalContent">
                    <div class="flex justify-between items-center p-5 border-b border-gray-100">
                        <h2 id="expenseModalTitle" class="text-lg font-extrabold text-gray-900">Thêm giao dịch chi</h2>
                        <button id="btnCloseExpenseModal" class="text-gray-400 hover:text-gray-800">${accIcons.close}</button>
                    </div>
                    <div class="p-5 overflow-y-auto">
                        <form id="expenseForm" class="space-y-4">
                            <div>
                                <label class="block text-xs font-bold text-gray-700 mb-1.5">Ngày giao dịch <span class="text-red-500">*</span></label>
                                <input type="date" id="expenseDate" required class="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-red-400 outline-none text-sm text-gray-700">
                            </div>
                            <div>
                                <label class="block text-xs font-bold text-gray-700 mb-1.5">Danh mục <span class="text-red-500">*</span></label>
                                <select id="expenseCategory" required class="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-red-400 outline-none text-sm text-gray-700">
                                    <option value="">-- Chọn danh mục --</option><option value="Chi phí phát sinh">Chi phí phát sinh</option><option value="Chi phí cố định">Chi phí cố định</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-xs font-bold text-gray-700 mb-1.5">Mô tả <span class="text-red-500">*</span></label>
                                <textarea id="expenseDesc" required rows="3" class="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-red-400 outline-none text-sm text-gray-700 resize-none"></textarea>
                            </div>
                            <div>
                                <label class="block text-xs font-bold text-gray-700 mb-1.5">Số tiền (đồng) <span class="text-red-500">*</span></label>
                                <input type="number" id="expenseAmount" required class="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-red-400 outline-none text-sm text-gray-700">
                            </div>
                        </form>
                    </div>
                    <div class="p-5 border-t border-gray-100 flex gap-3">
                        <button id="btnCancelExpenseModal" class="flex-1 bg-white border border-gray-200 font-bold py-2.5 rounded-lg hover:bg-gray-50 text-sm">Hủy</button>
                        <button form="expenseForm" type="submit" class="flex-1 bg-[#D93843] text-white font-bold py-2.5 rounded-lg hover:bg-red-700 text-sm shadow-sm">Lưu</button>
                    </div>
                </div>
            </div>

            <div id="deleteModal" class="fixed inset-0 bg-[#222222] bg-opacity-90 z-50 flex items-center justify-center hidden opacity-0 transition-opacity duration-300">
                <div class="bg-white rounded-xl w-full max-w-[400px] p-6 mx-4 transform scale-95 transition-transform duration-300 shadow-2xl" id="deleteModalContent">
                    <div class="flex items-start gap-4 mb-6">
                        <div class="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0 border border-red-100 text-red-500">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                        </div>
                        <div>
                            <h3 class="text-base font-extrabold text-gray-900 mb-1">Xóa giao dịch</h3>
                            <p class="text-sm text-gray-500">Bạn có chắc muốn xóa giao dịch này? Hành động không thể hoàn tác.</p>
                        </div>
                    </div>
                    <div class="flex justify-end gap-3">
                        <button id="btnCancelDelete" class="bg-white border border-gray-200 text-gray-700 font-bold py-2 px-5 rounded-lg hover:bg-gray-50 text-sm">Hủy</button>
                        <button id="btnConfirmDelete" class="bg-[#D93843] text-white font-bold py-2 px-5 rounded-lg hover:bg-red-700 text-sm shadow-sm">Xóa</button>
                    </div>
                </div>
            </div>

        </div>
    `;
}

// --- 4.3 TRANG BÁO CÁO TÀI CHÍNH ---
function getReportContent() {
    return `
        <div class="max-w-6xl mx-auto pb-10">
            <div class="flex justify-between items-start md:items-center mb-8 flex-col md:flex-row gap-4">
                <div>
                    <h1 class="text-2xl md:text-3xl font-extrabold text-gray-900 mb-1">Báo cáo Tài chính</h1>
                    <p class="text-sm text-gray-500 font-medium">Tổng hợp doanh thu, chi phí và lợi nhuận</p>
                </div>
                <div class="flex items-center gap-3 w-full md:w-auto">
                    <span class="text-xs font-bold text-gray-500">Tháng</span>
                    <input type="month" value="2026-04" class="flex-1 md:w-auto border border-gray-200 bg-white rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none text-sm font-medium text-gray-700 shadow-sm cursor-pointer">
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
                <div class="bg-[#EAF6F0] rounded-2xl p-6 shadow-sm border border-green-50 flex justify-between items-center relative overflow-hidden">
                    <div class="relative z-10">
                        <div class="text-[11px] text-green-700 font-bold uppercase tracking-wider mb-2">Tổng doanh thu</div>
                        <div class="text-3xl font-extrabold text-green-600 mb-1">15.980.000đ</div>
                        <div class="text-xs text-green-600 font-medium">8 giao dịch</div>
                    </div>
                    <div class="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center text-green-600 relative z-10">${accIcons.trendUp}</div>
                </div>
                <div class="bg-[#FFF5F5] rounded-2xl p-6 shadow-sm border border-red-50 flex justify-between items-center relative overflow-hidden">
                    <div class="relative z-10">
                        <div class="text-[11px] text-red-700 font-bold uppercase tracking-wider mb-2">Tổng chi phí</div>
                        <div class="text-3xl font-extrabold text-[#D93843] mb-1">25.550.000đ</div>
                        <div class="text-xs text-red-600 font-medium">5 giao dịch</div>
                    </div>
                    <div class="w-12 h-12 rounded-2xl bg-red-100 flex items-center justify-center text-[#D93843] relative z-10">${accIcons.trendDown}</div>
                </div>
                <div class="bg-red-50 rounded-2xl p-6 shadow-sm border border-red-100 flex justify-between items-center relative overflow-hidden">
                    <div class="relative z-10">
                        <div class="text-[11px] text-red-600 font-bold uppercase tracking-wider mb-2">Lợi nhuận ròng</div>
                        <div class="text-3xl font-extrabold text-red-600 mb-1">-9.570.000đ</div>
                        <div class="text-xs text-red-500 font-medium">-59.9% của doanh thu</div>
                    </div>
                    <div class="w-12 h-12 rounded-2xl bg-red-100 flex items-center justify-center text-red-500 relative z-10">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></svg>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
                <div class="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-8">
                    <h3 class="text-base font-extrabold text-gray-900 mb-6">Cơ cấu doanh thu</h3>
                    <div class="space-y-5">
                        <div>
                            <div class="flex justify-between items-baseline mb-2">
                                <span class="text-sm font-bold text-gray-700">Doanh thu bán hàng</span>
                                <div class="text-right"><span class="text-sm font-extrabold text-green-500 mr-2">11.600.000đ</span><span class="text-xs font-bold text-gray-400">72.6%</span></div>
                            </div>
                            <div class="w-full bg-gray-100 rounded-full h-2"><div class="bg-green-500 h-2 rounded-full" style="width: 72.6%"></div></div>
                        </div>
                        <div>
                            <div class="flex justify-between items-baseline mb-2">
                                <span class="text-sm font-bold text-gray-700">Dịch vụ đi kèm</span>
                                <div class="text-right"><span class="text-sm font-extrabold text-blue-500 mr-2">3.700.000đ</span><span class="text-xs font-bold text-gray-400">23.2%</span></div>
                            </div>
                            <div class="w-full bg-gray-100 rounded-full h-2"><div class="bg-blue-500 h-2 rounded-full" style="width: 23.2%"></div></div>
                        </div>
                        <div>
                            <div class="flex justify-between items-baseline mb-2">
                                <span class="text-sm font-bold text-gray-700">Thu nhập khác</span>
                                <div class="text-right"><span class="text-sm font-extrabold text-orange-500 mr-2">680.000đ</span><span class="text-xs font-bold text-gray-400">4.3%</span></div>
                            </div>
                            <div class="w-full bg-gray-100 rounded-full h-2"><div class="bg-orange-500 h-2 rounded-full" style="width: 4.3%"></div></div>
                        </div>
                    </div>
                </div>

                <div class="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-8">
                    <h3 class="text-base font-extrabold text-gray-900 mb-6">Cơ cấu chi phí</h3>
                    <div class="space-y-5">
                        <div>
                            <div class="flex justify-between items-baseline mb-2">
                                <span class="text-sm font-bold text-gray-700">Chi phí cố định</span>
                                <div class="text-right"><span class="text-sm font-extrabold text-red-500 mr-2">20.000.000đ</span><span class="text-xs font-bold text-gray-400">78.3%</span></div>
                            </div>
                            <div class="w-full bg-gray-100 rounded-full h-2"><div class="bg-red-500 h-2 rounded-full" style="width: 78.3%"></div></div>
                        </div>
                        <div>
                            <div class="flex justify-between items-baseline mb-2">
                                <span class="text-sm font-bold text-gray-700">Chi phí biến đổi</span>
                                <div class="text-right"><span class="text-sm font-extrabold text-orange-500 mr-2">4.700.000đ</span><span class="text-xs font-bold text-gray-400">18.4%</span></div>
                            </div>
                            <div class="w-full bg-gray-100 rounded-full h-2"><div class="bg-orange-500 h-2 rounded-full" style="width: 18.4%"></div></div>
                        </div>
                        <div>
                            <div class="flex justify-between items-baseline mb-2">
                                <span class="text-sm font-bold text-gray-700">Chi phí phát sinh</span>
                                <div class="text-right"><span class="text-sm font-extrabold text-yellow-500 mr-2">850.000đ</span><span class="text-xs font-bold text-gray-400">3.3%</span></div>
                            </div>
                            <div class="w-full bg-gray-100 rounded-full h-2"><div class="bg-yellow-500 h-2 rounded-full" style="width: 3.3%"></div></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-8">
                <h3 class="text-base font-extrabold text-gray-900 mb-6">Tóm tắt tài chính</h3>
                <div class="overflow-x-auto">
                    <table class="w-full text-left">
                        <thead>
                            <tr class="text-[11px] text-gray-500 font-bold uppercase tracking-wider border-b border-gray-100">
                                <th class="pb-3">Chỉ tiêu</th>
                                <th class="pb-3 text-right">Số tiền</th>
                                <th class="pb-3 text-right">% Doanh thu</th>
                            </tr>
                        </thead>
                        <tbody class="text-sm">
                            <tr class="border-b border-gray-50"><td class="py-4 font-bold text-gray-900">Tổng doanh thu</td><td class="py-4 text-right font-bold text-green-600">15.980.000đ</td><td class="py-4 text-right text-gray-500 font-medium">100%</td></tr>
                            <tr class="border-b border-gray-50"><td class="py-4 pl-6 text-gray-600">— Doanh thu bán hàng</td><td class="py-4 text-right text-green-500">11.600.000đ</td><td class="py-4 text-right text-gray-400">72.6%</td></tr>
                            <tr class="border-b border-gray-50"><td class="py-4 pl-6 text-gray-600">— Dịch vụ đi kèm</td><td class="py-4 text-right text-green-500">3.700.000đ</td><td class="py-4 text-right text-gray-400">23.2%</td></tr>
                            <tr class="border-b border-gray-50"><td class="py-4 pl-6 text-gray-600">— Thu nhập khác</td><td class="py-4 text-right text-green-500">680.000đ</td><td class="py-4 text-right text-gray-400">4.3%</td></tr>

                            <tr class="border-b border-gray-50"><td class="py-4 font-bold text-gray-900 mt-4 block">Tổng chi phí</td><td class="py-4 text-right font-bold text-red-500">25.550.000đ</td><td class="py-4 text-right text-gray-500 font-medium">159.9%</td></tr>
                            <tr class="border-b border-gray-50"><td class="py-4 pl-6 text-gray-600">— Chi phí cố định</td><td class="py-4 text-right text-red-400">20.000.000đ</td><td class="py-4 text-right text-gray-400">125.2%</td></tr>
                            <tr class="border-b border-gray-50"><td class="py-4 pl-6 text-gray-600">— Chi phí biến đổi</td><td class="py-4 text-right text-red-400">4.700.000đ</td><td class="py-4 text-right text-gray-400">29.4%</td></tr>
                            <tr class="border-b border-gray-50"><td class="py-4 pl-6 text-gray-600">— Chi phí phát sinh</td><td class="py-4 text-right text-red-400">850.000đ</td><td class="py-4 text-right text-gray-400">5.3%</td></tr>

                            <tr><td class="py-5 font-extrabold text-gray-900 text-base">Lợi nhuận ròng</td><td class="py-5 text-right font-extrabold text-red-600 text-base">-9.570.000đ</td><td class="py-5 text-right font-bold text-red-600">-59.9%</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

// --- 4.4 TRANG LƯU TRỮ HÓA ĐƠN ---
function getArchiveContent() {
    const tableRows = invoiceData.map(item => `
        <tr class="border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <td class="py-4 px-6 font-bold text-gray-700 text-sm">${item.id}</td>
            <td class="py-4 px-6"><span class="${item.typeClass} px-3 py-1 rounded-full text-[11px] font-bold">${item.type}</span></td>
            <td class="py-4 px-6">
                <div class="text-sm font-medium text-gray-800">${item.supplier}</div>
                <div class="text-[11px] text-gray-400 mt-0.5">${item.subDesc}</div>
            </td>
            <td class="py-4 px-6 text-sm font-extrabold text-blue-600">${item.amount}</td>
            <td class="py-4 px-6 text-sm text-gray-500 font-medium">${item.date}</td>
            <td class="py-4 px-6">
                <button class="text-gray-400 hover:text-blue-500 p-1.5 transition-colors" title="In/Tải hóa đơn">${accIcons.printer}</button>
                <button class="text-gray-400 hover:text-red-500 p-1.5 transition-colors ml-1 btn-delete-invoice" title="Xóa hóa đơn">${accIcons.trash}</button>
            </td>
        </tr>
    `).join('');

    return `
        <div class="max-w-6xl mx-auto pb-10 relative">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div class="hidden md:block">
                    <h1 class="text-2xl md:text-3xl font-extrabold text-gray-900 mb-1">Lưu trữ Hóa đơn</h1>
                    <p class="text-sm text-gray-500 font-medium">Quản lý và theo dõi các hóa đơn kinh doanh</p>
                </div>
                <button id="btnAddInvoice" class="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-bold flex items-center justify-center gap-2 shadow-sm transition-colors">
                    ${accIcons.plus} Thêm hóa đơn
                </button>
            </div>

            <div class="bg-[#F0F5FF] rounded-2xl p-6 shadow-sm border border-blue-50 flex justify-between items-center mb-8 relative overflow-hidden">
                <div class="relative z-10">
                    <div class="text-[11px] text-blue-700 font-bold uppercase tracking-wider mb-2">Tổng giá trị hóa đơn</div>
                    <div class="text-3xl font-extrabold text-blue-600 mb-1">20.100.000đ</div>
                </div>
                <div class="relative z-10 text-right">
                    <div class="text-[11px] text-blue-600 font-bold uppercase tracking-wider mb-2">Số lượng</div>
                    <div class="text-3xl font-extrabold text-blue-500 flex items-center justify-end gap-3">
                        6
                        <div class="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-500">
                            ${accIcons.document}
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex flex-col md:flex-row gap-3 mb-6">
                <div class="relative flex-1">
                    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">${accIcons.search}</div>
                    <input type="text" class="w-full border border-gray-200 bg-white text-gray-700 rounded-xl pl-11 pr-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none text-sm font-medium shadow-sm" placeholder="Tìm kiếm theo số HĐ hoặc nhà cung cấp...">
                </div>
                <select class="w-full md:w-auto min-w-[200px] border border-gray-200 bg-white text-gray-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none text-sm font-medium appearance-none cursor-pointer shadow-sm">
                    <option>Tất cả loại hóa đơn</option>
                    <option>Internet</option>
                    <option>Nước / Điện</option>
                    <option>Nguyên liệu</option>
                </select>
            </div>

            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse min-w-[800px]">
                        <thead>
                            <tr class="bg-white text-[11px] text-gray-500 font-bold uppercase tracking-wider border-b border-gray-200">
                                <th class="py-4 px-6">Số HĐ</th>
                                <th class="py-4 px-6">Loại</th>
                                <th class="py-4 px-6">Nhà cung cấp</th>
                                <th class="py-4 px-6">Số tiền</th>
                                <th class="py-4 px-6">Ngày</th>
                                <th class="py-4 px-6">Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>${tableRows}</tbody>
                    </table>
                </div>
            </div>

            <div id="invoiceModal" class="fixed inset-0 bg-[#222222] bg-opacity-90 z-50 flex items-center justify-center hidden opacity-0 transition-opacity duration-300">
                <div class="bg-white rounded-xl w-full max-w-[460px] mx-4 transform scale-95 transition-transform duration-300 shadow-2xl flex flex-col max-h-[90vh]" id="invoiceModalContent">
                    <div class="flex justify-between items-center p-5 border-b border-gray-100">
                        <h2 class="text-lg font-extrabold text-gray-900">Thêm hóa đơn</h2>
                        <button id="btnCloseInvoiceModal" class="text-gray-400 hover:text-gray-800">${accIcons.close}</button>
                    </div>
                    <div class="p-5 overflow-y-auto custom-scrollbar">
                        <form id="invoiceForm" class="space-y-4">
                            <div>
                                <label class="block text-xs font-bold text-gray-700 mb-1.5">Số hóa đơn <span class="text-red-500">*</span></label>
                                <input type="text" required class="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-400 outline-none text-sm text-gray-700" placeholder="Ví dụ: HD-2604-007">
                            </div>
                            <div>
                                <label class="block text-xs font-bold text-gray-700 mb-1.5">Loại hóa đơn <span class="text-red-500">*</span></label>
                                <select required class="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-400 outline-none text-sm text-gray-700 appearance-none bg-white">
                                    <option value="">-- Chọn loại --</option>
                                    <option>Internet</option><option>Nước</option><option>Điện</option>
                                    <option>Hóa đơn thuế</option><option>Bảng lương</option><option>Nguyên liệu</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-xs font-bold text-gray-700 mb-1.5">Nhà cung cấp <span class="text-red-500">*</span></label>
                                <input type="text" required class="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-400 outline-none text-sm text-gray-700" placeholder="Tên nhà cung cấp hoặc đơn vị">
                            </div>
                            <div>
                                <label class="block text-xs font-bold text-gray-700 mb-1.5">Số tiền (đồng) <span class="text-red-500">*</span></label>
                                <input type="number" required class="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-400 outline-none text-sm text-gray-700" placeholder="Ví dụ: 2300000">
                            </div>
                            <div>
                                <label class="block text-xs font-bold text-gray-700 mb-1.5">Ngày hóa đơn <span class="text-red-500">*</span></label>
                                <input type="date" required class="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-400 outline-none text-sm text-gray-700">
                            </div>
                            <div>
                                <label class="block text-xs font-bold text-gray-700 mb-1.5">Ghi chú</label>
                                <textarea rows="2" class="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-400 outline-none text-sm text-gray-700 resize-none" placeholder="Ghi chú thêm (không bắt buộc)..."></textarea>
                            </div>
                        </form>
                    </div>
                    <div class="p-5 border-t border-gray-100 flex gap-3">
                        <button id="btnCancelInvoiceModal" class="flex-1 bg-white border border-gray-200 font-bold py-2.5 rounded-lg hover:bg-gray-50 text-sm text-gray-700">Hủy</button>
                        <button form="invoiceForm" type="submit" class="flex-1 bg-blue-600 text-white font-bold py-2.5 rounded-lg hover:bg-blue-700 text-sm shadow-sm transition-colors">Lưu</button>
                    </div>
                </div>
            </div>

            <div id="deleteInvoiceModal" class="fixed inset-0 bg-[#222222] bg-opacity-90 z-50 flex items-center justify-center hidden opacity-0 transition-opacity duration-300">
                <div class="bg-white rounded-xl w-full max-w-[400px] p-6 mx-4 transform scale-95 transition-transform duration-300 shadow-2xl" id="deleteInvoiceContent">
                    <div class="flex items-start gap-4 mb-6">
                        <div class="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0 border border-red-100 text-red-500">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                        </div>
                        <div>
                            <h3 class="text-base font-extrabold text-gray-900 mb-1">Xóa hóa đơn</h3>
                            <p class="text-sm text-gray-500 leading-relaxed">Bạn có chắc muốn xóa hóa đơn này? Hành động không thể hoàn tác.</p>
                        </div>
                    </div>
                    <div class="flex justify-end gap-3">
                        <button id="btnCancelDeleteInv" class="bg-white border border-gray-200 text-gray-700 font-bold py-2 px-5 rounded-lg hover:bg-gray-50 transition-colors text-sm">Hủy</button>
                        <button id="btnConfirmDeleteInv" class="bg-[#D93843] text-white font-bold py-2 px-5 rounded-lg hover:bg-red-700 transition-colors text-sm shadow-sm">Xóa</button>
                    </div>
                </div>
            </div>

        </div>
    `;
}

// ==========================================
// 5. HÀM EXPORT CHO ROUTER
// ==========================================
// ==========================================
// 5. HÀM EXPORT CHO ROUTER
// ==========================================
export function renderAccountantIncome() { return getAccountantLayout(getIncomeContent(), 'income'); }
export function renderAccountantExpense() { return getAccountantLayout(getExpenseContent(), 'expense'); }
export function renderAccountantReport() { return getAccountantLayout(getReportContent(), 'report'); }
export function renderAccountantArchive() { return getAccountantLayout(getArchiveContent(), 'archive'); }

export function initAccountantEvents() {
    // 1. Logic Mở/Đóng Menu Mobile
    const btnOpenMenu = document.getElementById('btnOpenAccMenu');
    const btnCloseMenu = document.getElementById('btnCloseAccMenu');
    const drawer = document.getElementById('accMobileDrawer');
    const overlay = document.getElementById('accMobileOverlay');

    const openMenu = () => { if(overlay) overlay.classList.remove('hidden'); if(drawer) setTimeout(() => drawer.classList.remove('-translate-x-full'), 10); };
    const closeMenu = () => { if(drawer) drawer.classList.add('-translate-x-full'); if(overlay) setTimeout(() => overlay.classList.add('hidden'), 300); };
    if(btnOpenMenu) btnOpenMenu.addEventListener('click', openMenu);
    if(btnCloseMenu) btnCloseMenu.addEventListener('click', closeMenu);
    if(overlay) overlay.addEventListener('click', closeMenu);

    // 2. Helper Đóng/Mở Modal Chung
    const toggleModal = (modalId, contentId, show) => {
        const modal = document.getElementById(modalId);
        const content = document.getElementById(contentId);
        if (!modal) return;
        if (show) {
            modal.classList.remove('hidden');
            setTimeout(() => { modal.classList.remove('opacity-0'); if(content) content.classList.remove('scale-95'); }, 10);
        } else {
            modal.classList.add('opacity-0');
            if(content) content.classList.add('scale-95');
            setTimeout(() => modal.classList.add('hidden'), 300);
        }
    };

    // 3. XỬ LÝ SỰ KIỆN CLICK CHUNG CHO TOÀN BỘ CÁC TRANG
    document.addEventListener('click', (e) => {
        // ================== LOGIC QUẢN LÝ THU ==================
        if (e.target.closest('#btnAddIncome')) {
            const title = document.getElementById('incomeModalTitle');
            const form = document.getElementById('incomeForm');
            if (title) title.textContent = "Thêm giao dịch thu";
            if (form) form.reset();
            toggleModal('incomeModal', 'incomeModalContent', true);
        }
        const btnEditInc = e.target.closest('.btn-edit-income');
        if (btnEditInc) {
            const title = document.getElementById('incomeModalTitle');
            if (title) title.textContent = "Sửa giao dịch thu";
            const parts = btnEditInc.getAttribute('data-date').split('/');
            document.getElementById('incomeDate').value = parts.length === 3 ? `${parts[2]}-${parts[1]}-${parts[0]}` : "";
            document.getElementById('incomeCategory').value = btnEditInc.getAttribute('data-category');
            document.getElementById('incomeDesc').value = btnEditInc.getAttribute('data-desc');
            document.getElementById('incomeAmount').value = btnEditInc.getAttribute('data-amount').replace(/[^0-9]/g, '');
            toggleModal('incomeModal', 'incomeModalContent', true);
        }
        if (e.target.closest('#btnCloseIncomeModal') || e.target.closest('#btnCancelIncomeModal')) {
            toggleModal('incomeModal', 'incomeModalContent', false);
        }

        // ================== LOGIC QUẢN LÝ CHI ==================
        if (e.target.closest('#btnAddExpense')) {
            const title = document.getElementById('expenseModalTitle');
            const form = document.getElementById('expenseForm');
            if (title) title.textContent = "Thêm giao dịch chi";
            if (form) form.reset();
            toggleModal('expenseModal', 'expenseModalContent', true);
        }
        const btnEditExp = e.target.closest('.btn-edit-expense');
        if (btnEditExp) {
            const title = document.getElementById('expenseModalTitle');
            if (title) title.textContent = "Sửa giao dịch chi";
            const parts = btnEditExp.getAttribute('data-date').split('/');
            document.getElementById('expenseDate').value = parts.length === 3 ? `${parts[2]}-${parts[1]}-${parts[0]}` : "";
            document.getElementById('expenseCategory').value = btnEditExp.getAttribute('data-category');
            document.getElementById('expenseDesc').value = btnEditExp.getAttribute('data-desc');
            document.getElementById('expenseAmount').value = btnEditExp.getAttribute('data-amount').replace(/[^0-9]/g, '');
            toggleModal('expenseModal', 'expenseModalContent', true);
        }
        if (e.target.closest('#btnCloseExpenseModal') || e.target.closest('#btnCancelExpenseModal')) {
            toggleModal('expenseModal', 'expenseModalContent', false);
        }

        // ================== LOGIC XÓA THU / CHI ==================
        if (e.target.closest('.btn-delete-income') || e.target.closest('.btn-delete-expense')) {
            toggleModal('deleteModal', 'deleteModalContent', true);
        }
        if (e.target.closest('#btnCancelDelete')) {
            toggleModal('deleteModal', 'deleteModalContent', false);
        }
        if (e.target.closest('#btnConfirmDelete')) {
            alert("Đã xóa giao dịch!");
            toggleModal('deleteModal', 'deleteModalContent', false);
        }

        // ================== LOGIC LƯU TRỮ HÓA ĐƠN ==================
        if (e.target.closest('#btnAddInvoice')) {
            const form = document.getElementById('invoiceForm');
            if(form) form.reset();
            toggleModal('invoiceModal', 'invoiceModalContent', true);
        }
        if (e.target.closest('#btnCloseInvoiceModal') || e.target.closest('#btnCancelInvoiceModal')) {
            toggleModal('invoiceModal', 'invoiceModalContent', false);
        }
        if (e.target.closest('.btn-delete-invoice')) {
            toggleModal('deleteInvoiceModal', 'deleteInvoiceContent', true);
        }
        if (e.target.closest('#btnCancelDeleteInv')) {
            toggleModal('deleteInvoiceModal', 'deleteInvoiceContent', false);
        }
        if (e.target.closest('#btnConfirmDeleteInv')) {
            alert("Đã xóa hóa đơn thành công!");
            toggleModal('deleteInvoiceModal', 'deleteInvoiceContent', false);
        }
    });

    // 4. XỬ LÝ SUBMIT CÁC FORM (LƯU DỮ LIỆU)
    const incomeForm = document.getElementById('incomeForm');
    if (incomeForm) {
        incomeForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert("Đã lưu khoản Thu!");
            toggleModal('incomeModal', 'incomeModalContent', false);
        });
    }

    const expenseForm = document.getElementById('expenseForm');
    if (expenseForm) {
        expenseForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert("Đã lưu khoản Chi!");
            toggleModal('expenseModal', 'expenseModalContent', false);
        });
    }

    const invoiceForm = document.getElementById('invoiceForm');
    if (invoiceForm) {
        invoiceForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert("Đã lưu hóa đơn!");
            toggleModal('invoiceModal', 'invoiceModalContent', false);
        });
    }

    // 5. Đăng xuất
    const handleLogout = () => {
        if(confirm("Đăng xuất khỏi phân hệ Kế toán?")) {
            localStorage.clear();
            window.location.hash = '#/login';
        }
    };
    const btnLogoutDesktop = document.getElementById('btnAccLogout');
    const btnLogoutMobile = document.getElementById('btnAccLogoutMobile');
    if(btnLogoutDesktop) btnLogoutDesktop.addEventListener('click', handleLogout);
    if(btnLogoutMobile) btnLogoutMobile.addEventListener('click', handleLogout);
}