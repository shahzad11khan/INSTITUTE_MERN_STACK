const mongoose = require("mongoose");

const imagePostSchema = new mongoose.Schema({
  courses: {
    type: String,
  },
  name: {
    type: String,
  },
  shortDescription: {
    type: String,
  },
});

const Tution = mongoose.model("Tution", imagePostSchema);

module.exports = Tution;
