const mongoose = require("mongoose");

const LessonSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  isDone: {
    type: Boolean,
    required: true
  },
  isDelete: {
    type: Boolean,
    required: true
  }
})

module.exports = mongoose.model("lesson", LessonSchema);