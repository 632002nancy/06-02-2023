const express = require("express")
const {addStudent,displayStudent, updateStudent, deleteStudent}=require("../controller/student-controller.js")
const upload=require("../multer/student-image.js")
const router=express.Router();

router.post("/create",upload.single("image"),addStudent);  //create
router.get("/display",displayStudent);  //read
router.post("/update",upload.single("image"),updateStudent);  //update
router.post("/delete",deleteStudent);  //delete

module.exports=router;