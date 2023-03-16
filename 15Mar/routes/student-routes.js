const express = require("express");
const router = express.Router();
const upload = require("../multer/student-image.js")
const { addData,getData } = require("../controller/student-controller.js");

router.post("/create", upload.single("image"), addData); //create
router.get("/uploads/:filename", (req, res) => {
    console.log(req.params.filename);
    res.sendFile('uploads/' + req.params.filename);
})   //read

router.get("/display",getData);
module.exports = router;