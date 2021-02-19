import express from "express";
// import {} from "../controllers/contacts.js";
import { protect } from "../middleware/auth.js";
// Validator
import { runValidation } from "../validator/index.js";
import {
  createContactValidator,
  updateContactValidator,
} from "../validator/contactsValidator.js";
// Router
const router = express.Router();

// routing
router
  .route("/")
  .post(createContactValidator, runValidation, protect)
  .get(protect);
router
  .route("/:id")
  .put(updateContactValidator, runValidation, protect)
  .delete(protect);
export default router;
