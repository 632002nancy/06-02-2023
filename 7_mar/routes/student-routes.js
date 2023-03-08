const router = require("express").Router(); //to use the router of express
const {getAllUsers,addUser,updateUser,deleteUser} = require("./controller/student-controller");

router.get("/",getAllUsers);  //read all the users
router.post("/",addUser);  //creates and add new user
router.put("/:id",updateUser);  // defining the id for users to update users through the id
router.delete("/:id",deleteUser);// deleting the user

module.exports = router;
