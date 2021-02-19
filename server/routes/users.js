import express from "express";
import {
  registerUser,
  loginUser,
  getLoggedUser,
} from "../controllers/users.js";
import { protect } from "../middleware/auth.js";
// Validator
import { runValidation } from "../validator/index.js";
import {
  registerValidator,
  loginValidator,
} from "../validator/usersValidator.js";
// Router
const router = express.Router();

// routing
router.route("/register").post(registerValidator, runValidation, registerUser);
router.route("/login").post(loginValidator, runValidation, loginUser);
router.route("/profile").get(protect, getLoggedUser);
export default router;
