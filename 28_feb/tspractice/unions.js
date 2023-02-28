"use strict";
exports.__esModule = true;
// helps in the situation where we dont know the exact datatype of variable
//instead of any using union is better
var score = 66;
score = 55;
// score="99"; //this gives problem as 99 here is string
var score1 = 89; //here we can store number as well as string value in score1
score1 = 90;
score1 = "56";
var ritik = { name: "jhgsj", id: 787 }; //here the ritik can work as user as well as admin
ritik = { username: "dhg", id: 432 };
function getid(id) {
    // id.toUpperCase();  //it gives error as id is nor a number neither a string is works as combined new datatype
    console.log("id is ".concat(id));
}
getid(3);
getid("3");
var arr = [1, 2, 3, "45"]; // here our array can store number array or string array or both
var pi = 3.14;
//pi=9;        //gives error as we can assign only 3.14
var windowseat;
windowseat = "aisle";
