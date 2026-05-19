// ==========================================
// 1. CÁC ICON SVG DÙNG CHUNG
// ==========================================
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

// ==========================================
// 2. HÀM TẠO LAYOUT CHUNG (TOPBAR + SIDEBAR)
// ==========================================
function getAdminLayout(contentHTML) {
    return `
        <div id="addEmployeeModal" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center hidden opacity-0 transition-opacity duration-300">
            <div class="bg-white rounded-2xl w-full max-w-lg lg:max-w-2xl p-6 md:p-8 mx-4 max-h-[90vh] overflow-y-auto transform scale-95 transition-transform duration-300" id="modalContent">
                <h2 class="text-2xl font-bold mb-6 text-gray-900">Nhân viên mới</h2>

                <form id="addEmployeeForm" class="space-y-4">
                    <div class="flex items-center gap-4">
                        <img id="avatarPreview" src="https://via.placeholder.com/80" alt="Avatar Preview" class="w-20 h-20 rounded-lg object-cover border border-gray-200">
                        <div>
                            <label for="avatarUpload" class="cursor-pointer bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-lg text-sm transition-colors">
                                Tải ảnh lên
                            </label>
                            <input type="file" id="avatarUpload" class="hidden" accept="image/*">
                            <input type="hidden" id="avatarUrl">
                        </div>
                    </div>

                    <div>
                        <label class="block text-sm font-semibold mb-1 text-gray-800">Vai trò nhân viên <span class="text-red-500">*</span></label>
                        <select id="empRole" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-red-400 outline-none bg-white text-gray-700" required>
                            <option value="" disabled selected>-- Chọn vai trò --</option>
                            <option value="ADMIN">ADMIN</option>
                            <option value="MANAGER">QUẢN LÝ</option>
                            <option value="STAFF">Nhân viên</option>
                            <option value="ACCOUNTANT">Kế toán</option>
                            <option value="WAREHOUSE">Kho</option>
                        </select>
                    </div>

                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-semibold mb-1 text-gray-800">Tên tài khoản <span class="text-red-500">*</span></label>
                            <input type="text" id="empUsername" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-red-400 outline-none" required>
                        </div>
                        <div>
                            <label class="block text-sm font-semibold mb-1 text-gray-800">Tên nhân viên <span class="text-red-500">*</span></label>
                            <input type="text" id="empFullName" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-red-400 outline-none" required>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-semibold mb-1 text-gray-800">Số điện thoại <span class="text-red-500">*</span></label>
                            <input type="text" id="empPhone" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-red-400 outline-none" required>
                            <span id="errPhone" class="text-red-500 text-xs font-bold mt-1 hidden">Số điện thoại đã được sử dụng</span>
                        </div>
                        <div>
                            <label class="block text-sm font-semibold mb-1 text-gray-800">Email</label>
                            <input type="email" id="empEmail" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-red-400 outline-none">
                        </div>
                    </div>

                    <div>
                        <label class="block text-sm font-semibold mb-1 text-gray-800">Mật khẩu <span class="text-red-500">*</span></label>
                        <input type="password" id="empPassword" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-red-400 outline-none" required>
                    </div>
                    <div>
                        <label class="block text-sm font-semibold mb-1 text-gray-800">Nhập lại mật khẩu <span class="text-red-500">*</span></label>
                        <input type="password" id="empConfirmPassword" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-red-400 outline-none" required>
                        <span id="errPassword" class="text-red-500 text-xs font-bold mt-1 hidden">Mật khẩu không khớp!</span>
                    </div>

                    <div id="errGeneral" class="text-red-500 text-sm font-bold text-center hidden mt-2">Vui lòng nhập đủ thông tin bắt buộc (*)</div>

                    <div class="grid grid-cols-2 gap-4 mt-8">
                        <button type="submit" class="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition-colors">Thêm nhân viên</button>
                        <button type="button" id="btnCancelAdd" class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 rounded-lg transition-colors">Hủy</button>
                    </div>
                </form>
            </div>
        </div>

        <div id="editEmployeeModal" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center hidden opacity-0 transition-opacity duration-300">
            <div class="bg-white rounded-2xl w-full max-w-md p-6 md:p-8 mx-4 max-h-[90vh] overflow-y-auto transform scale-95 transition-transform duration-300 text-gray-800" id="editModalContent">
                <h2 class="text-2xl font-bold mb-6 text-gray-900">Chỉnh sửa nhân viên</h2>

                <form id="editEmployeeForm" class="space-y-4">
                    <div class="flex items-center gap-4">
                        <img id="editAvatarPreview" src="https://via.placeholder.com/80" alt="Avatar Preview" class="w-20 h-20 rounded-lg object-cover border border-gray-200">
                        <div>
                            <label for="editAvatarUpload" class="cursor-pointer bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-lg text-sm transition-colors">
                                Đổi ảnh
                            </label>
                            <input type="file" id="editAvatarUpload" class="hidden" accept="image/*">
                            <input type="hidden" id="editAvatarUrl">
                        </div>
                    </div>

                    <input type="hidden" id="editEmpId">

                    <div>
                        <label class="block text-sm font-semibold mb-1">Vai trò nhân viên</label>
                        <select id="editEmpRole" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-red-400 outline-none bg-white text-gray-700">
                            <option value="" disabled>-- Chọn vai trò --</option>
                            <option value="ADMIN">ADMIN</option>
                            <option value="MANAGER">QUẢN LÝ</option>
                            <option value="STAFF">Nhân viên</option>
                            <option value="ACCOUNTANT">Kế toán</option>
                            <option value="WAREHOUSE">Kho</option>
                        </select>
                    </div>

                    <div>
                        <label class="block text-sm font-semibold mb-1">Tên tài khoản (Không thể sửa)</label>
                        <input type="text" id="editEmpUsername" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 bg-gray-100" readonly>
                    </div>

                    <div>
                        <label class="block text-sm font-semibold mb-1">Tên nhân viên</label>
                        <input type="text" id="editEmpFullName" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-red-400 outline-none">
                    </div>

                    <div>
                        <label class="block text-sm font-semibold mb-1">Số điện thoại</label>
                        <input type="text" id="editEmpPhone" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-red-400 outline-none">
                    </div>

                    <div>
                        <label class="block text-sm font-semibold mb-1">Mật khẩu mới</label>
                        <input type="password" id="editEmpNewPassword" class="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-red-400 outline-none" placeholder="Bỏ trống nếu không đổi mật khẩu">
                    </div>

                    <div class="grid grid-cols-2 gap-4 mt-8 pt-4">
                        <button type="submit" class="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition-colors">Lưu thay đổi</button>
                        <button type="button" id="btnCancelEdit" class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 rounded-lg transition-colors">Hủy</button>
                    </div>
                </form>
            </div>
        </div>

        <div class="flex h-screen bg-[#F8FAFC] font-sans">
            <aside class="hidden md:flex flex-col w-64 bg-white border-r border-gray-200 z-20">
                <div class="h-16 flex items-center px-6 border-b border-gray-100">
                    <div class="flex items-center text-[#E33539] font-extrabold text-xl gap-2">
                        <div class="bg-[#E33539] text-white p-1.5 rounded-lg shadow-sm">${icons.logo}</div>
                        Red Cat
                    </div>
                </div>
                <nav class="flex-1 p-4">
                    <a href="#/admin" class="flex items-center gap-3 text-gray-800 font-bold px-4 py-3 rounded-lg transition-colors relative">
                        <div class="text-gray-500">${icons.users}</div>
                        Nhân viên
                    </a>
                </nav>
            </aside>

            <div id="mobileOverlay" class="fixed inset-0 bg-black bg-opacity-50 z-40 hidden transition-opacity"></div>
            <aside id="mobileDrawer" class="fixed top-0 left-0 w-3/4 max-w-sm h-full bg-white z-50 transform -translate-x-full transition-transform duration-300 flex flex-col md:hidden">
                <div class="h-16 flex items-center justify-between px-4 border-b border-gray-100">
                    <div class="flex items-center text-[#E33539] font-extrabold text-xl gap-2">
                        <div class="bg-[#E33539] text-white p-1.5 rounded-lg shadow-sm">${icons.logo}</div>
                        Red Cat
                    </div>
                    <button id="btnCloseMenu" class="text-gray-400 hover:text-gray-800 p-2 rounded transition-colors">${icons.close}</button>
                </div>
                <nav class="flex-1 p-4">
                    <a href="#/admin" class="flex items-center gap-3 text-gray-800 font-bold px-4 py-3 rounded-lg relative">
                        <div class="text-gray-500">${icons.users}</div>
                        Nhân viên
                    </a>
                </nav>
                <div class="p-4 border-t border-gray-100">
                    <button id="btnMobileLogout" class="flex items-center gap-3 text-gray-600 font-medium w-full px-4 py-2 hover:bg-gray-50 rounded transition-colors">
                        ${icons.logout} Đăng xuất
                    </button>
                </div>
            </aside>

            <div class="flex-1 flex flex-col overflow-hidden">
                <header class="h-16 bg-white flex justify-between items-center px-4 md:px-8 border-b border-gray-100 shadow-sm z-10 relative">
                    <button id="btnOpenMenu" class="md:hidden text-gray-600 p-2 -ml-2 rounded hover:bg-gray-100 transition-colors">
                        ${icons.menu}
                    </button>
                    <div class="hidden md:block flex-1"></div>
                    <button id="btnDesktopLogout" class="hidden md:flex items-center text-gray-500 hover:text-gray-900 gap-2 font-medium transition-colors">
                        Đăng xuất ${icons.logout}
                    </button>
                </header>

                <main class="flex-1 overflow-x-hidden overflow-y-auto bg-white p-4 md:p-8">
                    ${contentHTML}
                </main>
            </div>
        </div>
    `;
}

