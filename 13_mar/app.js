const express = require("express");
const path = require("path");
// const cors = require("cors");
const router = require("./routes/student-route.js");
const app = express();

// var corOptions = {
//     origin: 'https://localhost:8081'
// }

// app.use(cors(corOptions))
app.use(express.json())

app.use(express.static(path.join((__dirname,"public"))));  // run the html static file on browser, here static represents to use static(already built file),path.join reperesents to join directory with file name , __directory is built in property to get the directory
app.use(express.urlencoded({extended:true})); //recognize incoming req objects as strings and arrays

//routes
app.use("/",router);

// //testing api
// app.get('/', (req, res) => {
//     res.json({ message: "hello from api" })
// })

//port
const PORT = process.env.PORT || 8080

//server
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})