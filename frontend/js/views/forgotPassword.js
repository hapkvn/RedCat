// Biến lưu trữ trạng thái của quá trình quên mật khẩu
let currentStep = 1;
let userEmail = '';

export function renderForgotPasswordView() {
    let formContent = '';

    // Bước 1: Form nhập Email
    if (currentStep === 1) {
        formContent = `
            <div class="form-group">
                <label>Email</label>
                <input type="email" id="emailInput" >
            </div>
            <button id="btnSendCode" class="btn-login">Giửi mã</button>
        `;
    }
    // Bước 2: Form nhập Mã xác nhận
    else if (currentStep === 2) {
        formContent = `
            <p class="text-sm mb-4">Mã đã được gửi tới ${userEmail}</p>
            <div class="form-group">
                <label>Mã xác nhận</label>
                <input type="text" id="codeInput">
                <span class="text-red-500 text-xs">2:00 gửi lại mã</span>
            </div>
            <button id="btnVerifyCode" class="btn-login">Xác nhận</button>
        `;
    }
    // Bước 3: Form đặt lại mật khẩu mới
    else if (currentStep === 3) {
        formContent = `
            <button id="btnResetPassword" class="btn-login">Xác nhận</button>
        `;
    }

    // Bọc formContent bên trong khung giao diện nền đỏ (tái sử dụng CSS của màn Login)
    return `
        <div class="login-wrapper">
            <div class="login-card">
                <div class="login-header">
                    <h2>Red Cat Admin</h2>
                </div>
                <div id="stepContainer">
                    ${formContent}
                </div>
            </div>
        </div>
    `;
}

// Hàm xử lý sự kiện khi bấm nút
// Gộp chung vào 1 hàm để quản lý vòng đời dễ nhất
export function initForgotPasswordEvents() {

    // --- XỬ LÝ CHO BƯỚC 1: GỬI EMAIL ---
    if (currentStep === 1) {
        const btnSend = document.getElementById('btnSendCode');
        if (btnSend) {
            btnSend.addEventListener('click', async () => {
                const emailValue = document.getElementById('emailInput').value;
                if (!emailValue) return alert("Vui lòng nhập email!");

                userEmail = emailValue; // Lưu email vào biến toàn cục để bước sau xài

                // TODO: Gọi API gửi mail ở đây...

                currentStep = 2; // Tăng lên bước 2
                document.getElementById('app').innerHTML = renderForgotPasswordView(); // Vẽ lại giao diện
                initForgotPasswordEvents(); // Gọi lại hàm này để nó gắn sự kiện cho nút ở bước 2
            });
        }
    }

    // --- XỬ LÝ CHO BƯỚC 2: XÁC NHẬN MÃ ---
    else if (currentStep === 2) {
        const btnVerify = document.getElementById('btnVerifyCode');
        if (btnVerify) {
            btnVerify.addEventListener('click', async () => {
                // Bước 2 thì phải lấy giá trị từ ô nhập mã
                const codeValue = document.getElementById('codeInput').value;
                if (!codeValue) return alert("Vui lòng nhập mã xác nhận!");

                // TODO: Gọi API kiểm tra mã với userEmail ở đây...

                currentStep = 3; // Kiểm tra đúng thì tăng lên bước 3
                document.getElementById('app').innerHTML = renderForgotPasswordView();
                initForgotPasswordEvents(); // Gắn sự kiện cho nút ở bước 3
            });
        }
    }

    // --- XỬ LÝ CHO BƯỚC 3: ĐẶT MẬT KHẨU MỚI ---
    else if (currentStep === 3) {
        const btnReset = document.getElementById('btnResetPassword');
        if (btnReset) {
            btnReset.addEventListener('click', async () => {
                // Tùy theo ID thẻ HTML của bạn mà lấy mật khẩu mới
                // const newPassword = document.getElementById('newPasswordInput').value;

                // TODO: Gọi API đổi mật khẩu...

                alert("Đổi mật khẩu thành công! Vui lòng đăng nhập lại.");

                // Reset lại luồng và đưa về trang đăng nhập
                currentStep = 1;
                userEmail = '';
                window.location.hash = '#/login';
            });
        }
    }
}
