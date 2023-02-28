"use strict";
//enum is used to store data inside it and is used when we want to restrict users choice
//it is a data structure of constant length that holds a set of constant values
//Enums are useful when setting properties or values that can only be a certain number of possible values.
exports.__esModule = true;
//const enum seatchoice{      //if we put const before enum the value of aisle will be given to s only in js
var seatchoice;
(function (seatchoice) {
    seatchoice[seatchoice["AISLE"] = 9] = "AISLE";
    seatchoice[seatchoice["WINDOW"] = 67] = "WINDOW";
    seatchoice[seatchoice["MIDDLE"] = 68] = "MIDDLE";
})(seatchoice || (seatchoice = {}));
var s = seatchoice.AISLE;
var market;
(function (market) {
    market["shampoo"] = "s";
    market[market["conditioner"] = 90] = "conditioner";
    market[market["bodysoap"] = 91] = "bodysoap";
    market[market["facewash"] = 92] = "facewash";
})(market || (market = {}));
var m = market.bodysoap;

