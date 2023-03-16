//initialize routes and run express app
const express=require("express");
const router=require("./routes/student-routes.js");
const app=express();

app.use(express.json());

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use("/uploads",express.static('uploads'));

app.use("/",router);

PORT=process.env.port||2100;

app.listen(PORT,() =>{
    console.log(`Listening at port ${PORT}`);
})
