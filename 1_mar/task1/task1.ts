// ------------------Single Inheritance-------------- 
class Teacher {
    name: string;
    subjects: string;
    salary: number;

    constructor(nm: string, sub: string, sal: number) {    //initializing properties of teacher class using constructor
        this.name = nm;
        this.subjects = sub;
        this.salary = sal;
    }
    get details(): string {
        return `Name of Teacher:${this.name}  Subject of ${this.name} are ${this.subjects}  Salary of ${this.name} is ${this.salary}`;
    }
}

class Student extends Teacher {
    studname: string;
    studscore: number;

    constructor(tname: string, tsub: string, tsal: number, stname: string, stscore: number) {  //constructor are not inherited so we use super to access members of parent class
        super(tname, tsub, tsal);    //for making construcor in derived class we must include super
        this.studname = stname;
        this.studscore = stscore;
    }
    get det(): string {
        return `${this.studname} scores ${this.studscore} in ${this.subjects}`;
    }
}
const t = new Teacher("Rekha", "hindi", 8900);
console.log(t.details);


const s = new Student("Rekha", "hindi", 8900, "Raj", 560);
console.log(s.det);


// -------------------------------multilevel inheritance------------------------------------ 
class Company {
    public designation: string;
    private salary: number;
    constructor(des: string, sal: number) {
        this.designation = des;
        this.salary = sal;
    }
    get detail():string{
        return `The designation of employee is: ${this.designation} and The salary is: ${this.salary}`;
    }
}

class Manager extends Company{
    role:string;
    constructor(designatn:string,sala:number,rl:string){
        super(designatn,sala);
        this.role=rl;
    }
    get mdetail():string{
        return `The designation of employee is: ${this.designation} and the role is: ${this.role}`;
    }
}

class Intern extends Manager{
       experience:number;

       constructor(desg:string,sl:number,rol:string,exp:number){
        super(desg,sl,rol);
        this.experience=exp;
       }
       get idetail():string{
        return `The designation of employee is: ${this.designation} with experience of:${this.experience}yr. to help in the role: ${this.role}`;
    }
}

const c=new Company("MD",20000000);
console.log(c.detail);

const m=new Manager("Manager",20000," make user-friendly websites for the user");    //we cant access private member of class company
console.log(m.mdetail);

const i=new Intern("Intern",20000," make user-friendly websites for the user",1);
console.log(i.idetail);