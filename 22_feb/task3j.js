// ---------------------------------------------------------------Static class---------------------------------------------------------------
// static methods are defined in the class 
//we can't call static method from the object of the classw
//we can only call static method with the class name

class Person{
    constructor(fullname,age,id){
        this.fullname1 = fullname;
        this.age1=age;
        this.id1=id;
    }
    static name="nancy";

     static intro(){
       console.log(`my name is ${this.name}`)

     }
    static ob(x){
        return "static class with object as parameter: " + x.fullname1;
    }
}

let per= new Person("Nancy Verma",20,6869);    //making an object of class Person
let staticobj=new Person("called");
console.log(per.fullname1);         //accessing the full name of the object per
console.log(per.age1);         //accessing the age of the object per
console.log(per.id1);         //accessing the id of the object per
 
Person.intro();          //calling static method using class name
console.log(Person.ob(per));          //calling static method using class name and passing object to it

