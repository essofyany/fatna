import User from "../models/user.js";
import ErrorHandler from "../utils/errorHandler.js";
import encryptor from "../utils/encryptor.js";
import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import { sendToken } from "../utils/jwtToken.js";

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

  //   set cookie
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
