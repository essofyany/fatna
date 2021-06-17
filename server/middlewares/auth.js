import catchAsyncErrors from "./catchAsyncErrors.js";
import jwt from "jsonwebtoken";
import ErrorHandler from "../utils/errorHandler.js";
import User from "../models/user.js";

// check if user authenticated
export const isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token)
    return next(
      new ErrorHandler("Login first to get access to this resources", 401)
    );

  const decode = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await User.findById(decode.id);

  next();
});

// Handling user roles
export const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(
          `Role (${req.user.role} is not allowed to access this resource)`,
          403
        )
      );
    }
    next();
  };
};
