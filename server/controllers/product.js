import Product from "../models/product.js";
import ErrorHandler from "../utils/errorHandler.js";
import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import APIFeatures from "../utils/apiFeatures.js";

export const getProducts = catchAsyncErrors(async (req, res, next) => {
  if (!req.method === "GET") {
    return next(new ErrorHandler("check your http method", 409));
  }

  const resPerPage = 1;

  const productCount = await Product.countDocuments();

  const apiFeatures = new APIFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resPerPage);

  const products = await apiFeatures.query;
  res.status(200).json({
    success: true,
    message: "successfully retrieving products",
    productCount,
    count: products.length,
    products,
  });
});

export const getSingleProduct = catchAsyncErrors(async (req, res, next) => {
  const productId = req.params.id;
  if (!req.method === "GET" && !productId) {
    return next(new ErrorHandler("no product id was provided!", 409));
  }

  const product = await Product.findOne({ _id: productId });
  if (product) {
    res.status(200).json({
      success: true,
      message: "successfully retrieving single product",
      product,
    });
  } else {
    next(new ErrorHandler(`product with id='${productId}' not found`, 404));
  }
});

export const createProduct = catchAsyncErrors(async (req, res, next) => {
  const newProduct = req.body;
  if (!req.method === "POST" && !newProduct) {
    return next(
      new ErrorHandler("no product data was provided to be add to the DB!", 409)
    );
  }

  const createdProduct = new Product(newProduct);
  await createdProduct.save();
  res.status(201).json({
    success: true,
    message: "successfully creating a product",
    product: createdProduct,
  });
});

export const updateProduct = catchAsyncErrors(async (req, res, next) => {
  const newProductInfo = req.body;
  const productId = req.params.id;
  if (!req.method === "PATCH" && !newProductInfo && !productId) {
    return next(
      new ErrorHandler("no product data was provided for the update!", 409)
    );
  }

  const updatedProduct = await Product.findByIdAndUpdate(
    productId,
    newProductInfo,
    { new: true, runValidators: true, useFindAndModify: false }
  );
  if (!updatedProduct) {
    return next(new ErrorHandler("no product for this ID to be updated!", 409));
  }
  res.status(201).json({
    success: true,
    message: "product is successfully updated",
    product: updatedProduct,
  });
});

export const deleteProduct = catchAsyncErrors(async (req, res, next) => {
  const productId = req.params.id;

  if (!req.method === "DELETE" && !productId) {
    return next(
      new ErrorHandler("check your http method or the product ID", 409)
    );
  }
  await Product.findByIdAndDelete(productId);
  res.status(200).json({
    success: true,
    message: "product is successfully deleted ",
  });
});
