const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/restaurant-routes.js");
const path = require("path");  //we are requiring path module of express it provides a way of working with directories and file paths. 
const app = express();  //app is used to create express application

app.use(express.static(path.join((__dirname,"public"))));  // run the html static file on browser, here static represents to use static(already built file),path.join reperesents to join directory with file name , __directory is built in property to get the directory
app.use(express.urlencoded({extended:true})); //recognize incoming req objects as strings and arrays

app.use("/",router);   //use router class to process

//connecting to the cloud database
mongoose.connect(
    "mongodb+srv://nancyverma632002:pHpDe7egH2QgHmoC@cluster0.hijkfsw.mongodb.net/?retryWrites=true&w=majority"
).then(() =>
    app.listen(1100, () => console.log("connected"))
).catch((err) =>
    console.log("Got Error", err)
);