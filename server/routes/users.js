import express from "express";
import { registerUser } from "../controllers/users.js";
// Validator
import { runValidation } from "../validator/index.js";
import { registerValidator } from "../validator/usersValidator.js";
// Router
const route = express.Router();

// routing
route.route("/register").post(registerValidator, runValidation, registerUser);

export default route;
