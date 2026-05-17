// ==========================================
// 1. CÁC ICON SVG CHO TRANG NHÂN VIÊN
// ==========================================
const staffIcons = {
    logo: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>`,
    user: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`,
    search: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="gray" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,
    bell: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>`,
    logout: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>`,
    clock: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
    menu: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`,
    close: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
};

// ==========================================
// 2. DỮ LIỆU MẪU ĐƠN HÀNG CỦA NHÂN VIÊN
// ==========================================
let staffOrdersData = [
    { id: '#ORD001', customer: 'Nguyễn Văn A', table: 'Bàn 5', timeStr: '5 phút trước', price: '50.000 đ', items: ['2x Cà phê đen'], note: 'ít đường', status: 'processing' },
    { id: '#ORD002', customer: 'Huy Hoàng', table: 'Bàn 1', timeStr: '10 phút trước', price: '105.000 đ', items: ['3x Trà vải'], note: 'ít đá', status: 'processing' },
    { id: '#ORD008', customer: 'Diệu Linh', table: 'Bàn 2', timeStr: '4 phút trước', price: '50.000 đ', items: ['2x Mochi'], note: '', status: 'processing' },
    { id: '#ORD006', customer: 'Phan Hằng', table: 'Bàn 10', timeStr: '9 phút trước', price: '80.000 đ', items: ['2x Cà phê đen'], note: 'ít đường', status: 'processing' },
    { id: '#ORD009', customer: 'Lê Minh', table: 'Bàn 3', timeStr: '1 phút trước', price: '45.000 đ', items: ['1x Bạc xỉu'], note: 'nhiều sữa', status: 'new' },
    { id: '#ORD003', customer: 'Trần An', table: 'Mang đi', timeStr: '15 phút trước', price: '65.000 đ', items: ['1x Trà đào', '1x Croissant'], note: '', status: 'completed' },
];

// Lấy dữ liệu từ localStorage nếu có để mô phỏng CSDL thay đổi
if (localStorage.getItem('staffOrders')) {
    staffOrdersData = JSON.parse(localStorage.getItem('staffOrders'));
} else {
    // Lưu lần đầu
    localStorage.setItem('staffOrders', JSON.stringify(staffOrdersData));
}

// Cập nhật localStorage
function updateStorage() {
    localStorage.setItem('staffOrders', JSON.stringify(staffOrdersData));
}


// ==========================================
// 2. LAYOUT KHUNG CHUNG (BẾP & PHA CHẾ) + MOBILE DRAWER
// ==========================================
function getStaffLayout(contentHTML, activeMenu = 'processing') {
    const isNew = activeMenu === 'new' ? 'bg-red-50 text-[#D93843] font-bold' : 'text-gray-600 hover:bg-gray-50';
    const isProcessing = activeMenu === 'processing' ? 'bg-red-50 text-[#D93843] font-bold' : 'text-gray-600 hover:bg-gray-50';
    const isCompleted = activeMenu === 'completed' ? 'bg-red-50 text-[#D93843] font-bold' : 'text-gray-600 hover:bg-gray-50';

    return `
        <div class="flex h-screen bg-[#F6EFE9] font-sans">

            <aside class="hidden md:flex flex-col w-64 bg-white border-r border-gray-200 z-20">
                <div class="h-20 flex items-center px-6 gap-3 border-b border-gray-100">
                    <div class="bg-[#D93843] text-white p-2 rounded-xl shadow-md">${staffIcons.logo}</div>
                    <div>
                        <div class="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Red Cat Coffee</div>
                        <div class="text-gray-900 font-extrabold text-base">Quản lý bếp</div>
                    </div>
                </div>

                <div class="px-6 py-4 flex items-center gap-3 bg-gray-50/50 border-b border-gray-100">
                    <div class="w-8 h-8 rounded-full bg-[#5C3A21] text-white flex items-center justify-center">${staffIcons.user}</div>
                    <div>
                        <div class="text-xs font-bold text-gray-800">Nguyễn Văn A</div>
                        <div class="text-[10px] text-gray-400 font-medium">Nhân viên pha chế</div>
                    </div>
                </div>

                <nav class="flex-1 py-4 space-y-1">
                    <div class="text-[10px] text-gray-400 font-bold px-6 uppercase tracking-wider mb-2">Quản lý ca</div>
                    <a href="#/staff/new" class="flex items-center gap-3 px-6 py-3.5 transition-colors text-sm font-semibold ${isNew}">
                        Đơn mới
                    </a>
                    <a href="#/staff/processing" class="flex items-center gap-3 px-6 py-3.5 transition-colors text-sm font-semibold ${isProcessing}">
                        Đang chế biến
                    </a>
                    <a href="#/staff/completed" class="flex items-center gap-3 px-6 py-3.5 transition-colors text-sm font-semibold ${isCompleted}">
                        Quản lý Đơn hàng
                    </a>
                </nav>

                <div class="p-4 border-t border-gray-100">
                    <button id="btnStaffLogout" class="w-full flex items-center gap-3 text-gray-500 hover:text-red-600 px-4 py-3 rounded-xl text-sm font-bold hover:bg-red-50 transition-colors">
                        ${staffIcons.logout} Đăng xuất
                    </button>
                </div>
            </aside>

            <div id="staffMobileOverlay" class="fixed inset-0 bg-black bg-opacity-50 z-40 hidden transition-opacity"></div>
            <aside id="staffMobileDrawer" class="fixed top-0 left-0 w-[280px] h-full bg-white z-50 transform -translate-x-full transition-transform duration-300 flex flex-col md:hidden shadow-2xl">
                <div class="h-20 flex items-center justify-between px-6 border-b border-gray-100">
                    <div class="flex items-center text-[#D93843] font-extrabold text-lg gap-2">
                        <div class="bg-[#D93843] text-white p-1.5 rounded-lg shadow-sm">${staffIcons.logo}</div>
                        Red Cat
                    </div>
                    <button id="btnCloseStaffMenu" class="text-gray-400 hover:text-gray-800 p-1">${staffIcons.close}</button>
                </div>

                <div class="px-6 py-4 flex items-center gap-3 bg-gray-50/50 border-b border-gray-100">
                    <div class="w-10 h-10 rounded-full bg-[#5C3A21] text-white flex items-center justify-center">${staffIcons.user}</div>
                    <div>
                        <div class="text-sm font-bold text-gray-800">Nguyễn Văn A</div>
                        <div class="text-[11px] text-gray-500 font-medium">Ca Sáng</div>
                    </div>
                </div>

                <nav class="flex-1 py-4 space-y-2 overflow-y-auto">
                    <a href="#/staff/new" class="flex items-center gap-3 px-6 py-3 transition-colors text-base font-semibold ${isNew}">Đơn mới</a>
                    <a href="#/staff/processing" class="flex items-center gap-3 px-6 py-3 transition-colors text-base font-semibold ${isProcessing}">Đang chế biến</a>
                    <a href="#/staff/completed" class="flex items-center gap-3 px-6 py-3 transition-colors text-base font-semibold ${isCompleted}">Quản lý Đơn hàng</a>
                </nav>

                <div class="p-6 border-t border-gray-100">
                    <button id="btnStaffLogoutMobile" class="w-full flex items-center justify-center gap-3 bg-gray-100 text-gray-600 px-4 py-3.5 rounded-xl text-sm font-bold hover:bg-red-50 hover:text-red-600 transition-colors">
                        ${staffIcons.logout} Đăng xuất
                    </button>
                </div>
            </aside>

            <div class="flex-1 flex flex-col overflow-hidden">

                <header class="h-16 md:h-20 bg-white border-b border-gray-100 px-4 md:px-8 flex justify-between items-center shadow-sm sticky top-0 z-30">
                    <div class="flex items-center gap-3">
                        <button id="btnOpenStaffMenu" class="md:hidden text-gray-700 p-2 -ml-2 rounded-full hover:bg-gray-100">${staffIcons.menu}</button>
                        <div class="text-sm font-bold text-gray-800 hidden sm:block">
                            Red Cat Coffee <span class="mx-1 text-gray-400">›</span> <span class="text-gray-500 font-medium">${activeMenu === 'completed' ? 'Danh sách lưu trữ' : 'Hàng chờ chế biến'}</span>
                        </div>
                        <div class="sm:hidden font-extrabold text-gray-900 text-lg tracking-tight">
                            ${activeMenu === 'new' ? 'Đơn mới' : (activeMenu === 'processing' ? 'Chế biến' : 'Lịch sử đơn')}
                        </div>
                    </div>

                    <div class="flex items-center gap-4 md:gap-6">
                        <div class="relative hidden sm:block w-48 md:w-64">
                            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">${staffIcons.search}</div>
                            <input type="text" id="staffRealtimeSearch" class="bg-gray-50 text-gray-700 rounded-full pl-11 pr-4 py-2.5 w-full focus:outline-none focus:ring-2 focus:ring-[#D93843] text-xs font-medium border border-gray-100 transition-all shadow-inner" placeholder="Tìm số đơn, tên món, bàn...">
                        </div>

                        <div class="relative text-gray-500 hover:text-black cursor-pointer bg-gray-50 p-2 rounded-full">
                            ${staffIcons.bell}
                            <span class="absolute -top-1 -right-1 bg-[#D93843] text-white text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full border-2 border-white">3</span>
                        </div>
                    </div>
                </header>

                <main class="flex-1 overflow-x-hidden overflow-y-auto p-4 md:p-8 bg-[#F6EFE9]">
                    ${contentHTML}
                </main>
            </div>
        </div>
    `;
}

// ==========================================
// 3. RENDER NỘI DUNG THẺ ĐƠN HÀNG (CARDS)
// ==========================================
function getStaffOrdersContent(ordersData, activeMenu) {
    // Nếu app.js không fetch được mà ném về null/undefined, thì lấy từ mock data
    const safeData = (ordersData && ordersData.length > 0) ? ordersData : staffOrdersData.filter(o => o.status === activeMenu);

    // TÌM KIẾM TRÊN MOBILE (Luôn hiển thị ở đầu nội dung trên đt)
    const mobileSearchHTML = `
        <div class="sm:hidden mb-5 relative w-full">
            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">${staffIcons.search}</div>
            <input type="text" id="staffMobileSearch" class="bg-white text-gray-700 rounded-2xl pl-11 pr-4 py-3.5 w-full focus:outline-none focus:ring-2 focus:ring-[#D93843] text-sm font-medium border border-gray-100 shadow-sm" placeholder="Tìm kiếm đơn hàng...">
        </div>
    `;

    if (safeData.length === 0) {
        return mobileSearchHTML + `<div class="text-center mt-20 text-gray-400 font-bold">Không có đơn hàng nào cần xử lý.</div>`;
    }

    const cardsHTML = safeData.map(order => {
        // Dữ liệu giả lập cho items nếu bạn đang dùng JSON, nếu dùng SQL thì đổi field cho khớp
        const itemsList = order.items || [];
        const itemsHTML = itemsList.map(item => `
            <div class="flex justify-between items-center py-1.5 border-b border-gray-50 last:border-0">
                <span class="text-gray-700 text-sm font-medium">${item.name || item}</span>
                <span class="text-xs font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-md">${item.qty || '1'}</span>
            </div>
        `).join('');

        const noteHTML = order.note ? `<div class="text-xs text-orange-600 bg-orange-50 p-2.5 rounded-xl mt-3 font-medium">Ghi chú: ${order.note}</div>` : '';

        let actionButton = '';
        if (activeMenu === 'new') {
            actionButton = `<button class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-colors text-sm shadow-sm mt-4 btn-accept-order" data-id="${order.id}">Nhận đơn / Chế biến</button>`;
        } else if (activeMenu === 'processing') {
            actionButton = `<button class="w-full bg-[#E53E3E] hover:bg-red-700 text-white font-bold py-3 rounded-xl transition-colors text-sm shadow-sm mt-4 btn-complete-order" data-id="${order.id}">Hoàn Thành</button>`;
        } else if (activeMenu === 'completed') {
            actionButton = `<button class="w-full bg-white border border-gray-200 hover:bg-gray-50 text-gray-800 font-bold py-3 rounded-xl transition-colors text-sm shadow-sm mt-4 btn-invoice" data-id="${order.id}">In hóa đơn</button>`;
        }

        // data-search dùng để thanh tìm kiếm lọc realtime
        const searchStr = `${order.id || ''} ${order.tableName || order.table || ''} ${itemsList.map(i => i.name || i).join(' ')}`.toLowerCase();

        return `
            <div class="order-card bg-white p-5 md:p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between h-[360px] hover:shadow-md transition-all duration-200"
                 data-search="${searchStr}">
                <div>
                    <div class="flex justify-between items-start mb-2">
                        <div>
                            <span class="text-[11px] text-gray-400 font-bold block mb-0.5">${order.id}</span>
                            <h3 class="font-extrabold text-gray-900 text-lg leading-tight">${order.tableName || order.table}</h3>
                        </div>
                        <span class="text-[10px] text-gray-500 font-bold bg-[#F6EFE9] px-2.5 py-1 rounded-full flex items-center gap-1">
                            ${staffIcons.clock} ${order.timeStr || order.time || 'Vừa xong'}
                        </span>
                    </div>
                    <div class="text-[11px] text-gray-400 font-medium mb-3 pb-3 border-b border-gray-100">Khách hàng: <span class="text-gray-700 font-bold">${order.customerName || order.customer || 'Khách lẻ'}</span></div>

                    <div class="max-h-36 overflow-y-auto pr-1 custom-scrollbar">
                        ${itemsHTML}
                    </div>
                </div>

                <div>
                    ${noteHTML}
                    ${actionButton}
                </div>
            </div>
        `;
    }).join('');

    return `
        <div class="max-w-7xl mx-auto">
            ${mobileSearchHTML}
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                ${cardsHTML}
            </div>
        </div>
    `;
}

