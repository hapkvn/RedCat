// ==========================================
// 1. CẤU HÌNH TỰ ĐỘNG NHẬN DIỆN IP MÁY CHỦ
// ==========================================
const API_BASE = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
    ? 'http://localhost:8080'
    : `http://${window.location.hostname}:8080`;

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

// Dữ liệu giả lập chỉ dùng khi KHÔNG KẾT NỐI ĐƯỢC BACKEND
let staffOrdersData = [];

// ==========================================
// 2. LAYOUT KHUNG CHUNG (BẾP & PHA CHẾ)
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
                        <div class="text-xs font-bold text-gray-800">Nhân Viên Bếp</div>
                        <div class="text-[10px] text-gray-400 font-medium">Ca làm việc hiện tại</div>
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
            </aside>

            <div class="flex-1 flex flex-col overflow-hidden">
                <header class="h-16 md:h-20 bg-white border-b border-gray-100 px-4 md:px-8 flex justify-between items-center shadow-sm sticky top-0 z-30">
                    <div class="flex items-center gap-3">
                        <div class="text-sm font-bold text-gray-800">
                            Red Cat Coffee <span class="mx-1 text-gray-400">›</span> <span class="text-[#E33539] font-medium">${activeMenu === 'completed' ? 'Danh sách lưu trữ' : 'Hàng chờ chế biến'}</span>
                        </div>
                    </div>

                    <div class="flex items-center gap-4 md:gap-6">
                        <div class="relative hidden sm:block w-48 md:w-64">
                            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">${staffIcons.search}</div>
                            <input type="text" id="staffRealtimeSearch" class="bg-gray-50 text-gray-700 rounded-full pl-11 pr-4 py-2.5 w-full focus:outline-none focus:ring-2 focus:ring-[#D93843] text-xs font-medium border border-gray-100" placeholder="Tìm số đơn, tên món...">
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
    // ĐẢM BẢO TIN TƯỞNG HOÀN TOÀN VÀO DỮ LIỆU TỪ JAVA (Kể cả mảng rỗng [])
    let safeData = [];
    if (Array.isArray(ordersData)) {
        safeData = ordersData;
    } else {
        safeData = staffOrdersData; // Chỉ lấy mock data nếu fetch API bị lỗi hoàn toàn (undefined)
    }

    if (safeData.length === 0) {
        return `
        <div class="flex flex-col items-center justify-center pt-24 text-gray-400">
            <i class="fa-solid fa-mug-hot text-6xl mb-4 opacity-30"></i>
            <p class="font-bold text-lg">Không có đơn hàng nào ở mục này.</p>
        </div>`;
    }

    const cardsHTML = safeData.map(order => {

        // 1. FIX LỖI TABLE NULL VÀ [OBJECT OBJECT]
        let tableName = "Mang đi / Khách lẻ";
        if (order.table && order.table.name) {
            tableName = order.table.name;
        } else if (order.tableName) {
            tableName = order.tableName;
        }

        // 2. FIX TÊN KHÁCH HÀNG
        const customerName = order.serverName || order.customerName || order.customer || 'Khách vãng lai';

        // 3. FIX LỖI ITEMS LÀ [OBJECT OBJECT]
        const itemsList = order.items || order.orderItems || [];
        const itemsHTML = itemsList.map(item => {
            // Chọc đúng vào thuộc tính tên và số lượng của Object Java trả về
            const itemName = item.productName || item.name || 'Món ăn không rõ';
            const itemQty = item.quantity || item.qty || 1;

            return `
            <div class="flex justify-between items-center py-2 border-b border-gray-100 border-dashed last:border-0">
                <span class="text-gray-700 text-sm font-medium"><i class="fa-solid fa-caret-right text-gray-300 text-[10px] mr-1"></i> ${itemName}</span>
                <span class="text-xs font-bold text-[#E33539] bg-red-50 px-2.5 py-0.5 rounded-lg border border-red-100">x${itemQty}</span>
            </div>`;
        }).join('');

        // TẠO NÚT BẤM THEO TRẠNG THÁI
        let actionButton = '';
        if (activeMenu === 'new') {
            actionButton = `<button class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition-colors text-sm shadow-sm mt-4 btn-accept-order" data-id="${order.id}">Nhận đơn / Chế biến</button>`;
        } else if (activeMenu === 'processing') {
            actionButton = `<button class="w-full bg-[#16A34A] hover:bg-green-700 text-white font-bold py-3.5 rounded-xl transition-colors text-sm shadow-sm mt-4 btn-complete-order" data-id="${order.id}">Hoàn Thành (Trả món)</button>`;
        } else if (activeMenu === 'completed') {
            actionButton = `<button class="w-full bg-white border border-gray-200 hover:bg-gray-50 text-gray-800 font-bold py-3.5 rounded-xl transition-colors text-sm shadow-sm mt-4">Đã chốt hóa đơn</button>`;
        }

        const searchStr = `${order.id || ''} ${tableName} ${customerName} ${itemsList.map(i => i.productName || i.name || '').join(' ')}`.toLowerCase();

        return `
            <div class="order-card bg-white p-5 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between min-h-[300px] hover:shadow-md transition-all duration-200"
                 data-search="${searchStr}">
                <div>
                    <div class="flex justify-between items-start mb-2">
                        <div>
                            <span class="text-[10px] text-gray-400 font-bold block mb-0.5">${order.id}</span>
                            <h3 class="font-black text-gray-900 text-lg leading-tight text-[#E33539]">${tableName}</h3>
                        </div>
                        <span class="text-[10px] text-gray-500 font-bold bg-gray-50 px-2.5 py-1 rounded-full border border-gray-100">
                            ${staffIcons.clock} ${order.status || 'Vừa xong'}
                        </span>
                    </div>
                    <div class="text-xs text-gray-500 font-medium mb-4 pb-3 border-b border-gray-100">Khách hàng: <span class="text-gray-900 font-bold">${customerName}</span></div>

                    <div class="max-h-40 overflow-y-auto pr-1">
                        ${itemsHTML}
                    </div>
                </div>

                <div class="mt-4 pt-3 border-t border-gray-50">
                    ${actionButton}
                </div>
            </div>
        `;
    }).join('');

    return `
        <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
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
// 5. QUẢN LÝ SỰ KIỆN API
// ==========================================
export function initStaffEvents() {
    const handleSearch = (e) => {
        const keyword = e.target.value.toLowerCase().trim();
        const cards = document.querySelectorAll('.order-card');
        cards.forEach(card => {
            const searchContent = card.getAttribute('data-search');
            card.style.display = searchContent.includes(keyword) ? '' : 'none';
        });
    };
    const desktopSearch = document.getElementById('staffRealtimeSearch');
    if (desktopSearch) desktopSearch.addEventListener('input', handleSearch);

    const oldHandler = document._staffClickHandler;
    if (oldHandler) document.removeEventListener('click', oldHandler);

    const newHandler = (e) => {
        const btnProcess = e.target.closest('.btn-accept-order');
        const btnComplete = e.target.closest('.btn-complete-order');

        // Bếp bấm "Nhận đơn"
        if (btnProcess) {
            const orderId = btnProcess.getAttribute('data-id');
            const originalText = btnProcess.innerText;
            btnProcess.innerText = "Đang chuyển...";
            btnProcess.disabled = true;

            fetch(`${API_BASE}/api/warehouse/orders/${orderId}/processing`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                // THÊM BODY RỖNG ĐỂ CHỐNG LỖI 400 BAD REQUEST CỦA JAVA
                body: JSON.stringify({})
            })
            .then(res => {
                if (res.ok) {
                    window.location.hash = '#/staff/processing';
                    window.location.reload();
                } else {
                    alert("Có lỗi khi chuyển trạng thái đơn hàng!");
                    btnProcess.innerText = originalText;
                    btnProcess.disabled = false;
                }
            })
            .catch(() => alert("Lỗi kết nối mạng!"));
        }

        // Bếp bấm "Hoàn thành trả món" (Chỉ thay đổi trạng thái, thanh toán nằm ở Khách)
        if (btnComplete) {
            const orderId = btnComplete.getAttribute('data-id');
            const originalText = btnComplete.innerText;
            btnComplete.innerText = "Đang xử lý...";
            btnComplete.disabled = true;

            fetch(`${API_BASE}/api/warehouse/orders/${orderId}/complete`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({})
            })
            .then(res => {
                if (res.ok) {
                    window.location.hash = '#/staff/completed';
                    window.location.reload();
                } else {
                    alert("Có lỗi xảy ra khi hoàn thành đơn!");
                    btnComplete.innerText = originalText;
                    btnComplete.disabled = false;
                }
            })
            .catch(() => alert("Lỗi kết nối mạng!"));
        }
    };

    document._staffClickHandler = newHandler;
    document.addEventListener('click', newHandler);
}