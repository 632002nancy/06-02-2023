
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
            type: DataTypes.STRING,
        },
    })
    return studentSchema;
}