import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

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
userSchema.pre("save", async function (next) {
  let user = this;
  if (user.isModified("password")) {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
  }
  next();
});

// METHODS - compare Password
userSchema.methods.comparePassword = async function (candidatePassword) {
  let user = this;
  return await bcrypt.compare(candidatePassword, user.password);
};

const User = mongoose.model("User", userSchema);

export default User;
