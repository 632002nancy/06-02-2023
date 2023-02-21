// ---------------------------------------array--------------------------------------- 

//declaring array of objects
// objects: key-value pairs 
//we have declared an array with its elements as objects
const arr=[
     {fname:"nancy",lname:"verma",age:20},
     {type:"cars",color:"white"},
     {type:"scooty",color:"white"},
     {schoolname:"KV",class:"12"}

];

//declaring normal array
const arr1=["banana","apple","kiwi"];

console.log(arr1.toString());          //print the content as string
console.log(arr1);               //print the content as array elements

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