const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/restaurant-routes.js");
const path = require("path");
const app = express();


app.use(express.static(path.join((__dirname,"public"))));  // run the html static file on browser
app.use(express.urlencoded({extended:true}));

app.use("/",router);

//middleware to use pubic directory

//connecting to the cloud database
mongoose.connect(
    "mongodb+srv://nancyverma632002:pHpDe7egH2QgHmoC@cluster0.hijkfsw.mongodb.net/?retryWrites=true&w=majority"
).then(() =>
    app.listen(1100, () => console.log("connected"))
).catch((err) =>
    console.log("Got Error", err)
);