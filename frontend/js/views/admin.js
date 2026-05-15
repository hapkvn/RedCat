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

// --- HÀM TẠO LAYOUT CHUNG (TOPBAR + SIDEBAR) ---
function getAdminLayout(contentHTML) {
    const cameraIcon = `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>`;

    return `
        <!-- MODAL THÊM NHÂN VIÊN MỚI -->
        <div id="addEmployeeModal" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center hidden opacity-0 transition-opacity duration-300">
            <!-- Khung Modal: Chiếm max-w-2xl để có không gian dàn ngang trên Desktop -->
            <div class="bg-white rounded-2xl w-full max-w-lg lg:max-w-2xl p-6 md:p-8 mx-4 max-h-[90vh] overflow-y-auto transform scale-95 transition-transform duration-300" id="modalContent">
                <h2 class="text-2xl font-bold mb-6 text-gray-900">Nhân viên mới</h2>
                
                <!-- Icon Camera -->
                <div class="mb-6">
                    <div class="w-16 h-16 border-2 border-gray-800 rounded-xl flex items-center justify-center cursor-pointer hover:bg-gray-50">
                        ${cameraIcon}
                    </div>
                </div>

                <form id="addEmployeeForm" class="space-y-4">
                    <!-- Vai trò (Luôn 1 cột, Combobox) -->
                    <div>
                        <label class="block text-sm font-semibold mb-1 text-gray-800">Vai trò nhân viên</label>
                        <select id="empRole" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-red-400 outline-none bg-white text-gray-700">
                            <option value="" disabled selected>-- Chọn vai trò --</option>
                            <option value="ADMIN">Quản lý</option>
                            <option value="STAFF">Nhân viên</option>
                            <option value="ACCOUNTANT">Kế toán</option>
                            <option value="WAREHOUSE">Kho</option>
                        </select>
                    </div>

                    <!-- Tên tài khoản & Tên nhân viên (Ngang trên Desktop, Dọc trên Mobile/Tablet) -->
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-semibold mb-1 text-gray-800">Tên tài khoản</label>
                            <input type="text" id="empUsername" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-red-400 outline-none">
                        </div>
                        <div>
                            <label class="block text-sm font-semibold mb-1 text-gray-800">Tên nhân viên</label>
                            <input type="text" id="empFullName" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-red-400 outline-none">
                        </div>
                    </div>

                    <!-- Số điện thoại & Email (Ngang trên Desktop, Dọc trên Mobile/Tablet) -->
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-semibold mb-1 text-gray-800">Số điện thoại</label>
                            <input type="text" id="empPhone" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-red-400 outline-none">
                            <!-- Thông báo lỗi -->
                            <span id="errPhone" class="text-red-500 text-xs font-bold mt-1 hidden">Số điện thoại đã được sử dụng</span>
                        </div>
                        <div>
                            <label class="block text-sm font-semibold mb-1 text-gray-800">Email</label>
                            <input type="email" id="empEmail" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-red-400 outline-none">
                        </div>
                    </div>

                    <!-- Mật khẩu & Nhập lại mật khẩu (Luôn 1 cột để giữ thiết kế) -->
                    <div>
                        <label class="block text-sm font-semibold mb-1 text-gray-800">Mật khẩu</label>
                        <input type="password" id="empPassword" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-red-400 outline-none">
                    </div>
                    <div>
                        <label class="block text-sm font-semibold mb-1 text-gray-800">Nhập lại mật khẩu</label>
                        <input type="password" id="empConfirmPassword" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-red-400 outline-none">
                        <!-- Thông báo lỗi -->
                        <span id="errPassword" class="text-red-500 text-xs font-bold mt-1 hidden">Mật khẩu không khớp</span>
                    </div>

                    <!-- Thông báo lỗi chung -->
                    <div id="errGeneral" class="text-red-500 text-sm font-bold text-center hidden mt-2">Vui lòng nhập đủ thông tin</div>

                    <!-- Cụm nút bấm (Luôn ngang hàng) -->
                    <div class="grid grid-cols-2 gap-4 mt-8">
                        <button type="submit" class="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition-colors">Thêm nhân viên</button>
                        <button type="button" id="btnCancelAdd" class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 rounded-lg transition-colors">Hủy</button>
                    </div>
                </form>
            </div>
        </div>

        <!-- MODAL CHỈNH SỬA NHÂN VIÊN -->
        <div id="editEmployeeModal" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center hidden opacity-0 transition-opacity duration-300">
            <!-- Modal này dùng max-w-md để tạo form 1 cột dọc như thiết kế -->
            <div class="bg-white rounded-2xl w-full max-w-md p-6 md:p-8 mx-4 max-h-[90vh] overflow-y-auto transform scale-95 transition-transform duration-300 text-gray-800" id="editModalContent">
                <h2 class="text-2xl font-bold mb-6 text-gray-900">Chỉnh sửa nhân viên</h2>
                
                <!-- Avatar nhân viên -->
                <div class="mb-6">
                    <img src="https://i.pravatar.cc/150?img=11" alt="Avatar" class="w-20 h-20 rounded-lg object-cover border border-gray-200 shadow-sm">
                </div>

                <form id="editEmployeeForm" class="space-y-4">
                    <!-- ID ẩn để dùng khi submit form -->
                    <input type="hidden" id="editEmpId">

                    <div>
                        <label class="block text-sm font-semibold mb-1">Vai trò nhân viên</label>
                        <!-- Thay text input bằng select cho nhất quán -->
                        <select id="editEmpRole" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-red-400 outline-none bg-white text-gray-700">
                            <option value="" disabled selected>-- Chọn vai trò --</option>
                            <option value="ADMIN">Quản lý</option>
                            <option value="STAFF">Nhân viên</option>
                            <option value="ACCOUNTANT">Kế toán</option>
                            <option value="WAREHOUSE">Kho</option>
                        </select>
                    </div>

                    <div>
                        <label class="block text-sm font-semibold mb-1">Tên tài khoản (Không thể sửa)</label>
                        <input type="text" id="editEmpUsername" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-red-400 outline-none bg-gray-100" readonly>
                        <span id="errEditUsername" class="text-red-500 text-xs font-bold mt-1 hidden">Tên tài khoản đã được sử dụng</span>
                    </div>

                    <div>
                        <label class="block text-sm font-semibold mb-1">Tên nhân viên</label>
                        <input type="text" id="editEmpFullName" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-red-400 outline-none">
                    </div>

                    <div>
                        <label class="block text-sm font-semibold mb-1">Số điện thoại</label>
                        <input type="text" id="editEmpPhone" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-red-400 outline-none">
                        <span id="errEditPhone" class="text-red-500 text-xs font-bold mt-1 hidden">Số điện thoại đã được sử dụng</span>
                    </div>

                    <div>
                        <label class="block text-sm font-semibold mb-1">Mật khẩu mới</label>
                        <input type="password" id="editEmpNewPassword" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-red-400 outline-none" placeholder="Bỏ trống nếu không đổi mật khẩu">
                        <span id="errEditNewPassword" class="text-red-500 text-xs font-bold mt-1 hidden">Mật khẩu quá yếu (Yêu cầu &gt;= 6 ký tự)</span>
                    </div>

                    <div>
                        <label class="block text-sm font-semibold mb-1">Nhập lại mật khẩu mới</label>
                        <input type="password" id="editEmpConfirmPassword" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-red-400 outline-none">
                        <span id="errEditConfirmPassword" class="text-red-500 text-xs font-bold mt-1 hidden">Mật khẩu không khớp</span>
                    </div>

                    <div class="grid grid-cols-2 gap-4 mt-8 pt-4">
                        <button type="submit" class="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition-colors">Thay đổi</button>
                        <button type="button" id="btnCancelEdit" class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 rounded-lg transition-colors">Hủy</button>
                    </div>
                </form>
            </div>
        </div>

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
        <tr class="border-b border-gray-100 hover:bg-gray-50 transition-colors employee-row" 
            data-id="${emp.id}" 
            data-username="${emp.username || ''}" 
            data-fullname="${emp.fullName || ''}"
            data-phone="${emp.phoneNumber || ''}"
            data-role="${emp.role || ''}"
            data-is-active="${emp.active}">
            <td class="py-4 px-4 font-medium text-gray-800">${emp.username}</td>
            <td class="py-4 px-4 text-blue-500 hidden md:table-cell">${emp.fullName || 'Chưa cập nhật'}</td>
            <td class="py-4 px-4 text-blue-500 hidden md:table-cell">${emp.email || 'N/A'}</td>
            <td class="py-4 px-4 text-blue-500 hidden md:table-cell">${emp.phoneNumber || 'N/A'}</td>
            <td class="py-4 px-4">
                <span class="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                    ${emp.role === 'ADMIN' ? 'Quản lý' : 
                      emp.role === 'ACCOUNTANT' ? 'Kế toán' : 
                      emp.role === 'WAREHOUSE' ? 'Kho' : 'Nhân viên'}
                </span>
            </td>
            <td class="py-4 px-4">
                <div class="flex gap-2">
                    ${emp.active
        ? `<button class="btn-lock bg-green-500 text-white p-1.5 rounded hover:bg-green-600 shadow-sm">${icons.lock}</button>`
        : `<button class="btn-lock bg-red-500 text-white p-1.5 rounded hover:bg-red-600 shadow-sm">${icons.lock}</button>`
    }
                    <button class="btn-edit bg-blue-500 text-white p-1.5 rounded hover:bg-blue-600 shadow-sm" title="Sửa">${icons.edit}</button>
                    <button class="btn-delete bg-red-500 text-white p-1.5 rounded hover:bg-red-600 shadow-sm">${icons.trash}</button>
                </div>
            </td>
        </tr>
    `).join('');
    
    return `
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <h2 class="text-2xl font-bold text-gray-800">Quản lý nhân viên</h2>
            
            <div class="flex flex-col sm:flex-row w-full md:w-auto items-stretch sm:items-center gap-4">
                <!-- HỘP TÌM KIẾM -->
                <div class="relative w-full sm:w-auto">
                    <!-- Icon Kính lúp -->
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="gray" stroke-width="2">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </div>
                    
                    <!-- Ô nhập liệu (Input) -->
                    <input type="text" id="searchInput"
                           class="bg-purple-50 text-gray-700 rounded-lg pl-10 pr-4 py-2 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-red-300" 
                           placeholder="Tìm kiếm nhân viên...">
                </div>

                <button id="btnOpenAddModal" class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors whitespace-nowrap">
                    ${icons.plus} Thêm nhân viên mới
                </button>
            </div>
        </div>
        <div class="bg-white rounded-lg shadow-sm border border-gray-200">
            <table class="w-full text-left border-collapse">
                <thead>
                    <tr class="bg-gray-50 border-b border-gray-200 text-gray-600 font-medium text-sm">
                        <th class="py-3 px-4">Tên đăng nhập</th>
                        <th class="py-3 px-4 hidden md:table-cell">Họ Tên</th>
                        <th class="py-3 px-4 hidden md:table-cell">Email</th>
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
        setTimeout(() => {
            mobileDrawer.classList.remove('-translate-x-full');
        }, 10);
    };

    // Hàm Đóng Sidebar Mobile
    const closeMenu = () => {
        mobileDrawer.classList.add('-translate-x-full');
        setTimeout(() => {
            mobileOverlay.classList.add('hidden');
        }, 300);
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

    const btnOpenAddModal = document.getElementById('btnOpenAddModal');
    const modal = document.getElementById('addEmployeeModal');
    const modalContent = document.getElementById('modalContent');
    const btnCancelAdd = document.getElementById('btnCancelAdd');
    const addEmployeeForm = document.getElementById('addEmployeeForm');

    // Hàm mở Modal
    if (btnOpenAddModal) {
        btnOpenAddModal.addEventListener('click', () => {
            modal.classList.remove('hidden');
            setTimeout(() => {
                modal.classList.remove('opacity-0');
                modalContent.classList.remove('scale-95');
            }, 10);
        });
    }

    // Hàm đóng Modal
    const closeModal = () => {
        modal.classList.add('opacity-0');
        modalContent.classList.add('scale-95');
        setTimeout(() => {
            modal.classList.add('hidden');
            addEmployeeForm.reset(); 
            hideAllErrors(); 
        }, 300);
    };

    if (btnCancelAdd) btnCancelAdd.addEventListener('click', closeModal);

    const hideAllErrors = () => {
        document.getElementById('errPhone').classList.add('hidden');
        document.getElementById('errPassword').classList.add('hidden');
        document.getElementById('errGeneral').classList.add('hidden');
    };

    if (addEmployeeForm) {
        addEmployeeForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            hideAllErrors(); 

            const role = document.getElementById('empRole').value; 
            const username = document.getElementById('empUsername').value.trim();
            const fullName = document.getElementById('empFullName').value.trim();
            const phone = document.getElementById('empPhone').value.trim();
            const email = document.getElementById('empEmail').value.trim();
            const password = document.getElementById('empPassword').value;
            const confirmPassword = document.getElementById('empConfirmPassword').value;

            let hasError = false;

            if (!role || !username || !fullName || !phone || !email || !password || !confirmPassword) {
                document.getElementById('errGeneral').classList.remove('hidden');
                hasError = true;
            }

            if (password !== confirmPassword) {
                document.getElementById('errPassword').classList.remove('hidden');
                hasError = true;
            }

            if (hasError) return;

            console.log("Đang gọi API thêm nhân viên...", { username, fullName, role, phone, email });
            
            try {
                const token = localStorage.getItem('jwtToken');
                const response = await fetch('http://localhost:8080/api/admin/users', {
                    method: 'POST',
                    headers: {
                        'Authorization': 'Bearer ' + token,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ 
                        username: username, 
                        password: password,
                        role: role,
                        fullName: fullName,
                        phoneNumber: phone,
                        email: email
                    })
                });

                if (response.ok) {
                    alert("Đã thêm nhân viên thành công!");
                    closeModal();
                    // Tự động reload lại component admin để lấy dữ liệu mới
                    window.location.reload(); 
                } else {
                    const errorData = await response.json();
                    alert("Lỗi khi thêm nhân viên: " + (errorData.message || "Tên tài khoản, email hoặc số điện thoại đã tồn tại."));
                }
            } catch (error) {
                console.error('Lỗi khi gọi API:', error);
                alert("Không thể kết nối đến máy chủ.");
            }
        });
    }

    // --- XỬ LÝ TÌM KIẾM NHÂN VIÊN (Real-time) ---
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const keyword = e.target.value.toLowerCase().trim();
            const rows = document.querySelectorAll('#employeeTableBody .employee-row');
            
            rows.forEach(row => {
                const username = (row.getAttribute('data-username') || '').toLowerCase();
                const fullName = (row.getAttribute('data-fullname') || '').toLowerCase();
                const phone = (row.getAttribute('data-phone') || '').toLowerCase();
                
                // Nếu tìm thấy keyword ở 1 trong 3 trường thì hiển thị, ngược lại ẩn đi
                if (username.includes(keyword) || fullName.includes(keyword) || phone.includes(keyword)) {
                    row.style.display = ''; 
                } else {
                    row.style.display = 'none'; 
                }
            });
        });
    }

    // --- XỬ LÝ SỰ KIỆN KHÓA / MỞ KHÓA NHÂN VIÊN ---
    const lockButtons = document.querySelectorAll('.btn-lock');
    lockButtons.forEach(btn => {
        btn.addEventListener('click', async (e) => {
            // Tìm thẻ <tr> chứa nút bấm để lấy dữ liệu nhân viên
            const row = e.target.closest('tr');
            if (!row) return;

            const userId = row.getAttribute('data-id');
            const username = row.getAttribute('data-username');
            // Chuyển chuỗi "true"/"false" sang kiểu boolean thực sự
            const currentStatus = row.getAttribute('data-is-active') === 'true'; 

            // Xác định trạng thái mới (đảo ngược lại)
            const newStatus = !currentStatus;
            
            const actionName = newStatus ? 'Mở khóa' : 'Khóa';
            if (!confirm(`Bạn có chắc chắn muốn ${actionName} tài khoản "${username}" không?`)) {
                return;
            }

            try {
                const token = localStorage.getItem('jwtToken');
                const response = await fetch(`http://localhost:8080/api/admin/users/${userId}/status`, {
                    method: 'PATCH',
                    headers: {
                        'Authorization': 'Bearer ' + token,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ isActive: newStatus })
                });

                if (response.ok) {
                    alert(`${actionName} nhân viên thành công!`);
                    // Tự động reload lại component admin để lấy dữ liệu mới
                    window.location.reload();
                } else {
                    const errorData = await response.json();
                    alert(`Lỗi khi thao tác: ${errorData.message || 'Lỗi không xác định'}`);
                }
            } catch (error) {
                console.error('Lỗi khi gọi API:', error);
                alert("Không thể kết nối đến máy chủ.");
            }
        });
    });

    // --- XỬ LÝ SỰ KIỆN XÓA NHÂN VIÊN ---
    const deleteButtons = document.querySelectorAll('.btn-delete');
    deleteButtons.forEach(btn => {
        btn.addEventListener('click', async (e) => {
            // Tìm thẻ <tr> chứa nút bấm để lấy dữ liệu nhân viên
            const row = e.target.closest('tr');
            if (!row) return;

            const userId = row.getAttribute('data-id');
            const username = row.getAttribute('data-username');

            if (!confirm(`CẢNH BÁO: Bạn có chắc chắn muốn XÓA VĨNH VIỄN tài khoản "${username}" không? Thao tác này không thể hoàn tác!`)) {
                return;
            }

            try {
                const token = localStorage.getItem('jwtToken');
                const response = await fetch(`http://localhost:8080/api/admin/users/${userId}`, {
                    method: 'DELETE',
                    headers: {
                        'Authorization': 'Bearer ' + token,
                        'Content-Type': 'application/json'
                    }
                });

                if (response.ok) {
                    alert(`Đã xóa nhân viên "${username}" thành công!`);
                    // Xóa thẻ tr khỏi giao diện HTML mà không cần reload trang
                    row.remove();
                } else {
                    const errorData = await response.json();
                    alert(`Lỗi khi xóa: ${errorData.message || 'Lỗi không xác định'}`);
                }
            } catch (error) {
                console.error('Lỗi khi gọi API:', error);
                alert("Không thể kết nối đến máy chủ.");
            }
        });
    });

    // 6.5. Modal Chỉnh Sửa Nhân Viên Logic
    const editModal = document.getElementById('editEmployeeModal');
    const editModalContent = document.getElementById('editModalContent');
    const btnCancelEdit = document.getElementById('btnCancelEdit');
    const editEmployeeForm = document.getElementById('editEmployeeForm');

    // Hàm ẩn tất cả thông báo lỗi của form Sửa
    const hideAllEditErrors = () => {
        ['errEditUsername', 'errEditPhone', 'errEditNewPassword', 'errEditConfirmPassword'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.classList.add('hidden');
        });
    };

    // Hàm đóng Modal Sửa
    const closeEditModal = () => {
        editModal.classList.add('opacity-0');
        editModalContent.classList.add('scale-95');
        setTimeout(() => {
            editModal.classList.add('hidden');
            if (editEmployeeForm) editEmployeeForm.reset();
            hideAllEditErrors();
        }, 300);
    };

    if (btnCancelEdit) btnCancelEdit.addEventListener('click', closeEditModal);

    // Lắng nghe sự kiện click nút "Sửa" trên bảng
    const employeeTableBody = document.getElementById('employeeTableBody');
    if (employeeTableBody) {
        employeeTableBody.addEventListener('click', (e) => {
            const editButton = e.target.closest('.btn-edit');
            if (editButton) {
                const row = editButton.closest('tr');
                
                // Reset form và lỗi trước
                if (editEmployeeForm) editEmployeeForm.reset();
                hideAllEditErrors();

                // Lấy dữ liệu từ thẻ tr đổ vào các ô input
                document.getElementById('editEmpId').value = row.dataset.id || ''; // Lưu ID để gọi API
                document.getElementById('editEmpRole').value = row.dataset.role || '';
                document.getElementById('editEmpUsername').value = row.dataset.username || '';
                document.getElementById('editEmpFullName').value = row.dataset.fullname || '';
                document.getElementById('editEmpPhone').value = row.dataset.phone || '';

                // Hiển thị Modal
                editModal.classList.remove('hidden');
                setTimeout(() => {
                    editModal.classList.remove('opacity-0');
                    editModalContent.classList.remove('scale-95');
                }, 10);
            }
        });
    }

    // Xử lý Submit lưu thay đổi
    if (editEmployeeForm) {
        editEmployeeForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            hideAllEditErrors();

            const userId = document.getElementById('editEmpId').value;
            const role = document.getElementById('editEmpRole').value;
            const fullName = document.getElementById('editEmpFullName').value.trim();
            const phone = document.getElementById('editEmpPhone').value.trim();
            const newPass = document.getElementById('editEmpNewPassword').value;
            const confirmPass = document.getElementById('editEmpConfirmPassword').value;

            let hasError = false;

            // Nếu có nhập mật khẩu mới thì phải check khớp
            if (newPass) {
                if (newPass.length < 6) {
                    document.getElementById('errEditNewPassword').classList.remove('hidden');
                    hasError = true;
                }
                if (newPass !== confirmPass) {
                    document.getElementById('errEditConfirmPassword').classList.remove('hidden');
                    hasError = true;
                }
            }

            if (hasError) return;

            // Xử lý lưu thành công (Call API)
            try {
                const token = localStorage.getItem('jwtToken');
                const response = await fetch(`http://localhost:8080/api/admin/users/${userId}`, {
                    method: 'PUT',
                    headers: {
                        'Authorization': 'Bearer ' + token,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ 
                        fullName: fullName,
                        role: role,
                        phoneNumber: phone,
                        password: newPass // API backend sẽ kiểm tra nếu pass không rỗng thì mới đổi
                    })
                });

                if (response.ok) {
                    alert(`Đã lưu thay đổi thông tin nhân viên thành công!`);
                    closeEditModal();
                    // Tự động reload lại component admin để lấy dữ liệu mới
                    window.location.reload(); 
                } else {
                    const errorData = await response.json();
                    alert("Lỗi khi cập nhật nhân viên: " + (errorData.message || "Không hợp lệ"));
                }
            } catch (error) {
                console.error('Lỗi khi gọi API:', error);
                alert("Không thể kết nối đến máy chủ.");
            }
        });
    }
}