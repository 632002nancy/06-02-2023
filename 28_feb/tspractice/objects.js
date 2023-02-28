"use strict";
//object of a function
exports.__esModule = true;
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "nancy", isPaid: true }); //when calling function we need to give the same parameters
//when we want to retuen an object using a function
function func() {
    return { name: "nancy", pass: "gdy" };
} //first {} tells that the return type is an object and second {} is for the body
function createUser1(_a) {
    var string = _a.name, boolean = _a.isPaid;
} //we are giving 2 objects as function parameter but we want to get 3 parameters 
var newuser = { name: "nancy", isPaid: true, email: "gsdhggh" }; //got this firt we create an object using object syntax and add as many as parameters we want
createUser1(newuser); //now pass that objct as parameter when calling a function 
function createUser2(user) {
    return { name: "nancy", pass: "hfh", pno: 7238 };
} //here the type of data user can hold is user2
createUser2({ name: "nancy", pass: "hfh", pno: 7238 });
