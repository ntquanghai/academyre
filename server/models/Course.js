const mongoose = require("mongoose")

const CourseSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    required: false,
  },
  category: {
    type: String,
    required: true,
  },
  ratings: {
    type: Number,
    required: false
  },
  cost: {
    type: Number,
    required: true
  },
  lessons: {
    type: Array,
    required: true,
  },
  progress: {
    type: Number,
    required: true
  },
  dateUploaded: {
    type: Date,
    required: true,
  }
});

module.exports = mongoose.model("course", CourseSchema);