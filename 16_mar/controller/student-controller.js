const db=require("../model");

const Student=db.students_img;    //same as defined in index.js of model

const addStudent=(req,res)=>{
    console.log(req.file.filename)
    let data={
        name:req.body.name,
        class:req.body.class,
        rollNo:req.body.rollNo,
        subjects:req.body.subjects,
        pic:req.file.filename,
    }

     Student.create(data)
    .then(a=>{
        res.status(200).json({a})
    })
    .catch(err=>{
        res.status(500).send({message:`${err}`});
    })
}


const displayStudent =(req,res)=>{
    Student.findAll()
    .then(data=>{
       return res.status(200).json({ data });
    })
   .catch(err=>{
       return res.status(422).json({ message: `${err}` })
   })
}
exports.addStudent=addStudent;
exports.displayStudent=displayStudent;