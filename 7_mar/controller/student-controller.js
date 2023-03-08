const Student= require("../model/Student");
const productController = require("../controller/student-contoller");

// creating the READ user operation on database
const getAllUsers=async(req,res,next)=>{
    let users;
    try{ 
        students =await Student.find();  // we can also use specific query to fetch data from database here find is method of mongo which finds all listing of data
    } catch(err){
        return next(err)
    }
    if(!students){
        return res.status(500).json({message: "Internal Serval Error "});
    }

    // if everything is okay then
    return res.status(200).json({ users });
};

// creating the READ user operation on database
const addUser=async(req,res,next)=>{

};

// creating the READ user operation on database
const updateUser=async(req,res,next)=>{

};

// creating the READ user operation on database
const deleteUser=async(req,res,next)=>{

};


module.exports={
    getAllUsers,
    addUser,
    updateUser,
    deleteUser
}