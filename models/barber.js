const mongoose = require("mongoose");

const Barber = mongoose.model(
  "Barber",
  new mongoose.Schema({
    shopName: {
      type: String,
      required: true,
      trim: true,
      minlength: 3
    },
    ownerName: {
      type: String,
      required: true,
      trim: true,
      minlength: 3
    },
    startTime: {
      type: Date
    },
    closeTime: {
      type: Date
    },
    workersCount: {
      type: Number
    },
    waitingCustomers: {
      type: Number
    },
    isActive: {
      type: Boolean
    }
  })
);

module.exports = Barber;
