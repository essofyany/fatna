import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  figure: {
    type: String,
    required: true,
  },
  products: {
    type: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  },
});

export default mongoose.model("Category", CategorySchema);
