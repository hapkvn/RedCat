// ==========================================
// 1. STATE, CẤU HÌNH & TỰ ĐỘNG NHẬN DIỆN IP
// ==========================================
const API_BASE = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
    ? 'http://localhost:8080'
    : `http://${window.location.hostname}:8080`;

let cart = JSON.parse(localStorage.getItem('redCatCart')) || {};

// Đọc mã bàn từ URL
let tableTokenFromUrl = new URLSearchParams(window.location.search).get('table');
if (!tableTokenFromUrl && window.location.hash.includes('?table=')) {
    tableTokenFromUrl = window.location.hash.split('?table=')[1];
}
if (tableTokenFromUrl) {
    localStorage.setItem('customerTableToken', tableTokenFromUrl);
}

// Hàm gài tham số bàn vào hash để điều hướng không mất thông tin bàn
const getLink = (path) => {
    const token = localStorage.getItem('customerTableToken');
    return token ? `${path}?table=${token}` : path;
};

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
                ${backLink ? `<a href="${getLink(backLink)}" class="text-gray-800 text-xl"><i class="fa-solid fa-chevron-left"></i></a>` : '<div></div>'}
                <h1 class="font-bold text-lg text-[#E33539] italic">${title}</h1>
                <a href="${getLink('#/customer/cart')}" class="relative text-gray-800 text-xl">
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
            </div>
        </div>
    `;
}

// ==========================================
// 3. CÁC TRANG GIAO DIỆN (VIEWS)
// ==========================================

function getHomeContent() {
    return `
        <div class="p-5">
            <section class="bg-gradient-to-br from-[#ff9a9e] to-[#fecfef] p-4 rounded-2xl mb-8 text-[#d32f2f]">
                <div class="flex items-center gap-2 font-bold text-base mb-1.5"><i class="fa-solid fa-bullhorn"></i> Tin tức quán</div>
                <p class="text-sm text-[#c62828]">Quét mã gọi món tiện lợi - Thanh toán tổng hợp một lần khi ra về!</p>
            </section>

            <section>
                <h2 class="font-bold text-[15px] mb-4 tracking-wide uppercase text-gray-700">Menu Thực Đơn</h2>
                <div class="flex flex-col gap-4">
                    <a href="${getLink('#/customer/menu/1')}" class="bg-white p-5 rounded-2xl flex items-center gap-4 shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-gray-100 active:scale-95 transition-transform">
                        <div class="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-xl text-[#E33539]"><i class="fa-solid fa-mug-hot"></i></div>
                        <span class="font-bold text-gray-800">Cà phê truyền thống & Máy</span>
                    </a>
                    <a href="${getLink('#/customer/menu/2')}" class="bg-white p-5 rounded-2xl flex items-center gap-4 shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-gray-100 active:scale-95 transition-transform">
                        <div class="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-xl text-[#E33539]"><i class="fa-solid fa-leaf"></i></div>
                        <span class="font-bold text-gray-800">Trà trái cây nhiệt đới</span>
                    </a>
                    <a href="${getLink('#/customer/menu/3')}" class="bg-white p-5 rounded-2xl flex items-center gap-4 shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-gray-100 active:scale-95 transition-transform">
                        <div class="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-xl text-[#E33539]"><i class="fa-solid fa-cookie-bite"></i></div>
                        <span class="font-bold text-gray-800">Bánh ngọt ăn kèm</span>
                    </a>
                </div>
            </section>
        </div>
    `;
}

function getMenuContent(products, categoryId) {
    if (!products || products.length === 0) {
        return `<div class="p-5 text-center mt-10"><p class="text-gray-500">Chưa có món nào trong danh mục này.</p></div>`;
    }

    const productHTML = products.map(p => {
        const qty = cart[p.name] ? cart[p.name].quantity : 0;
        const imgUrl = p.imageUrl ? `${API_BASE}${p.imageUrl}` : 'https://via.placeholder.com/200';
        return `
            <div class="flex bg-white rounded-2xl p-3 mb-4 shadow-[0_4px_15px_rgba(0,0,0,0.03)] border border-gray-50 product-item">
                <img src="${imgUrl}" class="w-[90px] h-[90px] object-cover rounded-xl shrink-0" onerror="this.src='https://via.placeholder.com/90'">
                <div class="ml-4 flex-1 flex flex-col justify-between">
                    <div>
                        <h3 class="font-bold text-base text-gray-800">${p.name}</h3>
                        <p class="text-[11px] text-gray-400 line-clamp-1">${p.description || 'Món ngon đậm vị'}</p>
                    </div>
                    <div class="flex justify-between items-end mt-2">
                        <p class="font-bold text-[#E33539] text-base">${p.price.toLocaleString('vi-VN')}đ</p>
                        <div class="flex items-center bg-gray-100 p-1 rounded-full w-max gap-3">
                            <button class="w-7 h-7 rounded-full bg-white text-[#E33539] shadow-sm flex items-center justify-center btn-minus" data-name="${p.name}" data-price="${p.price}" data-img="${imgUrl}"><i class="fa-solid fa-minus text-xs"></i></button>
                            <span class="font-bold text-sm min-w-[16px] text-center qty-display">${qty}</span>
                            <button class="w-7 h-7 rounded-full bg-white text-[#E33539] shadow-sm flex items-center justify-center btn-plus" data-name="${p.name}" data-price="${p.price}" data-img="${imgUrl}"><i class="fa-solid fa-plus text-xs"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    return `
        <div class="p-4 pb-28">${productHTML}</div>
        <div class="fixed bottom-0 w-full max-w-[414px] p-5 bg-gradient-to-t from-white via-white to-transparent z-40">
            <button class="w-full bg-[#E33539] text-white p-4 rounded-2xl font-bold flex justify-between shadow-[0_10px_20px_rgba(227,53,57,0.2)]" onclick="window.location.hash='${getLink('#/customer/cart')}'">
                <span>Xem giỏ hàng</span>
                <span id="footerTotalPrice">0đ</span>
            </button>
        </div>
    `;
}

