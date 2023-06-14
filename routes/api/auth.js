const express = require("express");

const { validateBody } = require("../../helpers");
const { authenticate, upload } = require("../../middlewares");
const { schemas } = require("../../models/user");
const {
  login,
  getCurrent,
  logout,
  register,
  updateAvatar,
} = require("../../controllers/auth");

const router = express.Router();

router.post("/register", validateBody(schemas.registerSchema), register);
router.post("/login", validateBody(schemas.loginSchema), login);

router.get("/current", authenticate, getCurrent);
router.post("/logout", authenticate, logout);
router.patch("/avatars", authenticate, upload.single("avatar"), updateAvatar);
module.exports = router;
