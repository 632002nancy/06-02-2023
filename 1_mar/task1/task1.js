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
// ------------------Single Inheritance-------------- 
var Teacher = /** @class */ (function () {
    function Teacher(nm, sub, sal) {
        this.name = nm;
        this.subjects = sub;
        this.salary = sal;
    }
    Object.defineProperty(Teacher.prototype, "details", {
        get: function () {
            return "Name of Teacher:".concat(this.name, "  Subject of ").concat(this.name, " are ").concat(this.subjects, "  Salary of ").concat(this.name, " is ").concat(this.salary);
        },
        enumerable: false,
        configurable: true
    });
    return Teacher;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(tname, tsub, tsal, stname, stscore) {
        var _this = _super.call(this, tname, tsub, tsal) || this;
        _this.studname = stname;
        _this.studscore = stscore;
        return _this;
    }
    Object.defineProperty(Student.prototype, "det", {
        get: function () {
            return "".concat(this.studname, " scores ").concat(this.studscore, " in ").concat(this.subjects);
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}(Teacher));
var t = new Teacher("Rekha", "hindi", 8900);
console.log(t.details);
var s = new Student("Rekha", "hindi", 8900, "Raj", 560);
console.log(s.det);
// -------------------------------multilevel inheritance------------------------------------ 
var Company = /** @class */ (function () {
    function Company(des, sal) {
        this.designation = des;
        this.salary = sal;
    }
    Object.defineProperty(Company.prototype, "detail", {
        get: function () {
            return "The designation of employee is: ".concat(this.designation, " and The salary is: ").concat(this.salary);
        },
        enumerable: false,
        configurable: true
    });
    return Company;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(designatn, sala, rl) {
        var _this = _super.call(this, designatn, sala) || this;
        _this.role = rl;
        return _this;
    }
    Object.defineProperty(Manager.prototype, "mdetail", {
        get: function () {
            return "The designation of employee is: ".concat(this.designation, " and the role is: ").concat(this.role);
        },
        enumerable: false,
        configurable: true
    });
    return Manager;
}(Company));
var Intern = /** @class */ (function (_super) {
    __extends(Intern, _super);
    function Intern(desg, sl, rol, exp) {
        var _this = _super.call(this, desg, sl, rol) || this;
        _this.experience = exp;
        return _this;
    }
    Object.defineProperty(Intern.prototype, "idetail", {
        get: function () {
            return "The designation of employee is: ".concat(this.designation, " with experience of:").concat(this.experience, "yr. to help in the role: ").concat(this.role);
        },
        enumerable: false,
        configurable: true
    });
    return Intern;
}(Manager));
var c = new Company("MD", 20000000);
console.log(c.detail);
var m = new Manager("Manager", 20000, " make user-friendly websites for the user"); //we cant access private member of class company
console.log(m.mdetail);
var i = new Intern("Intern", 20000, " make user-friendly websites for the user", 1);
console.log(i.idetail);
