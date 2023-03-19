const Student = require("../model/student-model.js")
const fs = require("fs");
const path = require("path");
// ---------------------------------------------create-------------------------------------------
const addData = async (req, res, next) => {
    console.log(req.file.filename);
  
    const data = {
        name: req.body.name,
        rollNo: req.body.rollNo,
        class: req.body.class,
        subjects: req.body.subjects,
        image: {
            data: req.file.filename,      //image data is saved in encoded  base64 format
            contentType: req.file.mimetype, //mimeType will give the exact type of the file to the contenttype in mongo
        }
    }
    console.log(data.image.contentType);
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
            return res.status(200);
        })
        .catch(err => {
            return res.status(500).json({ message: err })
        })
    
}


// ----------------------------------------------------------read ------------------------------------------------
const getData = async (req, res, next) => {
    let data = await Student.find();
   return res.status(200).json({ data })
}

// ----------------------------to read data of single student ------------------------------------- 
const takeData =async(req,res)=>{
    let id= req.params.id;
    console.log(id)
    let data=await Student.findById(id)
    .then(data=>{
        return res.status(200).json({data});
    })
    .catch(err=>{
        return res.status(404).json({message:"not found"});
    })
    
}

//---------------------------------------update---------------------------------

const updateData = async (req, res, next) => {
    console.log(req.file.filename)
    console.log("updating value");
    const data = {
        name: req.body.name,
        rollNo: req.body.rollNo,
        class: req.body.class,
        subjects: req.body.subjects,
        image: {
            data: req.file.filename,         //image data is saved in encoded  base64 format
            contentType: req.file.mimetype, //mimeType will give the exact type of the file to the contenttype in mongo
        }
    }
    await Student.findOneAndUpdate({rollNo: data.rollNo}, { name: data.name, class: data.class, subjects: data.subjects, rollNo: data.rollNo, image: data.image })
        .then(data => {
            console.log(data)
            return res.status(200);
        })
        .catch(err => {
            return res.status(500).json({ message: err })
        })
    //console.log(data)
}

// ----------------------------------------delete-------------------------------
const deleteData = async (req, res) => {
    console.log(req.params.id)
    await Student.findByIdAndDelete(req.params.id)
    .then(data=>{  return res.status(200);})
    .catch(err=>{
        return res.json({message:err})
    })
}

//exporting api
exports.addData = addData;
exports.getData = getData;
exports.takeData = takeData;
exports.updateData = updateData;
exports.deleteData = deleteData;


