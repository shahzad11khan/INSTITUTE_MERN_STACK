// models/Quiz.js
const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  capital: {
    type: String,
    required: true,
  },
  Romeo_and_Juliet: {
    type: String,
    required: true,
  },
});

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;
