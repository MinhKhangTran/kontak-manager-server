import express from "express";
import colors from "colors";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

// config .env
dotenv.config();

// connect DB

// init app
const app = express();

// middleware
app.use(express.json());
app.use(cors());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// routes

// Listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  `Server rennt auf Port ${PORT}`.cyan.bold;
});
