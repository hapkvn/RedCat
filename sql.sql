-- 1. Tạo Database
CREATE DATABASE IF NOT EXISTS redcat_db
CHARACTER SET utf8mb4 
COLLATE utf8mb4_unicode_ci;

USE redcat_db;

-- 2. Dọn dẹp các bảng cũ bị lỗi (Xóa theo thứ tự để không dính lỗi khóa ngoại)
DROP TABLE IF EXISTS order_items;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS recipes;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS export_order_details;
DROP TABLE IF EXISTS export_orders;
DROP TABLE IF EXISTS import_order_details;
DROP TABLE IF EXISTS import_orders;
DROP TABLE IF EXISTS materials;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS suppliers;
DROP TABLE IF EXISTS tables;
DROP TABLE IF EXISTS users;

-- ==========================================
-- NHÓM 1: QUẢN TRỊ & PHÂN QUYỀN
-- ==========================================
CREATE TABLE users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    full_name VARCHAR(100),
    phone_number VARCHAR(20), -- Sửa lại thành phone_number để khớp file User.java
    email VARCHAR(100) UNIQUE,
    role VARCHAR(20) NOT NULL,
    is_active BOOLEAN DEFAULT TRUE
);

-- ==========================================
-- NHÓM 2: DANH MỤC, NHÀ CUNG CẤP & BÀN
-- ==========================================
CREATE TABLE categories (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE suppliers (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    contact_info VARCHAR(255)
);

CREATE TABLE tables (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    status VARCHAR(50) DEFAULT 'Trống',
    qr_token VARCHAR(100) UNIQUE
);

-- ==========================================
-- NHÓM 3: MENU & KHO NGUYÊN LIỆU
-- ==========================================
-- Bảng Món ăn (Cập nhật đầy đủ cho trang Quản lý Thực đơn)
CREATE TABLE products (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    category_id BIGINT,
    description TEXT,
    price DECIMAL(15,2) NOT NULL,
    image_url VARCHAR(500),
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

-- Bảng Nguyên liệu
CREATE TABLE materials (
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

-- Bảng Công thức pha chế (Gắn Món ăn với Nguyên liệu)
CREATE TABLE recipes (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    product_id BIGINT,
    material_id VARCHAR(20),
    quantity_needed DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products(id),
    FOREIGN KEY (material_id) REFERENCES materials(id)
);

-- ==========================================
-- NHÓM 4: GIAO DỊCH KHO (NHẬP / XUẤT)
-- ==========================================
CREATE TABLE import_orders (
    id VARCHAR(20) PRIMARY KEY, 
    supplier_id BIGINT,
    import_date DATETIME,
    note TEXT,
    total_amount DECIMAL(15,2) DEFAULT 0,
    status VARCHAR(50),
    FOREIGN KEY (supplier_id) REFERENCES suppliers(id)
);

CREATE TABLE import_order_details (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    import_order_id VARCHAR(20),
    material_id VARCHAR(20),
    quantity DECIMAL(10,2) NOT NULL,
    unit_price DECIMAL(15,2) NOT NULL,
    total_price DECIMAL(15,2) NOT NULL,
    FOREIGN KEY (import_order_id) REFERENCES import_orders(id),
    FOREIGN KEY (material_id) REFERENCES materials(id)
);

CREATE TABLE export_orders (
    id VARCHAR(20) PRIMARY KEY,
    export_date DATETIME,
    receiver_name VARCHAR(100),
    reason VARCHAR(100),
    note TEXT,
    total_amount DECIMAL(15,2) DEFAULT 0,
    status VARCHAR(50)
);

CREATE TABLE export_order_details (
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
-- NHÓM 5: ĐƠN HÀNG (POS & BẾP)
-- ==========================================
CREATE TABLE orders (
    id VARCHAR(50) PRIMARY KEY,
    table_id BIGINT,
    server_name VARCHAR(100),
    order_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    total_amount DECIMAL(15,2) DEFAULT 0,
    status VARCHAR(50) DEFAULT 'Chờ xử lý',
    FOREIGN KEY (table_id) REFERENCES tables(id)
);

CREATE TABLE order_items (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    order_id VARCHAR(50),
    product_name VARCHAR(100),
    quantity INT NOT NULL,
    unit_price DECIMAL(15,2) DEFAULT 0,
    total_price DECIMAL(15,2) DEFAULT 0,
    is_done BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (order_id) REFERENCES orders(id)
);

-- ==========================================
-- DỮ LIỆU MẪU ĐỂ TEST HỆ THỐNG
-- ==========================================
INSERT INTO users (username, password, full_name, phone_number, email, role, is_active) VALUES 
('admin', '123456', 'Lưu Huy Hoàng', '0999999999', 'admin@redcat.com', 'ADMIN', true),
('kho', '123456', 'Nguyễn Văn A', '0988888888', 'kho@redcat.com', 'STAFF', true);

INSERT INTO tables (name, status, qr_token) VALUES 
('Bàn 1', 'Trống', 'b1_xyz'), 
('Bàn 2', 'Đang sử dụng', 'b2_abc');

INSERT INTO categories (name) VALUES 
('Cà phê'), 
('Trà'), 
('Nguyên liệu'), 
('Bao bì');

INSERT INTO suppliers (name, contact_info) VALUES 
('Highland Beans', '0123456789'),
('Dairy Farm', '0987654321');

INSERT INTO materials (id, name, category_id, supplier_id, unit, stock_quantity, min_stock_level, unit_price) VALUES 
('NL003', 'Cà phê hạdt xay (Robusta)', 3, 1, 'kg', 15, 5, 150000),
('NL002', 'Sữa đặc Ngôi Sao', 3, 2, 'lon', 4, 5, 20000);
select *from products