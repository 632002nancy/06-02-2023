module.exports = (sequelize, DataTypes) => {

    const Student = sequelize.define("student", { //here student is modelname or databse name
        //model attributes
        name: {
            type: DataTypes.STRING,
            allowNull: false,  //we cant keep this field null
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    })
    return Student;
}