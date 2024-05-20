// models/Payment.js
const mongoose = require("mongoose");

// Define Payment schema
const paymentSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  cardNumber: {
    type: String,
    required: true,
  },
  expiryDate: {
    type: String,
    required: true,
  },
  cvv: {
    type: String,
    required: true,
  },
  Feepayment: {
    type: String,
  },
});

// Create Payment model based on schema
const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;
