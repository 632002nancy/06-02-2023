"use strict";
//in case of functions type annocation is really important 
exports.__esModule = true;
function addnum(num) {
    // num.toUpperCase(); //gives error as toUpperCase is not a function for number
    return num + 5;
}
console.log(addnum(5)); //10
//function with multiple arguments
function signIn(name, pass) {
    return true;
}
signIn("nancy", 57423);
//arrow function with default value
var user = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
}; //here if only 2 parameters are passed take third value as default value i.e., false
user("n", "h"); //here we are only passing 2 parameters
function addnum1(num1) {
    //    return true;     //this will work fine but if we wnt to eturn only one specific type of data then 
    return num1 + 4;
}
addnum1(6);
var heros = ["spiderman", "thor"]; //it automatically declares that it is an array of string type
var a = heros.map(function (hero) {
    return "hero is ".concat(hero);
});
console.log(a);
