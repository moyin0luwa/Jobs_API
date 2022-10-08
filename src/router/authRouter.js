const router = require("express").Router();
const { loginUser, registerUser } = require("../controllers/authController");
const authMiddleware = require("../middleware/auth");

router
.post("/login", loginUser)
.post("/register", registerUser);

module.exports = router;
