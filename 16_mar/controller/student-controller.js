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

//4. update data
const updateStudent = async (req, res) => {
    let data={
        name:req.body.name,
        class:req.body.class,
        rollNo:req.body.rollNo,
        subjects:req.body.subjects,
        pic:req.file.filename,
    }
    let student = await Student.update(req.body, { where: { email: email } })  //update all the things in req.body where email:email
    return res.status(200).json({ data });
}




exports.addStudent=addStudent;
exports.displayStudent=displayStudent;
exports.updateStudent=updateStudent;
exports.deleteStudent=deleteStudent;