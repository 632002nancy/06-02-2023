//calling the express package that we installed inside this file
const express=require("express"); 
const dotenv=require("dotenv"); 
const mongoose=require("mongoose"); 
const app= express(); //initiated exprss used to create url or server

dotenv.config(); 

//connect to db
mongoose.connect(
    process.env.DB_CONNECT,
    { useUnifiedTopology: true, useNewUrlParser: true}
     
).then(
    console.log("db connected")
)


//import routes
const productRoutes =  require("./routes/student-routes");

app.listen(4000, ()=>{
    console.log("created");
}); 