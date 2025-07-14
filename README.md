# 🎓 Student Management System

A fully functional **Student Management System** built using **React + Vite**, **Redux Toolkit**, and **JSON Server** for backend simulation.

> ✅ Perfect for practical exams, portfolio projects, or interviews.

---

## 🚀 Live Demo

🔗 [Visit Live Project](react-exam-zeta-eight.vercel.app)  

---

## 🛠 Tech Stack

- ⚛️ **React + Vite** — Fast and modern frontend development
- 🗂️ **Redux Toolkit + Thunk** — State management with async handling
- 💅 **Bootstrap 5** — Responsive and clean UI design
- 🔐 **Custom Authentication** — Simple login system
- 📡 **JSON Server** — Fake REST API for backend operations

---

## ✨ Features

- ✅ **Student List** — View all students from the JSON Server
- ➕ **Add Student** — Register new students
- ✏️ **Edit Student** — Update existing student info
- ❌ **Delete Student** — Remove a student from the list
- 🔍 **Filter & Sort** — Based on name, class, or roll number
- 🔐 **User Login Authentication**
- 🔁 **PrivateRoute** — Access protection for logged-in users only
- 📱 **Responsive UI** — Works on mobile, tablet, and desktop

---

## 🔐 Login Credentials

```bash
Email: admin@example.com
Password: admin123

---

## 📦 Installation & Setup

1️⃣ Clone the Repository

git clone https://github.com/Bhargavbhimani229/React-exam.git
cd React-exam/student-management


2️⃣ Install Dependencies
npm install


3️⃣ Start JSON Server (Backend)
npx json-server --watch db.json --port 5000


4️⃣ Start React App
npm run dev

📁 Folder Structure

student-management/
│
├── public/
├── src/
│   ├── components/        # UI Components (Navbar, Forms, etc.)
│   ├── features/          # Redux slices (students, auth)
│   ├── pages/             # Pages (Login, StudentList, Form)
│   ├── routes/            # PrivateRoute setup
│   ├── services/          # Axios calls to JSON Server
│   ├── App.jsx
│   └── main.jsx
├── db.json                # JSON Server Database
└── README.md
