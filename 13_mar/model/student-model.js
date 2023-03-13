module.exports = (sequelize, DataTypes) => {

    const Student = sequelize.define("student", {
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