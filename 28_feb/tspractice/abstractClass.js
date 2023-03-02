"use strict";
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
//we cant make object of abstract class
var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.getReels = function () {
        console.log("reels ");
    };
    return A;
}());
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // constructor(cameraMode:string,burst:number){           //but need not to define properties
    //     super(cameraMode,burst)
    // }
    B.prototype.getsepia = function () {
        console.log("got sepia!!!");
    };
    return B;
}(A));
var obj = new B();
obj.getReels();
obj.getsepia();
