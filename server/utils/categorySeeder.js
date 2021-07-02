import mongoose from "mongoose";
import dotenv from "dotenv";
import Category from "../models/category.js";

import categories from "../data/categories.json"; // categories to be addded to DB

dotenv.config({ path: "config/config.env" });

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch((err) => console.log(err));

const seedCategories = async () => {
  try {
    await Category.deleteMany();
    console.log("db was cleared!");
    await Category.insertMany(categories);
    console.log("categories are added to DB");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

seedCategories();
