import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "../models/product.js";

import products from "../data/products.json"; // data to be addded to DB

dotenv.config({ path: "config/config.env" });

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch((err) => console.log(err));

const seedProducts = async () => {
  try {
    await Product.deleteMany();
    console.log("db was cleared!");
    await Product.insertMany(products);
    console.log("products are added to DB");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

seedProducts();
