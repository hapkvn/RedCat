// ==========================================
// 1. STATE & DỮ LIỆU TẠM THỜI (LOCAL STORAGE)
// ==========================================
let cart = JSON.parse(localStorage.getItem('redCatCart')) || {};

// ==========================================
// 2. LAYOUT CHÍNH (MOBILE FRAME)
// ==========================================
function getCustomerLayout(contentHTML, showHeader = true, title = "Red Cat Coffee", backLink = "#/customer") {
    const cartCount = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
    const badgeStyle = cartCount > 0 ? 'block' : 'none';

    let headerHTML = '';
    if (showHeader) {
        headerHTML = `
            <header class="header sticky top-0 bg-white z-50 flex justify-between items-center p-5 border-b border-gray-100">
                ${backLink ? `<a href="${backLink}" class="text-gray-800 text-xl"><i class="fa-solid fa-chevron-left"></i></a>` : '<div></div>'}
                <h1 class="font-bold text-lg text-[#E33539] italic">${title}</h1>
                <a href="#/customer/cart" class="relative text-gray-800 text-xl">
                    <i class="fa-solid fa-shopping-bag"></i>
                    <span class="absolute -top-1.5 -right-2 bg-[#E33539] text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold" style="display: ${badgeStyle}">${cartCount}</span>
                </a>
            </header>
        `;
    }

    return `
        <div class="bg-[#f8f8f8] min-h-screen flex justify-center font-sans">
            <div class="w-full max-w-[414px] bg-white min-h-screen shadow-lg relative flex flex-col">
                ${headerHTML}
                <main class="flex-1 pb-24 relative">
                    ${contentHTML}
                </main>
                <div id="toastContainerCustomer"></div>
            </div>
        </div>
    `;
}

// ==========================================
// 3. CÁC TRANG (VIEWS) CỦA KHÁCH HÀNG
// ==========================================

// --- TRANG CHỦ ---
function getHomeContent() {
    return `
        <div class="p-5">
            <section class="bg-gradient-to-br from-[#ff9a9e] to-[#fecfef] p-4 rounded-2xl mb-8 text-[#d32f2f]">
                <div class="flex items-center gap-2 font-bold text-base mb-1.5"><i class="fa-solid fa-bullhorn"></i> Tin tức khuyến mãi</div>
                <p class="text-sm text-[#c62828]">Nhập RC15K giảm ngay 15k cho hoá đơn trên 100k!</p>
            </section>

            <section>
                <h2 class="font-bold text-[15px] mb-4 tracking-wide uppercase">Menu</h2>
                <div class="flex flex-col gap-4">
                    <a href="#/customer/menu/coffee" class="bg-white p-6 rounded-2xl flex flex-col items-center justify-center gap-3 shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-gray-50 active:scale-95 transition-transform">
                        <i class="fa-solid fa-mug-hot text-3xl text-[#E33539]"></i>
                        <span class="font-semibold text-[15px]">Cà phê</span>
                    </a>
                    <a href="#/customer/menu/tea" class="bg-white p-6 rounded-2xl flex flex-col items-center justify-center gap-3 shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-gray-50 active:scale-95 transition-transform">
                        <i class="fa-solid fa-leaf text-3xl text-[#E33539]"></i>
                        <span class="font-semibold text-[15px]">Trà</span>
                    </a>
                </div>
            </section>

            <div class="flex justify-center mt-10 opacity-90">
                <img src="/assets/red_cat_mascot.png" alt="Mascot" class="w-32 h-auto object-contain">
            </div>
        </div>
    `;
}

