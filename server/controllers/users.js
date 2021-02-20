import User from "../models/User.js";
import asyncHandler from "express-async-handler";
import { generateToken } from "../utils/generateToken.js";

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

  // hashing password DONE
  // generating Token

  if (newUser) {
    res.status(201).json({
      success: true,
      _id: newUser._id,
      email: newUser.email,
      token: generateToken(newUser._id),
    });
  } else {
    res.status(400);
    throw new Error("Es gab ein Fehler beim Registrieren");
  }
});

// @desc    login a User
// @route   POST /api/a1/users/login
// @access  public
export const loginUser = asyncHandler(async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    res.status(400);
    throw new Error("Dieser User gibt es noch nicht");
  }
  // compare Password
  if (user && (await user.comparePassword(req.body.password))) {
    res.status(200).json({
      success: true,
      _id: user._id,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Password ist falsch!");
  }
});

// @desc    get Logged User
// @route   GET /api/a1/users/profile
// @access  private
export const getLoggedUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("Diesen User gibt es nicht");
  }
  res.status(200).json({ _id: user._id, email: user.email });
});
