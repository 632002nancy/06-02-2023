//object of a function

function createUser({name: string, isPaid: boolean}){     //we are giving object as function parameter

}
createUser({name: "nancy", isPaid: true})         //when calling function we need to give the same parameters


//when we want to retuen an object using a function
function func():{ name: string, pass:string}{     //it will always return an object with two properties name and pass of type string
    return {name:"nancy", pass:"gdy"};
}    //first {} tells that the return type is an object and second {} is for the body


function createUser1({name: string, isPaid: boolean}){  }   //we are giving 2 objects as function parameter but we want to get 3 parameters 
let newuser = {name: "nancy", isPaid: true, email: "gsdhggh"}   //got this firt we create an object using object syntax and add as many as parameters we want
createUser1(newuser)  //now pass that objct as parameter when calling a function 




//when different functions take same properties as parameters 
type user2 ={          //we have created the type(object) of user we are going topass to every function 
    name: string;         //it is creating a type of data type as number or string which will be passed to a function parameter
    pass: string;          //it will be helpful when we need to pass large number of arguments
    pno: number;
}

function createUser2(user: user2):user2{ //it will going to return user2 type value
    return {name: "nancy", pass:"hfh",pno:7238}
}   //here the type of data user can hold is user2

type user3={
   name: string;
   pass: string;
   readonly id: string;     //we can only read the property of this
   credcard?: number;       //this is optional if we pass it or not the program will work fine
}

let v: user3={
    name:"gsj",
    pass:"gjsgf",
    id:"dshj"
}
//v.id="gsjh";    //here we cant assign value


type cardnum ={
    cnum:number;
}
type carddate ={
    cdate:number;
}
type carddetails = cardnum & carddate &{       //it is taking different types in one type using &
    cvv:number;
}


createUser2({name: "nancy", pass:"hfh",pno:7238});

export{}