module.exports=(sequelize,DataTypes)=>{

    const Customer=sequelize.define("customer",{ //here customer is modelname or databse name
        //model attributes
        customerName:{
            type:DataTypes.STRING,
            allowNull: false, //we cant keep this field null
        },
        tableNumber:{
            type:DataTypes.INTEGER,
            allowNull: false,
        },
        timeSlot:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        phoneNumber:{
            type:DataTypes.STRING,
            allowNull: false,
        },
    })
 return Customer;
}
