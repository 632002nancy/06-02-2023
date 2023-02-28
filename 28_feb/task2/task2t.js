"use strict";
// There are three main visibility modifiers in TypeScript.
// public - (default) allows access to the class member from anywhere
// private - only allows access to the class member from within the class
// protected - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
// ------------------------------------------public--------------------------------------------- 
var A = /** @class */ (function () {
    function A(fname, adr, id1) {
        this.firstname = fname;
        this.adhar = adr;
        this.id = id1;
    }
    return A;
}());
var obj = new A("nancy", 648568, 8743658);
console.log(obj.firstname); //can be accessible
//console.log(obj.adhar);         //cant be accessible outside A
//console.log(obj.id);            //cant be accessible outside A or its subclasses
//obj.adahr=6483568;                  //cant access it as it is private so we cant access it outside the class
//obj.id=685763;                        //cant access it as it is protected so we cant access it
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B(frstname, adrnum, id2, det) {
        return _super.call(this, frstname, adrnum, id2) || this;
    }
    return B;
}(A));
var obj2 = new B("yash", 52634, 243, "student");
console.log(obj2);
