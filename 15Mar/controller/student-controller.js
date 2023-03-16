const Student = require("../model/student-model.js")
const fs = require("fs");
const path = require("path");


const addData = async (req, res, next) => {
  
    const data = {
        name: req.body.name,
        rollNo: req.body.rollNo,
        class: req.body.class,
        subjects: req.body.subjects,
        image: {
            data:req.file.path, //image data is saved in encoded  base64 format
            contentType: req.file.mimeType  //mimeType will give the exact type of the file to the contenttype in mongo
        }
        
    }
    if (
        data.name?.trim() === "" &&
        isNaN(data.rollNo) &&
        data.class?.trim === "" &&
        data.subjects.length === 0
    ) {
        return res.status(422).json({ message: "data not valid" });
    }
    await Student.create(data)
        .then(data => {
            return res.status(200).json({ message: "Successfully saved and Uploaded" });
        })
        .catch(err => {
            return res.status(500).json({ message: err })
        })
        console.log(data)
}


// read all students from database
const getData = async (req, res, next) => {
    let data =await student.find();
    res.status(200).json({data}) 
};

exports.addData = addData;
exports.getData = getData;


