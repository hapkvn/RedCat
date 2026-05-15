-- 1. Tạo Database (Hỗ trợ font tiếng Việt với utf8mb4)
CREATE DATABASE IF NOT EXISTS redcat_db
CHARACTER SET utf8mb4 
COLLATE utf8mb4_unicode_ci;

-- 2. Chỉ định sử dụng database vừa tạo
USE redcat_db;

-- ==========================================
-- NHÓM 1: QUẢN TRỊ & PHÂN QUYỀN
-- ==========================================
CREATE TABLE IF NOT EXISTS users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    full_name VARCHAR(100),
    phone VARCHAR(20),
    email VARCHAR(100),
    role VARCHAR(20) NOT NULL,
    is_active BOOLEAN DEFAULT TRUE
);

-- ==========================================
-- NHÓM 2: DANH MỤC & NGUYÊN LIỆU (MASTER DATA)
-- ==========================================
CREATE TABLE IF NOT EXISTS suppliers (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    contact_info VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS categories (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

-- Bảng Nguyên liệu (Mã NL dùng VARCHAR để giống giao diện: NL001, NL002...)
CREATE TABLE IF NOT EXISTS materials (
    id VARCHAR(20) PRIMARY KEY, 
    name VARCHAR(100) NOT NULL,
    category_id BIGINT,
    supplier_id BIGINT,
    unit VARCHAR(20),
    stock_quantity DECIMAL(10,2) DEFAULT 0,
    min_stock_level DECIMAL(10,2) DEFAULT 0,
    unit_price DECIMAL(15,2) DEFAULT 0,
    FOREIGN KEY (category_id) REFERENCES categories(id),
    FOREIGN KEY (supplier_id) REFERENCES suppliers(id)
);

-- ==========================================
-- NHÓM 3: GIAO DỊCH KHO (INVENTORY)
-- ==========================================
-- Phiếu nhập
CREATE TABLE IF NOT EXISTS import_orders (
    id VARCHAR(20) PRIMARY KEY, -- Ví dụ: PN-219
    supplier_id BIGINT,
    import_date DATETIME,
    note TEXT,
    total_amount DECIMAL(15,2) DEFAULT 0,
    status VARCHAR(50),
    FOREIGN KEY (supplier_id) REFERENCES suppliers(id)
);

-- Chi tiết phiếu nhập
CREATE TABLE IF NOT EXISTS import_order_details (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    import_order_id VARCHAR(20),
    material_id VARCHAR(20),
    quantity DECIMAL(10,2) NOT NULL,
    unit_price DECIMAL(15,2) NOT NULL,
    total_price DECIMAL(15,2) NOT NULL,
    FOREIGN KEY (import_order_id) REFERENCES import_orders(id),
    FOREIGN KEY (material_id) REFERENCES materials(id)
);

-- Phiếu xuất
CREATE TABLE IF NOT EXISTS export_orders (
    id VARCHAR(20) PRIMARY KEY, -- Ví dụ: PX-102
    export_date DATETIME,
    receiver_name VARCHAR(100),
    reason VARCHAR(100),
    note TEXT,
    total_amount DECIMAL(15,2) DEFAULT 0,
    status VARCHAR(50)
);

-- Chi tiết phiếu xuất
CREATE TABLE IF NOT EXISTS export_order_details (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    export_order_id VARCHAR(20),
    material_id VARCHAR(20),
    quantity DECIMAL(10,2) NOT NULL,
    unit_price DECIMAL(15,2) NOT NULL,
    total_price DECIMAL(15,2) NOT NULL,
    FOREIGN KEY (export_order_id) REFERENCES export_orders(id),
    FOREIGN KEY (material_id) REFERENCES materials(id)
);

-- ==========================================
-- NHÓM 4: BÁN HÀNG & PHA CHẾ (POS & KDS)
-- ==========================================
-- Bảng Danh sách món ăn/đồ uống bán ra
CREATE TABLE IF NOT EXISTS products (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(15,2) NOT NULL
);

-- Bảng Công thức pha chế (1 Món gồm những Nguyên liệu gì, tốn bao nhiêu)
CREATE TABLE IF NOT EXISTS recipes (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    product_id BIGINT,
    material_id VARCHAR(20),
    quantity_needed DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products(id),
    FOREIGN KEY (material_id) REFERENCES materials(id)
);

-- Bảng Order (Lưu thông tin các bàn đang gọi món)
CREATE TABLE IF NOT EXISTS orders (
    id VARCHAR(20) PRIMARY KEY, -- Ví dụ: Order 1.1
    table_name VARCHAR(50),
    server_name VARCHAR(100),
    order_time DATETIME,
    status VARCHAR(50)
);

-- Bảng Chi tiết Order (Món cần pha chế hiển thị trên màn hình Bếp)
CREATE TABLE IF NOT EXISTS order_items (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    order_id VARCHAR(20),
    product_name VARCHAR(100),
    quantity INT NOT NULL,
    is_done BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (order_id) REFERENCES orders(id)
);

-- ==========================================
-- 5. CHÈN DỮ LIỆU MẪU ĐỂ TEST
-- ==========================================
INSERT INTO users (username, password, full_name, phone, role) VALUES 
('admin', '123456', 'Lưu Huy Hoàng', '0999999999', 'ADMIN'),
('kho', '123456', 'Nguyễn Văn A', '0988888888', 'STAFF');

INSERT INTO suppliers (name, contact_info) VALUES 
('Highland Beans', '0123456789'),
('Dairy Farm', '0987654321');

INSERT INTO categories (name) VALUES 
('Nguyên liệu'), ('Bao bì');

INSERT INTO materials (id, name, category_id, supplier_id, unit, stock_quantity, min_stock_level, unit_price) VALUES 
('NL001', 'Cà phê hạt xay (Robusta)', 1, 1, 'kg', 15, 5, 150000),
('NL002', 'Sữa đặc Ngôi Sao', 1, 2, 'lon', 4, 5, 20000);