// creating the model/ schema for the student 
const mongoose = require("mongoose"); //to connect mongodb with express in less code
let studentSchema = new mongoose.Schema({    //schema is used to describe the structure of data in mongo 
    student_name:{
        type:String,
        required:true
    },
    roll_no:{
        type:Number,
        required:true
    },
    class_section:{
        type:String,
        required:true
    },
    subjects:{
        type:Array
    }
});

module.exports= mongoose.model("student",studentSchema);  // creating collection in mongoose using model