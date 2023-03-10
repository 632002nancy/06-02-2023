const express = require("express");
const { showDetails, deleteDetails , getDetails} = require("../controller/restaurant-controller.js");

const router = express.Router();

router.post("/details", showDetails);   //create
router.get("/getdetails", getDetails);   //read
router.post("/delete", deleteDetails);  //delete

module.exports = router;