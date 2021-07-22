import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter product name"],
    trim: true,
    maxLength: [100, "product name cannot exceed 100 chars"],
  },
  description: {
    type: String,
    required: [true, "please enter product description"],
  },
  seller: {
    type: String,
    required: [true, "please enter product seller"],
  },
  category: {
    type: String,
    required: [true, "please enter product category"],
  },
  gender: {
    type: String,
    required: [true, "please enter product category"],
    enum: {
      values: ["women", "men", "kids"],
      message: "please select a category",
    },
  },
  price: {
    type: Number,
    required: [true, "please enter product price"],
    maxLength: [5, "product price cannot exceed 5 chars"],
    default: 0.0,
  },
  ratings: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  stock: {
    type: Number,
    required: [true, "please enter stock size"],
    maxLength: [5, "stock size cannot exceed 5 chars"],
    default: 0,
  },
  numberOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        reuired: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    reuired: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.model("Product", ProductSchema);
