# COMP3123 – Full Stack Development Assignment

Student: Meriç Yassine (101503213)
Course: COMP 3123 – Full Stack Development I
Semester: Fall 2025
Assignment: Backend + Frontend

## Project Overview

This project implements a full-stack Employee Management System using:

### Backend: Node.js, Express, MongoDB (Assignment 1 requirements)

### Frontend: ReactJS with Material UI, Axios, React Router, React Query (Assignment 2 requirements)

The system allows users to:

- Sign up for a new account

- Log in and authenticate

- View employee records

- Create new employees (Postman)

- Delete employees

- Log out and securely end session

- Front-end features include:

- Clean Material UI design

- Protected routing

- State management via React Query

- API error handling

- Responsive layouts


## 🚀 How to Run the Project
### 🔧 1. Requirements

- Node.js (v18+ recommended)

- MongoDB running locally (mongodb://localhost:27017)

- npm or yarn

### 🖥️ 2. Run the Backend (PORT: 3001)
- Navigate to backend:
cd backend

- Install dependencies:
npm install

- Create .env:
PORT=3001
MONGO_URL=mongodb://localhost:27017/comp3123_assignment1
JWT_SECRET=secret123

- Start backend:
npm start

- Expected console output:
MongoDB connected
Server running on port 3001

### 💻 3. Run the Frontend (PORT: 3000)
- Navigate to frontend:
cd frontend

- Install dependencies:
npm install

- Start React:
npm start


- Frontend should open automatically at:

👉 http://localhost:3000

🔌 API Endpoints Summary (Backend)
User Routes
Method	Endpoint	Description
POST	/api/v1/user/signup	Create a new user
POST	/api/v1/user/login	Authenticate user and return JWT token
Employee Routes
Method	Endpoint	Description
GET	/api/v1/emp/employees	Get all employees
POST	/api/v1/emp/employees	Create employee (JSON body)
DELETE	/api/v1/emp/employees?eid=ID	Delete employee by ID
🔑 Authentication

The frontend uses:

localStorage to store JWT

Axios interceptor to attach token

Protected routes to prevent anonymous access

🎨 Frontend Features

✓ React Router navigation
✓ ProtectedRoute component
✓ Material UI table for employees
✓ Axios API integration
✓ React Query for cache + auto-refetch
✓ Form validation on Signup & Login
✓ Logout & redirect back to login
✓ Clean, professional UI following Material Design


## 🧩 Technologies Used
### Backend

- Node.js

- Express.js

- MongoDB / Mongoose

- JWT Authentication

- bcrypt

### Frontend

- ReactJS

- Material UI

- React Router

- Axios

- React Query

- CSS Styling