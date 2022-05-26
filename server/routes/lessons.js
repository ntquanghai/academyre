const express = require("express");
const router = express.Router();
const LessonModel = require("../models/Lesson");
const CourseModel = require("../models/Course");
//Get all available lesson
router.get("/", async (req, res) => {
  const lessons = await LessonModel.find();
  filterLessons = lessons.map((lesson) => {
    delete lesson.isDeleted;
    return lesson;
  });
  return res.json(filterLessons);
});

// Add new lesson
router.post("/", async (req, res) => {
  let lesson = req.body;
  const isExistCourse = await CourseModel.findById(lesson.course_id);
  if (!isExistCourse) {
    return res.status(400).json({
      msg: "Course is not exist!",
    });
  }
  // Handle image
  const { video } = lesson;
  const uploadResponse = await cloudinary.uploader.upload(video, {
    upload_preset: "elearning",
    resource_type: "video",
  });

  lesson = {
    ...lesson,
    id: uuidv4(),
    logCreatedDate: new Date(),
    logUpdatedDate: new Date(),
    video: uploadResponse.secure_url,
  };
  const ids = await lessonModel.add(lesson);
  return res.status(201).json({
    msg: "Upload lesson succesfully",
    lesson,
  });
});

module.exports = router;