// ==========================================
// 4. CÁC HÀM XUẤT RA ROUTER (APP.JS)
// ==========================================
export function renderStaffNewOrders(data) {
    return getStaffLayout(getStaffOrdersContent(data, 'new'), 'new');
}

export function renderStaffProcessingOrders(data) {
    return getStaffLayout(getStaffOrdersContent(data, 'processing'), 'processing');
}

export function renderStaffCompletedOrders(data) {
    return getStaffLayout(getStaffOrdersContent(data, 'completed'), 'completed');
}

// ==========================================
// 5. QUẢN LÝ SỰ KIỆN & KIỂM TRA REALTIME CHUNG
// ==========================================
export function initStaffEvents() {
    // A. LOGIC ĐÓNG MỞ SIDEBAR TRÊN MOBILE
    const btnOpenStaffMenu = document.getElementById('btnOpenStaffMenu');
    const btnCloseStaffMenu = document.getElementById('btnCloseStaffMenu');
    const staffMobileDrawer = document.getElementById('staffMobileDrawer');
    const staffMobileOverlay = document.getElementById('staffMobileOverlay');

    const openStaffMenu = () => {
        if(staffMobileOverlay) staffMobileOverlay.classList.remove('hidden');
        if(staffMobileDrawer) setTimeout(() => staffMobileDrawer.classList.remove('-translate-x-full'), 10);
    };

    const closeStaffMenu = () => {
        if(staffMobileDrawer) staffMobileDrawer.classList.add('-translate-x-full');
        if(staffMobileOverlay) setTimeout(() => staffMobileOverlay.classList.add('hidden'), 300);
    };

    if(btnOpenStaffMenu) btnOpenStaffMenu.addEventListener('click', openStaffMenu);
    if(btnCloseStaffMenu) btnCloseStaffMenu.addEventListener('click', closeStaffMenu);
    if(staffMobileOverlay) staffMobileOverlay.addEventListener('click', closeStaffMenu);

    // B. LOGIC TÌM KIẾM REALTIME (Cho cả Mobile và Desktop)
    const handleSearch = (e) => {
        const keyword = e.target.value.toLowerCase().trim();
        const cards = document.querySelectorAll('.order-card');
        cards.forEach(card => {
            const searchContent = card.getAttribute('data-search');
            if (searchContent.includes(keyword)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    };

    const desktopSearch = document.getElementById('staffRealtimeSearch');
    const mobileSearch = document.getElementById('staffMobileSearch');
    if (desktopSearch) desktopSearch.addEventListener('input', handleSearch);
    if (mobileSearch) mobileSearch.addEventListener('input', handleSearch);

    // C. LOGIC KHI NHẤN "NHẬN ĐƠN"
    const acceptOrderHandler = (e) => {
        const btnAccept = e.target.closest('.btn-accept-order');
        if (btnAccept) {
            const orderId = btnAccept.getAttribute('data-id');

            if (confirm(`Bạn muốn nhận đơn ${orderId} và bắt đầu chế biến?`)) {
                // Gọi API backend (nếu có)
                fetch(`http://localhost:8080/api/warehouse/orders/${orderId}/processing`, {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' }
                })
                .then(res => {
                    if (res.ok) {
                        alert("Đã nhận đơn!");
                        window.location.hash = '#/staff/processing';
                        window.location.reload();
                    } else {
                         throw new Error("Lỗi kết nối CSDL, nhưng sẽ giả lập nhận đơn.");
                    }
                })
                .catch(err => {
                    console.error("Lỗi kết nối API:", err);
                    alert("Chuyển trạng thái sang chế biến (giả lập)");

                    // Cập nhật trạng thái giả lập
                    const orderIndex = staffOrdersData.findIndex(o => o.id === orderId);
                    if (orderIndex > -1) {
                        staffOrdersData[orderIndex].status = 'processing';
                        updateStorage();
                    }

                    // Force refresh
                    window.location.hash = '#/staff/processing';
                    // Trigger hash change to re-render
                    window.dispatchEvent(new HashChangeEvent("hashchange"));
                });
            }
        }
    };

    // Xóa event listener cũ để tránh duplicate
    document.removeEventListener('click', acceptOrderHandler);
    document.addEventListener('click', acceptOrderHandler);

    // C. LOGIC KHI NHẤN "HOÀN THÀNH" -> ĐƠN SẼ ĐƯỢC GỬI LƯU VÀO SQL BACKEND
    const completeOrderHandler = (e) => {
        const btnComplete = e.target.closest('.btn-complete-order');
        if (btnComplete) {
            const orderId = btnComplete.getAttribute('data-id');

            if (confirm(`Bạn xác nhận hoàn thành đơn ${orderId}? Đơn hàng sẽ được lưu vào hệ thống SQL và trừ nguyên liệu kho.`)) {
                fetch(`http://localhost:8080/api/warehouse/orders/${orderId}/complete`, {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' }
                })
                .then(res => {
                    if (res.ok) {
                        alert("Đơn hàng hoàn tất! Dữ liệu đã đồng bộ lưu vào cơ sở dữ liệu.");
                        window.location.reload();
                    } else {
                        throw new Error("API chưa sẵn sàng");
                    }
                })
                .catch(err => {
                    console.error("Lỗi kết nối API:", err);
                    alert("Đơn hàng hoàn tất! (Dữ liệu giả lập)");

                    // Cập nhật trạng thái giả lập
                    const orderIndex = staffOrdersData.findIndex(o => o.id === orderId);
                    if (orderIndex > -1) {
                        staffOrdersData[orderIndex].status = 'completed';
                        updateStorage();
                    }

                    window.location.hash = '#/staff/completed';
                    // Trigger hash change to re-render
                    window.dispatchEvent(new HashChangeEvent("hashchange"));
                });
            }
        }
    };

    // Xóa event listener cũ để tránh duplicate
    document.removeEventListener('click', completeOrderHandler);
    document.addEventListener('click', completeOrderHandler);

    // D. ĐĂNG XUẤT (Gắn chung cho cả nút ở Desktop và Mobile)
    const handleLogout = () => {
        if (confirm("Đăng xuất khỏi hệ thống ca làm việc?")) {
            localStorage.clear();
            window.location.hash = '#/login';
        }
    };
    const btnLogout = document.getElementById('btnStaffLogout');
    const btnLogoutMobile = document.getElementById('btnStaffLogoutMobile');
    if (btnLogout) btnLogout.addEventListener('click', handleLogout);
    if (btnLogoutMobile) btnLogoutMobile.addEventListener('click', handleLogout);
}