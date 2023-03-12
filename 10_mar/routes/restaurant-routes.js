const express = require("express");
const { addDetails, deleteDetails , showDetails} = require("../controller/restaurant-controller.js");

const router = express.Router();

router.post("/details", addDetails);   //create
router.get("/getdetails", showDetails);   //read
router.post("/delete", deleteDetails);  //delete

module.exports = router;