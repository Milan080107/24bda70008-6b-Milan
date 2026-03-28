# 🏦 Banking JWT API

A secure, RESTful Banking API built with **Node.js**, **Express**, and **MongoDB**. This project implements core banking functionalities such as user registration, authentication via JSON Web Tokens (JWT), balance inquiries, and money deposits.

---

## 🚀 Features

-   **User Authentication**: Secure **Sign-up** and **Login** with hashed passwords using `bcryptjs`.
-   **JWT Authorization**: Protected routes using JSON Web Tokens for secure transactions.
-   **Banking Operations**:
    -   🏦 **Check Balance**: View current account balance.
    -   💵 **Deposit**: Add funds to the account.
-   **Security**: Implementation of CORS and environment-based configuration for sensitive data.
-   **Database**: Persistent storage using MongoDB and Mongoose ODM.

---

## 🛠️ Tech Stack

-   **Backend**: Node.js, Express.js (v5.0+)
-   **Database**: MongoDB (via Mongoose)
-   **Security**: JWT (jsonwebtoken), Bcryptjs
-   **Environment**: Dotenv
-   **Deployment**: Ready for Vercel/Render

---

## 🔧 Installation & Setup

### 1. Prerequisites
-   [Node.js](https://nodejs.org/) installed.
-   A [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account or local MongoDB instance.

### 2. Clone the Repository
```bash
git clone <repository-url>
cd 24BDA70006-6b-Pritesh-Kumar-Pandey
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Configure Environment Variables
Create a `.env` file in the root directory and add the following:
```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_random_secret
JWT_EXPIRE=1h
```

### 5. Running the API
**Development mode (using nodemon):**
```bash
npm run dev
```
**Production mode:**
```bash
npm start
```

---

## 📡 API Endpoints

### 🔐 Auth Routes (`/api/auth`)
| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `POST` | `/register` | Register a new user | No |
| `POST` | `/login` | Authenticate & get JWT | No |

### 🏦 Banking Routes (`/api/bank`)
| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `GET` | `/balance` | Check account balance | **Yes** (JWT) |
| `POST` | `/deposit` | Deposit funds | **Yes** (JWT) |

---

## 🧾 Usage Examples (JSON)

### 1. Register User
`POST /api/auth/register`
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword123"
}
```

### 2. Login
`POST /api/auth/login`
```json
{
  "email": "john@example.com",
  "password": "securepassword123"
}
```
*Returns:* `{ "message": "Login Successful", "token": "eyJhbG..." }`

### 3. Check Balance (Example Header)
`GET /api/bank/balance`
- **Header**: `Authorization: <your_jwt_token>`

---

## 🛡️ Security Best Practices
-   Passwords are never stored in plain text (Hashed using `bcryptjs`).
-   Sensitive API keys and secrets are managed via `.env`.
-   All banking routes are guarded by a JWT verification layer.

![alt text](<Screenshot 2026-03-08 194359.png>)
![alt text](<Screenshot 2026-03-08 193202.png>)
![alt text](<Screenshot 2026-03-08 194015.png>)
![alt text](<Screenshot 2026-03-08 194105.png>)
![alt text](<Screenshot 2026-03-08 194243.png>)