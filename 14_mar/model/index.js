const dbconfig = require("../config/dbConfig.js");
const { Sequelize, DataTypes } = require('sequelize');

//Sequelize can be used to automate the creation of every table in your database if no database is present else if database is present it works well with that too


// -------------------------------------connecting to database------------------------------------

const sequelize = new Sequelize(    // here sequelize is the instance of Sequelize while Sequelize is the library(constructor) itself ,we are initializing all the information from dbconfig file to sequelize

//here sequelize will represent the connection to one database
    dbconfig.DB,
    dbconfig.USER,
    dbconfig.PASSWORD, {
    host: dbconfig.HOST,
    port:dbconfig.PORT,
    dialect: dbconfig.dialect,
    operatorsAliases: false,   //if we have any error in this information it will overwrite it

    pool: {
        max: dbconfig.pool.max,
        min: dbconfig.pool.min,
        acquire: dbconfig.pool.acquire,
        idle: dbconfig.pool.idle,

    }
}
)

sequelize.authenticate()  //to check if the connection is made properly or not
    .then(() => {
        console.log("sequelize connected")
    })
    .catch(err => {
        console.log("Error:" + err)
    })

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.customers=require('./restaurant-model.js')(sequelize,DataTypes);

db.sequelize.sync({ alter:true})  //it sync our model with databse , without it the data will be recreated everytime we run the api and we will loose all old information so we use force:false also it will creates the table if the table doesnt exists
    .then(() => {
        console.log("yes sync-done")
    })

module.exports = db