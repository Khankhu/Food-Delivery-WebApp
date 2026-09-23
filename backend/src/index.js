import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { connectDB } from "./database/db.js";

connectDB();

const app = express();
const port = 8000;

app.use(express.json());

app.listen(port, () => {
  console.log("Server is running", port);
});
