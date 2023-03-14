const express = require("express")
const{addCustomer, showDetails, deleteCustomer}=require("../controller/restaurant-controller.js")
const router = express.Router();

router.post("/addCustomer",addCustomer);  //create
router.get("/showDetails",showDetails);  //read
router.post("/deleteCustomer",deleteCustomer); //delete

module.exports=router;