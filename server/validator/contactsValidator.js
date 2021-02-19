import { check } from "express-validator";

export const createContactValidator = [
  check("name", "Name ist nötig").not().isEmpty(),
  check("email", "Email ist nötig").isEmail(),
  check("password", "Passwort ist nötig").isLength({ min: 6 }),
];

export const updateContactValidator = [
  check("email", "Email ist nötig").isEmail(),
  check("password", "Passwort ist nötig").isLength({ min: 6 }),
];
