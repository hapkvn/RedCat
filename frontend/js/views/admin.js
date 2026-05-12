// --- CÁC ICON SVG DÙNG CHUNG ---
const icons = {
    logo: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>`,
    logout: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>`,
    menu: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`,
    close: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`,
    search: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="gray" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,
    plus: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>`,
    lock: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`,
    edit: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>`,
    trash: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>`,
    users: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>`
};

// --- DỮ LIỆU MẪU ĐỂ RENDER BẢNG ---


// --- HÀM TẠO LAYOUT CHUNG (TOPBAR + SIDEBAR) ---
function getAdminLayout(contentHTML) {
    return `
        <div class="flex h-screen bg-gray-50 font-sans">
            
            <aside class="hidden md:flex flex-col w-64 bg-white border-r border-gray-200">
                <div class="h-16 flex items-center px-6 border-b border-gray-200">
                    <div class="flex items-center text-red-500 font-bold text-xl gap-2">
                        <div class="bg-red-500 text-white p-1.5 rounded-lg">${icons.logo}</div>
                        Red Cat
                    </div>
                </div>
                <nav class="flex-1 p-4">
                    <a href="#/admin" class="flex items-center gap-3 text-red-500 bg-red-50 px-4 py-3 rounded-lg font-medium">
                        ${icons.users} Nhân viên
                    </a>
                    </nav>
            </aside>

            <div id="mobileOverlay" class="fixed inset-0 bg-black bg-opacity-50 z-40 hidden transition-opacity"></div>
            <aside id="mobileDrawer" class="fixed top-0 left-0 w-3/4 max-w-sm h-full bg-white z-50 transform -translate-x-full transition-transform duration-300 flex flex-col md:hidden">
                <div class="h-16 flex items-center justify-between px-4 border-b border-gray-200">
                    <div class="flex items-center text-red-500 font-bold text-xl gap-2">
                        <div class="bg-red-500 text-white p-1.5 rounded-lg">${icons.logo}</div>
                        Red Cat
                    </div>
                    <button id="btnCloseMenu" class="text-gray-600 p-2 hover:bg-gray-100 rounded">${icons.close}</button>
                </div>
                <nav class="flex-1 p-4">
                    <a href="#/admin" class="flex items-center gap-3 text-red-500 bg-red-50 px-4 py-3 rounded-lg font-medium">
                        ${icons.users} Nhân viên
                    </a>
                </nav>
                <div class="p-4 border-t border-gray-200">
                    <button id="btnMobileLogout" class="flex items-center gap-3 text-gray-600 font-medium w-full px-4 py-2 hover:bg-gray-50 rounded">
                        ${icons.logout} Đăng xuất
                    </button>
                </div>
            </aside>

            <div class="flex-1 flex flex-col overflow-hidden">
                
                <header class="h-16 bg-white border-b border-gray-200 flex justify-between items-center px-4 md:px-6">
                    <button id="btnOpenMenu" class="md:hidden text-gray-600 p-2 -ml-2 rounded hover:bg-gray-100">
                        ${icons.menu}
                    </button>
                    
                    <div class="md:hidden flex items-center text-red-500 font-bold text-lg gap-2">
                        Red Cat
                    </div>

                    <div class="hidden md:block flex-1"></div>

                    <button id="btnDesktopLogout" class="hidden md:flex items-center text-gray-600 hover:text-gray-900 gap-2 font-medium">
                        Đăng xuất ${icons.logout}
                    </button>
                </header>
                
                <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-4 md:p-8">
                    ${contentHTML}
                </main>
            </div>
        </div>
    `;
}

// --- HÀM RENDER NỘI DUNG BẢNG NHÂN VIÊN ---
function getEmployeePageContent(employees) {
    const rowsHTML = employees.map(emp => `
        <tr class="border-b border-gray-100 hover:bg-gray-50 transition-colors" 
            data-id="${emp.id}" data-username="${emp.username}" data-is-active="${emp.isActive}">
            <td class="py-4 px-4 font-medium text-gray-800">${emp.username}</td>
            <td class="py-4 px-4 text-blue-500 hidden md:table-cell">${emp.fullName || 'Chưa cập nhật'}</td>
            <td class="py-4 px-4 text-blue-500 hidden md:table-cell">${emp.phoneNumber || 'N/A'}</td>
            <td class="py-4 px-4">
                <span class="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                    ${emp.role}
                </span>
            </td>
            <td class="py-4 px-4">
                <div class="flex gap-2">
                    ${emp.isActive
        ? `<button class="btn-lock bg-green-500 text-white p-1.5 rounded hover:bg-green-600 shadow-sm">${icons.lock}</button>`
        : `<button class="btn-lock bg-red-500 text-white p-1.5 rounded hover:bg-red-600 shadow-sm">${icons.lock}</button>`
    }
                    <button class="bg-blue-500 text-white p-1.5 rounded hover:bg-blue-600 shadow-sm">${icons.edit}</button>
                    <button class="bg-red-500 text-white p-1.5 rounded hover:bg-red-600 shadow-sm">${icons.trash}</button>
                </div>
            </td>
        </tr>
    `).join('');
    
    // Add return statement to fix the syntax error
    return `
        <div class="bg-white rounded-lg shadow-sm border border-gray-200">
            <table class="w-full text-left border-collapse">
                <thead>
                    <tr class="bg-gray-50 border-b border-gray-200 text-gray-600 font-medium text-sm">
                        <th class="py-3 px-4">Tên đăng nhập</th>
                        <th class="py-3 px-4 hidden md:table-cell">Họ Tên</th>
                        <th class="py-3 px-4 hidden md:table-cell">SĐT</th>
                        <th class="py-3 px-4">Quyền</th>
                        <th class="py-3 px-4 w-32">Thao tác</th>
                    </tr>
                </thead>
                <tbody id="employeeTableBody">
                    ${rowsHTML}
                </tbody>
            </table>
        </div>
    `;
}

// --- HÀM CHÍNH: XUẤT HTML RA CHỖ ROUTER ---
export function renderAdminView(employees = []) {
    const pageContent = getEmployeePageContent(employees);
    return getAdminLayout(pageContent);
}

// --- HÀM KHỞI TẠO SỰ KIỆN CHO TRANG ADMIN ---
export function initAdminEvents() {
    const btnOpenMenu = document.getElementById('btnOpenMenu');
    const btnCloseMenu = document.getElementById('btnCloseMenu');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const mobileOverlay = document.getElementById('mobileOverlay');

    // Hàm Mở Sidebar Mobile
    const openMenu = () => {
        mobileOverlay.classList.remove('hidden');
        // setTimeout để tạo hiệu ứng mượt
        setTimeout(() => {
            mobileDrawer.classList.remove('-translate-x-full');
        }, 10);
    };

    // Hàm Đóng Sidebar Mobile
    const closeMenu = () => {
        mobileDrawer.classList.add('-translate-x-full');
        setTimeout(() => {
            mobileOverlay.classList.add('hidden');
        }, 300); // Đợi CSS transition chạy xong
    };

    if (btnOpenMenu) btnOpenMenu.addEventListener('click', openMenu);
    if (btnCloseMenu) btnCloseMenu.addEventListener('click', closeMenu);
    if (mobileOverlay) mobileOverlay.addEventListener('click', closeMenu);

    // Xử lý sự kiện Đăng xuất
    const handleLogout = () => {
        if (confirm("Bạn có chắc chắn muốn đăng xuất?")) {
            localStorage.removeItem('jwtToken');
            localStorage.removeItem('userRole');
            window.location.hash = '#/login';
        }
    };

    const btnDesktopLogout = document.getElementById('btnDesktopLogout');
    const btnMobileLogout = document.getElementById('btnMobileLogout');

    if (btnDesktopLogout) btnDesktopLogout.addEventListener('click', handleLogout);
    if (btnMobileLogout) btnMobileLogout.addEventListener('click', handleLogout);
}