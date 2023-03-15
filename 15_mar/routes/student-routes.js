//creating routes from request and response of methods 
const express = require("express");
const upload=require("../images/upload-image.js");
const { addStudent, getStudents, updateStudent, deleteStudent} = require("../controller/student-controller.js")
const router = express.Router();

router.post("/create",upload.single('image'),addStudent);   //create
router.get("/display", getStudents);   //read
router.post("/updateData",updateStudent);  //update
router.post("/delete", deleteStudent);  //delete

module.exports = router;