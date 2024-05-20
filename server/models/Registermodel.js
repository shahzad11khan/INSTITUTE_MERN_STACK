// User.js

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  address: {
    type: String,
  },
  cnic: {
    type: String,
  },
  cellPhone: {
    type: String,
  },
  post: {
    type: String,
  },
  age: {
    type: Number,
  },
  qualification: {
    type: String,
  },
  courses: {
    type: [String],
    default: [],
  },
  prices: {
    type: [Number],
    default: [],
  },
});

const Registermodel = mongoose.model("FrontUserReg", userSchema);

module.exports = Registermodel;
