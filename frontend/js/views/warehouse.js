// ==========================================
// 1. CÁC ICON SVG DÙNG CHUNG CHO QUẢN LÝ KHO
// ==========================================
const khoIcons = {
    logo: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>`,
    dashboard: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>`,
    order: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
    import: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>`,
    export: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>`,
    material: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`,
    logout: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>`,
    search: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="gray" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,
    bell: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>`,
    user: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`,
    back: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>`,
    menu: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`,
    close: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`,
    coffeeCup: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>`,
    drink: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h16"></path><path d="M6 22V10l-2-2"></path><path d="M18 22V10l2-2"></path><path d="M6 10h12"></path><path d="M10 2v7"></path><path d="M14 2v7"></path></svg>`,
    download: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>`,
    bag: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>`,
    warning: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`,
    arrowDown: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>`,
    arrowUp: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>`,
    documentText: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
    calendar: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`,
    filter: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>`,
    more: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>`,
    plus: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>`,
    eye: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`,
    pencil: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>`
};

const alertIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-red-500"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`;
const checkIcon = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;

// ==========================================
// 3. HÀM TẠO LAYOUT CHUNG (SIDEBAR + HEADER)
// ==========================================
function getWarehouseLayout(contentHTML, activeMenu = 'dashboard') {
    // Logic xác định menu nào đang được chọn để highlight màu đỏ
    const isDash = activeMenu === 'dashboard' ? 'bg-[#D93843] text-white shadow-md' : 'text-gray-400 hover:text-white hover:bg-[#333333]';
    const isInv = activeMenu === 'inventory' ? 'bg-[#D93843] text-white shadow-md' : 'text-gray-400 hover:text-white hover:bg-[#333333]';
    const isOrder = activeMenu === 'orders' ? 'bg-[#D93843] text-white shadow-md' : 'text-gray-400 hover:text-white hover:bg-[#333333]';
    const isImport = activeMenu === 'imports' ? 'bg-[#D93843] text-white shadow-md' : 'text-gray-400 hover:text-white hover:bg-[#333333]';
    const isExport = activeMenu === 'exports' ? 'bg-[#D93843] text-white shadow-md' : 'text-gray-400 hover:text-white hover:bg-[#333333]';
    const isMaterial = activeMenu === 'materials' ? 'bg-[#D93843] text-white shadow-md' : 'text-gray-400 hover:text-white hover:bg-[#333333]';

    return `
        <div class="flex h-screen bg-[#F6EFE9] font-sans">
            
            <aside class="hidden md:flex flex-col w-64 bg-[#222222] text-gray-300">
                <div class="p-6 flex items-center gap-3">
                    <div class="bg-[#D93843] text-white p-2.5 rounded-xl shadow-lg">${khoIcons.logo}</div>
                    <div>
                        <div class="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Red Cat Coffee</div>
                        <div class="text-white font-bold text-lg">Quản lý bếp</div>
                    </div>
                </div>
                
                <div class="px-6 mb-6">
                    <div class="bg-[#333333] rounded-xl p-3 flex items-center gap-3 border border-gray-700">
                        <div class="w-8 h-8 rounded-full bg-[#5C3A21] text-white flex items-center justify-center border border-gray-600">${khoIcons.user}</div>
                        <div class="text-xs font-medium text-gray-300">Nhân viên pha chế</div>
                    </div>
                </div>

                <nav class="flex-1 px-4 space-y-6 overflow-y-auto">
                    <div>
                        <div class="text-[11px] text-gray-500 font-bold mb-3 px-2 uppercase tracking-wider">Quản lý ca</div>
                        <a href="#/warehouse" class="flex items-center gap-3 px-4 py-3 rounded-xl font-medium mb-1 transition-colors ${isDash}">
                            ${khoIcons.dashboard} Dashboard
                        </a>
                        <a href="#/warehouse/orders" class="flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${isOrder}">
                            ${khoIcons.order} Danh sách Order
                        </a>
                    </div>
                    <div>
                        <div class="text-[11px] text-gray-500 font-bold mb-3 px-2 uppercase tracking-wider">Kho & Nguyên liệu</div>
                        <a href="#/warehouse/imports" class="flex items-center gap-3 px-4 py-3 rounded-xl font-medium mb-1 transition-colors ${isImport}">
                            ${khoIcons.import} Nhập kho
                        </a>
                        <a href="#/warehouse/exports" class="flex items-center gap-3 px-4 py-3 rounded-xl font-medium mb-1 transition-colors ${isExport}">
                            ${khoIcons.export} Xuất kho
                        </a>
                        <a href="#/warehouse/materials" class="flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${isMaterial}">
                            ${khoIcons.material} Nguyên liệu
                        </a>
                    </div>
                </nav>

                <div class="p-4 mt-auto">
                    <button id="btnKhoLogout" class="w-full flex items-center gap-3 bg-[#3A2222] text-[#D93843] px-4 py-3.5 rounded-xl font-bold hover:bg-[#4A2A2A] transition-colors border border-[#4A2A2A]">
                        ${khoIcons.logout} Đăng xuất
                    </button>
                </div>
            </aside>

            <div id="mobileOverlay" class="fixed inset-0 bg-black bg-opacity-50 z-40 hidden transition-opacity"></div>
            <aside id="mobileDrawer" class="fixed top-0 left-0 w-3/4 max-w-sm h-full bg-[#222222] text-gray-300 z-50 transform -translate-x-full transition-transform duration-300 flex flex-col md:hidden">
                <div class="p-6 flex items-center justify-between border-b border-gray-700">
                    <div class="flex items-center gap-3">
                        <div class="bg-[#D93843] text-white p-2 rounded-lg">${khoIcons.logo}</div>
                        <div class="text-white font-bold">Quản lý bếp</div>
                    </div>
                    <button id="btnCloseMenu" class="text-gray-400 hover:text-white">${khoIcons.close}</button>
                </div>
                <nav class="flex-1 px-4 py-6 space-y-4 overflow-y-auto">
                    <a href="#/warehouse" class="flex items-center gap-3 px-4 py-3 rounded-xl font-medium ${isDash}">${khoIcons.dashboard} Dashboard</a>
                    <a href="#/warehouse/orders" class="flex items-center gap-3 px-4 py-3 rounded-xl font-medium ${isOrder}">${khoIcons.order} Danh sách Order</a>
                    <a href="#/warehouse/imports" class="flex items-center gap-3 px-4 py-3 rounded-xl font-medium ${isImport}">${khoIcons.import} Nhập kho</a>
                    <a href="#/warehouse/exports" class="flex items-center gap-3 px-4 py-3 rounded-xl font-medium ${isExport}">${khoIcons.export} Xuất kho</a>
                    <a href="#/warehouse/materials" class="flex items-center gap-3 px-4 py-3 rounded-xl font-medium ${isMaterial}">${khoIcons.material} Nguyên liệu</a>
                </nav>
            </aside>

            <div class="flex-1 flex flex-col overflow-hidden">
                <!-- HEADER CHUNG -->
                <header class="h-20 md:h-24 flex justify-between items-center px-4 md:px-8 bg-[#F8F9FA] md:bg-[#F6EFE9] sticky top-0 z-30">
                    <!-- Trái: Menu & Logo (Mobile) -->
                    <div class="flex items-center gap-3">
                        <button id="btnOpenMenu" class="md:hidden text-gray-700 p-2 -ml-2 rounded-full hover:bg-gray-200">
                            ${khoIcons.menu}
                        </button>
                        <div class="md:hidden flex items-center gap-2">
                            <div class="text-[#D93843]">${khoIcons.logo}</div>
                            <span class="font-bold text-gray-900 text-lg">Red Cat Coffee</span>
                        </div>
                        <!-- Desktop Breadcrumb -->
                        <div class="text-sm hidden md:block">
                            <span class="text-gray-400 font-medium">Red Cat Coffee</span> 
                            <span class="mx-1 text-gray-400">›</span> 
                            <span class="text-gray-900 font-bold">
                                ${activeMenu === 'dashboard' ? 'Tổng quan' : 
                                  activeMenu === 'orders' ? 'Danh sách Order' : 
                                  activeMenu === 'imports' ? 'Nhập kho' :
                                  activeMenu === 'exports' ? 'Xuất kho' : 
                                  activeMenu === 'materials' ? 'Nguyên liệu' : 'Chi tiết'}
                            </span>
                        </div>
                    </div>

                    <!-- Phải: Công cụ -->
                    <div class="flex items-center gap-3 md:gap-6">
                        <!-- Nút tìm kiếm & Chuông trên Mobile (Hình tròn) -->
                        <button class="md:hidden w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600">
                            ${khoIcons.search}
                        </button>
                        <button class="md:hidden w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600 relative">
                            ${khoIcons.bell}
                            <span class="absolute top-2 right-2.5 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                        </button>

                        <!-- Giao diện công cụ Desktop (Giữ nguyên) -->
                        <div class="relative hidden md:block">
                            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">${khoIcons.search}</div>
                            <input type="text" class="bg-white text-gray-700 rounded-full pl-11 pr-4 py-2.5 w-64 focus:outline-none focus:ring-2 focus:ring-[#D93843] shadow-sm text-sm font-medium" placeholder="Tìm kiếm...">
                        </div>
                        <div class="relative cursor-pointer text-gray-700 hover:text-black hidden md:block">
                            ${khoIcons.bell}
                            <span class="absolute -top-1.5 -right-1.5 bg-[#D93843] text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full border-2 border-[#F6EFE9]">12</span>
                        </div>
                        <div class="hidden md:flex items-center gap-3">
                            <div class="w-9 h-9 rounded-full bg-[#4A2F1D] text-white flex items-center justify-center shadow-md">${khoIcons.user}</div>
                            <span class="text-sm font-semibold text-gray-500 tracking-wide">07 Apr 2026</span>
                        </div>
                    </div>
                </header>
                
                <!-- NƠI ĐỔ NỘI DUNG TỪNG TRANG -->
                <main class="flex-1 overflow-x-hidden overflow-y-auto px-4 md:px-8 pb-10 bg-[#F8F9FA] md:bg-[#F6EFE9]">
                    ${contentHTML}
                </main>
            </div>
        </div>

        <!-- ========================================== -->
        <!-- TOAST THÔNG BÁO LỖI (Trượt từ trên xuống) -->
        <!-- ========================================== -->
        <div id="errorToast" class="fixed top-4 right-4 md:top-10 md:right-10 bg-white rounded-xl shadow-lg border border-gray-100 p-4 flex items-start gap-4 transform transition-all duration-300 -translate-y-[150%] opacity-0 z-[60] min-w-[280px]">
            <div class="w-10 h-10 rounded-xl bg-[#EBF4FF] flex items-center justify-center shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E53E3E" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
            </div>
            <div class="flex-1">
                <h4 class="text-sm font-bold text-gray-900">Số lượng không hợp lệ</h4>
                <p class="text-[11px] text-gray-500 mt-1">Số lượng món phải là số dương</p>
            </div>
            <button id="closeToast" class="text-gray-400 hover:text-gray-600 mt-0.5">
                ${khoIcons.close}
            </button>
        </div>

        <!-- ========================================== -->
        <!-- MODAL THÊM SẢN PHẨM -->
        <!-- ========================================== -->
        <div id="addMaterialModal" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center hidden opacity-0 transition-opacity duration-300">
            <div class="bg-white rounded-[24px] w-full max-w-sm p-6 mx-4 transform scale-95 transition-transform duration-300 shadow-xl" id="addMaterialContent">
                <h2 class="text-xl font-bold mb-6 text-gray-900">Thêm sản phẩm</h2>
                
                <form id="addMaterialForm" class="space-y-4">
                    <div>
                        <label class="block text-[11px] font-bold text-gray-900 mb-1.5">Danh mục</label>
                        <div class="relative">
                            <select id="matCategory" class="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-red-400 outline-none text-sm appearance-none font-medium text-gray-700 bg-white">
                                <option value="">Chọn danh mục</option>
                                <option value="caphe">Cà phê</option>
                                <option value="sua">Sữa</option>
                            </select>
                            <div class="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400">▼</div>
                        </div>
                    </div>

                    <div>
                        <label class="block text-[11px] font-bold text-gray-900 mb-1.5">Tên nguyên liệu</label>
                        <input type="text" id="matName" value="Cà phê" class="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-red-400 outline-none text-sm font-medium text-gray-700">
                    </div>

                    <div>
                        <label class="block text-[11px] font-bold text-gray-900 mb-1.5">Số Lượng(g/ml)</label>
                        <input type="number" id="matQty" value="-12" class="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-red-400 outline-none text-sm font-medium text-gray-700">
                    </div>

                    <div class="grid grid-cols-2 gap-3 mt-8">
                        <button type="submit" class="bg-[#F54A4A] hover:bg-red-600 text-white font-bold py-3 rounded-xl transition-colors text-sm shadow-sm">
                            Thêm sản phẩm
                        </button>
                        <button type="button" id="btnCancelAddMat" class="bg-[#E2E8F0] hover:bg-gray-300 text-gray-700 font-bold py-3 rounded-xl transition-colors text-sm">
                            Hủy
                        </button>
                    </div>
                </form>
            </div>
        </div>

        <!-- ========================================== -->
        <!-- MODAL TẠO NGUYÊN LIỆU MỚI (MASTER) -->
        <!-- ========================================== -->
        <div id="createNewMaterialModal" class="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center hidden opacity-0 transition-opacity duration-300">
            <div class="bg-white rounded-[32px] w-full max-w-md p-8 mx-4 transform scale-95 transition-transform duration-300 shadow-2xl" id="createNewMaterialContent">
                
                <div class="flex justify-between items-center mb-6">
                    <h2 class="text-xl font-extrabold text-gray-900">Thêm nguyên liệu</h2>
                    <button id="btnCloseNewMaterial" class="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors">
                        ${khoIcons.close}
                    </button>
                </div>
                
                <form id="newMaterialForm">
                    <!-- Tên nguyên liệu -->
                    <div class="bg-[#F6EFE9] rounded-2xl p-4 mb-4">
                        <label class="block text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Tên nguyên liệu</label>
                        <input type="text" class="w-full bg-transparent text-gray-900 font-bold outline-none text-sm" placeholder="Nhập tên nguyên liệu...">
                    </div>

                    <!-- Loại & Đơn vị -->
                    <div class="grid grid-cols-2 gap-4 mb-4">
                        <div class="bg-[#F6EFE9] rounded-2xl p-4">
                            <label class="block text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Loại</label>
                            <input type="text" value="Nguyên liệu" class="w-full bg-transparent text-gray-900 font-bold outline-none text-sm">
                        </div>
                        <div class="bg-[#F6EFE9] rounded-2xl p-4">
                            <label class="block text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Đơn vị</label>
                            <input type="text" value="kg" class="w-full bg-transparent text-gray-900 font-bold outline-none text-sm">
                        </div>
                    </div>

                    <!-- Giá nhập & Tồn kho -->
                    <div class="grid grid-cols-2 gap-4">
                        <div class="bg-[#F6EFE9] rounded-2xl p-4">
                            <label class="block text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Giá nhập</label>
                            <input type="text" placeholder="0đ" class="w-full bg-transparent text-gray-900 font-bold outline-none text-sm">
                        </div>
                        <div class="bg-[#F6EFE9] rounded-2xl p-4">
                            <label class="block text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Tồn kho</label>
                            <input type="text" placeholder="0" class="w-full bg-transparent text-gray-900 font-bold outline-none text-sm">
                        </div>
                    </div>

                    <!-- Nút bấm -->
                    <div class="flex gap-4 mt-8">
                        <button type="button" id="btnCancelNewMat" class="flex-1 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-bold py-3.5 rounded-2xl transition-colors shadow-sm">
                            Hủy
                        </button>
                        <button type="submit" class="flex-1 bg-[#8C2A3B] hover:bg-[#6D1F2D] text-white font-bold py-3.5 rounded-2xl transition-colors shadow-sm">
                            Lưu
                        </button>
                    </div>
                </form>
            </div>
        </div>
    `;
}

// ==========================================
// 4. TRANG TỔNG QUAN (DASHBOARD) - MOBILE FIRST
// ==========================================
function getDashboardContent(topItemsData) {
    const safeData = topItemsData || [];
    return `
        <div class="max-w-7xl mx-auto">
            
            <!-- Tiêu đề & Ngày tháng -->
            <div class="flex justify-between items-start mb-6 pt-2">
                <div>
                    <h1 class="text-2xl font-extrabold text-gray-900 mb-2">Tổng quan kho</h1>
                    <p class="text-[11px] text-gray-500 leading-relaxed max-w-[250px] md:max-w-md">
                        Hệ thống quản lý kho nguyên liệu tự động. Trừ tồn kho theo công thức pha chế khi có đơn hàng.
                    </p>
                </div>
                <button class="bg-white border border-red-100 text-[#D93843] px-4 py-1.5 rounded-full text-xs font-bold shadow-sm md:hidden">
                    07 Apr
                </button>
            </div>
            
            <!-- 4 Thẻ Summary Grid 2x2 trên Mobile -->
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-6">
                <!-- Thẻ Tổng nhập -->
                <a href="#/warehouse/imports" class="bg-[#FFF5F5] p-4 md:p-6 rounded-3xl shadow-sm border border-red-50 block hover:shadow-md transition-shadow">
                    <div class="text-[10px] md:text-[11px] text-gray-500 font-bold uppercase tracking-wider mb-2">Tổng nhập</div>
                    <div class="text-2xl md:text-3xl font-extrabold text-gray-900 mb-1">12M</div>
                    <div class="text-[10px] md:text-xs text-gray-400 font-medium">8 phiếu hoàn tất</div>
                </a>
                
                <!-- Thẻ Tổng xuất -->
                <a href="#/warehouse/exports" class="bg-[#4A2F1D] text-white p-4 md:p-6 rounded-3xl shadow-sm block hover:shadow-md transition-shadow">
                    <div class="text-[10px] md:text-[11px] text-gray-300 font-bold uppercase tracking-wider mb-2">Tổng xuất</div>
                    <div class="text-2xl md:text-3xl font-extrabold mb-1">8.5M</div>
                    <div class="text-[10px] md:text-xs text-gray-300 font-medium">Tự động từ POS</div>
                </a>
                
                <!-- Thẻ Tồn kho -->
                <a href="#/warehouse/inventory" class="bg-[#FDF6ED] p-4 md:p-6 rounded-3xl shadow-sm border border-orange-50 block hover:shadow-md transition-shadow">
                    <div class="text-[10px] md:text-[11px] text-[#8B6E52] font-bold uppercase tracking-wider mb-2">Tồn kho</div>
                    <div class="text-2xl md:text-3xl font-extrabold text-[#5C3A21] mb-1">45M</div>
                    <div class="text-[10px] md:text-xs text-[#8B6E52] font-medium">142 nguyên liệu</div>
                </a>
                
                <!-- Thẻ Cảnh báo -->
                <a href="#/warehouse/low-stock" class="bg-[#FDE68A] p-4 md:p-6 rounded-3xl shadow-sm block hover:shadow-md transition-shadow">
                    <div class="text-[10px] md:text-[11px] hidden md:block text-[#92400E] font-bold uppercase tracking-wider mb-2">Cảnh báo</div>
                    <div class="text-3xl font-extrabold text-[#92400E] mb-1">3</div>
                    <div class="text-[10px] md:text-xs text-[#92400E] font-medium">Dưới mức cảnh báo</div>
                </a>
            </div>

            <!-- Khối Biểu đồ -->
            <div class="bg-white rounded-3xl p-5 shadow-sm border border-gray-50 mb-6">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-sm font-bold text-gray-900">Biểu đồ sử dụng nguyên liệu</h3>
                    <span class="text-[10px] text-[#D93843] font-bold">Tuần này</span>
                </div>
                
                <!-- Khung biểu đồ xanh nhạt -->
                <div class="h-40 bg-[#E8F5E9] rounded-2xl mb-4 relative overflow-hidden">
                    <div class="absolute bottom-2 left-0 right-0 flex justify-around text-[10px] text-gray-500 font-medium">
                        <span>T2</span><span>T3</span><span>T4</span><span>T5</span><span>T6</span><span>T7</span><span>T8</span>
                    </div>
                </div>
                
                <div class="flex justify-between items-center">
                    <div class="flex gap-4">
                        <div class="flex items-center gap-1.5">
                            <div class="w-2.5 h-2.5 rounded-full bg-[#D93843]"></div>
                            <span class="text-[10px] font-medium text-gray-600">Nhập kho</span>
                        </div>
                        <div class="flex items-center gap-1.5">
                            <div class="w-2.5 h-2.5 rounded-full bg-[#8B6E52]"></div>
                            <span class="text-[10px] font-medium text-gray-600">Tiêu hao</span>
                        </div>
                    </div>
                    <span class="text-[10px] font-bold text-[#D93843]">↗ Ổn định</span>
                </div>
            </div>

            <!-- Khối Biến động kho -->
            <div class="bg-white rounded-3xl p-5 shadow-sm border border-gray-50 mb-6">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-sm font-bold text-gray-900">Biến động kho gần đây</h3>
                    <span class="text-[10px] text-[#D93843] font-bold">Chi tiết order</span>
                </div>
                
                <div class="space-y-3">
                    <!-- Item 1 -->
                    <div class="bg-[#FFF5F5] rounded-2xl p-3 flex items-center gap-3 border border-red-50">
                        <div class="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#D93843] shrink-0 shadow-sm">
                            ${khoIcons.coffeeCup}
                        </div>
                        <div class="flex-1">
                            <div class="text-[11px] sm:text-xs font-bold text-gray-900 truncate">Tự động trừ: 2 Cà phê...</div>
                            <div class="text-[9px] sm:text-[10px] text-gray-400 mt-0.5">Order #1024 · Vừa xong</div>
                        </div>
                        <div class="text-[10px] text-[#8B6E52] font-medium text-right shrink-0">
                            -40g Cà phê<br>-60ml Sữa
                        </div>
                    </div>
                    
                    <!-- Item 2 -->
                    <div class="bg-[#FFF5F5] rounded-2xl p-3 flex items-center gap-3 border border-red-50">
                        <div class="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#D93843] shrink-0 shadow-sm">
                            ${khoIcons.drink}
                        </div>
                        <div class="flex-1">
                            <div class="text-[11px] sm:text-xs font-bold text-gray-900 truncate">Tự động trừ: 1 Trà đào</div>
                            <div class="text-[9px] sm:text-[10px] text-gray-400 mt-0.5">Order #1025 · Vừa xong</div>
                        </div>
                        <div class="text-[10px] text-[#8B6E52] font-medium text-right shrink-0">
                            -1 túi trà<br>-2 lát đào
                        </div>
                    </div>
                </div>
            </div>

            <!-- Khối 3 thẻ Thống kê phía dưới cùng -->
            <div class="grid grid-cols-3 gap-3">
                <div class="bg-[#3A2222] rounded-2xl p-3 sm:p-4 flex flex-col justify-between h-28 shadow-sm">
                    <div class="text-white opacity-80">${khoIcons.download}</div>
                    <div>
                        <div class="text-[10px] text-gray-300 font-medium mb-1">Nhập hôm nay</div>
                        <div class="text-xl sm:text-2xl font-bold text-white">02</div>
                    </div>
                </div>
                
                <div class="bg-white rounded-2xl p-3 sm:p-4 flex flex-col justify-between h-28 shadow-sm border border-gray-100">
                    <div class="text-[#8B6E52]">${khoIcons.bag}</div>
                    <div>
                        <div class="text-[10px] text-gray-500 font-medium mb-1">Đơn hàng</div>
                        <div class="text-xl sm:text-2xl font-bold text-gray-900">145</div>
                    </div>
                </div>
                
                <div class="bg-[#F0FAF0] rounded-2xl p-3 sm:p-4 flex flex-col justify-between h-28 shadow-sm border border-green-50">
                    <div class="text-[#D93843]">${khoIcons.warning}</div>
                    <div>
                        <div class="text-[10px] text-[#8B6E52] font-medium mb-1">Cảnh báo</div>
                        <div class="text-xl sm:text-2xl font-bold text-[#D93843]">03</div>
                    </div>
                </div>
            </div>

        </div>
    `;
}

// ==========================================
// 5. TRANG CHI TIẾT TỒN KHO (INVENTORY)
// ==========================================
function getInventoryContent(topItemsData) {
    const safeData = topItemsData || [];
    const topItemsHTML = safeData.map(item => {
        const isTop3 = item.rank <= 3;
        const rankBgClass = isTop3 ? 'bg-[#4A2F1D] text-white' : 'bg-[#F6EFE9] text-[#8B6E52]';
        const barColorClass = isTop3 ? 'bg-[#4A2F1D]' : 'bg-[#D4C3B3]';

        return `
            <div class="flex items-center gap-4">
                <div class="w-7 h-7 rounded-full ${rankBgClass} flex items-center justify-center text-xs font-bold shrink-0">
                    #${item.rank}
                </div>
                <div class="flex-1">
                    <div class="flex justify-between items-baseline mb-1.5">
                        <span class="text-sm font-bold text-gray-900">${item.name}</span>
                        <div class="text-right leading-tight">
                            <div class="text-sm font-bold text-gray-900">${item.value}</div>
                            <div class="text-[10px] text-gray-400 mt-0.5">${item.qty}</div>
                        </div>
                    </div>
                    <div class="w-full bg-[#F6EFE9] rounded-full h-1.5">
                        <div class="${barColorClass} h-1.5 rounded-full" style="width: ${item.percent}%"></div>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    return `
        <div class="max-w-7xl mx-auto">
            
            <div class="flex items-center gap-3 mb-6">
                <a href="#/warehouse" class="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-600 hover:bg-gray-50 transition-colors">
                    ${khoIcons.back}
                </a>
                <div class="text-sm hidden sm:block">
                    <span class="text-gray-400 font-medium">Tổng quan</span> 
                    <span class="mx-1 text-gray-400">›</span> 
                    <span class="text-gray-700 font-semibold">Chi tiết tồn kho</span>
                </div>
            </div>

            <div class="mb-8">
                <h1 class="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">Hiện trạng tồn kho</h1>
                <p class="text-sm text-gray-500 font-medium">Chi tiết toàn bộ nguyên liệu và bao bì đang lưu kho</p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div class="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                    <div class="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-2">Tổng giá trị tồn</div>
                    <div class="text-3xl font-extrabold text-gray-900 mb-1">67.6M</div>
                    <div class="text-xs text-gray-500 font-medium">Toàn bộ kho</div>
                </div>
                <div class="bg-[#F5EBE1] rounded-2xl p-5 shadow-sm">
                    <div class="text-[11px] text-[#8B6E52] font-bold uppercase tracking-wider mb-2">Nguyên liệu</div>
                    <div class="text-3xl font-extrabold text-[#5C3A21] mb-1">8</div>
                    <div class="text-xs text-[#8B6E52] font-medium">loại đang quản lý</div>
                </div>
                <div class="bg-[#EAF6F0] rounded-2xl p-5 shadow-sm">
                    <div class="text-[11px] text-[#4CAF50] font-bold uppercase tracking-wider mb-2">Bao bì</div>
                    <div class="text-3xl font-extrabold text-[#2E7D32] mb-1">2</div>
                    <div class="text-xs text-[#4CAF50] font-medium">loại đang quản lý</div>
                </div>
                <div class="bg-[#FFF4E5] rounded-2xl p-5 shadow-sm">
                    <div class="text-[11px] text-[#ED8936] font-bold uppercase tracking-wider mb-2">Ổn định</div>
                    <div class="text-3xl font-extrabold text-[#DD6B20] mb-1">7</div>
                    <div class="text-xs text-[#ED8936] font-medium">mặt hàng</div>
                </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                <div class="lg:col-span-1 space-y-6">
                    <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                        <h3 class="text-lg font-bold text-gray-900 mb-8">Cơ cấu giá trị tồn</h3>
                        
                        <div class="mb-6">
                            <div class="flex justify-between items-baseline mb-2">
                                <span class="text-sm font-bold text-gray-900">Nguyên liệu</span>
                                <span class="text-sm font-bold text-gray-900">5.440.000đ</span>
                            </div>
                            <div class="w-full bg-[#F6EFE9] rounded-full h-2.5 mb-2">
                                <div class="bg-[#4A2F1D] h-2.5 rounded-full" style="width: 91%"></div>
                            </div>
                            <div class="text-xs text-gray-400 font-medium">91% tổng giá trị</div>
                        </div>
                        
                        <div class="mb-8">
                            <div class="flex justify-between items-baseline mb-2">
                                <span class="text-sm font-bold text-gray-900">Bao bì</span>
                                <span class="text-sm font-bold text-gray-900">550.000đ</span>
                            </div>
                            <div class="w-full bg-[#EAF6F0] rounded-full h-2.5 mb-2">
                                <div class="bg-[#4CAF50] h-2.5 rounded-full" style="width: 9%"></div>
                            </div>
                            <div class="text-xs text-gray-400 font-medium">9% tổng giá trị</div>
                        </div>

                        <div class="bg-[#F5EBE1] rounded-xl p-5 border border-[#E8DACB]">
                            <div class="text-[11px] text-[#8B6E52] font-bold uppercase tracking-wider mb-1">Tổng giá trị tồn</div>
                            <div class="text-2xl font-extrabold text-[#5C3A21]">5.990.000đ</div>
                        </div>
                    </div>
                </div>

                <div class="lg:col-span-2">
                    <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full">
                        <h3 class="text-lg font-bold text-gray-900 mb-8">Top mặt hàng theo giá trị tồn</h3>
                        <div class="space-y-6">
                            ${topItemsHTML}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    `;
}

// --- HÀM TẠO NỘI DUNG TRANG CẢNH BÁO SẮP HẾT ---
function getLowStockContent(lowStockData) {
    const safeData = lowStockData || [];
    const listItemsHTML = safeData.map(item => `
        <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
            <!-- Header Card -->
            <div class="flex justify-between items-start mb-6">
                <div class="flex items-center gap-4">
                    <div class="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center border border-red-100">
                        ${alertIcon}
                    </div>
                    <div>
                        <h3 class="text-lg font-bold text-gray-900">${item.name}</h3>
                        <p class="text-xs text-gray-500 font-medium mt-0.5">${item.id} · ${item.category} · ${item.supplier}</p>
                    </div>
                </div>
                <span class="bg-red-50 text-red-600 px-3 py-1 rounded-full text-xs font-bold border border-red-100">Sắp hết</span>
            </div>

            <!-- Bảng chỉ số -->
            <div class="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                <div class="bg-[#F9F6F4] rounded-xl p-4">
                    <div class="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Tồn kho hiện tại</div>
                    <div class="text-lg font-bold text-red-600">${item.current}</div>
                </div>
                <div class="bg-[#F9F6F4] rounded-xl p-4">
                    <div class="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Định mức tối thiểu</div>
                    <div class="text-lg font-bold text-orange-500">${item.min}</div>
                </div>
                <div class="bg-[#F9F6F4] rounded-xl p-4">
                    <div class="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Cần nhập thêm (5x)</div>
                    <div class="text-lg font-bold text-gray-900">${item.need}</div>
                </div>
                <div class="bg-[#F9F6F4] rounded-xl p-4">
                    <div class="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Giá nhập</div>
                    <div class="text-lg font-bold text-gray-700">${item.price}</div>
                </div>
                <div class="bg-[#F9F6F4] rounded-xl p-4">
                    <div class="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Chi phí ước tính</div>
                    <div class="text-lg font-bold text-green-600">${item.cost}</div>
                </div>
            </div>

            <!-- Thanh tiến trình -->
            <div>
                <div class="w-full bg-[#F6EFE9] rounded-full h-2 mb-2">
                    <div class="bg-[#991B1B] h-2 rounded-full" style="width: ${item.percent}%"></div>
                </div>
                <div class="flex justify-between items-center text-xs">
                    <span class="text-gray-400 font-medium">Tỷ lệ so với định mức</span>
                    <span class="text-red-600 font-bold">${item.percent}%</span>
                </div>
            </div>
        </div>
    `).join('');

    return `
        <div class="max-w-7xl mx-auto">
            <!-- Breadcrumbs & Nút Back -->
            <div class="flex items-center gap-3 mb-6">
                <a href="#/warehouse" class="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-600 hover:bg-gray-50 transition-colors">
                    ${khoIcons.back}
                </a>
                <div class="text-sm">
                    <span class="text-gray-400 font-medium">Tổng quan</span> 
                    <span class="mx-1 text-gray-400">›</span> 
                    <span class="text-gray-700 font-semibold">Chi tiết Sắp hết</span>
                </div>
            </div>

            <!-- Tiêu đề -->
            <div class="mb-8">
                <h1 class="text-3xl font-extrabold text-gray-900 mb-2">Cảnh báo sắp hết hàng</h1>
                <p class="text-sm text-gray-500 font-medium">Các mặt hàng dưới hoặc bằng định mức tối thiểu cần nhập thêm ngay</p>
            </div>

            <!-- 4 Thẻ Summary Top -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div class="bg-[#FFEAEA] rounded-2xl p-5 shadow-sm border border-red-100">
                    <div class="text-[11px] text-red-400 font-bold uppercase tracking-wider mb-2">Mặt hàng cảnh báo</div>
                    <div class="text-3xl font-extrabold text-red-600 mb-1">3</div>
                    <div class="text-xs text-red-400 font-medium">Dưới định mức</div>
                </div>
                <div class="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                    <div class="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-2">Chi phí ước tính</div>
                    <div class="text-3xl font-extrabold text-gray-900 mb-1">3.2M</div>
                    <div class="text-xs text-gray-500 font-medium">Để nhập đủ định mức</div>
                </div>
                <div class="bg-[#FFF9DB] rounded-2xl p-5 shadow-sm border border-yellow-200">
                    <div class="text-[11px] text-yellow-600 font-bold uppercase tracking-wider mb-2">Cần xử lý ngay</div>
                    <div class="text-3xl font-extrabold text-yellow-600 mb-1">1</div>
                    <div class="text-xs text-yellow-600 font-medium">Mức khẩn cấp</div>
                </div>
                <div class="bg-[#F5EBE1] rounded-2xl p-5 shadow-sm border border-[#E8DACB]">
                    <div class="text-[11px] text-[#8B6E52] font-bold uppercase tracking-wider mb-2">Nhà cung cấp</div>
                    <div class="text-3xl font-extrabold text-[#5C3A21] mb-1">3</div>
                    <div class="text-xs text-[#8B6E52] font-medium">Cần liên hệ</div>
                </div>
            </div>

            <!-- Danh sách Cảnh báo -->
            <div class="mb-8">
                ${listItemsHTML}
            </div>

            <!-- Thanh Tóm tắt Footer -->
            <div class="bg-[#3A2222] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center shadow-lg mb-8">
                <div class="mb-4 md:mb-0">
                    <div class="text-xs text-gray-300 font-bold uppercase tracking-wider mb-1">Tóm tắt nhập hàng cần thiết</div>
                    <div class="flex gap-8 mt-4">
                        <div>
                            <div class="text-xs text-gray-400 mb-1">Tổng mặt hàng cần nhập</div>
                            <div class="text-2xl font-bold text-white">3 mặt hàng</div>
                        </div>
                        <div>
                            <div class="text-xs text-gray-400 mb-1">Tổng chi phí ước tính</div>
                            <div class="text-2xl font-bold text-yellow-500">3.165.000đ</div>
                        </div>
                    </div>
                </div>
                <button class="bg-yellow-500 hover:bg-yellow-600 text-[#3A2222] font-bold py-3 px-8 rounded-xl transition-colors w-full md:w-auto">
                    Tạo phiếu nhập
                </button>
            </div>
        </div>
    `;
}

// --- HÀM TẠO NỘI DUNG TRANG CHI TIẾT TỔNG XUẤT ---
function getExportDetailsContent(exportReasonsData, exportListMockData) {
    const safeReasons = exportReasonsData || [];
    const safeList = exportListMockData || [];
    // Render thanh lý do xuất
    const reasonsHTML = safeReasons.map(item => `
        <div class="mb-4 last:mb-0">
            <div class="flex justify-between items-baseline mb-2">
                <span class="text-sm font-bold text-gray-900">${item.name}</span>
                <span class="text-sm font-bold text-[#D93843]">${item.percent}%</span>
            </div>
            <div class="w-full bg-[#F6EFE9] rounded-full h-2.5">
                <div class="bg-[#D93843] h-2.5 rounded-full" style="width: ${item.percent}%"></div>
            </div>
        </div>
    `).join('');

    // Render bảng danh sách phiếu xuất
    const tableRowsHTML = safeList.map(row => `
        <tr class="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
            <td class="py-4 px-6 font-bold text-gray-900">${row.id}</td>
            <td class="py-4 px-6">
                <div class="font-bold text-gray-900">${row.reasonTitle}</div>
                <div class="text-[11px] text-gray-400 mt-0.5">${row.reasonSub}</div>
            </td>
            <td class="py-4 px-6 text-sm text-gray-500 font-medium">${row.date}</td>
            <td class="py-4 px-6 font-bold text-gray-900">${row.itemsCount}</td>
            <td class="py-4 px-6 font-bold text-[#D93843]">${row.total}</td>
            <td class="py-4 px-6">
                <span class="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">${row.status}</span>
            </td>
        </tr>
    `).join('');

    return `
        <div class="max-w-7xl mx-auto">
            <!-- Breadcrumbs & Nút Back -->
            <div class="flex items-center gap-3 mb-6">
                <a href="#/warehouse" class="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-600 hover:bg-gray-50 transition-colors">
                    ${khoIcons.back}
                </a>
                <div class="text-sm">
                    <span class="text-gray-400 font-medium">Tổng quan</span> 
                    <span class="mx-1 text-gray-400">›</span> 
                    <span class="text-gray-700 font-semibold">Chi tiết Tổng xuất</span>
                </div>
            </div>

            <!-- Tiêu đề -->
            <div class="mb-8">
                <h1 class="text-3xl font-extrabold text-gray-900 mb-2">Chi tiết Tổng xuất kho</h1>
                <p class="text-sm text-gray-500 font-medium">Toàn bộ phiếu xuất nguyên liệu — tháng 04/2026</p>
            </div>

            <!-- 4 Thẻ Thống Kê Đầu Trang -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <!-- Card 1 -->
                <div class="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                    <div class="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-2">Tổng giá trị xuất</div>
                    <div class="text-3xl font-extrabold text-gray-900 mb-1">8.5M</div>
                    <div class="text-xs text-gray-500 font-medium">Tháng này</div>
                </div>
                <!-- Card 2 -->
                <div class="bg-[#FFEAEA] rounded-2xl p-5 shadow-sm border border-red-100">
                    <div class="text-[11px] text-red-400 font-bold uppercase tracking-wider mb-2">Số phiếu xuất</div>
                    <div class="text-3xl font-extrabold text-red-600 mb-1">9</div>
                    <div class="text-xs text-red-400 font-medium">Đã và đang xử lý</div>
                </div>
                <!-- Card 3 -->
                <div class="bg-[#F5EBE1] rounded-2xl p-5 shadow-sm border border-[#E8DACB]">
                    <div class="text-[11px] text-[#8B6E52] font-bold uppercase tracking-wider mb-2">Tự động (POS)</div>
                    <div class="text-3xl font-extrabold text-[#5C3A21] mb-1">60%</div>
                    <div class="text-xs text-[#8B6E52] font-medium">Tỷ lệ xuất tự động</div>
                </div>
                <!-- Card 4 -->
                <div class="bg-[#FFF9DB] rounded-2xl p-5 shadow-sm border border-yellow-200">
                    <div class="text-[11px] text-yellow-600 font-bold uppercase tracking-wider mb-2">Trung bình/Phiếu</div>
                    <div class="text-3xl font-extrabold text-yellow-600 mb-1">944K</div>
                    <div class="text-xs text-yellow-600 font-medium">Giá trị bình quân</div>
                </div>
            </div>

            <!-- Biểu đồ và Lý do xuất -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <!-- Cột trái: Biểu đồ (Placeholder) -->
                <div class="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-lg font-bold text-gray-900">Giá trị xuất kho theo ngày</h3>
                        <span class="bg-[#F6EFE9] text-[#8B6E52] text-xs font-bold px-3 py-1.5 rounded-lg">Tháng 04/2026</span>
                    </div>
                    <div class="h-64 bg-[#F6EFE9] rounded-xl flex items-end justify-between px-4 pb-4 pt-10">
                        <!-- Mô phỏng trục X của biểu đồ -->
                        <div class="w-full h-full flex flex-col justify-end">
                            <div class="flex justify-between px-2">
                                <span class="text-[10px] text-gray-400">5</span>
                                <span class="text-[10px] text-gray-400">10</span>
                                <span class="text-[10px] text-gray-400">15</span>
                                <span class="text-[10px] text-gray-400">20</span>
                                <span class="text-[10px] text-gray-400">25</span>
                                <span class="text-[10px] text-gray-400">30</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Cột phải: Phân loại lý do xuất -->
                <div class="lg:col-span-1 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <h3 class="text-lg font-bold text-gray-900 mb-8">Phân loại lý do xuất</h3>
                    <div class="space-y-6">
                        ${reasonsHTML}
                    </div>
                </div>
            </div>

            <!-- Bảng danh sách phiếu xuất -->
            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div class="p-6 border-b border-gray-100">
                    <h3 class="text-lg font-bold text-gray-900">Danh sách phiếu xuất (9 phiếu)</h3>
                </div>
                <div class="overflow-x-auto p-4 pt-0">
                    <table class="w-full text-left border-collapse">
                        <thead>
                            <tr class="bg-[#F9F6F4] text-xs text-[#8B6E52] font-bold uppercase tracking-wider rounded-xl">
                                <th class="py-4 px-6 rounded-l-xl">Mã phiếu</th>
                                <th class="py-4 px-6">Lý do xuất</th>
                                <th class="py-4 px-6">Ngày xuất</th>
                                <th class="py-4 px-6">Số mặt hàng</th>
                                <th class="py-4 px-6">Tổng tiền</th>
                                <th class="py-4 px-6 rounded-r-xl">Trạng thái</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${tableRowsHTML}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

// --- HÀM TẠO NỘI DUNG DANH SÁCH ORDER ---
function getOrderListContent(ordersData) {
    const safeData = ordersData || [];
    const orderCardsHTML = safeData.map(order => {
        // Render từng món ăn trong order
        const safeItems = order.items || [];
        const itemsList = safeItems.map(item => {
            const isDone = item.done;
            const textStyle = isDone ? 'line-through text-gray-400' : 'text-gray-700 font-medium';
            const checkStyle = isDone ? 'bg-green-500 border-green-500' : 'border-gray-300';
            const iconHTML = isDone ? checkIcon : '';
            
            return `
                <div class="flex justify-between items-center py-2 border-b border-gray-50 last:border-0 cursor-pointer hover:bg-gray-50 px-2 -mx-2 rounded-lg transition-colors">
                    <div class="flex items-center gap-3">
                        <div class="w-5 h-5 rounded-full border ${checkStyle} flex items-center justify-center shrink-0 transition-colors">
                            ${iconHTML}
                        </div>
                        <span class="${textStyle} text-sm">${item.name}</span>
                    </div>
                    <span class="text-xs font-bold text-[#8B6E52] bg-[#F5EBE1] px-2 py-0.5 rounded-md shrink-0">${item.qty}</span>
                </div>
            `;
        }).join('');

        return `
            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-[500px]">
                <!-- Header Card (Đỏ, Cam, Xanh) -->
                <div class="${order.colorClass} p-4 text-white">
                    <div class="flex justify-between items-start mb-4">
                        <div>
                            <div class="text-xs opacity-80 mb-0.5">${order.id}</div>
                            <div class="font-bold text-lg leading-tight">${order.table}</div>
                        </div>
                        <div class="w-9 h-9 rounded-full ${order.bgClass} text-white flex items-center justify-center font-bold border-2 border-white/20">
                            ${order.time}
                        </div>
                    </div>
                    
                    <!-- Progress Bar -->
                    <div class="flex justify-between text-xs font-medium mb-1.5 opacity-90">
                        <span>Tiến độ</span>
                        <span>${order.progress}</span>
                    </div>
                    <div class="w-full ${order.bgClass} rounded-full h-1.5">
                        <div class="${order.barClass} h-1.5 rounded-full" style="width: ${order.progressPercent}%"></div>
                    </div>
                </div>

                <!-- Phục vụ & Danh sách món -->
                <div class="p-4 flex-1 flex flex-col overflow-hidden">
                    <div class="text-xs text-gray-500 mb-3 font-medium">Phục vụ: <span class="text-gray-800 font-bold">${order.server}</span></div>
                    
                    <!-- Vùng cuộn cho các món -->
                    <div class="overflow-y-auto flex-1 pr-1 custom-scrollbar">
                        ${itemsList}
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // Thanh Bottom Bar trạng thái các bàn
    const tableStatusHTML = safeData.map(order => `
        <div class="flex items-center gap-2 bg-[#333333] px-3 py-1.5 rounded-lg border border-gray-700">
            <div class="w-2.5 h-2.5 rounded-full ${order.dotColor}"></div>
            <div class="text-xs text-gray-300">
                <span class="font-bold text-white">${order.table.split(' – ')[0]}</span> 
                <span class="opacity-70">${order.timeNum} phút</span>
            </div>
        </div>
    `).join('');

    return `
        <div class="flex flex-col h-full -mx-4 md:-mx-8 px-4 md:px-8"> <!-- Mở rộng để chứa sticky footer -->
            <div class="max-w-7xl mx-auto w-full flex-1 pb-24"> <!-- Đẩy pb-24 để không bị footer đè -->
                
                <!-- Tiêu đề -->
                <div class="text-center mb-8">
                    <h1 class="text-3xl font-extrabold text-gray-900 mb-2">Danh sách món chế biến</h1>
                    <p class="text-sm text-gray-500 font-medium">Hiển thị món cần pha chế theo thời gian thực</p>
                </div>

                <!-- 4 Thẻ Summary -->
                <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    <div class="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                        <div class="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-2">Tổng Order</div>
                        <div class="text-3xl font-extrabold text-gray-900 mb-1">4</div>
                        <div class="text-xs text-gray-500 font-medium">đang mở</div>
                    </div>
                    <div class="bg-[#3A2222] rounded-2xl p-5 shadow-sm">
                        <div class="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-2">Đang chờ</div>
                        <div class="text-3xl font-extrabold text-white mb-1">12</div>
                        <div class="text-xs text-gray-400 font-medium">món cần làm</div>
                    </div>
                    <div class="bg-[#EAF6F0] rounded-2xl p-5 shadow-sm border border-green-100">
                        <div class="text-[11px] text-green-500 font-bold uppercase tracking-wider mb-2">Hoàn thành</div>
                        <div class="text-3xl font-extrabold text-green-600 mb-1">6</div>
                        <div class="text-xs text-green-500 font-medium">món xong</div>
                    </div>
                    <div class="bg-[#FFF9DB] rounded-2xl p-5 shadow-sm border border-yellow-200">
                        <div class="text-[11px] text-yellow-600 font-bold uppercase tracking-wider mb-2">Cảnh báo</div>
                        <div class="text-3xl font-extrabold text-yellow-600 mb-1">1</div>
                        <div class="text-xs text-yellow-600 font-medium">order quá 10 phút</div>
                    </div>
                </div>

                <!-- Lưới hiển thị các Order -->
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
                    ${orderCardsHTML}
                </div>
            </div>

            <!-- Thanh Trạng Thái Đáy (Sticky Footer) -->
            <div class="fixed bottom-0 left-0 md:left-64 right-0 bg-[#222222] border-t border-gray-800 p-3 md:px-8 flex flex-wrap md:flex-nowrap justify-between items-center z-40 gap-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
                <div class="flex items-center gap-3 overflow-x-auto flex-1 no-scrollbar pr-4">
                    ${tableStatusHTML}
                </div>
                <div class="flex items-center gap-2 shrink-0 border-l border-gray-700 pl-4">
                    <div class="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
                    <span class="text-sm font-medium text-gray-400">Đang hoạt động</span>
                </div>
            </div>
        </div>
    `;
}

// ==========================================
// TRANG 1: DANH SÁCH NHẬP KHO (LIST)
// ==========================================
function getImportListContent(importListData) {
    const safeData = importListData || [];
    // 1. Render Table Rows (Cho Desktop)
    const tableRows = safeData.map(item => `
        <tr class="border-b border-gray-100 last:border-0 hover:bg-white transition-colors bg-[#FDFCFB]">
            <td class="py-4 px-6 font-bold text-gray-900 rounded-l-2xl">${item.id}<div class="text-[10px] text-gray-400 font-normal mt-0.5">${item.date}</div></td>
            <td class="py-4 px-6 text-sm font-bold text-gray-800">${item.supplier}</td>
            <td class="py-4 px-6 text-sm text-gray-500">${item.date}</td>
            <td class="py-4 px-6 text-sm font-bold text-gray-800">${item.items} mặt hàng</td>
            <td class="py-4 px-6 text-sm font-extrabold text-[#D93843]">${item.total}</td>
            <td class="py-4 px-6 rounded-r-2xl">
                <span class="${item.statusClass} px-3 py-1 rounded-full text-xs font-bold border border-current/10">${item.status}</span>
            </td>
        </tr>
    `).join('');

    // 2. Render Cards (Cho Mobile)
    const mobileCards = safeData.map(item => `
        <div class="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 mb-4">
            <div class="flex justify-between items-start mb-4">
                <div>
                    <div class="font-bold text-gray-900 text-sm">${item.id}</div>
                    <div class="text-[10px] text-gray-400 mt-0.5">${item.date} · ${item.supplier}</div>
                </div>
                <span class="${item.statusClass} px-2.5 py-1 rounded-full text-[10px] font-bold border border-current/10">${item.status}</span>
            </div>
            <div class="flex justify-between items-end mt-4">
                <div>
                    <div class="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-1">Tổng tiền</div>
                    <div class="text-sm font-extrabold text-gray-900">${item.total}</div>
                </div>
                <div class="flex gap-2">
                    <button class="w-8 h-8 rounded-full bg-[#F6EFE9] text-gray-600 flex items-center justify-center hover:bg-gray-200 transition-colors">${khoIcons.eye}</button>
                    <button class="w-8 h-8 rounded-full bg-[#FFF5F5] text-[#D93843] flex items-center justify-center hover:bg-red-100 transition-colors">${khoIcons.pencil}</button>
                </div>
            </div>
        </div>
    `).join('');

    return `
        <div class="max-w-7xl mx-auto">
            <!-- Header -->
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 pt-2">
                <div>
                    <h1 class="text-2xl md:text-3xl font-extrabold text-gray-900 mb-1 md:mb-2">Nhập kho</h1>
                    <p class="text-xs md:text-sm text-gray-500 font-medium max-w-xs md:max-w-full">Quản lý phiếu nhập nguyên liệu. Danh sách phiếu nhập được đóng gói thành trải nghiệm mobile gọn, rõ.</p>
                </div>
                <a href="#/warehouse/imports/create" class="w-full md:w-auto bg-[#D93843] hover:bg-red-700 text-white px-6 py-3 rounded-full font-bold flex items-center justify-center gap-2 shadow-md transition-colors">
                    ${khoIcons.plus} Tạo phiếu nhập
                </a>
            </div>

            <!-- 4 Thẻ Thống Kê (Desktop) -->
            <div class="hidden md:grid grid-cols-4 gap-4 mb-8">
                <div class="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                    <div class="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-2">Tổng phiếu nhập</div>
                    <div class="text-3xl font-extrabold text-gray-900 mb-1">8</div>
                    <div class="text-xs text-gray-400 font-medium">Tháng này</div>
                </div>
                <div class="bg-[#EAF6F0] rounded-3xl p-6 shadow-sm border border-green-50">
                    <div class="text-[11px] text-green-600 font-bold uppercase tracking-wider mb-2">Trung bình</div>
                    <div class="text-3xl font-extrabold text-green-600 mb-1">15.5M</div>
                    <div class="text-xs text-green-600 font-medium">Mỗi phiếu</div>
                </div>
                <div class="bg-[#3A2222] rounded-3xl p-6 shadow-sm">
                    <div class="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-2">Tổng giá trị nhập</div>
                    <div class="text-3xl font-extrabold text-white mb-1">124.5M</div>
                    <div class="text-xs text-gray-400 font-medium">Tháng này</div>
                </div>
                <div class="bg-[#FFF9DB] rounded-3xl p-6 shadow-sm border border-yellow-100">
                    <div class="text-[11px] text-yellow-600 font-bold uppercase tracking-wider mb-2">Phiếu mới</div>
                    <div class="text-3xl font-extrabold text-yellow-600 mb-1">2</div>
                    <div class="text-xs text-yellow-600 font-medium">Hôm nay</div>
                </div>
            </div>

            <!-- Mobile Tabs -->
            <div class="md:hidden flex gap-2 overflow-x-auto no-scrollbar mb-6 pb-2">
                <button class="bg-[#3A2222] text-white px-5 py-2 rounded-full text-xs font-bold whitespace-nowrap">Tất cả</button>
                <button class="bg-white text-gray-600 px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap border border-gray-200">Hoàn thành</button>
                <button class="bg-white text-gray-600 px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap border border-gray-200">Đang xử lý</button>
                <button class="bg-white text-gray-600 px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap border border-gray-200">Chờ duyệt</button>
            </div>

            <!-- Tìm kiếm & Bộ lọc (Desktop) -->
            <div class="hidden md:flex items-center gap-4 mb-6">
                <div class="flex gap-2">
                    <button class="bg-[#3A2222] text-white px-5 py-2 rounded-full text-sm font-bold shadow-sm">Tất cả</button>
                    <button class="bg-white text-gray-600 hover:bg-gray-50 px-5 py-2 rounded-full text-sm font-bold border border-gray-200">Hoàn thành</button>
                    <button class="bg-white text-gray-600 hover:bg-gray-50 px-5 py-2 rounded-full text-sm font-bold border border-gray-200">Đang xử lý</button>
                    <button class="bg-white text-gray-600 hover:bg-gray-50 px-5 py-2 rounded-full text-sm font-bold border border-gray-200">Chờ duyệt</button>
                </div>
                <div class="relative flex-1 max-w-md ml-auto">
                    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">${khoIcons.search}</div>
                    <input type="text" class="bg-white border-none w-full text-gray-700 rounded-full pl-11 pr-4 py-2.5 focus:ring-2 focus:ring-[#D93843] shadow-sm text-sm font-medium" placeholder="Tìm mã PN, nhà cung cấp...">
                </div>
            </div>

            <!-- View Desktop: Table -->
            <div class="hidden md:block">
                <table class="w-full text-left border-collapse border-spacing-y-2 border-separate">
                    <thead>
                        <tr class="text-[11px] text-[#8B6E52] font-bold uppercase tracking-wider">
                            <th class="pb-2 px-6">Mã phiếu</th>
                            <th class="pb-2 px-6">Nhà cung cấp</th>
                            <th class="pb-2 px-6">Ngày nhập</th>
                            <th class="pb-2 px-6">Số mặt hàng</th>
                            <th class="pb-2 px-6">Tổng tiền</th>
                            <th class="pb-2 px-6">Trạng thái</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${tableRows}
                    </tbody>
                </table>
            </div>

            <!-- View Mobile: Cards -->
            <div class="md:hidden">
                <div class="flex justify-between items-center mb-4 px-1">
                    <h2 class="text-xs font-bold text-gray-800">Danh sách nhập kho</h2>
                    <span class="text-[10px] font-bold text-[#D93843]">${safeData.length} phiếu</span>
                </div>
                ${mobileCards}
            </div>
        </div>
    `;
}

// ==========================================
// TRANG 2: TẠO PHIẾU NHẬP MỚI (CREATE)
// ==========================================
function getCreateImportContent() {
    return `
        <div class="max-w-7xl mx-auto pb-24 md:pb-8 relative">
            
            <!-- Header -->
            <div class="flex items-center gap-4 mb-8 pt-2">
                <a href="#/warehouse/imports" class="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-600 hover:bg-gray-50 transition-colors">
                    ${khoIcons.back}
                </a>
                <h1 class="text-2xl md:text-3xl font-extrabold text-gray-900">Tạo phiếu nhập mới</h1>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                <!-- CỘT TRÁI: Thông tin chung -->
                <div class="lg:col-span-1">
                    <div class="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-50">
                        <h3 class="text-base font-bold text-[#4A2F1D] mb-6">Thông tin chung</h3>
                        
                        <div class="space-y-5">
                            <div>
                                <label class="block text-[11px] font-bold text-gray-500 mb-1.5 uppercase tracking-wide">Mã phiếu</label>
                                <input type="text" value="PN-220" readonly class="w-full bg-[#F6EFE9] text-gray-600 rounded-xl px-4 py-3 border border-transparent outline-none font-medium text-sm">
                            </div>
                            <div>
                                <label class="block text-[11px] font-bold text-gray-500 mb-1.5 uppercase tracking-wide">Ngày nhập</label>
                                <input type="text" value="07/04/2026" readonly class="w-full bg-[#F6EFE9] text-gray-600 rounded-xl px-4 py-3 border border-transparent outline-none font-medium text-sm">
                            </div>
                            <div>
                                <label class="block text-[11px] font-bold text-gray-500 mb-1.5 uppercase tracking-wide">Nhà cung cấp</label>
                                <select class="w-full bg-[#F6EFE9] text-gray-800 rounded-xl px-4 py-3 border border-transparent focus:border-red-300 outline-none font-medium text-sm appearance-none cursor-pointer">
                                    <option value="">Chọn nhà cung cấp...</option>
                                    <option value="1">Highland Beans</option>
                                    <option value="2">Dairy Farm</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-[11px] font-bold text-gray-500 mb-1.5 uppercase tracking-wide">Ghi chú</label>
                                <textarea class="w-full bg-[#F6EFE9] text-gray-800 rounded-xl px-4 py-3 border border-transparent focus:border-red-300 outline-none font-medium text-sm h-24 resize-none" placeholder="Nhập ghi chú phiếu..."></textarea>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- CỘT PHẢI: Danh sách nguyên liệu -->
                <div class="lg:col-span-2">
                    <div class="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-50 h-full flex flex-col">
                        
                        <div class="flex justify-between items-center mb-6">
                            <h3 class="text-base font-bold text-[#4A2F1D]">Danh sách nguyên liệu</h3>
                            <button id="btnOpenAddMat" class="bg-[#D93843] hover:bg-red-700 text-white px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm">
                                ${khoIcons.plus} Thêm
                            </button>
                        </div>

                        <!-- Bảng nhập liệu -->
                        <div class="overflow-x-auto flex-1">
                            <table class="w-full text-left min-w-[600px]">
                                <thead>
                                    <tr class="bg-[#F5EBE1] text-[#8B6E52] text-[11px] font-bold uppercase tracking-wider rounded-xl">
                                        <th class="py-3 px-4 rounded-l-xl">Nguyên liệu</th>
                                        <th class="py-3 px-4 text-center">Tồn</th>
                                        <th class="py-3 px-4 w-32 text-center">SL nhập</th>
                                        <th class="py-3 px-4 text-right">Đơn giá</th>
                                        <th class="py-3 px-4 text-right rounded-r-xl">Thành tiền</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="border-b border-gray-50">
                                        <td class="py-4 px-4">
                                            <div class="font-bold text-gray-900 text-sm">Cà phê hạt xay (Robusta)</div>
                                            <div class="text-[10px] text-gray-400 mt-0.5">NL001 · kg</div>
                                        </td>
                                        <td class="py-4 px-4 text-center text-sm font-medium text-gray-500">15 kg</td>
                                        <td class="py-4 px-4">
                                            <input type="number" value="15" class="w-full border border-gray-200 rounded-lg px-3 py-2 text-center font-bold text-gray-900 outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400">
                                        </td>
                                        <td class="py-4 px-4 text-right text-sm font-medium text-gray-500">150.000đ</td>
                                        <td class="py-4 px-4 text-right font-extrabold text-gray-900">2.250.000đ</td>
                                    </tr>
                                    <tr class="border-b border-gray-50">
                                        <td class="py-4 px-4">
                                            <div class="font-bold text-gray-900 text-sm">Sữa đặc Ngôi Sao</div>
                                            <div class="text-[10px] text-gray-400 mt-0.5">NL002 · lon</div>
                                        </td>
                                        <td class="py-4 px-4 text-center text-sm font-medium text-gray-500">4 lon</td>
                                        <td class="py-4 px-4">
                                            <input type="number" value="50" class="w-full border border-gray-200 rounded-lg px-3 py-2 text-center font-bold text-gray-900 outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400">
                                        </td>
                                        <td class="py-4 px-4 text-right text-sm font-medium text-gray-500">20.000đ</td>
                                        <td class="py-4 px-4 text-right font-extrabold text-gray-900">1.000.000đ</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <!-- Tổng tiền góc dưới phải -->
                        <div class="mt-6 pt-6 border-t border-gray-100 flex flex-col items-end">
                            <div class="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-1">Tổng tiền</div>
                            <div class="text-3xl font-extrabold text-[#D93843]">3.250.000đ</div>
                        </div>
                    </div>
                </div>

            </div>

            <!-- Thanh Hành động (Ghim dưới cùng màn hình) -->
            <div class="fixed bottom-0 left-0 md:left-64 right-0 bg-[#F6EFE9] border-t border-gray-200 p-4 flex justify-end gap-3 z-40">
                <a href="#/warehouse/imports" class="bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 px-6 py-2.5 rounded-xl font-bold transition-colors">
                    Hủy
                </a>
                <button class="bg-[#C62828] hover:bg-red-800 text-white px-8 py-2.5 rounded-xl font-bold shadow-md transition-colors">
                    Lưu phiếu nhập
                </button>
            </div>

        </div>
    `;
}

// ==========================================
// TRANG 1: DANH SÁCH XUẤT KHO (LIST)
// ==========================================
function getExportListNewContent(exportListNewData) {
    const safeData = exportListNewData || [];
    const tableRows = safeData.map(item => `
        <tr class="border-b border-gray-100 last:border-0 hover:bg-white transition-colors bg-[#FDFCFB]">
            <td class="py-4 px-6 rounded-l-2xl">
                <div class="font-bold text-gray-900">${item.id}</div>
                <div class="text-[10px] text-gray-400 font-normal mt-0.5">${item.date}</div>
            </td>
            <td class="py-4 px-6">
                <div class="font-bold text-gray-900 text-sm">${item.reasonTitle || item.reason}</div>
                <div class="text-[11px] text-gray-400 mt-0.5">${item.reasonSub || item.subReason}</div>
            </td>
            <td class="py-4 px-6 text-sm text-gray-500 font-medium">${item.date}</td>
            <td class="py-4 px-6 text-sm font-bold text-gray-800">${item.itemsCount || item.items}</td>
            <td class="py-4 px-6 text-sm font-extrabold text-[#D93843]">${item.total}</td>
            <td class="py-4 px-6 rounded-r-2xl">
                <span class="${item.statusClass} px-3 py-1 rounded-full text-xs font-bold border border-current/10">${item.status}</span>
            </td>
        </tr>
    `).join('');

    return `
        <div class="max-w-7xl mx-auto">
            <!-- Header -->
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 pt-2">
                <div>
                    <h1 class="text-2xl md:text-3xl font-extrabold text-gray-900 mb-1 md:mb-2">Xuất kho</h1>
                    <p class="text-xs md:text-sm text-gray-500 font-medium">Theo dõi phiếu xuất tiêu hao nguyên liệu</p>
                </div>
                <a href="#/warehouse/exports/create" class="w-full md:w-auto bg-[#D93843] hover:bg-red-700 text-white px-6 py-3 rounded-full font-bold flex items-center justify-center gap-2 shadow-md transition-colors">
                    ${khoIcons.plus} Tạo phiếu xuất
                </a>
            </div>

            <!-- 4 Thẻ Thống Kê -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div class="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                    <div class="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-2">Tổng phiếu xuất</div>
                    <div class="text-3xl font-extrabold text-gray-900 mb-1">24</div>
                    <div class="text-xs text-gray-400 font-medium">Tháng này</div>
                </div>
                <div class="bg-[#EAF6F0] rounded-3xl p-6 shadow-sm border border-green-50">
                    <div class="text-[11px] text-green-600 font-bold uppercase tracking-wider mb-2">Trung bình</div>
                    <div class="text-3xl font-extrabold text-green-600 mb-1">3.6M</div>
                    <div class="text-xs text-green-600 font-medium">Mỗi phiếu</div>
                </div>
                <div class="bg-[#3A2222] rounded-3xl p-6 shadow-sm">
                    <div class="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-2">Tổng giá trị xuất</div>
                    <div class="text-3xl font-extrabold text-white mb-1">86.5M</div>
                    <div class="text-xs text-gray-400 font-medium">Tháng này</div>
                </div>
                <div class="bg-[#FFF9DB] rounded-3xl p-6 shadow-sm border border-yellow-100">
                    <div class="text-[11px] text-yellow-600 font-bold uppercase tracking-wider mb-2">Chờ xử lý</div>
                    <div class="text-3xl font-extrabold text-yellow-600 mb-1">2</div>
                    <div class="text-xs text-yellow-600 font-medium">Phiếu chờ xuất</div>
                </div>
            </div>

            <!-- Tìm kiếm & Bộ lọc -->
            <div class="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6">
                <div class="flex flex-wrap gap-2">
                    <button class="bg-[#3A2222] text-white px-5 py-2 rounded-full text-sm font-bold shadow-sm">Tất cả</button>
                    <button class="bg-white text-gray-600 hover:bg-gray-50 px-5 py-2 rounded-full text-sm font-bold border border-gray-200">Đã xuất</button>
                    <button class="bg-white text-gray-600 hover:bg-gray-50 px-5 py-2 rounded-full text-sm font-bold border border-gray-200">Chờ xuất</button>
                    <button class="bg-white text-gray-600 hover:bg-gray-50 px-5 py-2 rounded-full text-sm font-bold border border-gray-200">Đã hủy</button>
                </div>
                <div class="relative w-full md:flex-1 md:max-w-md ml-auto">
                    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">${khoIcons.search}</div>
                    <input type="text" class="bg-white border-none w-full text-gray-700 rounded-full pl-11 pr-4 py-2.5 focus:ring-2 focus:ring-[#D93843] shadow-sm text-sm font-medium" placeholder="Tìm mã PX, lý do xuất...">
                </div>
            </div>

            <!-- Table Danh sách -->
            <div class="overflow-x-auto pb-4">
                <table class="w-full text-left border-collapse border-spacing-y-2 border-separate min-w-[800px]">
                    <thead>
                        <tr class="text-[11px] text-[#8B6E52] font-bold uppercase tracking-wider">
                            <th class="pb-2 px-6">Mã phiếu</th>
                            <th class="pb-2 px-6">Lý do xuất</th>
                            <th class="pb-2 px-6">Ngày xuất</th>
                            <th class="pb-2 px-6">Số mặt hàng</th>
                            <th class="pb-2 px-6">Tổng tiền</th>
                            <th class="pb-2 px-6">Trạng thái</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${tableRows}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

// ==========================================
// TRANG 2: TẠO PHIẾU XUẤT MỚI
// ==========================================
function getCreateExportContent() {
    return `
        <div class="max-w-7xl mx-auto pb-24 md:pb-8 relative">
            
            <!-- Header -->
            <div class="flex items-center gap-4 mb-8 pt-2">
                <a href="#/warehouse/exports" class="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-600 hover:bg-gray-50 transition-colors">
                    ${khoIcons.back}
                </a>
                <h1 class="text-2xl md:text-3xl font-extrabold text-gray-900">Tạo phiếu xuất</h1>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                <!-- CỘT TRÁI: Thông tin chung -->
                <div class="lg:col-span-1">
                    <div class="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-50">
                        <h3 class="text-base font-bold text-[#4A2F1D] mb-6">Thông tin chung</h3>
                        
                        <div class="space-y-5">
                            <div>
                                <label class="block text-[11px] font-bold text-gray-500 mb-1.5 uppercase tracking-wide">Mã phiếu</label>
                                <input type="text" value="PX-103" readonly class="w-full bg-[#F6EFE9] text-gray-600 rounded-xl px-4 py-3 border border-transparent outline-none font-medium text-sm">
                            </div>
                            <div>
                                <label class="block text-[11px] font-bold text-gray-500 mb-1.5 uppercase tracking-wide">Ngày xuất</label>
                                <input type="text" value="07/04/2026" readonly class="w-full bg-[#F6EFE9] text-gray-600 rounded-xl px-4 py-3 border border-transparent outline-none font-medium text-sm">
                            </div>
                            <div>
                                <label class="block text-[11px] font-bold text-gray-500 mb-1.5 uppercase tracking-wide">Người nhận</label>
                                <input type="text" placeholder="Nhập tên người nhận..." class="w-full bg-[#F6EFE9] text-gray-800 rounded-xl px-4 py-3 border border-transparent focus:border-red-300 outline-none font-medium text-sm">
                            </div>
                            <div>
                                <label class="block text-[11px] font-bold text-gray-500 mb-1.5 uppercase tracking-wide">Lý do xuất</label>
                                <div class="relative">
                                    <select class="w-full bg-[#F6EFE9] text-gray-800 rounded-xl px-4 py-3 border border-transparent focus:border-red-300 outline-none font-medium text-sm appearance-none cursor-pointer">
                                        <option value="noibo">Sử dụng nội bộ</option>
                                        <option value="huy">Xuất hủy</option>
                                        <option value="khac">Khác</option>
                                    </select>
                                    <div class="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400">▼</div>
                                </div>
                            </div>
                            <div>
                                <label class="block text-[11px] font-bold text-gray-500 mb-1.5 uppercase tracking-wide">Ghi chú</label>
                                <textarea class="w-full bg-[#F6EFE9] text-gray-800 rounded-xl px-4 py-3 border border-transparent focus:border-red-300 outline-none font-medium text-sm h-24 resize-none" placeholder="Nhập ghi chú...">Xuất nguyên liệu do bao bì hở, không đảm bảo chất lượng.</textarea>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- CỘT PHẢI: Danh sách nguyên liệu -->
                <div class="lg:col-span-2">
                    <div class="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-50 h-full flex flex-col">
                        
                        <div class="flex justify-between items-center mb-6">
                            <h3 class="text-base font-bold text-[#4A2F1D]">Danh sách nguyên liệu</h3>
                            <!-- LƯU Ý: Gắn đúng id="btnOpenAddMat" để tái sử dụng Modal Thêm SP của bước trước -->
                            <button id="btnOpenAddMat" class="bg-[#C62828] hover:bg-red-800 text-white px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm">
                                ${khoIcons.plus} Thêm
                            </button>
                        </div>

                        <!-- Bảng nhập liệu -->
                        <div class="overflow-x-auto flex-1">
                            <table class="w-full text-left min-w-[600px]">
                                <thead>
                                    <tr class="bg-[#F5EBE1] text-[#8B6E52] text-[11px] font-bold uppercase tracking-wider rounded-xl">
                                        <th class="py-3 px-4 rounded-l-xl">Nguyên liệu</th>
                                        <th class="py-3 px-4 text-center">Tồn</th>
                                        <th class="py-3 px-4 w-32 text-center">SL xuất</th>
                                        <th class="py-3 px-4 text-right">Đơn giá</th>
                                        <th class="py-3 px-4 text-right rounded-r-xl">Thành tiền</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="border-b border-gray-50">
                                        <td class="py-4 px-4">
                                            <div class="font-bold text-gray-900 text-sm">Sữa đặc Ngôi Sao</div>
                                            <div class="text-[10px] text-gray-400 mt-0.5">NL002 · lon</div>
                                        </td>
                                        <!-- Cảnh báo đỏ do sắp hết tồn kho -->
                                        <td class="py-4 px-4 text-center text-sm font-extrabold text-red-600">4 lon</td>
                                        <td class="py-4 px-4">
                                            <input type="number" value="1" class="w-full border border-gray-200 rounded-lg px-3 py-2 text-center font-bold text-gray-900 outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400">
                                        </td>
                                        <td class="py-4 px-4 text-right text-sm font-medium text-gray-500">20.000đ</td>
                                        <td class="py-4 px-4 text-right font-extrabold text-gray-900">20.000đ</td>
                                    </tr>
                                    <tr class="border-b border-gray-50">
                                        <td class="py-4 px-4">
                                            <div class="font-bold text-gray-900 text-sm">Cà phê hạt xay (Robusta)</div>
                                            <div class="text-[10px] text-gray-400 mt-0.5">NL001 · kg</div>
                                        </td>
                                        <td class="py-4 px-4 text-center text-sm font-medium text-gray-500">15 kg</td>
                                        <td class="py-4 px-4">
                                            <input type="number" value="1" class="w-full border border-gray-200 rounded-lg px-3 py-2 text-center font-bold text-gray-900 outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400">
                                        </td>
                                        <td class="py-4 px-4 text-right text-sm font-medium text-gray-500">150.000đ</td>
                                        <td class="py-4 px-4 text-right font-extrabold text-gray-900">150.000đ</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <!-- Tổng tiền góc dưới phải -->
                        <div class="mt-6 pt-6 border-t border-gray-100 flex flex-col items-end">
                            <div class="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-1">Tổng tiền</div>
                            <div class="text-3xl font-extrabold text-[#C62828]">170.000đ</div>
                        </div>
                    </div>
                </div>

            </div>

            <!-- Thanh Hành động (Ghim dưới cùng) -->
            <div class="fixed bottom-0 left-0 md:left-64 right-0 bg-[#F6EFE9] border-t border-gray-200 p-4 flex justify-end gap-3 z-40">
                <a href="#/warehouse/exports" class="bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 px-6 py-2.5 rounded-xl font-bold transition-colors">
                    Hủy
                </a>
                <button class="bg-[#C62828] hover:bg-red-800 text-white px-8 py-2.5 rounded-xl font-bold shadow-md transition-colors">
                    Lưu phiếu xuất
                </button>
            </div>

        </div>
    `;
}
export function renderWarehouseMaterials(materialsData) {
    const safeData = materialsData || [];
    const tableRows = safeData.map(item => `
        <tr class="bg-white shadow-sm hover:shadow-md transition-shadow">
            <td class="py-4 px-6 rounded-l-2xl text-gray-500 font-bold text-sm border-b-0">${item.id}</td>
            <td class="py-4 px-6 border-b-0">
                <div class="font-bold text-gray-900 text-sm">${item.name}</div>
                <div class="text-[10px] text-gray-400 mt-0.5">${item.supplier}</div>
            </td>
            <td class="py-4 px-6 text-sm text-gray-700 font-medium border-b-0">${item.type}</td>
            <td class="py-4 px-6 text-sm text-gray-500 font-bold border-b-0">${item.unit}</td>
            <td class="py-4 px-6 border-b-0">
                <span class="font-extrabold text-gray-900 text-sm">${item.stock}</span>
            </td>
            <td class="py-4 px-6 text-sm text-orange-500 font-bold border-b-0">${item.min}</td>
            <td class="py-4 px-6 text-sm text-gray-500 font-medium border-b-0">${item.price}</td>
            <td class="py-4 px-6 text-sm font-extrabold text-[#D93843] border-b-0">${item.value}</td>
            <td class="py-4 px-6 text-sm text-gray-400 border-b-0">${item.lastImport}</td>
            <td class="py-4 px-6 rounded-r-2xl border-b-0">
                <span class="${item.statusClass} px-3 py-1 rounded-full text-xs font-bold">${item.status}</span>
            </td>
        </tr>
    `).join('');

    return getWarehouseLayout(`
        <div class="max-w-[1400px] mx-auto pb-8">
            <!-- Header -->
            <div class="flex justify-between items-center mb-8 pt-2">
                <div>
                    <h1 class="text-3xl font-extrabold text-gray-900 mb-2">Nguyên liệu</h1>
                    <p class="text-sm text-gray-500 font-medium">Quản lý kho nguyên liệu và bao bì</p>
                </div>
                <!-- Nút này đã được mình nối sẵn event để mở Modal thêm mới -->
                <button id="btnOpenNewMaterial" class="bg-[#C62828] hover:bg-red-800 text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-sm transition-colors">
                    ${khoIcons.plus} Thêm nguyên liệu
                </button>
            </div>

            <!-- 4 Thẻ Thống Kê -->
            <div class="grid grid-cols-4 gap-6 mb-8">
                <div class="bg-white rounded-3xl p-6 shadow-sm border border-gray-50">
                    <div class="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-2">Đang quản lý</div>
                    <div class="text-3xl font-extrabold text-gray-900 mb-1">10</div>
                    <div class="text-xs text-gray-400 font-medium">nguyên liệu</div>
                </div>
                <div class="bg-[#FFEAEA] rounded-3xl p-6 shadow-sm border border-red-50">
                    <div class="text-[11px] text-red-400 font-bold uppercase tracking-wider mb-2">Sắp hết hàng</div>
                    <div class="text-3xl font-extrabold text-red-600 mb-1">3</div>
                    <div class="text-xs text-red-400 font-medium">&lt; 5 đơn vị</div>
                </div>
                <div class="bg-[#3A2222] rounded-3xl p-6 shadow-sm">
                    <div class="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-2">Tổng giá trị tồn</div>
                    <div class="text-3xl font-extrabold text-white mb-1">67.6M</div>
                    <div class="text-xs text-gray-400 font-medium">Toàn bộ kho</div>
                </div>
                <div class="bg-[#EAF6F0] rounded-3xl p-6 shadow-sm border border-green-50">
                    <div class="text-[11px] text-green-500 font-bold uppercase tracking-wider mb-2">Nhóm</div>
                    <div class="text-3xl font-extrabold text-green-600 mb-1">8</div>
                    <div class="text-xs text-green-500 font-medium">danh mục</div>
                </div>
            </div>

            <!-- Tabs Lọc -->
            <div class="flex gap-3 mb-6">
                <button class="bg-[#3A2222] text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-sm">Tất cả</button>
                <button class="bg-white text-gray-600 hover:bg-gray-50 px-6 py-2.5 rounded-full text-sm font-bold border border-gray-200">Nguyên liệu</button>
                <button class="bg-white text-gray-600 hover:bg-gray-50 px-6 py-2.5 rounded-full text-sm font-bold border border-gray-200">Bao bì</button>
                <button class="bg-white text-gray-600 hover:bg-gray-50 px-6 py-2.5 rounded-full text-sm font-bold border border-gray-200">Sắp hết</button>
            </div>

            <!-- Thanh tìm kiếm -->
            <div class="relative w-full mb-6">
                <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">${khoIcons.search}</div>
                <input type="text" class="bg-white border-none w-full text-gray-700 rounded-2xl pl-11 pr-4 py-3.5 focus:ring-2 focus:ring-[#D93843] shadow-sm text-sm font-medium" placeholder="Tìm mã hoặc tên nguyên liệu...">
            </div>

            <!-- Bảng dữ liệu (Card style) -->
            <div class="overflow-x-auto pb-10">
                <table class="w-full text-left border-collapse border-spacing-y-3 border-separate min-w-[1100px]">
                    <thead>
                        <tr class="text-[11px] text-[#8B6E52] font-bold uppercase tracking-wider">
                            <th class="pb-2 px-6">Mã</th>
                            <th class="pb-2 px-6">Tên nguyên liệu</th>
                            <th class="pb-2 px-6">Loại</th>
                            <th class="pb-2 px-6">Đơn vị</th>
                            <th class="pb-2 px-6">Tồn kho</th>
                            <th class="pb-2 px-6">Định mức</th>
                            <th class="pb-2 px-6">Giá nhập</th>
                            <th class="pb-2 px-6">Giá trị tồn</th>
                            <th class="pb-2 px-6">Nhập lần cuối</th>
                            <th class="pb-2 px-6">Trạng thái</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${tableRows}
                    </tbody>
                </table>
            </div>
        </div>
    `, 'materials');
}

// ==========================================
// 6. CÁC HÀM XUẤT (EXPORTS) ĐỂ ROUTER GỌI
// ==========================================

export function renderWarehouseInventory() {
    return getWarehouseLayout(getInventoryContent([]), 'inventory');
}

export function renderWarehouseCreateImport() {
    return getWarehouseLayout(getCreateImportContent(), 'imports');
}

export function renderWarehouseCreateExport() {
    return getWarehouseLayout(getCreateExportContent(), 'exports');
}

export function renderWarehouseExportDetails() {
    return getWarehouseLayout(getExportDetailsContent([], []), 'exports');
}

// --- HÀM EXPORT CHO APP.JS ---
export function renderWarehouseDashboard(data) {
    // data.topItemsData lấy từ JSON trả về của API Dashboard
    return getWarehouseLayout(getDashboardContent(data.topItemsData), 'dashboard');
}

export function renderWarehouseLowStock(lowStockData) {
    return getWarehouseLayout(getLowStockContent(lowStockData), 'dashboard');
}

export function renderWarehouseOrders(ordersData) {
    return getWarehouseLayout(getOrderListContent(ordersData), 'orders');
}

export function renderWarehouseImportList(importListData) {
    return getWarehouseLayout(getImportListContent(importListData), 'imports');
}

export function renderWarehouseExportList(exportListNewData) {
    return getWarehouseLayout(getExportListNewContent(exportListNewData), 'exports');
}

// ==========================================
// 7. XỬ LÝ SỰ KIỆN CHUNG CHO QUẢN LÝ KHO
// ==========================================
export function initWarehouseEvents() {
    // Logic Mobile Sidebar
    const btnOpenMenu = document.getElementById('btnOpenMenu');
    const btnCloseMenu = document.getElementById('btnCloseMenu');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const mobileOverlay = document.getElementById('mobileOverlay');

    const openMenu = () => {
        if (mobileOverlay) mobileOverlay.classList.remove('hidden');
        if (mobileDrawer) setTimeout(() => mobileDrawer.classList.remove('-translate-x-full'), 10);
    };

    const closeMenu = () => {
        if (mobileDrawer) mobileDrawer.classList.add('-translate-x-full');
        if (mobileOverlay) setTimeout(() => mobileOverlay.classList.add('hidden'), 300);
    };

    if (btnOpenMenu) btnOpenMenu.addEventListener('click', openMenu);
    if (btnCloseMenu) btnCloseMenu.addEventListener('click', closeMenu);
    if (mobileOverlay) mobileOverlay.addEventListener('click', closeMenu);

    // Xử lý Đăng xuất
    const btnKhoLogout = document.getElementById('btnKhoLogout');
    if (btnKhoLogout) {
        btnKhoLogout.addEventListener('click', () => {
            if(confirm("Bạn có chắc chắn muốn đăng xuất khỏi quản lý kho?")) {
                localStorage.removeItem('jwtToken');
                localStorage.removeItem('userRole');
                window.location.hash = '#/login';
            }
        });
    }

    // ==========================================
    // LOGIC MODAL THÊM SẢN PHẨM & TOAST BÁO LỖI
    // ==========================================
    const addMatModal = document.getElementById('addMaterialModal');
    const btnCancelAddMat = document.getElementById('btnCancelAddMat');
    const addMatForm = document.getElementById('addMaterialForm');
    
    const errorToast = document.getElementById('errorToast');
    const closeToast = document.getElementById('closeToast');
    let toastTimeout; // Biến lưu trữ thời gian ẩn toast

    // 1. Mở Modal - Lắng nghe click từ document thay vì gắn event listener trực tiếp
    // Vì btnOpenAddMat có thể không tồn tại ngay khi initWarehouseEvents chạy (do thay đổi trang).
    document.addEventListener('click', (e) => {
        const btnOpenAddMat = e.target.closest('#btnOpenAddMat');
        if (btnOpenAddMat && addMatModal) {
            addMatModal.classList.remove('hidden');
            setTimeout(() => {
                addMatModal.classList.remove('opacity-0');
                const content = document.getElementById('addMaterialContent');
                if (content) content.classList.remove('scale-95');
            }, 10);
        }
    });

    // 2. Đóng Modal
    const closeModal = () => {
        if (!addMatModal) return;
        addMatModal.classList.add('opacity-0');
        const content = document.getElementById('addMaterialContent');
        if (content) content.classList.add('scale-95');
        setTimeout(() => addMatModal.classList.add('hidden'), 300);
    };
    if (btnCancelAddMat) btnCancelAddMat.addEventListener('click', closeModal);

    // 3. Hiển thị & Ẩn Toast
    const showToast = () => {
        if (!errorToast) return;
        errorToast.classList.remove('-translate-y-[150%]', 'opacity-0');
        clearTimeout(toastTimeout);
        // Tự động ẩn sau 3 giây
        toastTimeout = setTimeout(hideToast, 3000);
    };

    const hideToast = () => {
        if (!errorToast) return;
        errorToast.classList.add('-translate-y-[150%]', 'opacity-0');
    };
    if (closeToast) closeToast.addEventListener('click', hideToast);

    // 4. Xử lý Submit Form & Validate
    if (addMatForm) {
        addMatForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Chặn việc tải lại trang
            
            // Lấy giá trị số lượng
            const qtyInput = document.getElementById('matQty');
            const qty = parseFloat(qtyInput ? qtyInput.value : 0);
            
            // Validate: Nếu nhỏ hơn hoặc bằng 0 -> Hiện Toast
            if (qty <= 0 || isNaN(qty)) {
                showToast(); 
            } else {
                // Hợp lệ: Tạm thời hiển thị alert thành công
                alert("Đã thêm sản phẩm thành công!");
                addMatForm.reset(); // Xóa trắng form
                closeModal(); // Đóng modal
            }
        });
    }

    // LOGIC MODAL TẠO NGUYÊN LIỆU MỚI (Trang Nguyên liệu)
    const newMatModal = document.getElementById('createNewMaterialModal');
    const newMatContent = document.getElementById('createNewMaterialContent');
    const btnOpenNewMat = document.getElementById('btnOpenNewMaterial');
    const btnCloseNewMat = document.getElementById('btnCloseNewMaterial');
    const btnCancelNewMat = document.getElementById('btnCancelNewMat');

    const openNewMatModal = () => {
        if (!newMatModal) return;
        newMatModal.classList.remove('hidden');
        setTimeout(() => {
            newMatModal.classList.remove('opacity-0');
            newMatContent.classList.remove('scale-95');
        }, 10);
    };

    const closeNewMatModal = () => {
        if (!newMatModal) return;
        newMatModal.classList.add('opacity-0');
        newMatContent.classList.add('scale-95');
        setTimeout(() => newMatModal.classList.add('hidden'), 300);
    };

    if (btnOpenNewMat) btnOpenNewMat.addEventListener('click', openNewMatModal);
    if (btnCloseNewMat) btnCloseNewMat.addEventListener('click', closeNewMatModal);
    if (btnCancelNewMat) btnCancelNewMat.addEventListener('click', closeNewMatModal);

    // ==========================================
    // LOGIC TÌM KIẾM TRÊN CÁC TRANG CÓ BẢNG
    // ==========================================
    // Xử lý tìm kiếm nhập kho
    const searchImportInput = document.querySelector('input[placeholder="Tìm mã PN, nhà cung cấp..."]');
    if (searchImportInput) {
        searchImportInput.addEventListener('input', (e) => {
            const keyword = e.target.value.toLowerCase().trim();
            // Lọc table desktop
            const rowsDesktop = document.querySelectorAll('table tbody tr');
            rowsDesktop.forEach(row => {
                const id = row.cells[0].textContent.toLowerCase();
                const supplier = row.cells[1].textContent.toLowerCase();
                if (id.includes(keyword) || supplier.includes(keyword)) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
            // Lọc mobile cards
            const cardsMobile = document.querySelectorAll('.md\\:hidden .bg-white.rounded-3xl');
            cardsMobile.forEach(card => {
                const text = card.textContent.toLowerCase();
                if (text.includes(keyword)) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    // Xử lý tìm kiếm xuất kho
    const searchExportInput = document.querySelector('input[placeholder="Tìm mã PX, lý do xuất..."]');
    if (searchExportInput) {
        searchExportInput.addEventListener('input', (e) => {
            const keyword = e.target.value.toLowerCase().trim();
            const rows = document.querySelectorAll('table tbody tr');
            rows.forEach(row => {
                const id = row.cells[0].textContent.toLowerCase();
                const reason = row.cells[1].textContent.toLowerCase();
                if (id.includes(keyword) || reason.includes(keyword)) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        });
    }

    // Xử lý tìm kiếm nguyên liệu
    const searchMaterialInput = document.querySelector('input[placeholder="Tìm mã hoặc tên nguyên liệu..."]');
    if (searchMaterialInput) {
        searchMaterialInput.addEventListener('input', (e) => {
            const keyword = e.target.value.toLowerCase().trim();
            const rows = document.querySelectorAll('table tbody tr');
            rows.forEach(row => {
                const id = row.cells[0].textContent.toLowerCase();
                const name = row.cells[1].textContent.toLowerCase();
                if (id.includes(keyword) || name.includes(keyword)) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        });
    }
}