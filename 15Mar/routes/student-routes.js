const express =require("express");
const router = express.Router(); 
const upload=require("../images/student-image.js")
const{addData, getData}=require("../controller/student-controller.js");

router.post("/create",upload.single("image"),addData); //create
router.get("/display", getData);   //read

module.exports=router;