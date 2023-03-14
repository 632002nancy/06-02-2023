const db = require("../model");

const Customer = db.customers;


//1. create customer data (create)
const addCustomer =  (req, res) => {
    let customerData = {
        customerName: req.body.customerName,
        tableNumber: req.body.tableNumber,
        timeSlot: req.body.timeSlot,
        phoneNumber: req.body.phoneNumber,
    }
    Customer.create(customerData).then(a=>{
        res.status(200).json({a})
    })
    .catch(err=>{
        res.status(500).send({message:`${err}`});
    })


}

//2. get details of all customers (read)
const showDetails =(req,res)=>{
     Customer.findAll()
     .then(data=>{
        return res.status(200).json({ data });
     })
    .catch(err=>{
        return res.status(422).json({ message: `${err}` })
    })
   
}

//3. delete data of one customer
const deleteCustomer = (req, res) => {
    let phoneNumber = req.body.phoneNumber;
     Customer.destroy({ where: { phoneNumber:phoneNumber } })
     .then(data=>{
         return res.status(200).json({ message: "data deleted successfully",data });
     })
     .catch(err=>{
        return res.status(500).json({message:`${err}`})
     })
}


exports.addCustomer = addCustomer;
exports.showDetails=showDetails;
exports.deleteCustomer =deleteCustomer ;