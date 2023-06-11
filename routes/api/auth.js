const express = require("express");

const { validateBody, authenticate } = require("../../helpers");
const { schemas } = require("../../models/user");

const {
  login,
  getCurrent,
  logout,
  register,
} = require("../../controllers/auth");

const router = express.Router();

router.post("/register", validateBody(schemas.registerSchema), register);
router.post("/login", validateBody(schemas.loginSchema), login);

router.get("/current", authenticate, getCurrent);
router.post("/logout", authenticate, logout);

module.exports = router;