// ==========================================
// 3. HÀM RENDER NỘI DUNG BẢNG NHÂN VIÊN
// ==========================================
function getEmployeePageContent(employees) {
    const rowsHTML = employees.map(emp => {
        // TÙY CHỈNH MÀU SẮC ĐỒNG BỘ THEO TRẠNG THÁI KHÓA (ACTIVE/INACTIVE)
        let nameColorClass = emp.active ? 'text-blue-500' : 'text-red-500';
        let lockBtnClass = emp.active ? 'bg-[#22C55E] hover:bg-green-600' : 'bg-[#EF4444] hover:bg-red-600';

        let roleBadge;
        if (emp.active) {
            // Khi hoạt động: Vai trò màu xanh lá
            roleBadge = `<span class="bg-[#E6F4EA] text-[#059669] px-3 py-1.5 rounded-full text-[11px] font-bold tracking-wide">${emp.role}</span>`;
        } else {
            // Khi bị khóa: Vai trò đổi sang màu đỏ
            roleBadge = `<span class="bg-[#FFE4E6] text-[#E33539] px-3 py-1.5 rounded-full text-[11px] font-bold tracking-wide">${emp.role}</span>`;
        }

        return `
        <tr class="border-b border-gray-100 hover:bg-gray-50 transition-colors employee-row"
            data-id="${emp.id}"
            data-username="${emp.username || ''}"
            data-fullname="${emp.fullName || ''}"
            data-phone="${emp.phoneNumber || ''}"
            data-role="${emp.role || ''}"
            data-image-url="${emp.imageUrl || ''}"
            data-is-active="${emp.active}">

            <td class="py-3 px-4 flex items-center gap-3">
                <img src="${emp.imageUrl || 'https://via.placeholder.com/40'}" alt="Avatar" class="w-10 h-10 rounded-md object-cover">
                <div>
                    <div class="font-medium text-gray-800">${emp.username}</div>
                    <div class="text-xs text-gray-500 md:hidden">${emp.fullName || 'Chưa cập nhật'}</div>
                </div>
            </td>
            <td class="py-4 px-4 ${nameColorClass} font-medium text-sm hidden md:table-cell">${emp.fullName || 'Chưa cập nhật'}</td>
            <td class="py-4 px-4 ${nameColorClass} font-medium text-sm hidden md:table-cell">${emp.phoneNumber || 'N/A'}</td>
            <td class="py-4 px-4">${roleBadge}</td>
            <td class="py-4 px-4">
                <div class="flex gap-2">
                    <button class="btn-lock text-white p-2 rounded-lg shadow-sm transition-colors ${lockBtnClass}" title="${emp.active ? 'Khóa' : 'Mở khóa'}">${icons.lock}</button>
                    <button class="btn-edit bg-[#3B82F6] text-white p-2 rounded-lg hover:bg-blue-600 shadow-sm transition-colors" title="Sửa">${icons.edit}</button>
                    <button class="btn-delete bg-[#EF4444] text-white p-2 rounded-lg hover:bg-red-600 shadow-sm transition-colors" title="Xóa">${icons.trash}</button>
                </div>
            </td>
        </tr>
    `}).join('');

    return `
        <div class="max-w-6xl mx-auto">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <h2 class="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">Danh sách nhân viên</h2>

                <div class="flex w-full md:w-auto items-center gap-4">
                    <div class="relative w-full md:w-64">
                        <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">${icons.search}</div>
                        <input type="text" id="searchInput" class="bg-[#F1F5F9] border-none text-gray-700 rounded-xl px-4 py-2.5 w-full focus:outline-none focus:ring-2 focus:ring-[#E33539] text-sm font-medium" placeholder="Tìm kiếm...">
                    </div>

                    <button id="btnOpenAddModal" class="bg-[#16A34A] hover:bg-green-700 text-white px-5 py-2.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors whitespace-nowrap shadow-sm">
                        ${icons.plus} Thêm nhân viên mới
                    </button>
                </div>
            </div>

            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse min-w-[700px]">
                        <thead>
                            <tr class="bg-white border-b border-gray-100 text-[11px] text-gray-900 font-extrabold uppercase tracking-wider">
                                <th class="py-4 px-4">User name</th>
                                <th class="py-4 px-4 hidden md:table-cell">Họ và tên</th>
                                <th class="py-4 px-4 hidden md:table-cell">Số điện thoại</th>
                                <th class="py-4 px-4">Vai trò</th>
                                <th class="py-4 px-4 text-right pr-6">Thao tác</th>
                            </tr>
                        </thead>
                        <tbody id="employeeTableBody">
                            ${rowsHTML}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

// ==========================================
// 4. XUẤT HTML RA CHO ROUTER (APP.JS)
// ==========================================
export function renderAdminView(employees = []) {
    return getAdminLayout(getEmployeePageContent(employees));
}

// ==========================================
// 5. KHỞI TẠO SỰ KIỆN (EVENTS)
// ==========================================
export function initAdminEvents() {

    // --- A. TÌM KIẾM REAL-TIME ---
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const keyword = e.target.value.toLowerCase().trim();
            const rows = document.querySelectorAll('.employee-row');

            rows.forEach(row => {
                const rowData = row.textContent.toLowerCase();
                if (rowData.includes(keyword)) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        });
    }

    // --- B. ĐÓNG MỞ SIDEBAR MOBILE & LOGOUT ---
    const toggleMobileMenu = (show) => {
        const overlay = document.getElementById('mobileOverlay');
        const drawer = document.getElementById('mobileDrawer');
        if (!overlay || !drawer) return;

        if (show) {
            overlay.classList.remove('hidden');
            setTimeout(() => drawer.classList.remove('-translate-x-full'), 10);
        } else {
            drawer.classList.add('-translate-x-full');
            setTimeout(() => overlay.classList.add('hidden'), 300);
        }
    };

    const btnOpenMenu = document.getElementById('btnOpenMenu');
    const btnCloseMenu = document.getElementById('btnCloseMenu');
    const mobileOverlay = document.getElementById('mobileOverlay');

    if (btnOpenMenu) btnOpenMenu.addEventListener('click', () => toggleMobileMenu(true));
    if (btnCloseMenu) btnCloseMenu.addEventListener('click', () => toggleMobileMenu(false));
    if (mobileOverlay) mobileOverlay.addEventListener('click', () => toggleMobileMenu(false));

    const handleLogout = () => {
        if(confirm("Bạn có chắc chắn muốn đăng xuất?")) {
            localStorage.clear();
            window.location.hash = '#/login';
        }
    };
    document.getElementById('btnDesktopLogout')?.addEventListener('click', handleLogout);
    document.getElementById('btnMobileLogout')?.addEventListener('click', handleLogout);

    // --- C. ĐÓNG / MỞ CÁC MODAL ---
    const addModal = document.getElementById('addEmployeeModal');
    const editModal = document.getElementById('editEmployeeModal');

    const openModal = (modalEl, contentId) => {
        if (!modalEl) return;
        modalEl.classList.remove('hidden');
        setTimeout(() => {
            modalEl.classList.remove('opacity-0');
            document.getElementById(contentId)?.classList.remove('scale-95');
        }, 10);
    };

    const closeModal = (modalEl, contentId) => {
        if (!modalEl) return;
        modalEl.classList.add('opacity-0');
        document.getElementById(contentId)?.classList.add('scale-95');
        setTimeout(() => modalEl.classList.add('hidden'), 300);
    };

    // Mở modal thêm
    document.getElementById('btnOpenAddModal')?.addEventListener('click', () => {
        document.getElementById('addEmployeeForm').reset();
        document.getElementById('errGeneral')?.classList.add('hidden');
        document.getElementById('errPassword')?.classList.add('hidden');
        document.getElementById('avatarPreview').src = 'https://via.placeholder.com/80';
        document.getElementById('avatarUrl').value = '';
        openModal(addModal, 'modalContent');
    });

    // Nút Hủy
    document.getElementById('btnCancelAdd')?.addEventListener('click', () => closeModal(addModal, 'modalContent'));
    document.getElementById('btnCancelEdit')?.addEventListener('click', () => closeModal(editModal, 'editModalContent'));

    // --- D. LẮNG NGHE NÚT SỬA / XÓA / KHÓA TRONG BẢNG ---
    const employeeTableBody = document.getElementById('employeeTableBody');
    if (employeeTableBody) {
        employeeTableBody.addEventListener('click', async (e) => {

            // 1. NÚT SỬA
            const btnEdit = e.target.closest('.btn-edit');
            if (btnEdit) {
                const row = btnEdit.closest('tr');
                document.getElementById('editEmpId').value = row.dataset.id;
                document.getElementById('editEmpUsername').value = row.dataset.username;
                document.getElementById('editEmpFullName').value = row.dataset.fullname;
                document.getElementById('editEmpPhone').value = row.dataset.phone;

                const oldImageUrl = row.dataset.imageUrl || 'https://via.placeholder.com/80';
                document.getElementById('editAvatarPreview').src = oldImageUrl;
                document.getElementById('editAvatarUrl').value = oldImageUrl;

                const selectRole = document.getElementById('editEmpRole');
                Array.from(selectRole.options).forEach(opt => {
                    if (opt.text === row.dataset.role || opt.value === row.dataset.role) opt.selected = true;
                });

                openModal(editModal, 'editModalContent');
            }

            // 2. NÚT XÓA
            const btnDelete = e.target.closest('.btn-delete');
            if (btnDelete) {
                const row = btnDelete.closest('tr');
                const userId = row.dataset.id;
                const username = row.dataset.username;

                if (confirm(`Hành động này không thể hoàn tác. Bạn có chắc chắn muốn XÓA nhân viên "${username}" không?`)) {
                    try {
                        const token = localStorage.getItem('jwtToken');
                        const response = await fetch(`http://localhost:8080/api/admin/users/${userId}`, {
                            method: 'DELETE',
                            headers: { 'Authorization': 'Bearer ' + token }
                        });

                        if (response.ok) {
                            alert("Đã xóa nhân viên thành công!");
                            window.location.reload();
                        } else {
                            alert("Có lỗi xảy ra khi xóa nhân viên.");
                        }
                    } catch (error) {
                        alert("Không thể kết nối máy chủ để xóa.");
                    }
                }
            }

            // 3. NÚT KHÓA / MỞ KHÓA
            const btnLock = e.target.closest('.btn-lock');
            if (btnLock) {
                const row = btnLock.closest('tr');
                const userId = row.dataset.id;
                const username = row.dataset.username;
                const currentStatus = row.dataset.isActive === 'true';
                const newStatus = !currentStatus;

                const actionText = newStatus ? 'MỞ KHÓA' : 'KHÓA';

                if (confirm(`Bạn có muốn ${actionText} tài khoản "${username}"?`)) {
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
                            alert(`Đã ${actionText} thành công!`);
                            window.location.reload();
                        } else {
                            alert("Có lỗi xảy ra khi thay đổi trạng thái.");
                        }
                    } catch (error) {
                        alert("Không thể kết nối máy chủ.");
                    }
                }
            }
        });
    }

    // --- E. UPLOAD ẢNH & SUBMIT FORM ---
    const setupAvatarUpload = (uploadId, previewId, urlInputId) => {
        const uploadInput = document.getElementById(uploadId);
        const previewImg = document.getElementById(previewId);
        const urlInput = document.getElementById(urlInputId);

        if (uploadInput) {
            uploadInput.addEventListener('change', async (e) => {
                const file = e.target.files[0];
                if (!file) return;

                const reader = new FileReader();
                reader.onload = (event) => previewImg.src = event.target.result;
                reader.readAsDataURL(file);

                const formData = new FormData();
                formData.append('file', file);

                try {
                    const response = await fetch('http://localhost:8080/api/upload/avatar', {
                        method: 'POST', body: formData
                    });

                    if (response.ok) {
                        const data = await response.json();
                        urlInput.value = data.imageUrl;
                    } else {
                        alert("Không thể upload ảnh lên máy chủ!");
                    }
                } catch (error) {
                    console.error("Lỗi:", error);
                }
            });
        }
    };

    setupAvatarUpload('avatarUpload', 'avatarPreview', 'avatarUrl');
    setupAvatarUpload('editAvatarUpload', 'editAvatarPreview', 'editAvatarUrl');


    const addEmployeeForm = document.getElementById('addEmployeeForm');
    if (addEmployeeForm) {
        addEmployeeForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const errGeneral = document.getElementById('errGeneral');
            const errPassword = document.getElementById('errPassword');
            if(errGeneral) errGeneral.classList.add('hidden');
            if(errPassword) errPassword.classList.add('hidden');

            const role = document.getElementById('empRole').value;
            const username = document.getElementById('empUsername').value.trim();
            const fullName = document.getElementById('empFullName').value.trim();
            const phone = document.getElementById('empPhone').value.trim();
            const email = document.getElementById('empEmail').value.trim();
            const password = document.getElementById('empPassword').value;
            const confirmPassword = document.getElementById('empConfirmPassword').value;
            const imageUrl = document.getElementById('avatarUrl').value;

            if (!role || !username || !fullName || !phone || !password || !confirmPassword) {
                if(errGeneral) {
                    errGeneral.textContent = "Vui lòng nhập đầy đủ thông tin bắt buộc (*)";
                    errGeneral.classList.remove('hidden');
                }
                return;
            }

            if (password !== confirmPassword) {
                if(errPassword) errPassword.classList.remove('hidden');
                return;
            }

            try {
                const token = localStorage.getItem('jwtToken');
                const response = await fetch('http://localhost:8080/api/admin/users', {
                    method: 'POST',
                    headers: { 'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, password, role, fullName, phoneNumber: phone, email, imageUrl })
                });
                if (response.ok) { alert("Đã thêm thành công!"); window.location.reload(); }
                else { alert("Dữ liệu không hợp lệ hoặc trùng lặp."); }
            } catch (err) { alert("Lỗi kết nối máy chủ."); }
        });
    }

    const editEmployeeForm = document.getElementById('editEmployeeForm');
    if (editEmployeeForm) {
        editEmployeeForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const userId = document.getElementById('editEmpId').value;
            const role = document.getElementById('editEmpRole').value;
            const fullName = document.getElementById('editEmpFullName').value.trim();
            const phone = document.getElementById('editEmpPhone').value.trim();
            const newPass = document.getElementById('editEmpNewPassword').value;
            const imageUrl = document.getElementById('editAvatarUrl').value;

            try {
                const token = localStorage.getItem('jwtToken');
                const response = await fetch(`http://localhost:8080/api/admin/users/${userId}`, {
                    method: 'PUT',
                    headers: { 'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json' },
                    body: JSON.stringify({ fullName, role, phoneNumber: phone, password: newPass, imageUrl })
                });
                if (response.ok) { alert("Cập nhật thành công!"); window.location.reload(); }
                else { alert("Có lỗi xảy ra khi cập nhật."); }
            } catch (err) { alert("Lỗi kết nối máy chủ."); }
        });
    }
}