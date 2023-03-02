//generics are used when we want to return the same typ of alue as we have recieved.i.e., for composing different data types

// function one(val: boolean | number): boolean | number{   //first way is to use uniom bt we need to declare so many dat types if we want more data types, so we dont use it
//    return val;
// }

// function two(val:any):any{    //second way is to use any bt it is not good practice 
//     return val;
// }

// so here we use generics 
// <Type> indicates that this function is goingto be getting generics
function three<Type>(val: Type): Type {       //here we are passing generic , here the type of value we are recieving as a value is the type of data we returning
    return val;
}

three(3);  //here we can check by hovering on three that the type of data we are getting and returning are same i.e, 3

three("3");  //here we can check by hovering on three that the type of data we are getting and returning are same i.e, "3"

// shortcut
function four<T>(val: T): T {       //it does the same job as above 
    return val;
}
four(8);

interface Grocery {
    oil: string,
    egg: number
}
function five<Type extends Grocery>(val: Type): Type {
    return val;
}

//console.log(five(true)); //here as boolen is not declared in type grocery so we cant pass
console.log(five({ oil: "olive oil", egg: 9 }));  //here we need to pass the arguments of same type of grocery


// generics in array 
function getProducts<T>(val: T[]): T {       //here the value it is expecting is of type array but the value it is returning is one of the value on index 0
    return val[0];                //gives 54
}
console.log(getProducts([54, 5346, 53]));

function getProducts2<T>(val: T[]): T[] {       //here the value it is expecting is of type array and the value it is returning is also array
    return val;
}
console.log(getProducts2([54, 5346, 53]));

//  generic arrow method 
const getProducts3 = <T>(val: T): T => {  
    return val;     
}
// ------------------------------------classes in generics----------------------------- 
interface Quiz{
    nameOfQuiz:string,
    domain:string
}

interface Course{
    nameOfCourse:string,
    subInCourse:number
}

class Sell<T extends Quiz & Course>{             //generic class
    cart:T[]=[];

    addToCart(product:T){
        this.cart.push(product);
    }
}

const sellProduct = new Sell();
sellProduct.addToCart({nameOfCourse:"TypeScriptCourse",subInCourse:2,nameOfQuiz:"level1",domain:"competition"})
console.log(sellProduct.cart);

export { }