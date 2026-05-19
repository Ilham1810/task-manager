# 1. Desain Arsitektur Aplikasi

Aplikasi menggunakan arsitektur client-server.

- Frontend menggunakan React.js untuk menampilkan user interface.
- Backend menggunakan Node.js dan Express.js sebagai REST API.
- Database menggunakan MySQL untuk menyimpan data user dan task.
- Frontend berkomunikasi dengan backend menggunakan Axios HTTP request.
- Backend melakukan autentikasi JWT sebelum mengakses data database.

---

# 2. Desain Model Data / Schema Database

## Tabel Users
- id
- username
- password

## Tabel Tasks
- id
- title
- description
- status
- due_date
- user_id

## Tabel ActivityLogs
- id
- action

Relasi:
- 1 User memiliki banyak Task.
- 1 Task dimiliki oleh 1 User.

---

# 3. Desain Endpoint REST API

| Method | Endpoint | Fungsi |
|---|---|---|
| POST | /api/auth/register | Register user |
| POST | /api/auth/login | Login user |
| GET | /api/tasks | Mengambil semua task |
| POST | /api/tasks | Menambah task |
| PUT | /api/tasks/:id | Mengubah task |
| DELETE | /api/tasks/:id | Menghapus task |

---

# 4. Pemilihan Node.js dan Go

Pada aplikasi ini backend menggunakan Node.js karena:
- ringan dan cepat untuk development
- cocok untuk REST API sederhana
- mudah terintegrasi dengan React.js

Go lebih cocok digunakan untuk:
- aplikasi skala besar
- high concurrency
- background worker
- real-time service

Namun untuk aplikasi Task Manager sederhana, Node.js sudah cukup dan lebih cepat dikembangkan.

---

# 5. Strategi Dasar Testing

Testing dilakukan menggunakan Postman.

Testing yang dilakukan:
- Register dan login user
- CRUD task
- Testing JWT authentication
- Testing invalid token
- Testing akses endpoint tanpa login
- Testing validasi input

---
# Task Manager App

Simple Fullstack Task Manager Application using:

- React.js
- Node.js
- Express.js
- MySQL
- Sequelize ORM
- JWT Authentication
- Bootstrap UI

---

# Features

- User Register
- User Login
- JWT Authentication
- Create Task
- Get All Tasks
- Update Task
- Delete Task
- Activity Logging
- REST API
- MySQL Database
- Responsive Bootstrap UI

---

# Tech Stack

## Frontend
- React.js (Vite)
- Axios
- Bootstrap

## Backend
- Node.js
- Express.js
- Sequelize ORM
- JWT
- bcryptjs

## Database
- MySQL
- phpMyAdmin

---

# Project Structure

task-manager/
│
├── backend/
│
└── frontend/

---

# Database Setup

Open phpMyAdmin:

http://localhost/phpmyadmin

Create database:

```sql
CREATE DATABASE task_manager;

