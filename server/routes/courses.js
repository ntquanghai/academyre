const express = require("express");
const CourseModel = require("../models/Course");
const router = express.Router();
const cloudinary = require("../config/cloudinary");

// const mockCourse = [
//   {
//     id: 10,
//     dateUploaded: new Date(2022, 4, 13),
//   },
//   { id: 1, dateUploaded: new Date(2022, 2, 13) },
//   { id: 2, dateUploaded: new Date(2022, 11, 27) },
//   { id: 3, dateUploaded: new Date(2021, 4, 13) },
//   { id: 4, dateUploaded: new Date(2020, 4, 13) },
//   { id: 5, dateUploaded: new Date(2000, 4, 13) },
//   { id: 6, dateUploaded: new Date(2014, 4, 13) },
//   { id: 7, dateUploaded: new Date(2093, 4, 13) },
//   { id: 8, dateUploaded: new Date(2014, 4, 13) },
//   { id: 9, dateUploaded: new Date(2015, 4, 13) },
// ];

// GET ALL COURSES
router.get("/", async (req, res) => {
  try {
    // const courses = CourseModel.find();
    res.json({
      msg: "successfully",
    });
  } catch (err) {
    console.log(err.message);
  }
});
// GET NEWEST COURSES
router.get("/newest/:limit", async (req, res) => {
  const limit = req.params.limit;
  const courses = await CourseModel.find()
    .select({ dateUploaded: 1 })
    .sort("dateUploaded: 1")
    .limit(limit);

  console.log(courses);

  res.json(courses);
});
// GET MOST VIEW COURSES
router.get("/mostview/:limit", async (req, res) => {
  const limit = req.params.limit;
  const courses = await CourseModel.find()
    .select({ views: 1 })
    .sort("views: 1")
    .limit(limit);

  console.log(courses);

  res.json(courses);
});
// ADD NEW COURSES
router.post("/", async (req, res) => {
  let course = req.body;
  const courseId = uuidv4();
  course = {
    ...course,
    id: courseId,
    logCreatedDate: new Date(),
    logUpdatedDate: new Date(),
  };
  const ids = await CourseModel.insertMany(course);

  res.status(201).json(course);
});


module.exports = router;
