const express = require("express");
const verifyToken = require("../middleware/authMiddleware");
const User = require("../models/User");

const router = express.Router();


// Check Balance
router.get("/balance", verifyToken, async (req, res) => {

    const user = await User.findById(req.userId);

    res.json({
        balance: user.balance
    });

});


// Deposit Money
router.post("/deposit", verifyToken, async (req, res) => {

    const { amount } = req.body;

    const user = await User.findById(req.userId);

    user.balance += amount;

    await user.save();

    res.json({
        message: "Deposit successful",
        balance: user.balance
    });

});

module.exports = router;