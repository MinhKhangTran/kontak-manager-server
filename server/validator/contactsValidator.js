import { check } from "express-validator";

export const createContactValidator = [
  check("name", "Name ist nötig").not().isEmpty(),
  check("email", "Email ist nötig").isEmail(),
];

export const updateContactValidator = [
  check("name", "Name ist nötig").not().isEmpty(),
  check("email", "Email ist nötig").isEmail(),
];
