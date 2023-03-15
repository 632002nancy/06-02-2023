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
            data:(path.join("uploads/" + req.file.filename)),
            contentType: 'image/png'
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
}


// read all students from database
const getData = async (req, res, next) => {
    let data;
    data = await Student.find();
    if (!data) {    //giving validation if data is present or not
        return res.status(422).json({ message: "no records found " });
    }

    return res.status(200).json({ data });
};

exports.addData = addData;
exports.getData = getData;


