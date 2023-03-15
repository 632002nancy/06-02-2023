// using multer as a middleware 

const multer = require("multer");
// //storage for image
const Storage = multer.diskStorage({
    destination: (req,file,cb) => {//cb callback
        cb(null,"uploads")//tells the multer to create a file upload and store the data(image) inside it
    },
    filename: (req,file,cb) => {
        cb(null, file.fieldname + '-' + Date.now());//Date.now is used to give unique identity to every image otherwise it will fetch first image everytime
    }
});

const  upload = multer({ storage: Storage });

module.exports = upload; //middleware for uploading image
