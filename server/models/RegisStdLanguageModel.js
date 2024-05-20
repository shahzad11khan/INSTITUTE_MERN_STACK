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
    type: String,
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
  teacherName: {
    type: String,
  },
});

const RegStdLang = mongoose.model("RegStdLang", userSchema);

module.exports = RegStdLang;
