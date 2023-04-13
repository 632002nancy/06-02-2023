const User = require("../model/user")

// all the database methods are fetched and used under async and await 
// creating the READ user operation on database
const getAllUSers = async(req,res,next)=>{
    let users;
    try{ 
        users =await User.find();  // we can also use specific query to fetch data from database 
    } catch(err){
        return next(err)
    }
    if(!users){
        return res.status(500).json({message: "Internal Serval Error "});
    }

    // if everything is okay then
    return res.status(200).json({ users });
}

// Create User Operation on the database 
const addUser = async(req,res,next) => {
    const { name , email, password } = req.body;
    let user;      // create a new user 
    try{
       user = new User({
            name,
            email,
            password
        });
        user = await user.save()  // save data to the database using await 
    } catch(err){
        return next(err);
    } 
    return  res.status(201).json({ user })    //something has been added
};  

// update the user with the id param  
const updateUser = async(req,res,next) => {
    const id = req.params.id;
    const { name,email,password } = req.body;
    let user;      // create a new user 
    try{ 
        user = await User.findByIdAndUpdate(id , { name , email , password });
    }catch(err){
        return next(err);
    }
    return res.status(200).json({message:"updated successfully"});
}

//deleting the user from database 
const deleteUser = async(req,res,next) =>{
    const id = req.params.id;
    let user;
    try{
        user =await  User.findByIdAndDelete(id);
    }catch(err){
        return next(err);
    }
    return res.status(200).json({message:"User deleted"})
}

// exporting the created functions to the user-routes 
exports.getAllUSers = getAllUSers;
exports.addUser = addUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
