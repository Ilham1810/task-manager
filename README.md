# Task Manager App

A simple fullstack task management application built using React, Node.js, Express, and MySQL.

This project was created as a technical assessment to demonstrate:
- REST API development
- JWT authentication
- CRUD operations
- Relational database design
- Frontend and backend integration

---

# Tech Stack

## Frontend
- React.js
- Axios
- Bootstrap

## Backend
- Node.js
- Express.js
- Sequelize ORM
- JWT Authentication

## Database
- MySQL
- phpMyAdmin

---

# Features

- User registration
- User login
- JWT authentication
- Create task
- View all tasks
- Update task
- Delete task
- Activity logging

---

# Project Structure

```bash
task-manager/
│
├── backend/
│
└── frontend/
```

---

# Database Setup

Create a MySQL database using phpMyAdmin:

```sql
CREATE DATABASE task_manager;
```

---

# Backend Setup

Go to backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create `.env` file:

```env
PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=task_manager

JWT_SECRET=secret123
```

Run backend server:

```bash
npm run dev
```

Backend runs on:

```text
http://localhost:5000
```

---

# Frontend Setup

Go to frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Install bootstrap:

```bash
npm install bootstrap
```

Run frontend:

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

# API Endpoints

## Authentication

### Register

```http
POST /api/auth/register
```

Request Body:

```json
{
  "username": "admin",
  "password": "123456"
}
```

---

### Login

```http
POST /api/auth/login
```

Request Body:

```json
{
  "username": "admin",
  "password": "123456"
}
```

---

## Tasks

### Get All Tasks

```http
GET /api/tasks
```

Header:

```text
Authorization: Bearer TOKEN
```

---

### Create Task

```http
POST /api/tasks
```

Request Body:

```json
{
  "title": "Learn NodeJS",
  "description": "Build task manager app",
  "status": "todo",
  "due_date": "2025-05-20"
}
```

---

### Update Task

```http
PUT /api/tasks/:id
```

---

### Delete Task

```http
DELETE /api/tasks/:id
```

---

# Authentication

This application uses JWT authentication.

After login, store the token in browser localStorage:

```js
localStorage.setItem('token', 'YOUR_TOKEN')
```
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

# Database Schema

## Users Table

| Column | Type |
|---|---|
| id | integer |
| username | string |
| password | string |

---

## Tasks Table

| Column | Type |
|---|---|
| id | integer |
| title | string |
| description | text |
| status | enum |
| due_date | date |
| UserId | foreign key |

---

## ActivityLogs Table

| Column | Type |
|---|---|
| id | integer |
| action | string |

---

# Architecture

```text
React Frontend
      ↓
Axios HTTP Request
      ↓
Express REST API
      ↓
JWT Authentication Middleware
      ↓
MySQL Database
```

---

# Testing

API testing was done using Postman.

Test scenarios:
- User login & register
- CRUD task operations
- Unauthorized access
- Invalid token handling

---

# Notes

- Backend follows a simple MVC structure
- Sequelize is used for database interaction
- Passwords are hashed using bcryptjs
- Protected routes use JWT middleware

---

# Future Improvements

- Edit task UI
- Search task
- Filter task by status
- Pagination
- Docker support
- Swagger documentation
- Unit testing

---

# Author

Ilham Ar-rosyid
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

