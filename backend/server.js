import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Base test route
app.get("/", (req, res) => {
  res.json({ message: "Backend running" });
});

// User routes
import userRoutes from "./routes/userRoutes.js";
app.use("/api/v1/user", userRoutes);

// Employee routes
import empRoutes from "./routes/empRoutes.js";
app.use("/api/v1/emp", empRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
