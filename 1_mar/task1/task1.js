// ------------------Single Inheritance-------------- 
class Teacher {
    constructor(nm, sub, sal) {
        this.name = nm;
        this.subjects = sub;
        this.salary = sal;
    }
    get details() {
        return `Name of Teacher:${this.name}  Subject of ${this.name} are ${this.subjects}  Salary of ${this.name} is ${this.salary}`;
    }
}
class Student extends Teacher {
    constructor(tname, tsub, tsal, stname, stscore) {
        super(tname, tsub, tsal); //for making construcor in derived class we must include super
        this.studname = stname;
        this.studscore = stscore;
    }
    get det() {
        return `${this.studname} scores ${this.studscore} in ${this.subjects}`;
    }
}
const t = new Teacher("Rekha", "hindi", 8900);
console.log(t.details);
const s = new Student("Rekha", "hindi", 8900, "Raj", 560);
console.log(s.det);
// -------------------------------multilevel inheritance------------------------------------ 
class Company {
    constructor(des, sal) {
        this.designation = des;
        this.salary = sal;
    }
    get detail() {
        return `The designation of employee is: ${this.designation} and The salary is: ${this.salary}`;
    }
}
class Manager extends Company {
    constructor(designatn, sala, rl) {
        super(designatn, sala);
        this.role = rl;
    }
    get mdetail() {
        return `The designation of employee is: ${this.designation} and the role is: ${this.role}`;
    }
}
class Intern extends Manager {
    constructor(desg, sl, rol, exp) {
        super(desg, sl, rol);
        this.experience = exp;
    }
    get idetail() {
        return `The designation of employee is: ${this.designation} with experience of:${this.experience}yr. to help in the role: ${this.role}`;
    }
}
const c = new Company("MD", 20000000);
console.log(c.detail);
const m = new Manager("Manager", 20000, " make user-friendly websites for the user"); //we cant access private member of class company
console.log(m.mdetail);
const i = new Intern("Intern", 20000, " make user-friendly websites for the user", 1);
console.log(i.idetail);
