import User from "../models/user.js";
import ErrorHandler from "../utils/errorHandler.js";
import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import { sendToken } from "../utils/jwtToken.js";
import encryptor from "../utils/encryptor.js";

// Update user profile => api/user/update/profile
export const updateProfile = catchAsyncErrors(async (req, res, next) => {
  const newProfileData = {
    name: req.body.name,
    email: req.body.email,

    // todo: avatar
  };

  const updatedProfile = await User.findByIdAndUpdate(
    req.user.id,
    newProfileData,
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(201).json({
    success: true,
  });
});

// Update user password => api/user/update/password
export const updatePassword = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.user.id).select("+password");

  //   check previous password
  const isMatched = await user.comparePasswords(req.body.oldPassword);

  if (!isMatched) {
    return next(new ErrorHandler("Old password is incorrect", 400));
  }

  const hashedPassword = await encryptor(req.body.password);

  user.password = hashedPassword;
  await user.save();

  sendToken(user, 200, res);
});

// Get currrent user profile => api/user/current
export const getCurrentUser = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.user.id);

  res.status(200).json({
    success: true,
    user,
  });
});
