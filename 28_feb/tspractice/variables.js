"use strict";
exports.__esModule = true;
var user1 = { name: "nancy" };
//console.log(user.email);     Property 'email' does not exist on type '{ name: string; }'.
//let hero;        //type is any
var hero;
function gethero() {
    return "spiderman";
}
//hero=gethero();      //here the type of hero is any which is not good practice 
hero = gethero(); //after giving type to hero now it is of string type
