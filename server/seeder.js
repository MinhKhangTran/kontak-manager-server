import dotenv from "dotenv";
import colors from "colors";
import User from "./models/User.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const destroyData = async () => {
  try {
    await User.deleteMany();
    console.log("Alles Zerstört!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit();
  }
};
destroyData();
