import Product from "../models/product.js";
import ErrorHandler from "../utils/errorHandler.js";
import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";

// Create or Update a review ===> /api/review/
export const createAndUpdateReview = catchAsyncErrors(
  async (req, res, next) => {
    const { rating, comment, productId } = req.body;

    const review = {
      user: req.user._id,
      name: req.user.name,
      rating: Number(rating),
      comment,
    };

    const product = await Product.findById(productId);

    const isReviewd = product.reviews.find(
      (review) => review.user.toString() === req.user._id.toString()
    );

    if (isReviewd) {
      product.reviews.forEach((review) => {
        if (review.user.toString() === req.user._id.toString()) {
          review.comment = comment;
          review.rating = rating;
        }
      });
    } else {
      product.reviews.push(review);
      product.numberOfReviews = product.reviews.length;
    }

    product.ratings =
      product.reviews.reduce((acc, review) => review.rating + acc, 0) /
      product.reviews.length;

    await product.save();

    res.status(201).json({
      success: true,
    });
  }
);
