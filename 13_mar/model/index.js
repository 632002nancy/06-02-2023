const dbconfig=require("../config/dbConfig.js");
const {Sequelize, DataTypes}=require('sequelize');

const sequelize = new Sequelize(    //we are initializing all the information from dbconfig file to sequelize
    dbconfig.DB,
    dbconfig.USER,
    dbconfig.PASSWORD,{
        host: dbconfig.HOST,
        dialect: dbconfig.dialect,
        operatorsAliases: false ,   //if we have any error in this information it will overwrite it

        pool:{
            max:dbconfig.pool.max,
            min:dbconfig.pool.min,
            acquire:dbconfig.pool.acquire,
            idle:dbconfig.pool.idle,
        
        }
    }
)

sequelize.authenticate()
.then(()=>{
    console.log("sequelize connected")
})
.catch(err=>{
    console.log("Error:"+err)
})

const db={}

db.Sequelize=Sequelize
db.sequelize=sequelize

db.students=require('./student-model.js')

db.sequelize.sync({force:false})  //it will recreate data everytime we run the api and we will loose all old information so we use force:false also it will creates the table if the table doesnt exists
.then(()=>{
    console.log("yes sync-done")
})

module.exports=db