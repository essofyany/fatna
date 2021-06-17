import crypto from "crypto";
import User from "../models/user.js";
import ErrorHandler from "../utils/errorHandler.js";
import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import encryptor from "../utils/encryptor.js";
import { sendToken } from "../utils/jwtToken.js";
import sendEmail from "../utils/sendEmail.js";

export const registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;

  const hashedPassword = await encryptor(password);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    avatar: {
      public_id: "v1620222199",
      url: "https://res.cloudinary.com/dumlhqdtb/image/upload/c_limit,w_120/v1620222199/little-astro/user-photos/6092a0e7832fe229b43cdfcf.jpg",
    },
  });

  // set cookie
  sendToken(user, 200, res);
});

export const loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  // check the presence of email and password
  if (!email || !password) {
    return next(new ErrorHandler("Please enter your email and password", 400));
  }

  // finding user
  const user = await User.findOne({ email }).select("+password");
  //   console.log(user);
  if (!user) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }

  // check if passwords match
  const isPasswordsMatched = await user.comparePasswords(password);

  if (!isPasswordsMatched) {
    return next(new ErrorHandler("Invalid password. Please try again", 401));
  }

  //   set cookie
  sendToken(user, 200, res);
});

export const logoutUser = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    httpOnly: true,
    expires: new Date(Date.now()),
  });

  res.status(200).json({
    success: true,
    message: "Logged out",
  });
});

// forgot password  /api/auth/password/forgot
export const forgotPassword = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return next(new ErrorHandler("User with this email not found.", 404));
  }

  // get reset token

  const resetToken = user.getResetPasswordToken();

  await user.save({ validateBeforeSave: true });

  // Create reset password url
  const resetUrl = `${req.protocol}://${req.get(
    "host"
  )}/api/auth/password/reset/${resetToken}`;

  const message = `Your password reset token is as follow: \n\n${resetUrl}\n\nIf you have not requested this email, then just ignore it.`;

  try {
    await sendEmail({
      email: user.email,
      subject: "Fatna password recovery",
      message,
    });

    res.status(200).json({
      success: true,
      message: `Email sent to: ${user.email}`,
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save({ validateBeforeSave: true });

    return next(new ErrorHandler(error.message, 500));
  }
});

// Reset password  /api/auth/password/reset/:token
export const resetPassword = catchAsyncErrors(async (req, res, next) => {
  // Hash url token
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  // check password reset token
  if (!user) {
    return next(
      new ErrorHandler(
        "Password reset token is not valid or has been expired",
        400
      )
    );
  }

  // check validation of new passwords
  if (req.body.password !== req.body.confirmPassword) {
    return next(new ErrorHandler("Password does not match.", 400));
  }

  // setup new password
  const hashedPassword = await encryptor(req.body.password);
  user.password = hashedPassword;

  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();

  sendToken(user, 200, res);
});
