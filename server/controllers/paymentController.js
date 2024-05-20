// controllers/paymentController.js
const Payment = require("../models/Payment");

// Create a new payment
exports.createPayment = (req, res) => {
  const { fullName, email, amount, cardNumber, expiryDate, cvv, Feepayment } =
    req.body;
  const newPayment = new Payment({
    fullName,
    email,
    amount,
    cardNumber,
    expiryDate,
    cvv,
    Feepayment,
  });

  newPayment
    .save()
    .then((savedPayment) => {
      res.status(201).json(savedPayment);
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to save payment data" });
    });
};

// Get all payments
exports.getAllPayments = (req, res) => {
  Payment.find()
    .then((payments) => {
      res.json(payments);
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to fetch payments" });
    });
};

// Get a single payment by ID
exports.getPaymentById = (req, res) => {
  const paymentId = req.params.id;
  Payment.findById(paymentId)
    .then((payment) => {
      if (!payment) {
        return res.status(404).json({ error: "Payment not found" });
      }
      res.json(payment);
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to fetch payment" });
    });
};

// Update a payment by ID
exports.updatePaymentById = (req, res) => {
  const paymentId = req.params.id;
  Payment.findByIdAndUpdate(paymentId, req.body, { new: true })
    .then((updatedPayment) => {
      if (!updatedPayment) {
        return res.status(404).json({ error: "Payment not found" });
      }
      res.json(updatedPayment);
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to update payment" });
    });
};

// Delete a payment by ID
exports.deletePaymentById = (req, res) => {
  const paymentId = req.params.id;
  Payment.findByIdAndDelete(paymentId)
    .then((deletedPayment) => {
      if (!deletedPayment) {
        return res.status(404).json({ error: "Payment not found" });
      }
      res.json(deletedPayment);
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to delete payment" });
    });
};
