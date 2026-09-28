import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./database/db.js";
import authRouter from "./router/auth/auth.route.js";

dotenv.config();
connectDB();

const app = express();
const port = 8000;

app.use(express.json());
app.use("/auth", authRouter);

app.listen(port, () => {
  console.log("Server is running", port);
});
