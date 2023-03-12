// defining the controller methods
const student = require("../model/student-model.js");

const displayForm = (req, res) => {  //used in template engine (views) when working with template engine we use render instead of send 
  res.render("student-form");   //render student form on the page
};

// adding a new student to database
const addStudent = async (req, res, next) => {
  console.log(req);
  const { student_name, roll_no, class_section, subjects } = req.body;

  if (
    student_name?.trim() === "" &&
    isNaN(roll_no) &&
    class_section?.trim === "" &&
    subjects.length === 0
  ) {
    return res.status(422).json({ message: "data not valid" });
  }

  let studentData;
  try {
    studentData = new student({
      student_name,
      roll_no,
      class_section,
      subjects,
    });
    studentData = await studentData.save();
  } catch (err) {
    return next(err);
  }

  if (!student) {
    res.status(500).json({ messgae: "data not saved " });
  }

  return res.status(200).json({ studentData });
};

// read all students from database
const getStudents = async (req, res, next) => {
  let data;
  data = await student.find();
  if (!data) {    //giving validation
    return res.status(422).json({ message: "no records found " });  
  }

  return res.status(200).json({ data });
};

// update the student according to the roll no
const updateStudent = async (req, res) => {
  let { student_name, roll_no, class_section, subjects } = req.body;
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
    return res.status(200).json({ updated });
};

//delete the student according to the roll number
const deleteStudent = async (req, res) => {
  let { roll_no } = req.body;
  let deleted;
  deleted = await student.deleteOne({ roll_no: roll_no });
  return res.status(200).json({ message: "deleted successfully " });
};

exports.addStudent = addStudent;
exports.displayForm = displayForm;
exports.getStudents = getStudents;
exports.updateStudent = updateStudent;
exports.deleteStudent = deleteStudent;
