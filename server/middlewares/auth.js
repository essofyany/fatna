import catchAsyncErrors from "./catchAsyncErrors.js";
import jwt from "jsonwebtoken";
import ErrorHandler from "../utils/errorHandler.js";
import User from "../models/user.js";

export const isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token)
    return next(
      new ErrorHandler("Login first to get access to this resources", 401)
    );

  const decode = jwt.verify(token, process.env.JWT_SECRET);
  req.user = User.findById(decode.id);

  next();
});
