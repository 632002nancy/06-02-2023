//in case of functions type annocation is really important 

function addnum(num: number){      //here we have defined what kind of value it can accept i.e., number
   // num.toUpperCase(); //gives error as toUpperCase is not a function for number
    return num+5;
  }
  console.log(addnum(5)); //10

  //function with multiple arguments
  function signIn(name: string, pass: number){
    return true;
  }
  signIn("nancy",57423);

  //arrow function with default value
let user = (name: string,email: string, isPaid: boolean=false) =>{}   //here if only 2 parameters are passed take third value as default value i.e., false
user("n","h");  //here we are only passing 2 parameters

function addnum1(num1: number):number{      //here we have defined what kind of value it returns i.e., number
 //    return true;     //this will work fine but if we wnt to eturn only one specific type of data then 
        return num1+4;
   }
   addnum1(6)


   const heros=["spiderman","thor"]  //it automatically declares that it is an array of string type
   var a=heros.map((hero): string =>{      //this gives the return type of the function
      return `hero is ${hero}`
   })
     console.log(a);    

     function err(errname: string): void{       //this tells that the function is not going to return anything
        console.log(errname);
     }

     function err1(errname: string): never{       //this tells that the function throws an exception or terminates execution of program
        throw(errname);
     }
  export{}