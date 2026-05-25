// ==========================================
// 1. CẤU HÌNH TỰ ĐỘNG & ICON
// ==========================================
const API_BASE = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
    ? 'http://localhost:8080'
    : `http://${window.location.hostname}:8080`;

const accIcons = {
    logo: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>`,
    income: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`,
    expense: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`,
    report: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`,
    archive: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
    logout: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>`,
    search: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,
    menu: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`,
    close: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`,
    trendUp: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>`,
    trendDown: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline></svg>`
};

// ==========================================
// 2. HÀM TẠO LAYOUT KẾ TOÁN CHUNG
// ==========================================
function getAccountantLayout(contentHTML, activeMenu = 'income') {
    const isIncome = activeMenu === 'income' ? 'bg-green-50 text-green-600 font-bold border-l-4 border-green-500 rounded-r-xl' : 'text-gray-500 hover:bg-gray-50 font-medium rounded-xl border-l-4 border-transparent';
    const isExpense = activeMenu === 'expense' ? 'bg-red-50 text-[#D93843] font-bold border-l-4 border-[#D93843] rounded-r-xl' : 'text-gray-500 hover:bg-gray-50 font-medium rounded-xl border-l-4 border-transparent';
    const isReport = activeMenu === 'report' ? 'bg-blue-50 text-blue-600 font-bold border-l-4 border-blue-500 rounded-r-xl' : 'text-gray-500 hover:bg-gray-50 font-medium rounded-xl border-l-4 border-transparent';
    const isArchive = activeMenu === 'archive' ? 'bg-orange-50 text-orange-600 font-bold border-l-4 border-orange-500 rounded-r-xl' : 'text-gray-500 hover:bg-gray-50 font-medium rounded-xl border-l-4 border-transparent';

    const titleMap = { 'income': 'Quản lý Thu', 'expense': 'Quản lý Chi', 'report': 'Báo cáo Tài chính', 'archive': 'Lưu trữ Hóa đơn' };

    return `
        <div class="flex h-screen bg-gray-50 font-sans">
            <aside class="hidden md:flex flex-col w-64 bg-white border-r border-gray-200 z-20">
                <div class="h-20 flex items-center px-6 gap-3">
                    <div class="bg-[#D93843] text-white p-2 rounded-xl shadow-sm">${accIcons.logo}</div>
                    <div class="font-extrabold text-lg text-gray-900">Red Cat Kế Toán</div>
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
                <main class="flex-1 overflow-x-hidden overflow-y-auto p-4 md:p-8 bg-gray-50/30">
                    ${contentHTML}
                </main>
            </div>
        </div>
    `;
}

// ==========================================
// 3. GIAO DIỆN CÁC TRANG CỤ THỂ
// ==========================================

function getIncomeContent() {
    return `
        <div class="max-w-6xl mx-auto pb-10 relative">
            <div class="mb-8">
                <h1 class="text-2xl md:text-3xl font-extrabold text-gray-900 mb-1">Quản lý Thu</h1>
                <p class="text-sm text-gray-500 font-medium">Tự động trích xuất từ doanh thu đơn hàng</p>
            </div>

            <div class="bg-[#EAF6F0] rounded-2xl p-6 shadow-sm border border-green-100 flex justify-between items-center mb-8 max-w-sm">
                <div>
                    <div class="text-[11px] text-green-700 font-bold uppercase tracking-wider mb-2">Tổng doanh thu bán hàng</div>
                    <div class="text-3xl font-extrabold text-green-600 mb-1" id="incTotalAmount">0đ</div>
                    <div class="text-xs text-green-600 font-medium" id="incTotalCount">0 giao dịch</div>
                </div>
                <div class="w-12 h-12 rounded-full bg-green-200 flex items-center justify-center text-green-700">
                    <span class="font-extrabold text-xl">$</span>
                </div>
            </div>

            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="bg-gray-50 text-[11px] text-gray-500 font-bold uppercase tracking-wider border-b border-gray-100">
                            <th class="py-4 px-6">Mã Đơn</th>
                            <th class="py-4 px-6">Danh mục</th>
                            <th class="py-4 px-6">Khách hàng & Bàn</th>
                            <th class="py-4 px-6 text-right">Số tiền</th>
                        </tr>
                    </thead>
                    <tbody id="incTableBody">
                        <tr><td colspan="4" class="text-center py-10 text-gray-400 font-medium"><i class="fa-solid fa-spinner fa-spin mr-2"></i> Đang đồng bộ CSDL...</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

function getExpenseContent() {
    return `
        <div class="max-w-6xl mx-auto pb-10 relative">
            <div class="mb-8">
                <h1 class="text-2xl md:text-3xl font-extrabold text-gray-900 mb-1">Quản lý Chi</h1>
                <p class="text-sm text-gray-500 font-medium">Tự động trích xuất từ chi phí nhập kho nguyên liệu</p>
            </div>

            <div class="bg-[#FFF5F5] rounded-2xl p-6 shadow-sm border border-red-100 flex justify-between items-center mb-8 max-w-sm">
                <div>
                    <div class="text-[11px] text-red-700 font-bold uppercase tracking-wider mb-2">Tổng chi phí nhập kho</div>
                    <div class="text-3xl font-extrabold text-[#D93843] mb-1" id="expTotalAmount">0đ</div>
                    <div class="text-xs text-red-600 font-medium" id="expTotalCount">0 giao dịch</div>
                </div>
                <div class="w-12 h-12 rounded-full bg-red-200 flex items-center justify-center text-[#D93843]">${accIcons.trendDown}</div>
            </div>

            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="bg-gray-50 text-[11px] text-gray-500 font-bold uppercase tracking-wider border-b border-gray-100">
                            <th class="py-4 px-6">Mã Phiếu</th>
                            <th class="py-4 px-6">Danh mục</th>
                            <th class="py-4 px-6">Nhà cung cấp (Mô tả)</th>
                            <th class="py-4 px-6 text-right">Số tiền</th>
                        </tr>
                    </thead>
                    <tbody id="expTableBody">
                        <tr><td colspan="4" class="text-center py-10 text-gray-400 font-medium"><i class="fa-solid fa-spinner fa-spin mr-2"></i> Đang đồng bộ CSDL...</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

function getReportContent() {
    return `
        <div class="max-w-6xl mx-auto pb-10">
            <div class="mb-8">
                <h1 class="text-2xl md:text-3xl font-extrabold text-gray-900 mb-1">Báo cáo Tài chính</h1>
                <p class="text-sm text-gray-500 font-medium">Tự động đối trừ Doanh thu và Chi phí nhập kho</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
                <div class="bg-[#EAF6F0] rounded-2xl p-6 shadow-sm border border-green-100 flex justify-between items-center relative overflow-hidden">
                    <div class="relative z-10">
                        <div class="text-[11px] text-green-700 font-bold uppercase tracking-wider mb-2">Tổng doanh thu</div>
                        <div class="text-3xl font-extrabold text-green-600 mb-1" id="repIncome">0đ</div>
                    </div>
                    <div class="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center text-green-600 relative z-10">${accIcons.trendUp}</div>
                </div>
                <div class="bg-[#FFF5F5] rounded-2xl p-6 shadow-sm border border-red-100 flex justify-between items-center relative overflow-hidden">
                    <div class="relative z-10">
                        <div class="text-[11px] text-red-700 font-bold uppercase tracking-wider mb-2">Tổng chi phí (Nhập kho)</div>
                        <div class="text-3xl font-extrabold text-[#D93843] mb-1" id="repExpense">0đ</div>
                    </div>
                    <div class="w-12 h-12 rounded-2xl bg-red-100 flex items-center justify-center text-[#D93843] relative z-10">${accIcons.trendDown}</div>
                </div>
                <div class="bg-gray-900 rounded-2xl p-6 shadow-md border border-gray-800 flex justify-between items-center relative overflow-hidden text-white">
                    <div class="relative z-10">
                        <div class="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-2">Lợi nhuận ròng</div>
                        <div class="text-3xl font-extrabold mb-1" id="repProfit">0đ</div>
                        <div class="text-xs text-gray-300 font-medium" id="repProfitPercent">Đang tính toán...</div>
                    </div>
                </div>
            </div>

            <div class="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-8">
                <h3 class="text-base font-extrabold text-gray-900 mb-6">Tóm tắt tài chính (P&L)</h3>
                <div class="overflow-x-auto">
                    <table class="w-full text-left">
                        <thead>
                            <tr class="text-[11px] text-gray-500 font-bold uppercase tracking-wider border-b border-gray-100">
                                <th class="pb-3">Chỉ tiêu</th>
                                <th class="pb-3 text-right">Số tiền</th>
                                <th class="pb-3 text-right">% Tỉ trọng</th>
                            </tr>
                        </thead>
                        <tbody class="text-sm">
                            <tr class="border-b border-gray-50"><td class="py-4 font-bold text-gray-900">Tổng doanh thu</td><td class="py-4 text-right font-bold text-green-600" id="tblTotalInc">0đ</td><td class="py-4 text-right text-gray-500 font-medium">100%</td></tr>
                            <tr class="border-b border-gray-50"><td class="py-4 pl-6 text-gray-600">— Doanh thu bán hàng (Đơn hàng)</td><td class="py-4 text-right text-green-500" id="tblSubInc">0đ</td><td class="py-4 text-right text-gray-400">100%</td></tr>

                            <tr class="border-b border-gray-50"><td class="py-4 font-bold text-gray-900 mt-4 block">Tổng chi phí</td><td class="py-4 text-right font-bold text-red-500" id="tblTotalExp">0đ</td><td class="py-4 text-right text-gray-500 font-medium" id="tblExpPercent">0%</td></tr>
                            <tr class="border-b border-gray-50"><td class="py-4 pl-6 text-gray-600">— Chi phí nhập nguyên liệu</td><td class="py-4 text-right text-red-400" id="tblSubExp">0đ</td><td class="py-4 text-right text-gray-400" id="tblSubExpPercent">0%</td></tr>

                            <tr><td class="py-5 font-extrabold text-gray-900 text-base">LỢI NHUẬN RÒNG</td><td class="py-5 text-right font-extrabold text-gray-900 text-base" id="tblProfit">0đ</td><td class="py-5 text-right font-bold text-gray-900" id="tblProfitPercent">0%</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

function getArchiveContent() {
    return `
        <div class="max-w-6xl mx-auto pb-10 relative">
            <div class="mb-8">
                <h1 class="text-2xl md:text-3xl font-extrabold text-gray-900 mb-1">Lưu trữ Hóa đơn bán hàng</h1>
                <p class="text-sm text-gray-500 font-medium">Lịch sử chi tiết các đơn hàng đã thanh toán (Giống trang Quản lý)</p>
            </div>

            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="bg-gray-50 text-[11px] text-gray-500 font-bold uppercase tracking-wider border-b border-gray-100">
                            <th class="py-4 px-6 w-32">Mã Đơn</th>
                            <th class="py-4 px-6 w-48">Vị trí & Khách</th>
                            <th class="py-4 px-6">Các món đã gọi</th>
                            <th class="py-4 px-6 text-right w-36">Thành tiền</th>
                        </tr>
                    </thead>
                    <tbody id="accArchiveTableBody">
                        <tr><td colspan="4" class="text-center py-10 text-gray-500"><i class="fa-solid fa-spinner fa-spin mr-2"></i> Đang quét sổ sách CSDL...</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

// ==========================================
// 4. HÀM EXPORT ROUTER
// ==========================================
export function renderAccountantIncome() { return getAccountantLayout(getIncomeContent(), 'income'); }
export function renderAccountantExpense() { return getAccountantLayout(getExpenseContent(), 'expense'); }
export function renderAccountantReport() { return getAccountantLayout(getReportContent(), 'report'); }
export function renderAccountantArchive() { return getAccountantLayout(getArchiveContent(), 'archive'); }

// ==========================================
// 5. FETCH API & LOGIC KẾ TOÁN
// ==========================================
export function initAccountantEvents() {
    const hash = window.location.hash;

    // --- LOGIC GIAO DIỆN MOBILE CHUNG ---
    const btnOpenMenu = document.getElementById('btnOpenAccMenu');
    const btnCloseMenu = document.getElementById('btnCloseAccMenu');
    const drawer = document.getElementById('accMobileDrawer');
    const overlay = document.getElementById('accMobileOverlay');

    const openMenu = () => { if(overlay) overlay.classList.remove('hidden'); if(drawer) setTimeout(() => drawer.classList.remove('-translate-x-full'), 10); };
    const closeMenu = () => { if(drawer) drawer.classList.add('-translate-x-full'); if(overlay) setTimeout(() => overlay.classList.add('hidden'), 300); };
    if(btnOpenMenu) btnOpenMenu.addEventListener('click', openMenu);
    if(btnCloseMenu) btnCloseMenu.addEventListener('click', closeMenu);
    if(overlay) overlay.addEventListener('click', closeMenu);

    const handleLogout = () => {
        if(confirm("Đăng xuất khỏi phân hệ Kế toán?")) {
            localStorage.clear();
            window.location.hash = '#/login';
        }
    };
    const btnLogout = document.getElementById('btnAccLogout');
    if(btnLogout) btnLogout.addEventListener('click', handleLogout);

    // --- FETCH DATA THEO TỪNG TRANG ---

    // 1. TRANG QUẢN LÝ THU (Kéo Đơn hàng)
    if (hash === '#/accountant/income' || hash === '#/accountant') {
        fetch(`${API_BASE}/api/warehouse/orders`)
            .then(res => res.json())
            .then(orders => {
                const completedOrders = (orders || []).filter(o => o.status === 'Hoàn thành').reverse();
                const totalIncome = completedOrders.reduce((sum, o) => sum + (o.totalAmount || 0), 0);

                const elTotalAmount = document.getElementById('incTotalAmount');
                const elTotalCount = document.getElementById('incTotalCount');
                const tbody = document.getElementById('incTableBody');

                if(elTotalAmount) elTotalAmount.textContent = totalIncome.toLocaleString('vi-VN') + 'đ';
                if(elTotalCount) elTotalCount.textContent = completedOrders.length + ' giao dịch';

                if(!tbody) return;
                if (completedOrders.length === 0) {
                    tbody.innerHTML = '<tr><td colspan="4" class="text-center py-10 text-gray-500">Chưa có doanh thu nào.</td></tr>';
                    return;
                }

                tbody.innerHTML = completedOrders.map(o => `
                    <tr class="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                        <td class="py-4 px-6 text-sm font-bold text-gray-900">${o.id}</td>
                        <td class="py-4 px-6"><span class="bg-green-50 text-green-600 px-3 py-1 rounded-full text-[11px] font-bold border border-green-100">Doanh thu bán hàng</span></td>
                        <td class="py-4 px-6 text-sm text-gray-700">
                            <span class="font-bold">${o.serverName || o.customerName || 'Khách vãng lai'}</span>
                            <span class="text-xs text-gray-400 block mt-0.5">${o.table && o.table.name ? o.table.name : (o.tableName || 'Mang đi')}</span>
                        </td>
                        <td class="py-4 px-6 text-sm font-extrabold text-green-600 text-right">+${(o.totalAmount || 0).toLocaleString('vi-VN')} đ</td>
                    </tr>
                `).join('');
            }).catch(e => console.error(e));
    }

    // 2. TRANG QUẢN LÝ CHI (Kéo Phiếu Nhập Kho)
    if (hash === '#/accountant/expense') {
        fetch(`${API_BASE}/api/warehouse/imports`)
            .then(res => res.json())
            .then(imports => {
                const importList = (imports || []).reverse();
                const totalExpense = importList.reduce((sum, i) => sum + (i.totalPrice || i.totalAmount || 0), 0);

                const elTotalAmount = document.getElementById('expTotalAmount');
                const elTotalCount = document.getElementById('expTotalCount');
                const tbody = document.getElementById('expTableBody');

                if(elTotalAmount) elTotalAmount.textContent = totalExpense.toLocaleString('vi-VN') + 'đ';
                if(elTotalCount) elTotalCount.textContent = importList.length + ' giao dịch';

                if(!tbody) return;
                if (importList.length === 0) {
                    tbody.innerHTML = '<tr><td colspan="4" class="text-center py-10 text-gray-500">Chưa có chi phí nhập kho nào.</td></tr>';
                    return;
                }

                tbody.innerHTML = importList.map(i => `
                    <tr class="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                        <td class="py-4 px-6 text-sm font-bold text-gray-900">${i.id || 'PNK-SYS'}</td>
                        <td class="py-4 px-6"><span class="bg-red-50 text-[#D93843] px-3 py-1 rounded-full text-[11px] font-bold border border-red-100">Nhập nguyên liệu kho</span></td>
                        <td class="py-4 px-6 text-sm text-gray-700">
                            <span class="font-bold">${i.supplier || 'Nhà cung cấp nội bộ'}</span>
                        </td>
                        <td class="py-4 px-6 text-sm font-extrabold text-[#D93843] text-right">-${(i.totalPrice || i.totalAmount || 0).toLocaleString('vi-VN')} đ</td>
                    </tr>
                `).join('');
            }).catch(e => console.error(e));
    }

    // 3. TRANG BÁO CÁO (Kéo cả Thu và Chi để đối trừ)
    if (hash === '#/accountant/report') {
        Promise.all([
            fetch(`${API_BASE}/api/warehouse/orders`).then(r => r.json()).catch(() => []),
            fetch(`${API_BASE}/api/warehouse/imports`).then(r => r.json()).catch(() => [])
        ]).then(([orders, imports]) => {
            const completedOrders = (orders || []).filter(o => o.status === 'Hoàn thành');
            const totalIncome = completedOrders.reduce((sum, o) => sum + (o.totalAmount || 0), 0);
            const totalExpense = (imports || []).reduce((sum, i) => sum + (i.totalPrice || i.totalAmount || 0), 0);

            const profit = totalIncome - totalExpense;
            let profitPercent = 0;
            if (totalIncome > 0) profitPercent = ((profit / totalIncome) * 100).toFixed(1);

            let expPercent = 0;
            if (totalIncome > 0) expPercent = ((totalExpense / totalIncome) * 100).toFixed(1);

            document.getElementById('repIncome').textContent = totalIncome.toLocaleString('vi-VN') + 'đ';
            document.getElementById('tblTotalInc').textContent = totalIncome.toLocaleString('vi-VN') + 'đ';
            document.getElementById('tblSubInc').textContent = totalIncome.toLocaleString('vi-VN') + 'đ';

            document.getElementById('repExpense').textContent = totalExpense.toLocaleString('vi-VN') + 'đ';
            document.getElementById('tblTotalExp').textContent = totalExpense.toLocaleString('vi-VN') + 'đ';
            document.getElementById('tblSubExp').textContent = totalExpense.toLocaleString('vi-VN') + 'đ';
            document.getElementById('tblExpPercent').textContent = expPercent + '%';
            document.getElementById('tblSubExpPercent').textContent = expPercent + '%';

            const elRepProfit = document.getElementById('repProfit');
            const elRepPercent = document.getElementById('repProfitPercent');
            const elTblProfit = document.getElementById('tblProfit');
            const elTblPercent = document.getElementById('tblProfitPercent');

            if (profit >= 0) {
                elRepProfit.textContent = '+' + profit.toLocaleString('vi-VN') + 'đ';
                elRepProfit.className = 'text-3xl font-extrabold mb-1 text-green-400';
                elRepPercent.textContent = `Lãi ${profitPercent}% so với doanh thu`;
                elTblProfit.textContent = '+' + profit.toLocaleString('vi-VN') + 'đ';
                elTblProfit.className = 'py-5 text-right font-extrabold text-green-600 text-base';
                elTblPercent.textContent = profitPercent + '%';
                elTblPercent.className = 'py-5 text-right font-bold text-green-600';
            } else {
                elRepProfit.textContent = profit.toLocaleString('vi-VN') + 'đ';
                elRepProfit.className = 'text-3xl font-extrabold mb-1 text-red-400';
                elRepPercent.textContent = `Lỗ ${profitPercent}% so với doanh thu`;
                elTblProfit.textContent = profit.toLocaleString('vi-VN') + 'đ';
                elTblProfit.className = 'py-5 text-right font-extrabold text-red-600 text-base';
                elTblPercent.textContent = profitPercent + '%';
                elTblPercent.className = 'py-5 text-right font-bold text-red-600';
            }
        });
    }

    // 4. TRANG LƯU TRỮ HÓA ĐƠN (Giống y hệt trang Doanh thu của Quản lý)
    if (hash === '#/accountant/archive') {
        fetch(`${API_BASE}/api/warehouse/orders`)
            .then(res => res.json())
            .then(orders => {
                const completedOrders = (orders || []).filter(o => o.status === 'Hoàn thành').reverse();
                const tbody = document.getElementById('accArchiveTableBody');

                if (!tbody) return;
                if (completedOrders.length === 0) {
                    tbody.innerHTML = '<tr><td colspan="4" class="text-center py-10 text-gray-500 font-medium">Chưa có hóa đơn bán hàng nào được lưu trữ.</td></tr>';
                    return;
                }

                tbody.innerHTML = completedOrders.map(o => {
                    const tableName = o.table && o.table.name ? o.table.name : (o.tableName || 'Mang đi');
                    const itemsList = o.items || o.orderItems || [];
                    const itemsStr = itemsList.map(i => `${i.productName || i.name} (x${i.quantity || 1})`).join(', ');

                    return `
                        <tr class="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                            <td class="py-4 px-6 font-bold text-gray-900 text-xs">${o.id}</td>
                            <td class="py-4 px-6">
                                <div class="font-bold text-gray-700">${tableName}</div>
                                <div class="text-xs text-gray-400 mt-0.5"><i class="fa-solid fa-user mr-1"></i>${o.serverName || o.customerName || 'Khách vãng lai'}</div>
                            </td>
                            <td class="py-4 px-6 text-xs text-gray-500 leading-relaxed font-medium">
                                <span class="bg-gray-100 px-2 py-1 rounded inline-block">${itemsStr}</span>
                            </td>
                            <td class="py-4 px-6 font-black text-green-600 text-right">${(o.totalAmount || 0).toLocaleString('vi-VN')} đ</td>
                        </tr>
                    `;
                }).join('');
            }).catch(e => console.error(e));
    }
}