// -------------------------------creating class------------------------------
class person{
    firstname: string;
    lastname: string;
    age:number;          //for class we don need to make constructor typescript automatically do it

    // constructor(fname,lname,ag){
    //     this.firstname=fname;
    //     this.lastname=lname;
    //     this.age=ag;
    // }
}         

// -------------creating first object for class for different person ------------------
//const p1=new person("nancy","verma",20);
const p1=new person();
p1.firstname="Nancy";
p1.lastname="Verma";
p1.age=20;

// -------------creating second object for class for different person ------------------
//const p2=new person("shorya","saxena",21);
const p2=new person();
p2.firstname="Shorya";
p2.lastname="Saxena";
p2.age=21;

// -------------creating third object for class for different person ------------------
//const p3=new person("yash","raj",22);
const p3=new person();
p3.firstname="Yash";
p3.lastname="Raj";
p3.age=21;

console.log("DISPLAYING INFORMATION...");
console.log("1)For First Person");
console.log(`FirstName:${p1.firstname}, LastName:${p1.lastname}, Age:${p1.age}`);    //here also we dont need to use concat method we can easily concat it

console.log("2)For Second Person");
console.log(`FirstName:${p2.firstname}, LastName:${p2.lastname}, Age:${p2.age}`);

console.log("3)For Third Person");
console.log(`FirstName:${p3.firstname}, LastName:${p3.lastname}, Age:${p3.age}`);

export{}