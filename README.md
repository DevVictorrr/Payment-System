<div align="center">
  <img src="https://0x0.st/PQ9c.jpg" alt="Might Guy" width="150" style="border-radius: 50%;">
</div>

# Finance Dashboard - Transaction Application

**A Power of YOUTH scale Full-Stack Transaction Dashboard 🍃**

---

## 🎯 About The Project

This project is a complete full-stack web application designed for processing and managing financial transactions at scale. It demonstrates an elegant dynamic glassmorphism User Interface backed by a robust, secure, and performant server architecture capable of effortlessly handling **1,000,000+** transactions. 

### 🌟 Key Features

*   **Responsive UI**: Modern, glassmorphism design with Vanilla CSS.
*   **Dynamic Calculations**: Real-time display of calculated balances directly from the database schema.
*   **Pagination Support**: The API seamlessly handles pagination so the browser doesn't crash when querying millions of historical records.
*   **High Performance Data Seeding**: Includes a powerful Node.js `mysql2` script for testing the infrastructure under heavy database load (capable of inserting 1M records in seconds).
*   **Secure**: Database credentials are automatically masked from source control through a mapped `.env` file architecture.

---

## 💻 Tech Stack

### Frontend (User Interface)
*   **React 18**
*   **Vite** (Next-generation, blazing-fast bundler)
*   **Vanilla CSS** (No heavy utility frameworks)

### Backend (Server Architecture)
*   **Java 21**
*   **Spring Boot 3.4.2**
*   **Spring Data JPA**
*   **RESTful APIs**

### Database
*   **MySQL 8+**

---

## 🚀 Getting Started

Follow these steps to get a local copy up and running.

### 1. Prerequisites

You must have the following installed on your local machine:
*   [Node.js](https://nodejs.org/en) (v18+)
*   [Java JDK](https://adoptium.net/temurin/releases/) (v21+)
*   [MySQL Server](https://dev.mysql.com/downloads/installer/)

### 2. Database Environment Setup
To securely connect the Spring Boot backend to your database without exposing your password, create a `.env` file in the root directory:

```env
DB_USERNAME=root
DB_PASSWORD=your_mysql_password
```

### 3. Running the Backend (Spring Boot)
The server natively listens on `http://localhost:8080`.

```bash
cd backend
./mvnw spring-boot:run
# or on Windows:
# .\mvnw.cmd spring-boot:run
```

### 4. Running the Frontend (React + Vite)
The application will be accessible at `http://localhost:5173`.

```bash
cd frontend
npm install
npm run dev
```

---

## ⚡ Generating Scale Data

To test the application under load and verify the pagination/database aggregations are working correctly, you can use the built-in bulk insert script.

```bash
npm install mysql2
node bulkInsert.js
```
*Note: Ensure your backend `.env` variables are correctly configured, as the Node script uses them to connect and push the 1,000,000 transactions directly to your local MySQL instance.*
