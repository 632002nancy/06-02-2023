// defining the controller methods
const student = require("../model/student-model.js");
const fs = require("fs");
const path = require("path");
const upload = require("../app.js");

// adding a new student to database
const addStudent = async (req, res, next) => {
  console.log(req.body.student_name);
  if (
    student_name?.trim() === "" &&
    isNaN(roll_no) &&
    class_section?.trim === "" &&
    subjects.length === 0
  ) {
    return res.status(422).json({ message: "data not valid" });
  }

  const data = {
    student_name: req.body.student_name,
    roll_no: req.body.roll_no,
    class_section: req.body.class_section,
    subjects: req.body.subjects,
    image: {
      data: fs.readFileSync(path.join("C:/Users/NancyVerma/Desktop/CodeStore/training/15_mar/upload" + req.file.filename)),
      contentType: 'image/png',
    },
  }
   await student.create(data)
    .then(data => {
      return res.status(200).send({ message: "Successfully saved and uploaded" });
    }).catch(err => {
      return res.status(500).json({ message: err })
    })
}

// read all students from database
const getStudents = async (req, res, next) => {
  let data;
  data = await student.find();
  if (!data) {    //giving validation if data is present or not
    return res.status(422).json({ message: "no records found " });
  }

  return res.status(200).json({ data });
};

// update the student according to the roll no
const updateStudent = async (req, res) => {
  let { student_name, roll_no, class_section, subjects } = req.body;
  console.log(student_name, roll_no, class_section, subjects);
  if (
    student_name?.trim() === "" &&
    isNaN(roll_no) &&
    class_section?.trim === "" &&
    subjects.length === 0
  ) {
    return res.status(422).json({ message: "data not valid" });
  }
  let updated;
  updated = await student.findOneAndUpdate(
    { roll_no: roll_no },
    { student_name, roll_no, class_section, subjects }
  );
  return res.status(200).json({ updated }); //gives the old data
};

//delete the student according to the roll number
const deleteStudent = async (req, res) => {
  let { roll_no } = req.body;
  console.log(roll_no);
  let deleted;
  deleted = await student.deleteOne({ roll_no: roll_no });
  return res.status(200).json({ message: "deleted successfully " });
};

exports.addStudent = addStudent;
exports.getStudents = getStudents;
exports.updateStudent = updateStudent;
exports.deleteStudent = deleteStudent;
