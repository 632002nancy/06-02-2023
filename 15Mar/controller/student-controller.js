const Student = require("../model/student-model.js")
const fs = require("fs");
const path = require("path");

// ---------------------------------------------create-------------------------------------------
const addData = async (req, res, next) => {

    const data = {
        name: req.body.name,
        rollNo: req.body.rollNo,
        class: req.body.class,
        subjects: req.body.subjects,
        image: {
            data: req.file.path, //image data is saved in encoded  base64 format
            contentType: req.file.mimetype, //mimeType will give the exact type of the file to the contenttype in mongo
        }
    }
    console.log(data.image.contentType)
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


// =----------------------------------------------------------read ------------------------------------------------
const getData = async (req, res, next) => {
    let data = await Student.find();
    res.status(200).json({ data })
};

//---------------------------------------update---------------------------------

const updateData = async (req, res, next) => {

    const data = {
        name: req.body.name,
        rollNo: req.body.rollNo,
        class: req.body.class,
        subjects: req.body.subjects,
        image: {
            data: req.file.path, //image data is saved in encoded  base64 format
            contentType: req.file.mimetype, //mimeType will give the exact type of the file to the contenttype in mongo
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
    await Student.findOneAndUpdate({ rollNo: rollNo }, {name: data.name, class:data.class, subjects:data.subjects,rollNo:data.rollNo, image:data.image },{ new: true})
        .then(data => {
            return res.status(200).json({ message: "Successfully saved and Updated" });
        })
        .catch(err => {
            return res.status(500).json({ message: err })
        })
    console.log(data)
}

//exporting api
exports.addData = addData;
exports.getData = getData;
exports.updateData = updateData;


