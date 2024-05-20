const mongoose = require("mongoose");

const imagePostSchema = new mongoose.Schema({
  language: {
    type: String,
  },
  name: {
    type: String,
  },
  shortDescription: {
    type: String,
  },
});

const Language = mongoose.model("Language", imagePostSchema);

module.exports = Language;
