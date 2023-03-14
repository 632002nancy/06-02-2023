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

    if (!studentData) {
        return res.status(500).json({ message: "Data not saved" });
    }
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
    if (!student) {
        return res.status(422).json({ message: "no records found " })
    }
    return res.status(200).json({ student });
}

//4. update data
const updateStudent = async (req, res) => {
    let email = req.body.email;
    console.log(email);
    let student = await Student.update(req.body, { where: { email: email } })  //update all the things in req.body where email:email
    return res.status(200).json({ student });
}

//5. delete data of single student
const deleteStudent = async (req, res) => {
    let email = req.body.email;
    console.log(email);
    let student = await Student.destroy({ where: { email: email } })
    return res.status(200).json({ message: "data deleted successfully" });
}

exports.addStudent = addStudent;
exports.getAllStudents = getAllStudents;
exports.updateStudent = updateStudent;
exports.deleteStudent = deleteStudent;

