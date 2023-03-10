const mongoose=require("mongoose");
let Schema=mongoose.Schema;

let restaurantSchema=new Schema({
    customerName:{
        type:String,
        required:true,
    },
    tableNumber:{
        type:Number,
        required:true,
    },
    timeSlot:{
        type:String,
        required:true,
    },
    _id:{
        type:Number,
        required:true,
    }
});

module.exports=mongoose.model("restaurant",restaurantSchema);
