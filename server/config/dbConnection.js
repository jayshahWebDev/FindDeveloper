import mongoose from "mongoose";
const MONGODB_URL = process.env.MONGODB_URL;

const dbConnection = () => {
  mongoose
    .connect(MONGODB_URL)
    .then((conn) => {
      console.log(`DB is connected::${conn.connection.host}`);
    })
    .catch((error) => {
      console.log(`DB is not connected::${error.message}`);
    });
};

export { dbConnection };
