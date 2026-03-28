require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

// 🔥 Dummy in-memory data
let user = null;
let balance = 0;

// 🔹 Register
app.post("/api/auth/register", (req, res) => {
    const { name, email, password } = req.body;
    user = { name, email, password };
    res.json({ message: "User Registered Successfully" });
});

// 🔹 Login
app.post("/api/auth/login", (req, res) => {
    const { email, password } = req.body;

    if (!user || user.email !== email || user.password !== password) {
        return res.status(400).json({ message: "Invalid credentials" });
    }

    res.json({
        message: "Login Successful",
        token: "dummy-token-123"
    });
});

// 🔹 Middleware (fake auth)
const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(403).json({ message: "Token Required" });
    }

    next();
};

// 🔹 Balance
app.get("/api/bank/balance", authMiddleware, (req, res) => {
    res.json({ balance });
});

// 🔹 Deposit
app.post("/api/bank/deposit", authMiddleware, (req, res) => {
    const { amount } = req.body;
    balance += amount;
    res.json({ message: "Deposit successful", balance });
});

// 🔹 Homepage (IMPORTANT)
app.get("/", (req, res) => {
    res.send("Banking API is running 🚀");
});

module.exports = app;