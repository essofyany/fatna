import Order from "../models/order.js";
import Product from "../models/product.js";
import ErrorHandler from "../utils/errorHandler.js";
import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";

// Create Order => api/order
export const createOrder = catchAsyncErrors(async (req, res, next) => {
  const {
    orderItems,
    shippingInfo,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  const order = await Order.create({
    orderItems,
    shippingInfo,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    paidAt: Date.now(),
    user: req.user._id,
  });

  res.status(201).json({
    success: true,
    order,
  });
});

// Get Single order => api/order/:id
export const getSingleOrder = catchAsyncErrors(async (req, res, next) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );

  if (!order)
    return next(new ErrorHandler("Order not found with this ID", 404));

  res.status(200).json({
    success: true,
    order,
  });
});

// Get Current User Orders => api/order/myOrders
export const getCurrentUserOrders = catchAsyncErrors(async (req, res, next) => {
  const orders = await Order.find({
    user: req.user.id,
  });

  if (!orders)
    return next(
      new ErrorHandler("There are no orders yet in your bucket", 404)
    );

  res.status(200).json({
    success: true,
  });
});

// Get All Orders - ADMIN=> api/order/admin
export const getAllOrders = catchAsyncErrors(async (req, res, next) => {
  const orders = await Order.find();

  let totlaAmount = 0;
  orders.forEach((order) => {
    totlaAmount += order.totalPrice;
  });

  if (!orders) return next(new ErrorHandler("There are no orders", 404));

  res.status(200).json({
    success: true,
    totlaAmount,
    orders,
  });
});

// Update order status processing to delivered - ADMIN=> api/order/admin/:id
export const updateOrderStatus = catchAsyncErrors(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (!order)
    return next(new ErrorHandler("There is no order with this ID", 404));

  if (order.orderStatus === "Delivered")
    return next(new ErrorHandler("You have already delivered this order", 400));

  order.orderItems.forEach(async (item) => {
    await updateStock(item.product, item.quantity);
  });

  order.orderStatus = req.body.status;
  order.deliveredAt = Date.now();

  await order.save();

  res.status(200).json({
    success: true,
  });
});

async function updateStock(id, quantity) {
  const product = await Product.findById(id);

  product.stock -= quantity;

  await product.save();
}

// Delete Order - ADMIN=> api/order/admin/:id
export const deleteOrder = catchAsyncErrors(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (!order)
    return next(new ErrorHandler("There is no order with this ID", 404));

  await order.remove();

  res.status(200).json({
    success: true,
  });
});
