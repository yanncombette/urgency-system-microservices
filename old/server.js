import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import router from "./routers/indexRouter.js";

dotenv.config();
const { PORT } = process.env;

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Faire votre routeur
app.use("/api", router);

app.listen(PORT, () =>
  console.log(`Server is running at http://localhost:${PORT}`)
);
