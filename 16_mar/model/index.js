//uses configuration dbconfig to initialize Sequelize
const dbconfig=require("../config/dbConfig.js");  //exports configuring parameters for MySQL connection & Sequelize
//Sequelize can be used to automate the creation of every table in your database if no database is present else if database is present it works well with that too
const {Sequelize,DataTypes}=require('sequelize');  //here we are getting Sequelize class and DataTypes from sequelize package

const sequelize=new Sequelize(
    dbconfig.DB,
    dbconfig.USER,
    dbconfig.PASSWORD,{
        host:dbconfig.HOST,
        port:dbconfig.PORT,
        dialect:dbconfig.dialect,
        pool:{
            max:dbconfig.pool.max,
            min:dbconfig.pool.min,
            accquire:dbconfig.pool.accquire,
            idle:dbconfig.pool.idle,
        }
    }
);

sequelize.authenticate()  //checking if the connection is made properly or not
.then(()=>{
    console.log("sequelize connected")
})
.catch(err=>{
    console.log("error"+err)
})

const db={}    //creating an object

db.sequelize=sequelize
db.Sequelize=Sequelize

db.students_img=require("./student-model.js")(sequelize,DataTypes);

db.sequelize.sync() //it sync our model with databse , without it the data will be recreated everytime we run the api and we will loose all old information so we use force:false also it will creates the table if the table doesnt exists
// alter:true enables changes in the table
.then(()=>{
    console.log("sync is done")
})

module.exports=db;