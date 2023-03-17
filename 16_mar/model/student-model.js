
module.exports=(sequelize,DataTypes)=>{
    const studentSchema=sequelize.define("student_img",{
        name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        rollNo:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        class:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        pic:{
            // type: DataTypes.BLOB("long"),  //BLOB(binary large objects)
            type: DataTypes.STRING,  //BLOB(binary large objects)
        },
    })
    return studentSchema;
}