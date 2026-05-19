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