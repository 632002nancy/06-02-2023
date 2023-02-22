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
var Students1 = /** @class */ (function () {
    function Students1() {
    }
    Students1.prototype.sid = function (x) {
        return this.studid = x;
    };
    return Students1;
}());
var Student2 = /** @class */ (function (_super) {
    __extends(Student2, _super);
    function Student2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Student2.prototype.studadharnum = function (s) {
        return this.studadhar = s;
    };
    return Student2;
}(Students1));
var stud = new Students1();
stud.studCode = 9745;
stud.studName = "Nancy Verma";
//stud.studid= 75178;        //private member so cant be accessed outside the class
//stud.studadhar="7989ga";      //itis protected member so can't be acessed outside the class 
// -----------------object of student2 class--------------- 
var st = new Student2();
st.studcollege = "IP University";
console.log(stud.studName); //public members so can be accessed outside
console.log(stud.studCode); //public members so can be accessed outside
console.log(stud.sid(7899)); //we can access private members from functions when declared inside same class
// printing members of second class 
console.log(st.studcollege);
console.log(st.studadharnum("688HJH787"));
