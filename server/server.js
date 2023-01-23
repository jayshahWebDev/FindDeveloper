import 'dotenv/config';
import express from "express";
import { dbConnection } from "./config/dbConnection.js";
const app = express();
const PORT = process.env.PORT || 4000;

dbConnection();

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
