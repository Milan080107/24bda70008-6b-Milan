const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {

    const token = req.headers["authorization"];

    if (!token) {
        return res.status(403).json({ message: "Token Required" });
    }

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.userId = decoded.id;

        next();

    } catch (error) {

        res.status(401).json({ message: "Invalid or Expired Token" });

    }
};

module.exports = verifyToken;