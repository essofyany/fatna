/* eslint-disable no-undef */
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import productRoutes from "./routes/products.js";
import errorMiddleware from "./middlewares/error.js";

dotenv.config({ path: "config/config.env" });
const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors());

app.use("/api/product", productRoutes);

app.use(errorMiddleware);

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        `server is running on port ${process.env.PORT}, in ${process.env.NODE_ENV} mode`
      );
    });
  })
  .catch((err) => {
    console.log(err);
    mongoose.disconnect();
  });
