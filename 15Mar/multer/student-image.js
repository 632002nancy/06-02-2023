//using multer as a middleware used for uploading files
//multer-gridfs package is used when our data is greater than 16mb
const multer = require("multer");

// //storage for image
const Storage = multer.diskStorage({
    destination: (req, file, cb) => {  //cb callback
        cb(null, "uploads") //tells the multer to create a file upload and store the data(image) inside it,upload the photo to the server in a folder called `uploads`
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now());  //Date.now is used to give unique identity to every image otherwise it will fetch first image everytime
    }
});

const upload = multer({ storage: Storage });

module.exports = upload;//middleware for uploading image

