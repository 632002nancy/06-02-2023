const express = require("express")
const {addStudent,displayStudent}=require("../controller/student-controller.js")
const upload=require("../multer/student-image.js")
const router=express.Router();

router.post("/create",upload.single("image"),addStudent);
router.get("/display",displayStudent);

module.exports=router;