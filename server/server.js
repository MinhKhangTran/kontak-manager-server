import express from "express";
import colors from "colors";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

// import DB
import connectDB from "./config/db.js";

// Import routes
import userRoutes from "./routes/users.js";
import contactRoutes from "./routes/contacts.js";

// import middleware
import { notFound, errorHandler } from "./middleware/error.js";

// config .env
dotenv.config();

// connect DB
connectDB();

// init app
const app = express();

// middleware
app.use(express.json());
app.use(cors());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// routes
app.use("/api/a1/users", userRoutes);
app.use("/api/a1/contacts", contactRoutes);

// error middlewares
app.use(notFound);
app.use(errorHandler);

// Listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server rennt auf Port ${PORT}`.cyan.bold);
});
