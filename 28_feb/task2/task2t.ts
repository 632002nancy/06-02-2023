// There are three main visibility modifiers in TypeScript.
// public - (default) allows access to the class member from anywhere
// private - only allows access to the class member from within the class
// protected - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below

// ------------------------------------------public--------------------------------------------- 
class A {
    firstname: string;            //all the member who are public so we can access it outside the class
    private adhar: number;           //private member cant be accessed outside the class
    protected id: number;            //protected member can only be accessed in inherited class
    constructor(fname: string, adr: number, id1: number) {
        this.firstname = fname;
        this.adhar = adr;
        this.id = id1;
    }
}
const obj = new A("nancy", 648568, 8743658);
console.log(obj.firstname);     //can be accessible
//console.log(obj.adhar);         //cant be accessible outside A
//console.log(obj.id);            //cant be accessible outside A or its subclasses


//obj.adahr=6483568;                  //cant access it as it is private so we cant access it outside the class
//obj.id=685763;                        //cant access it as it is protected so we cant access it


class B extends A {              //we are extending class A properties to class B
    details: string;
    constructor(frstname: string, adrnum: number, id2: number, det: string) {       //protected member can be used inside  a class which inherites the class with that member
        super(frstname, adrnum, id2);
    }
}

const obj2 = new B("yash", 52634, 243, "student");
console.log(obj2);

export { }