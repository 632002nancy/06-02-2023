const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const router = require("./routes/student-routes.js");
const app = express();  //to make application in express

app.use(express.json()); // accept the data which is converted to json format 
app.use(express.static(path.join((__dirname, 'public'))));
app.use(express.urlencoded({ extended: true })); //middleware for parsing json objects with built in express body-parserto take the input from html file

// callling the route module which contains the controller and user model 
app.use("/", router);  // use creates a middleware for a path

let port = 3030;
//connecting to the cloud database
mongoose.connect(   //this returns a promise
    "mongodb+srv://nancyverma632002:pHpDe7egH2QgHmoC@cluster0.hijkfsw.mongodb.net/?retryWrites=true&w=majority"
).then(() =>
    app.listen(port, () => console.log(`listening at port ${port}`))
).catch((err) =>
    console.log("Got Error", err)
);



