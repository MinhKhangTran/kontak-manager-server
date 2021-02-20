import express from "express";
import {
  getContacts,
  createContact,
  updateContact,
  deleteContact,
} from "../controllers/contacts.js";
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
  .post(createContactValidator, runValidation, protect, createContact)
  .get(protect, getContacts);
router
  .route("/:id")
  .put(updateContactValidator, runValidation, protect, updateContact)
  .delete(protect, deleteContact);
export default router;
