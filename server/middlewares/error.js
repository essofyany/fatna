import ErrorHandler from "../utils/errorHandler.js";

export default (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;

  if (process.env.NODE_ENV === "DEVELOPMENT") {
    res.status(err.statusCode).json({
      success: false,
      error: err,
      errorMessage: err.message,
      stack: err.stack,
    });
  }

  if (process.env.NODE_ENV === "PRODUCTION") {
    let error = { ...err };
    error.message = err.message;

    if (err.name === "CastError") {
      const message = `Resource not found, Invalid: ${err.path}`;
      error = new ErrorHandler(message, 400);
    }
    if (err.name === "ValidationError") {
      const message = Object.values(err.errors).map((err) => err.message);
      error = new ErrorHandler(message, 400);
    }

    // handling mongoose duplicate key errors
    if (err.code === 11000) {
      const message = `Deplucate ${Object.keys(err.keyValue)} entered`;
      error = new ErrorHandler(message, 400);
    }

    // handling wrong JWT error
    if (err.name === "JsonWebTokenError") {
      const message = "JSON Web Token is invalid. Try again!!!";
      error = new ErrorHandler(message, 400);
    }

    // handling expired JWT error
    if (err.name === "TokenExpiredError") {
      const message = "JSON Web Token is expired. Try again!!!";
      error = new ErrorHandler(message, 400);
    }

    res.status(err.statusCode).json({
      success: false,
      message: error.message || "internal server error",
    });
  }
};
