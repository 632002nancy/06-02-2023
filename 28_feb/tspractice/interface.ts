
// --------------------------------------------------enum--------------------------------------------- 
//enum is used to store data inside it and is used when we want to restrict users choice
//it is a data structure of constant length that holds a set of constant values
//Enums are useful when setting properties or values that can only be a certain number of possible values.

//const enum seatchoice{      //if we put const before enum the value of aisle will be given to s only in js
enum seatchoice {
    AISLE = 9,           //by default first variable will have value 0 and then so on increasing by 1
    WINDOW = 67,  //we can also set the value of first data accrding to us and corresponding values will have values increasing by 1 
    FORTH,            //here value of forth is 68 (increased by 1)
    MIDDLE = "middle"
}
const s = seatchoice.MIDDLE;          //gets the value of middle
console.log(s);


enum market {
    shampoo = "s",     //when we put string as value so the next data cant set their corresponding value so we need to assign value for every data for string or assign on numeric value and so on data will get their value by +1
    conditioner = 90,
    bodysoap,
    facewash
}

// -------------------------------------------interface------------------------------------------------------ 
//it doesn't tell what to do like class rather it tells what details what data we have
// -------------------creating interface-------------------------- 
interface user {
    readonly dbid: number,
    name: string,
    id: number,
    googleId?: string           //optional
    // strtTrail: () => string           //one way
    strtTrail(): string                 //another way to declare function with return type string
    getcoupon(couponNAme: string): string
}

interface user {                  //adding moere functionality to same interface also known as reopening of interface
    gittoken: string;
}

// --------------------------creating object to get properties of interface--------------------- 
const u1: user = {
    dbid: 634875, name: "nancy", id: 63875,
    strtTrail: () => {
        return "strted";
    },
    getcoupon: (name: "") => {
        return name;
    },
    gittoken: "mytoken"
}
console.log(u1.strtTrail());
console.log(u1.getcoupon("coupons"));      //the value we are passing here is going to getcoupon function

// u1.dbid=6438756;            //cant use as it is readonly property

// -----------------extending interface -------------------------- 
interface admin extends user{             //inheriting user interface into admin
    role: "admin" | "user" | "learner"
}
const u2: user = {
    dbid: 634875, name: "yash", id: 63875,
    strtTrail: () => {
        return "strted with second interface";
    },
    getcoupon: (name: "") => {
        return name;
    },
    gittoken: "mytoken2"
}
console.log(u2.strtTrail());
console.log(u2.getcoupon("coupons"));  


export {}