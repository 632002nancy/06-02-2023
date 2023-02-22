// ---------------------------------------array of objects--------------------------------------- 

//declaring array of objects
// objects: key-value pairs 
//we have declared an array with its elements as objects
const arr=[
     {fname:"nancy",lname:"verma",age:20},
     {type:"cars",color:"white"},
     {type:"scooty",color:"white"},
     {schoolname:"KV",class:"12"}

];
// -----------------------------------------------array------------------------------------------------------------------ 
//declaring normal array
const arr1=["banana","apple","kiwi","apple","apple"];

console.log(arr1.toString());          //print the content as string
console.log(arr1);               //print the content as array elements

console.log(arr1.includes("banana"));                      //it gives true or false result if the banana is present ornot
console.log(arr1.indexOf('apple'));                     //gives first index of the occurence of the apple
console.log(arr1.lastIndexOf('apple'));               //gives last index of the occurence of the apple


// ----------------------------------------------------object------------------------------------------------------------
const obj={
    firstName:"aditya",
    lastName:"singh",
    age:23,
    fullname:function(){
        return this.firstName+ " " +this.lastName; //here this keyword is refering to current parent i.e., obj in this case
    }
};
console.log(obj.fullname());   //displaying fullname using function of the object

console.log(obj.fullname().toUpperCase());    //using built in function toUpperCase() in user-defined function fullname()

const obj1=new Object();        //creating an object using new object() property
obj1.name="Yash raj";
obj1.age=23;
obj1.id=42631;

console.log(obj1);

// ------------------------------------using methods on array of objects ---------------------------------- 

//to print color of scooty
console.log(arr[2].color);


//pushing/adding more objects to arr
arr.push({animal:"dog",color:"black"});
arr.push({animal:"cat",color:"black"});
arr.push({animal:"cow",color:"black"});
console.log(arr);

//----------------to print keys of the array
const keys=arr.keys();
for(let x of keys){
    console.log(x);
}

//pop or remove elemet from the last index of the array
arr.pop();             //the object with animal cow and color black is popped out
console.log(arr);

//shift it removes the element from top of tha array
arr.shift();             //element with fname,lname and age is removed 
console.log(arr);

//unshift it adds element at the top of the array
arr.unshift({fname:"nancy",lname:"verma"});     //new object is created at the top of the array i.e., at first index
console.log(arr);

//splice adds new item to an array
arr.splice(2,0,{brand:"h&m",type:"jeans"});            //it will add new object after second object without removing and object from the last
console.log(arr);

//slice takes out a piece of an array into a new array
const arr2=arr.slice(5);          //makes new array after 2 elemnt and add it to arr2
console.log(arr2);                // new array after type:cars 
console.log(arr);                 //old array is same

//sort to sort array in ascending order
const arr3=arr2.sort(function(a,b){
    let x=a.animal.toLowerCase();                   //change the string to lowercase then compare them 
    let y=b.animal.toLowerCase();
    if(x<y){return -1};       //if the value is negative y is greater
    if(x>y){return 1}; //if the value is positive y is greater
    return 0;       //if the value is 0 both are same
} );
console.log(arr3);



//------------------------------------------forEach()------------------------------------     calls a function once for every array element
arr.forEach( pet=>
    {                
        pet.age=0;                             //here a new parameter is being initiated for every object in array
    })
    console.log(arr);


// -----------------------indexof() it gives theindex of the element--------------------
let s=arr1.indexOf("banana");
console.log(s);


// ----------------------------entries to print entries 
const f=arr.entries();
for(let x of f){
    console.log(x);                   //print all key-value pairs
}

// -----------------------------------------------------------------nested array and objects-----------------------------------------------------------
//we can fix array inside object and object inside tht array:

const ob={
    name:"Rohit",
    age:34,
     carOfRohit:[         //array inside object
     {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},//object inside array
     {name:"BMW", models:["320", "X3", "X5"]},   //array inside object
     {name:"Fiat", models:["500", "Panda"]}],

     get ageR(){                        //using getter property as its syntex is simpler and can secure better data quality
            return this.age;
     },

     set ager(age1){                   //setter property is used to set the age 
        this.age=age1;
     } 
};


console.log(ob.carOfRohit[0].name);    //gives name of object at first index of array of object ob
console.log(ob.ageR);

ob.age1=22;                              //here the age is set
console.log(ob.age1);

let mystring=JSON.stringify(ob);    //json used to read from web server and displey it to web page   here the object is converted to string
console.log(mystring);              //JSON.stringify will not stringify fnctions