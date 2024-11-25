const express = require("express");
const { verifyToken, authorizeRoles } = require("../middlewares/auth");

const router = express.Router();

// Example: Admin-only route
router.get("/admin", verifyToken, authorizeRoles("Admin"), (req, res) => {
  res.status(200).json({ message: "Welcome, Admin!" });
});

// Example: User route
router.get("/user", verifyToken, authorizeRoles("User", "Admin"), (req, res) => {
  res.status(200).json({ message: "Welcome, User!" });
});

module.exports = router;
