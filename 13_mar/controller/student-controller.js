const db = require("../model");


//create main model
const Student = db.students



//1. create student data (create)
const addStudent = async (req, res) => {
    let data = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    }

    const studentData = await Student.create(data);
    return res.status(200).json({ studentData });
}

//2. get all products (read)
const getAllStudents = async (req, res) => {
    let student = await Student.findAll({
        attributes: [  //gives only those attribues that are defined
            'name',
            'email',
            'password'
        ]
    })
    return res.status(200).json({ student });
}

//3. get data of single student
const getOneStudent = async (req, res) => {
    let email = req.body.email
    let student = await Student.findOne({ where: { email: email } })
    return res.status(200).json({student});
}

//4. update data
const updateStudent = async (req, res) => {
    let email = req.body.email;
    console.log(email);
    let student = await Student.update(req.body, { where: { email: email } })  //update all the things in req.body where email:email
    return res.status(200).json({student});
}

//5. delete data of single student
const deleteStudent = async (req, res) => {
    let email = req.body.email;
    console.log(email);
    let student = await Student.destroy({ where: { email: email } })
    return res.status(200).json({message: "data deleted successfully"});
}

 exports.addStudent=addStudent;
 exports.getAllStudents=getAllStudents;
 exports.getOneStudent=getOneStudent;
 exports.updateStudent=updateStudent;
 exports.deleteStudent=deleteStudent;

