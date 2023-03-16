module.exports={
    HOST:'localhost',
    USER:'sa',
    PASSWORD:"1234",
    PORT:1433,
    DB:'student_image_db',
    dialect:'mssql',

    pool:{
        max:5,
        min:0,
        accquire:20000,
        idle:10000  // time in mssql the connection will be idle before getting released 
    }
}