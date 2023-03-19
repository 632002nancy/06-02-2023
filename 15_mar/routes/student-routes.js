const express = require("express");
const router = express.Router();
const upload = require("../multer/student-image.js")
const { addData,getData, updateData, deleteData, takeData } = require("../controller/student-controller.js");

router.post("/create", upload.single("image"), addData); //create  
router.get("/display",getData);  //read
router.get("/display/:id",takeData); 
router.post("/update", upload.single("image"), updateData); //update  
router.post("/display/:id",deleteData);  //delete
module.exports = router;