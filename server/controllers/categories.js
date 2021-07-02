import Category from "../models/category.js";
import ErrorHandler from "../utils/errorHandler.js";
import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";

export const getCategories = catchAsyncErrors(async (req, res, next) => {
  if (!req.method === "GET") {
    return next(new ErrorHandler("check your http method", 409));
  }

  const categories = await Category.find();

  res.status(200).json({
    success: true,
    message: "successfully retrieving categories",
    categories,
  });
});
