import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  itemsCount: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Category", CategorySchema);
