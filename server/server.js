import "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser";
import { dbConnection } from "./config/dbConnection.js";
const app = express();
const PORT = process.env.PORT || 4000;
import fileupload from "express-fileupload";
import userRoute from "./routes/user.js";
import skillRoute from "./routes/skill.js";
import availabilityRoute from "./routes/availability.js";

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

app.use("/api", userRoute);
app.use("/api", skillRoute);
app.use("/api", availabilityRoute);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
