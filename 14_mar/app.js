const express = require("express");
const path = require("path");
const router = require("./routes/restaurant-routes");
const app = express();

app.use(express.json())

app.use(express.static(path.join((__dirname,"public"))));  // run the html static file on browser, here static represents to use static(already built file),path.join reperesents to join directory with file name , __directory is built in property to get the directory
app.use(express.urlencoded({extended:true})); //recognize incoming req objects as strings and arrays

//routes
app.use("/",router);

//port
const PORT = process.env.PORT || 2020

//server
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})





// const express = require("express");
// const path = require("path"); //to get path module to acess paths easily
// const app = express();  //to make application in express
// const router = require("./routes/restaurant-routes.js");

// app.use(express.json()) //our data will be parsed in json fromat, or our data will come in json format

// app.use(express.static(path.join((__dirname, "public"))))  //used to seerve static file
// app.use(express.urlencoded({ extended: true }));  //express-urlencoded tells that our req will come from body,extended true means to parse the url-encoded data with qs library

// app.use("/", router);


// // port
// const PORT = process.env.PORT || 2020

// //server
// app.listen(PORT, () => {
//     console.log(`Server is running at port ${PORT}`)
// })