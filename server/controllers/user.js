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

// #### ONLY 4 ADMINS

// Get all users => api/user/admin/allUsers
export const getAlltUsers = catchAsyncErrors(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    success: true,
    users,
  });
});

// Get specific user => api/user/admin/user/:id
export const getUser = catchAsyncErrors(async (req, res, next) => {
  const userId = req.params.id;
  const user = await User.findById(userId);

  if (!user)
    return next(
      new ErrorHandler(`No user found with this ID : ${userId}`, 404)
    );

  res.status(200).json({
    success: true,
    user,
  });
});

// Update user data => api/user/admin/user/:id
export const updateUser = catchAsyncErrors(async (req, res, next) => {
  const userId = req.params.id;

  const newProfileData = {
    name: req.body.name,
    email: req.body.email,
    role: req.body.role,

    // todo: avatar
  };

  const updatedProfile = await User.findByIdAndUpdate(userId, newProfileData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(201).json({
    success: true,
  });
});

// Delete user => api/user/admin/user/:id
export const deleteUser = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user)
    return next(
      new ErrorHandler(`User not found for ID = ${req.params.id}`, 404)
    );

  //TODO : delete user images from cloudinary
  await user.remove();

  res.status(200).json({
    success: true,
  });
});
