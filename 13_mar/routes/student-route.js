const express = require("express");
const { addStudent, getAllStudents, deleteStudent,updateStudent}= require("../controller/student-controller.js")

    
const router = express.Router();

router.post('/addStudent', addStudent);
router.get('/getAllStudents', getAllStudents);
//router.get('/getOneStudent', getOneStudent);
 router.post('/updateStudent', updateStudent);
 router.post('/deleteStudent', deleteStudent);

module.exports= router;