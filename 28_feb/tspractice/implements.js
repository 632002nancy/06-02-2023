"use strict";
exports.__esModule = true;
var Sonar = /** @class */ (function () {
    function Sonar() {
    }
    Sonar.prototype.ping = function () {
        console.log("ping!");
    };
    return Sonar;
}());
var NameChecker = /** @class */ (function () {
    function NameChecker() {
    }
    // check(s) // Parameter 's' implicitly has an 'any' type.
    NameChecker.prototype.check = function (s) {
        // Notice no error here
        return s.toLocaleLowerCase() === "ok";
    };
    return NameChecker;
}());
var ss = new NameChecker();
console.log(ss.check("OK"));
var C = /** @class */ (function () {
    function C() {
        this.x = 0;
    }
    return C;
}());
var c = new C();