function getCartContent() {
    if (Object.keys(cart).length === 0) {
        return `
            <div class="flex flex-col items-center justify-center pt-20 px-6 text-center">
                <h3 class="font-bold text-lg mb-2 text-gray-800">Giỏ hàng trống!</h3>
                <p class="text-sm text-gray-500 mb-8">Bạn vui lòng chọn món ăn nước uống trước nhé.</p>
                <a href="${getLink('#/customer')}" class="bg-red-50 text-[#E33539] px-8 py-3 rounded-xl font-bold">Ghé xem Menu</a>
            </div>
        `;
    }

    const cartHTML = Object.keys(cart).map(name => {
        const item = cart[name];
        return `
            <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-3 flex gap-3">
                <img src="${item.img}" class="w-14 h-14 rounded-xl object-cover shrink-0" onerror="this.src='https://via.placeholder.com/64'">
                <div class="flex-1 flex flex-col justify-between">
                    <h3 class="font-bold text-sm text-gray-900">${name}</h3>
                    <div class="flex justify-between items-center mt-1">
                        <p class="text-sm font-bold text-[#E33539]">${item.price.toLocaleString('vi-VN')}đ</p>
                        <div class="flex items-center bg-gray-100 p-1 rounded-full gap-3">
                            <button class="w-6 h-6 rounded-full bg-white text-[#E33539] shadow-sm btn-minus flex justify-center items-center" data-name="${name}" data-price="${item.price}" data-img="${item.img}"><i class="fa-solid fa-minus text-xs"></i></button>
                            <span class="font-bold text-xs min-w-[14px] text-center">${item.quantity}</span>
                            <button class="w-6 h-6 rounded-full bg-white text-[#E33539] shadow-sm btn-plus flex justify-center items-center" data-name="${name}" data-price="${item.price}" data-img="${item.img}"><i class="fa-solid fa-plus text-xs"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    return `
        <div class="p-5 pb-44">
            <h2 class="font-bold text-base mb-4 text-gray-700">Món đã chọn đợt này</h2>
            ${cartHTML}
        </div>

        <div class="fixed bottom-0 w-full max-w-[414px] bg-white p-5 rounded-t-3xl shadow-[0_-8px_25px_rgba(0,0,0,0.05)] z-50">
            <div class="flex justify-between items-center mb-4">
                <span class="font-semibold text-gray-800">Tổng Đợt Này:</span>
                <span class="font-extrabold text-xl text-[#E33539]" id="cartTotalPrice">0đ</span>
            </div>

            <button class="w-full bg-red-50 text-[#E33539] border border-red-200 p-3.5 rounded-xl font-bold mb-3 transition-transform active:scale-95 flex justify-center items-center gap-2" onclick="window.location.hash='${getLink('#/customer')}'">
                <i class="fa-solid fa-plus"></i> Đặt thêm món khác
            </button>

            <button class="w-full bg-[#E33539] text-white p-4 rounded-xl font-bold shadow-[0_8px_15px_rgba(227,53,57,0.2)]" onclick="window.location.hash='${getLink('#/customer/checkout')}'">
                Tiếp tục gửi đơn
            </button>
        </div>
    `;
}

function getCheckoutContent() {
    const profile = JSON.parse(localStorage.getItem('customerProfile')) || { name: '', phone: '' };
    const tableToken = localStorage.getItem('customerTableToken');
    let tableInfoHTML = '';

    if (tableToken) {
        tableInfoHTML = `
            <div class="bg-gray-50 border border-gray-200 p-3.5 rounded-xl flex items-center justify-between mb-4">
                <div class="flex items-center gap-2 text-gray-700">
                    <i class="fa-solid fa-chair text-[#E33539]"></i>
                    <span class="font-semibold text-sm">Đang ngồi tại:</span>
                </div>
                <span class="font-bold text-[#E33539]" id="displayTableInfo">Đang xác định...</span>
            </div>
        `;
    } else {
        tableInfoHTML = `
            <div class="bg-yellow-50 border border-yellow-200 p-3.5 rounded-xl flex items-center gap-2 mb-4 text-yellow-700 text-sm">
                <i class="fa-solid fa-triangle-exclamation"></i>
                <span>Bạn chưa quét mã QR bàn hợp lệ. Đơn hàng sẽ được tính là Khách mua mang đi.</span>
            </div>
        `;
    }

    return `
        <div class="p-5">
            <h2 class="font-bold text-lg mb-5 flex items-center gap-2 text-gray-800"><i class="fa-solid fa-user-check text-[#E33539]"></i> Thông tin gửi đơn</h2>
            <form id="customerOrderForm" class="space-y-4">
                <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-1.5">Họ và tên <span class="text-red-500">*</span></label>
                    <input type="text" id="custName" value="${profile.name}" required class="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl outline-none" placeholder="Tên của bạn...">
                </div>
                <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-1.5">Số điện thoại <span class="text-red-500">*</span></label>
                    <input type="tel" id="custPhone" value="${profile.phone}" required class="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl outline-none" placeholder="Số điện thoại...">
                </div>

                ${tableInfoHTML}
                <input type="hidden" id="custTableId" value="">

                <div class="p-4 rounded-xl flex justify-between items-center bg-red-50 border border-dashed border-[#E33539]">
                    <span class="font-semibold text-gray-700 text-sm">Tổng tiền đợt gọi này:</span>
                    <span class="font-extrabold text-xl text-[#E33539]" id="checkoutFinalPrice">0đ</span>
                </div>
            </form>
        </div>

        <div class="fixed bottom-0 w-full max-w-[414px] bg-white p-5 rounded-t-3xl shadow-[0_-8px_25px_rgba(0,0,0,0.06)] z-50">
            <button type="submit" form="customerOrderForm" class="w-full bg-[#E33539] text-white p-4 rounded-xl font-bold shadow-md">
                Xác nhận & Gửi đơn vào bếp
            </button>
        </div>
    `;
}

function getSuccessContent() {
    // Lấy ID đơn hàng từ LocalStorage
    const orderId = localStorage.getItem('lastActiveOrderId') || 'Đang xử lý';
    return `
        <div class="p-6 text-center pt-16">
            <div class="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
                <i class="fa-solid fa-check"></i>
            </div>
            <h2 class="text-xl font-extrabold text-gray-900 mb-1">Đã gửi món vào bếp!</h2>
            <p class="text-xs text-gray-400 mb-3">Mã đơn theo dõi đợt này: <span class="font-bold text-gray-700">${orderId}</span></p>
            <p class="text-sm text-gray-500 mb-8 leading-relaxed">Bếp đang làm đồ uống/bánh cho bạn.<br>Bạn có thể tiếp tục chọn món ăn thêm thoải mái.</p>

            <div class="space-y-4">
                <button onclick="window.location.hash='${getLink('#/customer')}'" class="w-full bg-[#E33539] text-white p-4 rounded-xl font-bold shadow-md flex justify-center items-center gap-2">
                    <i class="fa-solid fa-plus"></i> Gọi thêm món ăn tiếp
                </button>

                <button id="btnGotoPayment" class="w-full bg-white border-2 border-gray-900 text-gray-900 p-4 rounded-xl font-bold flex justify-center items-center gap-2">
                    <i class="fa-solid fa-file-invoice-dollar"></i> Yêu cầu thanh toán
                </button>
            </div>
        </div>
    `;
}

// --- TRANG CHỌN PHƯƠNG THỨC THANH TOÁN ---
function getPaymentContent(orderDetail) {
    const fallbackData = JSON.parse(localStorage.getItem('lastOrderData')) || { total: 0 };
    const total = orderDetail ? orderDetail.totalAmount : fallbackData.total;

    // BẢO HIỂM KÉP: Ưu tiên lấy items từ Backend (orderDetail.items hoặc orderDetail.orderItems).
    // Nếu Backend lỗi, tự động lấy từ bộ nhớ đệm orderHistoryItems đã lưu lúc gửi đơn.
    const fallbackItems = JSON.parse(localStorage.getItem('orderHistoryItems')) || [];
    let itemsList = [];

    if (orderDetail && orderDetail.items && orderDetail.items.length > 0) {
        itemsList = orderDetail.items;
    } else if (orderDetail && orderDetail.orderItems && orderDetail.orderItems.length > 0) {
        itemsList = orderDetail.orderItems; // Phòng trường hợp biến trong Java tên là orderItems
    } else {
        itemsList = fallbackItems;
    }

    let itemsHTML = '';
    if (itemsList.length > 0) {
        itemsHTML = itemsList.map(i => `
            <div class="flex justify-between items-center text-sm text-gray-600 mb-2 border-b border-gray-50 pb-2 last:border-0 last:mb-0 last:pb-0">
                <span>${i.productName} <span class="font-bold text-gray-800 bg-gray-100 px-1.5 py-0.5 rounded text-xs ml-1">x${i.quantity}</span></span>
                <span class="font-semibold">${(i.totalPrice || (i.unitPrice * i.quantity)).toLocaleString('vi-VN')} đ</span>
            </div>
        `).join('');
    } else {
        itemsHTML = `<p class="text-sm text-gray-500 italic text-center">Danh sách món đã gửi xuống bếp.</p>`;
    }

    return `
        <div class="p-5 pb-32">
            <h2 class="font-bold text-base mb-4 text-gray-800">Chi tiết hóa đơn tổng hợp</h2>

            <div class="bg-gray-50 border border-gray-100 rounded-2xl p-4 mb-5 shadow-sm">
                <div class="space-y-1 mb-3 max-h-48 overflow-y-auto pr-1">
                    ${itemsHTML}
                </div>
                <div class="border-t border-gray-200 pt-4 flex justify-between items-center font-extrabold text-base text-[#E33539]">
                    <span>Tổng cần trả:</span>
                    <span>${total.toLocaleString('vi-VN')} đ</span>
                </div>
            </div>

            <h3 class="font-bold text-sm mb-3 text-gray-700">Chọn phương thức thanh toán</h3>
            <div class="grid grid-cols-2 gap-3 mb-6">
                <button class="p-4 rounded-xl border-2 border-[#E33539] bg-red-50/50 font-bold text-sm text-[#E33539] flex flex-col items-center gap-2 transition-transform active:scale-95">
                    <i class="fa-solid fa-qrcode text-xl"></i> Quét mã QR
                </button>
                <button class="p-4 rounded-xl border border-gray-200 bg-white font-bold text-sm text-gray-400 flex flex-col items-center gap-2 transition-transform active:scale-95">
                    <i class="fa-solid fa-money-bill-wave text-xl"></i> Tiền mặt
                </button>
            </div>

            <div class="flex flex-col items-center border border-gray-100 p-5 rounded-2xl bg-white shadow-sm">
                <p class="text-xs text-gray-500 mb-3 font-medium uppercase tracking-wider">Quét mã ngân hàng để thanh toán</p>
                <div class="p-2 border border-gray-100 rounded-xl bg-gray-50">
                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent('ChuyenKhoan_' + total)}" class="w-40 h-40 object-contain rounded-lg">
                </div>
            </div>
        </div>

        <div class="fixed bottom-0 w-full max-w-[414px] bg-white p-5 shadow-[0_-10px_25px_rgba(0,0,0,0.05)] z-50">
            <button id="btnFinalCompleteOrder" class="w-full bg-[#E33539] text-white p-4 rounded-xl font-bold shadow-[0_4px_15px_rgba(227,53,57,0.3)] transition-transform active:scale-95 flex justify-center items-center gap-2">
                <i class="fa-solid fa-check-double"></i> Xác nhận đã thanh toán
            </button>
        </div>
    `;
}

function getReceiptContent() {
    const finalData = JSON.parse(localStorage.getItem('receiptCacheData')) || { id: 'RCC-BILL', total: 0, name: 'Quý khách' };
    return `
        <div class="p-5 pt-10 flex flex-col items-center">
            <div class="bg-white w-full rounded-[24px] p-6 shadow-md border border-gray-100 flex flex-col items-center">
                <div class="w-14 h-14 bg-green-50 text-green-500 rounded-full flex items-center justify-center text-3xl mb-4">
                    <i class="fa-solid fa-receipt"></i>
                </div>
                <h2 class="text-lg font-extrabold text-gray-900 mb-1">Giao dịch hoàn tất!</h2>
                <p class="text-xs text-gray-400 mb-5 font-medium">Hóa đơn tổng kết phiên ăn uống</p>

                <div class="w-full border-t border-b border-dashed border-gray-200 py-4 mb-6 space-y-3 text-xs">
                    <div class="flex justify-between">
                        <span class="text-gray-400 font-medium">Mã giao dịch</span>
                        <span class="font-bold text-gray-800">${finalData.id}</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="text-gray-400 font-medium">Khách hàng</span>
                        <span class="font-medium text-gray-800">${finalData.name}</span>
                    </div>
                    <div class="flex justify-between font-extrabold text-sm pt-2 border-t border-gray-100 text-[#E33539]">
                        <span>Tổng thanh toán</span>
                        <span>${finalData.total.toLocaleString('vi-VN')} đ</span>
                    </div>
                </div>

                <button onclick="window.location.hash='${getLink('#/customer')}'" class="w-full bg-gray-900 hover:bg-gray-800 text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2">
                    <i class="fa-solid fa-house"></i> Về Trang chủ
                </button>
            </div>
        </div>
    `;
}

// ==========================================
// 4. LOGIC XỬ LÝ SỰ KIỆN (EVENTS)
// ==========================================
function updateCartState() {
    localStorage.setItem('redCatCart', JSON.stringify(cart));
    let total = 0;
    for (let key in cart) total += cart[key].price * cart[key].quantity;

    const elTotalMenu = document.getElementById('footerTotalPrice');
    const elTotalCart = document.getElementById('cartTotalPrice');
    const elTotalCheck = document.getElementById('checkoutFinalPrice');

    if (elTotalMenu) elTotalMenu.textContent = total.toLocaleString() + 'đ';
    if (elTotalCart) elTotalCart.textContent = total.toLocaleString() + 'đ';
    if (elTotalCheck) elTotalCheck.textContent = total.toLocaleString() + 'đ';
}

export function initCustomerEvents() {
    updateCartState();

    const tableToken = localStorage.getItem('customerTableToken');
    if (tableToken) {
        fetch(`${API_BASE}/api/tables/by-qr-token/${tableToken}`)
            .then(res => {
                if (!res.ok) throw new Error("Bàn không tồn tại");
                return res.json();
            })
            .then(table => {
                const displayTableInfo = document.getElementById('displayTableInfo');
                const custTableId = document.getElementById('custTableId');
                if (displayTableInfo) displayTableInfo.textContent = table.name;
                if (custTableId) custTableId.value = table.id;
                localStorage.setItem('customerTableId', table.id);
            })
            .catch(err => {
                alert("Mã bàn không hợp lệ! Vui lòng quét lại mã QR tại quán.");
                localStorage.removeItem('customerTableToken');
                localStorage.removeItem('customerTableId');
                window.location.hash = '#/customer';
            });
    }

    const oldClickHandler = document._customerClickHandler;
    if (oldClickHandler) document.removeEventListener('click', oldClickHandler);

    const newClickHandler = (e) => {
        const btnPlus = e.target.closest('.btn-plus');
        const btnMinus = e.target.closest('.btn-minus');
        const btnGotoPayment = e.target.closest('#btnGotoPayment');
        const btnFinalCompleteOrder = e.target.closest('#btnFinalCompleteOrder');

        if (btnPlus) {
            const name = btnPlus.getAttribute('data-name');
            const price = parseInt(btnPlus.getAttribute('data-price'));
            const img = btnPlus.getAttribute('data-img');
            if (!cart[name]) cart[name] = { price, quantity: 0, img };
            cart[name].quantity++;
            updateCartState();

            const appDiv = document.getElementById('app');
            if (window.location.hash.includes('#/customer/cart')) {
                appDiv.innerHTML = getCustomerLayout(getCartContent(), true, "Giỏ hàng", "#/customer");
                initCustomerEvents();
            } else {
                const qtySpan = btnPlus.parentElement.querySelector('.qty-display');
                if (qtySpan) qtySpan.textContent = cart[name].quantity;
                const badge = document.querySelector('header a[href*="#/customer/cart"] span');
                if (badge) {
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
                if (window.location.hash.includes('#/customer/cart')) {
                    appDiv.innerHTML = getCustomerLayout(getCartContent(), true, "Giỏ hàng", "#/customer");
                    initCustomerEvents();
                } else {
                    const qtySpan = btnMinus.parentElement.querySelector('.qty-display');
                    if (qtySpan) qtySpan.textContent = cart[name] ? cart[name].quantity : 0;
                    const badge = document.querySelector('header a[href*="#/customer/cart"] span');
                    if (badge) {
                        const cartCount = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
                        badge.textContent = cartCount;
                        badge.style.display = cartCount > 0 ? 'block' : 'none';
                    }
                }
            }
        }

        // CHUYỂN TỚI TRANG THANH TOÁN
        if (btnGotoPayment) {
            window.location.hash = getLink('#/customer/payment');
        }

        // CHỐT ĐƠN HÀNG VÀ TRỪ KHO
        if (btnFinalCompleteOrder) {
            const activeOrderId = localStorage.getItem('lastActiveOrderId');
            if (!activeOrderId) { alert("Không tìm thấy phiên đơn hàng!"); return; }

            // Gọi hàm Complete để trừ kho
            fetch(`${API_BASE}/api/warehouse/orders/${activeOrderId}/complete`, {
                method: 'PATCH'
            })
            .then(res => {
                if (res.ok) {
                    const profile = JSON.parse(localStorage.getItem('customerProfile')) || { name: 'Khách hàng' };
                    // Lấy số tiền đang hiển thị trên trang thanh toán
                    const finalPriceText =
                        document.querySelector('.font-black.text-xl.text-\\[\\#E33539\\]')?.innerText || '0';

                    localStorage.setItem('receiptCacheData', JSON.stringify({
                        id: activeOrderId,
                        name: profile.name,
                        total: parseInt(finalPriceText.replace(/\D/g, "")) || 0
                    }));

                    // Reset phiên khách hàng
                    localStorage.removeItem('lastActiveOrderId');
                    localStorage.removeItem('orderHistoryItems');

                    window.location.hash = getLink('#/customer/receipt');
                } else {
                    alert("Lỗi chốt hóa đơn!");
                }
            });
        }
    };

    document._customerClickHandler = newClickHandler;
    document.addEventListener('click', newClickHandler);

    // GỬI ĐƠN LÊN BẾP (GỘP ĐƠN)
        const orderForm = document.getElementById('customerOrderForm');
        if(orderForm) {
            orderForm.onsubmit = (e) => {
                e.preventDefault();
                const customerName = document.getElementById('custName').value;
                const customerPhone = document.getElementById('custPhone').value;
                const tableId = localStorage.getItem('customerTableId');

                if (Object.keys(cart).length === 0) { alert("Giỏ hàng trống!"); return; }

                let totalAmount = 0;
                const items = Object.keys(cart).map(name => {
                    totalAmount += cart[name].price * cart[name].quantity;
                    return {
                        productName: name,
                        quantity: cart[name].quantity,
                        unitPrice: cart[name].price,
                        totalPrice: cart[name].price * cart[name].quantity
                    };
                });

                // TÍNH TOÁN LƯU LỊCH SỬ CỘNG DỒN MÓN ĂN VÀO LOCALSTORAGE
                let historyItems = JSON.parse(localStorage.getItem('orderHistoryItems')) || [];
                items.forEach(newItem => {
                    let existingItem = historyItems.find(i => i.productName === newItem.productName);
                    if (existingItem) {
                        existingItem.quantity += newItem.quantity;
                        existingItem.totalPrice += newItem.totalPrice;
                    } else {
                        historyItems.push(newItem);
                    }
                });
                localStorage.setItem('orderHistoryItems', JSON.stringify(historyItems));

                // Sinh ID ngẫu nhiên dự phòng
                const orderId = 'RCC-' + Math.floor(Math.random() * 90000 + 10000);

                // Xử lý tổng tiền hóa đơn tổng hợp (cộng dồn nếu đã có đơn cũ)
                const fallbackData = JSON.parse(localStorage.getItem('lastOrderData')) || { total: 0 };
                const accumulatedTotal = fallbackData.total + totalAmount;

                const orderPayload = {
                    id: orderId,
                    serverName: customerName,
                    totalAmount: totalAmount, // Backend sẽ tự gộp tổng này
                    status: "Chờ xử lý",
                    items: items
                };

                if (tableId) orderPayload.table = { id: parseInt(tableId) };

                fetch(`${API_BASE}/api/warehouse/orders`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(orderPayload)
                })
                .then(res => res.json())
                .then(savedOrder => {
                    localStorage.removeItem('redCatCart');
                    cart = {};
                    localStorage.setItem('lastActiveOrderId', savedOrder.id);
                    localStorage.setItem('customerProfile', JSON.stringify({ name: customerName, phone: customerPhone }));

                    // Cập nhật lại tổng tiền gộp
                    localStorage.setItem('lastOrderData', JSON.stringify({
                        id: savedOrder.id, name: customerName, total: savedOrder.totalAmount || accumulatedTotal
                    }));

                    window.location.hash = getLink('#/customer/success');
                })
                .catch(() => {
                    alert("Lỗi kết nối máy chủ! Hãy thử lại.");
                });
            };
        }
}

// ==========================================
// 5. CÁC HÀM XUẤT CHO ROUTER (app.js)
// ==========================================
export function renderCustomerHome() { return getCustomerLayout(getHomeContent(), true, "Red Cat Coffee", false); }

export function renderCustomerMenu(products, categoryId) {
    const categoryName = categoryId == 1 ? 'Cà Phê' : (categoryId == 2 ? 'Trà' : 'Đồ ăn vặt');
    return getCustomerLayout(getMenuContent(products, categoryId), true, categoryName, "#/customer");
}

export function renderCustomerCart() { return getCustomerLayout(getCartContent(), true, "Giỏ hàng", "#/customer"); }
export function renderCustomerCheckout() { return getCustomerLayout(getCheckoutContent(), true, "Gửi đơn", "#/customer/cart"); }
export function renderCustomerSuccess() { return getCustomerLayout(getSuccessContent(), true, "Trạng thái", "#/customer"); }
export function renderCustomerReceipt() { return getCustomerLayout(getReceiptContent(), false); }

// Màn hình Thanh toán (Có Fetch lấy chi tiết đơn từ Backend)
export function renderCustomerPayment() {
    const activeOrderId = localStorage.getItem('lastActiveOrderId');
    const appDiv = document.getElementById('app');

    if (activeOrderId && activeOrderId !== 'undefined') {
        // 1. Hiển thị màn hình Loading chuyên nghiệp trong lúc đợi Backend trả số liệu
        appDiv.innerHTML = getCustomerLayout(`
            <div class="p-10 flex flex-col items-center justify-center mt-20 text-gray-400">
                <i class="fa-solid fa-circle-notch fa-spin text-4xl text-[#E33539] mb-4"></i>
                <p class="text-sm font-medium">Đang trích xuất hóa đơn...</p>
            </div>
        `, true, "Thanh toán", "#/customer/success");

        // 2. Gọi Backend
        fetch(`${API_BASE}/api/warehouse/orders/${activeOrderId}`)
            .then(res => {
                if (!res.ok) throw new Error("Lỗi API Backend");
                return res.json();
            })
            .then(orderDetail => {
                appDiv.innerHTML = getCustomerLayout(getPaymentContent(orderDetail), true, "Thanh toán", "#/customer/success");
                initCustomerEvents();
            }).catch(() => {
                // 3. Nếu lỗi (Mất mạng), dùng Phao cứu sinh
                appDiv.innerHTML = getCustomerLayout(getPaymentContent(null), true, "Thanh toán", "#/customer/success");
                initCustomerEvents();
            });
    } else {
        // Trường hợp ID lỗi hoàn toàn
        appDiv.innerHTML = getCustomerLayout(getPaymentContent(null), true, "Thanh toán", "#/customer/success");
        initCustomerEvents();
    }
    return ``;
}