//exports configuring parameters for MySQL connection & Sequelize
//first 6 parameters are for SQL connection
module.exports = {
    HOST: 'localhost',
    USER: 'sa',
    PASSWORD: '1234',
    PORT:1433,
    DB: 'customer_db',
    dialect: 'mssql',

    //optional used for sequelize pool connection
    pool: {
      max: 5,               // max number of connection in a pool
      min: 0,                // min number of connection in a pool
      acquire: 30000,        // max time in mssql the connection will wait before throwing error
      idle: 10000            // time in mssql the connection will be idle before getting released 
    }
}