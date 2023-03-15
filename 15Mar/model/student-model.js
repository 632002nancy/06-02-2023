const mongoose=require("mongoose");
const studentSchema=mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    rollNo:{
        type:Number,
        require:true,
    },
    class:{
        type:String,
        require:true,
    },
    subjects:{
        type:Array,
        require:true,
    },
    image:{
        data:String,
        contentType:String,
    }
});

module.exports=mongoose.model("studentData",studentSchema);

 