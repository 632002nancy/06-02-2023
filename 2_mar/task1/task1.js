"use strict";
//generics are used when we want to return the same typ of alue as we have recieved.i.e., for composing different data types
exports.__esModule = true;
// function one(val: boolean | number): boolean | number{   //first way is to use uniom bt we need to declare so many dat types if we want more data types, so we dont use it
//    return val;
// }
// function two(val:any):any{    //second way is to use any bt it is not good practice 
//     return val;
// }
// so here we use generics 
// <Type> indicates that this function is goingto be getting generics
function three(val) {
    return val;
}
three(3); //here we can check by hovering on three that the type of data we are getting and returning are same i.e, 3
three("3"); //here we can check by hovering on three that the type of data we are getting and returning are same i.e, "3"
// shortcut
function four(val) {
    return val;
}
four(8);
function five(val) {
    return val;
}
//console.log(five(true)); //here as boolen is not declared in type grocery so we cant pass
console.log(five({ oil: "olive oil", egg: 9 })); //here we need to pass the arguments of same type of grocery
// generics in array 
function getProducts(val) {
    return val[0]; //gives 54
}
console.log(getProducts([54, 5346, 53]));
function getProducts2(val) {
    return val;
}
console.log(getProducts2([54, 5346, 53]));
//  generic arrow method 
var getProducts3 = function (val) {
    return val;
};
var Sell = /** @class */ (function () {
    function Sell() {
        this.cart = [];
    }
    Sell.prototype.addToCart = function (product) {
        this.cart.push(product);
    };
    return Sell;
}());
var sellProduct = new Sell();
sellProduct.addToCart({ nameOfCourse: "TypeScriptCourse", subInCourse: 2, nameOfQuiz: "level1", domain: "competition" });
console.log(sellProduct.cart);
