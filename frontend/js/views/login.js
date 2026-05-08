export function renderLoginView() {
    return `
        <div class="login-wrapper">
            <div class="login-card">
                <div class="login-header">
                    <div class="icon-container">
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                            <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                            <line x1="6" y1="1" x2="6" y2="4"></line>
                            <line x1="10" y1="1" x2="10" y2="4"></line>
                            <line x1="14" y1="1" x2="14" y2="4"></line>
                        </svg>
                    </div>
                    <h2>Red Cat Admin</h2>
                </div>

                <form id="loginForm">
                    <div class="form-group">
                        <label for="username">Tên đăng nhập</label>
                        <input type="text" id="username" placeholder="Nhập tài khoản..." required>
                    </div>
                    
                    <div class="form-group">
                        <label for="password">Mật khẩu</label>
                        <input type="password" id="password" placeholder="Nhập mật khẩu..." required>
                    </div>

                    <button type="submit" class="btn-login">Đăng nhập</button>
                </form>

                <a href="#/forgot-password" class="forgot-password">Quên mật khẩu?</a>
            </div>
        </div>
    `;
}

// Hàm khởi tạo các sự kiện cho trang Login (Gọi sau khi render)
export function initLoginEvents() {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            try {
                // Gọi API lên Spring Boot (Mặc định Spring Boot chạy ở port 8080)
                const response = await fetch('http://localhost:8080/api/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ username, password })
                });

                if (response.ok) {
                    // Trích xuất dữ liệu JSON từ Backend trả về
                    const data = await response.json();

                    // Lưu Token và Role vào trình duyệt
                    localStorage.setItem('jwtToken', data.token);
                    localStorage.setItem('userRole', data.role);

                    alert('Đăng nhập thành công với quyền: ' + data.role);

                    // Điều hướng tự động dựa trên Role
                    window.location.hash = data.role === 'ADMIN' ? '#/admin' : '#/staff';
                } else {
                    const errorData = await response.json();
                    alert(errorData.message || 'Sai tên đăng nhập hoặc mật khẩu!');
                }
            } catch (error) {
                console.error('Lỗi kết nối:', error);
                alert('Không thể kết nối đến máy chủ Backend!');
            }
        });
    }
}