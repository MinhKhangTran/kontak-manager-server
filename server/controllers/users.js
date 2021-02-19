import User from "../models/User.js";
import asyncHandler from "express-async-handler";

// @desc    register a User
// @route   POST /api/a1/users/register
// @access  public
export const registerUser = asyncHandler(async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    res.status(400);
    throw new Error("Dieser User ist bereits in der DB");
  }
  const newUser = await User.create({
    email: req.body.email,
    name: req.body.name,
    password: req.body.password,
  });
  if (newUser) {
    res.status(200).json({ success: true, data: newUser });
  } else {
    res.status(400);
    throw new Error("Es gab ein Fehler beim Registrieren");
  }
});
