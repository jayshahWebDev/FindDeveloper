import "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser";
import { dbConnection } from "./config/dbConnection.js";
const app = express();
import userRoute from "./routes/user.js";
const PORT = process.env.PORT || 4000;
import fileupload from "express-fileupload";

dbConnection();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  fileupload({
    useTempFiles: true,
    tempFileDir: "tmp",
  })
);

app.use("/api/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