// --- TRANG MENU SẢN PHẨM ---
function getMenuContent(category) {
    // Dữ liệu giả lập (Sau này lấy từ API GET /api/products?category=...)
    let products = [];
    if (category === 'coffee') {
        products = [
            { id: 1, name: 'Đen nóng', price: 25000, img: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=200' },
            { id: 2, name: 'Bạc xỉu', price: 30000, img: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=200' },
            { id: 3, name: 'Cappuccino', price: 40000, img: 'https://images.unsplash.com/photo-1572288658217-470f7110d1e2?w=200' }
        ];
    } else {
        products = [
            { id: 4, name: 'Trà nhài', price: 25000, img: 'https://images.pexels.com/photos/7138780/pexels-photo-7138780.jpeg?w=200' },
            { id: 5, name: 'Trà đào', price: 35000, img: 'https://images.pexels.com/photos/33573171/pexels-photo-33573171.jpeg?w=200' }
        ];
    }

    const productHTML = products.map(p => {
        const qty = cart[p.name] ? cart[p.name].quantity : 0;
        return `
            <div class="flex bg-white rounded-2xl p-3 mb-4 shadow-[0_4px_15px_rgba(0,0,0,0.04)] border border-gray-50 product-item">
                <img src="${p.img}" class="w-[90px] h-[90px] object-cover rounded-xl shrink-0">
                <div class="ml-4 flex-1 flex flex-col justify-between">
                    <h3 class="font-bold text-base text-gray-800">${p.name}</h3>
                    <p class="font-bold text-[#E33539] text-base">${p.price.toLocaleString('vi-VN')}đ</p>
                    <div class="flex items-center bg-gray-100 p-1 rounded-full w-max gap-3 mt-2">
                        <button class="w-7 h-7 rounded-full bg-white text-[#E33539] shadow-sm flex items-center justify-center btn-minus" data-name="${p.name}" data-price="${p.price}" data-img="${p.img}"><i class="fa-solid fa-minus"></i></button>
                        <span class="font-bold text-sm min-w-[16px] text-center qty-display">${qty}</span>
                        <button class="w-7 h-7 rounded-full bg-white text-[#E33539] shadow-sm flex items-center justify-center btn-plus" data-name="${p.name}" data-price="${p.price}" data-img="${p.img}"><i class="fa-solid fa-plus"></i></button>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    return `
        <div class="p-4">${productHTML}</div>

        <div class="fixed bottom-0 w-full max-w-[414px] p-5 bg-gradient-to-t from-white via-white to-transparent z-40">
            <button class="w-full bg-[#E33539] text-white p-4 rounded-2xl font-bold flex justify-between shadow-[0_10px_20px_rgba(227,53,57,0.3)] active:scale-95 transition-transform" onclick="window.location.hash='#/customer/cart'">
                <span>Xem giỏ hàng</span>
                <span id="footerTotalPrice">0đ</span>
            </button>
        </div>
    `;
}

// --- TRANG GIỎ HÀNG ---
function getCartContent() {
    if (Object.keys(cart).length === 0) {
        return `
            <div class="flex flex-col items-center justify-center pt-20 px-6 text-center">
                <img src="/assets/empty-cart-illustration.png" class="w-40 opacity-90 mb-6" onerror="this.src='https://via.placeholder.com/150?text=Empty+Cart'">
                <h3 class="font-bold text-lg mb-2">Giỏ hàng trống!</h3>
                <p class="text-sm text-gray-500 mb-8">Có vẻ như bạn chưa chọn được món nào. Khám phá menu ngay nhé!</p>
                <a href="#/customer" class="bg-red-50 text-[#E33539] px-8 py-3 rounded-xl font-bold border border-red-100">Ghé xem Menu</a>
            </div>
        `;
    }

    const cartHTML = Object.keys(cart).map(name => {
        const item = cart[name];
        return `
            <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-4">
                <div class="flex justify-between items-center mb-3">
                    <div>
                        <h3 class="font-bold text-base text-gray-900">${name}</h3>
                        <p class="text-sm text-gray-500">${item.price.toLocaleString('vi-VN')}đ</p>
                    </div>
                    <div class="flex items-center bg-gray-100 p-1 rounded-full gap-3">
                        <button class="w-7 h-7 rounded-full bg-white text-[#E33539] shadow-sm btn-minus" data-name="${name}" data-price="${item.price}"><i class="fa-solid fa-minus text-xs"></i></button>
                        <span class="font-bold text-sm min-w-[16px] text-center">${item.quantity}</span>
                        <button class="w-7 h-7 rounded-full bg-white text-[#E33539] shadow-sm btn-plus" data-name="${name}" data-price="${item.price}"><i class="fa-solid fa-plus text-xs"></i></button>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    return `
        <div class="p-5">
            <h2 class="font-bold text-base mb-4">Giỏ hàng của bạn</h2>
            ${cartHTML}
        </div>

        <div class="fixed bottom-0 w-full max-w-[414px] bg-white p-5 rounded-t-3xl shadow-[0_-8px_25px_rgba(0,0,0,0.06)] z-50">
            <div class="flex justify-between items-center bg-white border border-gray-200 rounded-xl p-3.5 mb-4" onclick="window.location.hash='#/customer/promo'">
                <div class="flex items-center gap-2 text-[#E33539]"><i class="fa-solid fa-ticket"></i> <span class="text-sm text-gray-700 font-medium" id="promoLabel">Chọn mã ưu đãi</span></div>
                <i class="fa-solid fa-chevron-right text-gray-300 text-sm"></i>
            </div>
            <div class="flex justify-between items-center mb-4">
                <span class="font-semibold text-gray-800">Tổng Tiền:</span>
                <span class="font-extrabold text-xl text-[#E33539]" id="cartTotalPrice">0đ</span>
            </div>
            <button class="w-full bg-[#E33539] text-white p-4 rounded-xl font-bold shadow-[0_8px_15px_rgba(227,53,57,0.25)]" onclick="window.location.hash='#/customer/checkout'">
                Đặt món ngay
            </button>
        </div>
    `;
}

// --- TRANG CHECKOUT (ĐẶT HÀNG) ---
function getCheckoutContent() {
    return `
        <div class="p-5">
            <h2 class="font-bold text-lg mb-5 flex items-center gap-2 text-gray-800"><i class="fa-solid fa-user-check text-[#E33539]"></i> Thông tin khách hàng</h2>
            <form id="customerOrderForm" class="space-y-4">
                <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-2">Họ và tên <span class="text-red-500">*</span></label>
                    <input type="text" id="custName" required class="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#E33539] focus:bg-white transition-colors" placeholder="Tên của bạn...">
                </div>
                <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-2">Số điện thoại <span class="text-red-500">*</span></label>
                    <input type="tel" id="custPhone" required class="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#E33539] focus:bg-white transition-colors" placeholder="Số liên hệ...">
                </div>
                <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-2">Số bàn <span class="text-red-500">*</span></label>
                    <input type="text" id="custTable" required class="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#E33539] focus:bg-white transition-colors" placeholder="Ví dụ: Bàn 5">
                </div>

                <div class="mt-8 border border-dashed border-gray-300 p-4 rounded-xl flex justify-between items-center bg-white">
                    <span class="font-semibold text-gray-600">Thanh toán đợt này:</span>
                    <span class="font-extrabold text-lg text-[#E33539]" id="checkoutFinalPrice">0đ</span>
                </div>
            </form>
        </div>

        <div class="fixed bottom-0 w-full max-w-[414px] bg-white p-5 rounded-t-3xl shadow-[0_-8px_25px_rgba(0,0,0,0.06)] z-50">
            <button type="submit" form="customerOrderForm" class="w-full bg-[#E33539] text-white p-4 rounded-xl font-bold shadow-[0_8px_15px_rgba(227,53,57,0.25)]">
                Xác nhận & Gửi đơn
            </button>
        </div>
    `;
}

// ==========================================
// 4. LOGIC XỬ LÝ (GIỎ HÀNG, TỔNG TIỀN, FETCH API)
// ==========================================
function updateCartState() {
    localStorage.setItem('redCatCart', JSON.stringify(cart));
    let total = 0;
    for (let key in cart) total += cart[key].price * cart[key].quantity;
    
    // Khuyến mãi
    let discount = 0;
    const promo = localStorage.getItem('appliedPromo');
    if (promo === 'RC5K' && total >= 25000) discount = 5000;
    if (promo === 'RC15K' && total >= 100000) discount = 15000;

    const finalTotal = total - discount;

    const elTotalMenu = document.getElementById('footerTotalPrice');
    const elTotalCart = document.getElementById('cartTotalPrice');
    const elTotalCheck = document.getElementById('checkoutFinalPrice');

    if (elTotalMenu) elTotalMenu.textContent = total.toLocaleString() + 'đ';
    if (elTotalCart) elTotalCart.textContent = finalTotal.toLocaleString() + 'đ';
    if (elTotalCheck) elTotalCheck.textContent = finalTotal.toLocaleString() + 'đ';
}

export function initCustomerEvents() {
    updateCartState();

    // Loại bỏ tất cả event listeners trước đó để tránh duplicate event
    const oldClickHandler = document._customerClickHandler;
    if (oldClickHandler) {
        document.removeEventListener('click', oldClickHandler);
    }

    // Xử lý nút tăng giảm (Dùng Event Delegation)
    const newClickHandler = (e) => {
        const btnPlus = e.target.closest('.btn-plus');
        const btnMinus = e.target.closest('.btn-minus');

        if (btnPlus) {
            const name = btnPlus.getAttribute('data-name');
            const price = parseInt(btnPlus.getAttribute('data-price'));
            if (!cart[name]) cart[name] = { price, quantity: 0 };
            cart[name].quantity++;
            updateCartState();

            // Re-render UI nếu đang ở giỏ hàng hoặc cập nhật số trên menu
            const appDiv = document.getElementById('app');
            if(window.location.hash === '#/customer/cart') {
                appDiv.innerHTML = getCustomerLayout(getCartContent(), true, "Giỏ hàng", "#/customer");
                initCustomerEvents(); // Re-bind events since HTML changed
            } else {
                const qtySpan = btnPlus.parentElement.querySelector('.qty-display');
                if(qtySpan) qtySpan.textContent = cart[name].quantity;

                // Cập nhật lại số đếm giỏ hàng trên header
                const badge = document.querySelector('header a[href="#/customer/cart"] span');
                if(badge) {
                    const cartCount = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
                    badge.textContent = cartCount;
                    badge.style.display = cartCount > 0 ? 'block' : 'none';
                }
            }
        }

        if (btnMinus) {
            const name = btnMinus.getAttribute('data-name');
            if (cart[name]) {
                cart[name].quantity--;
                if (cart[name].quantity <= 0) delete cart[name];
                updateCartState();

                const appDiv = document.getElementById('app');
                if(window.location.hash === '#/customer/cart') {
                    appDiv.innerHTML = getCustomerLayout(getCartContent(), true, "Giỏ hàng", "#/customer");
                    initCustomerEvents(); // Re-bind events since HTML changed
                } else {
                    const qtySpan = btnMinus.parentElement.querySelector('.qty-display');
                    if(qtySpan) qtySpan.textContent = cart[name] ? cart[name].quantity : 0;

                    // Cập nhật lại số đếm giỏ hàng trên header
                    const badge = document.querySelector('header a[href="#/customer/cart"] span');
                    if(badge) {
                        const cartCount = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
                        badge.textContent = cartCount;
                        badge.style.display = cartCount > 0 ? 'block' : 'none';
                    }
                }
            }
        }
    };

    document._customerClickHandler = newClickHandler;
    document.addEventListener('click', newClickHandler);

    // Xử lý Gửi Đơn (GỌI API BACKEND THỰC TẾ)
    const orderForm = document.getElementById('customerOrderForm');

    // Loại bỏ listener cũ nếu có
    if(orderForm) {
        // Thay vì gỡ listener cũ (khó làm với anonymous function),
        // ta gán sự kiện theo cách onclick để luôn chỉ có 1 listener
        orderForm.onsubmit = (e) => {
            e.preventDefault();
            const customerName = document.getElementById('custName').value;
            const tableNo = document.getElementById('custTable').value;

            if (Object.keys(cart).length === 0) {
                alert("Giỏ hàng đang trống!"); return;
            }

            // Dữ liệu chuẩn bị gửi Backend
            const orderPayload = {
                tableName: tableNo,
                customerName: customerName,
                items: Object.keys(cart).map(name => ({
                    productName: name,
                    quantity: cart[name].quantity,
                    unitPrice: cart[name].price
                }))
            };

            // GỌI API ĐỂ LƯU VÀO DB VỚI TRẠNG THÁI "CHỜ XỬ LÝ"
            fetch('http://localhost:8080/api/orders', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(orderPayload)
            })
            .then(res => {
                if (res.ok) {
                    alert("Gửi đơn thành công! Vui lòng chờ nhân viên phục vụ.");
                    localStorage.removeItem('redCatCart'); // Xóa giỏ hàng
                    cart = {}; // Reset biến cart
                    window.location.hash = '#/customer'; // Về trang chủ
                } else {
                    alert("Lỗi kết nối máy chủ! Hãy thử lại.");
                }
            })
            .catch(err => {
                console.error(err);
                alert("Gửi đơn thành công (Giả lập do không kết nối được Backend)");
                localStorage.removeItem('redCatCart');
                cart = {}; // Reset biến cart
                window.location.hash = '#/customer';
            });
        };
    }
}

// CÁC HÀM XUẤT CHO ROUTER
export function renderCustomerHome() { return getCustomerLayout(getHomeContent(), true, "Red Cat Coffee", false); }
export function renderCustomerMenu(category) { return getCustomerLayout(getMenuContent(category), true, category === 'coffee' ? 'Cà Phê' : 'Trà', "#/customer"); }
export function renderCustomerCart() { return getCustomerLayout(getCartContent(), true, "Giỏ hàng", "#/customer"); }
export function renderCustomerCheckout() { return getCustomerLayout(getCheckoutContent(), true, "Thanh toán", "#/customer/cart"); }