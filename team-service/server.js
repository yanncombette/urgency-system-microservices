import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import teamRoutes from "./routes/teamRoutes.js";

dotenv.config();
const { PORT } = process.env;

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", teamRoutes);

app.listen(PORT, () =>
  console.log(`Server is running at http://localhost:${PORT}`)
);
