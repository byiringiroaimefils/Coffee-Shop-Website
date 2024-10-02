const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customerEmail: String,
  customerName: String,
  orderDate: { type: Date, default: Date.now },
  productName: String, // Add this line
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
