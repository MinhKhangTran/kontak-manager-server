import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name bitte!"],
    },
    email: {
      type: String,
      required: [true, "Email bitte"],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password bitte"],
    },
  },
  { timestamps: true }
);

// PRE Save - Hash password

// METHODS - gen Token

// METHODS - compare Token

const User = mongoose.model("User", userSchema);

export default User;
