require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const bankingRoutes = require("./routes/bankingRoutes");

const app = express();

connectDB();

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/bank", bankingRoutes);

module.exports = app;

app.get("/", (req, res) => {
    res.send("Banking JWT API is running 🚀");
});