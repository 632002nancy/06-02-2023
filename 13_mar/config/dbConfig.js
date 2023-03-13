module.exports = {
    HOST: 'localhost',
    USER: 'sa',
    PASSWORD: '1234',
    PORT:1433,
    DB: 'student_db',
    dialect: 'mssql',

    pool: {
        max: 5,               // max number of connection in a pool
      min: 0,                // min number of connection in a pool
      acquire: 30000,        // max time in mssql the connection will wait before throwing error
      idle: 10000            // time in mssql the connection will be idle before getting released 
    }
}