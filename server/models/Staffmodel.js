const mongoose = require("mongoose");

const imagePostSchema = new mongoose.Schema({
  image: {
    type: String,
  },
  name: {
    type: String,
  },
  post: {
    type: String,
  },
  shortDescription: {
    type: String,
  },
});

const Staff = mongoose.model("Staff", imagePostSchema);

module.exports = Staff;
