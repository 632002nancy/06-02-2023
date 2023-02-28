//enum is used to store data inside it and is used when we want to restrict users choice
//it is a data structure of constant length that holds a set of constant values
//Enums are useful when setting properties or values that can only be a certain number of possible values.

//const enum seatchoice{      //if we put const before enum the value of aisle will be given to s only in js
enum seatchoice {
    AISLE = 9,           //by default first variable will have value 0 and then so on increasing by 1
    WINDOW = 67,  //we can also set the value of first data accrding to us and corresponding values will have values increasing by 1 
    MIDDLE
}
const s = seatchoice.AISLE;

enum market {
    shampoo = "s",     //when we put string as value so the next data cant set their corresponding value so we need to assign value for every data for string or assign on numeric value and so on data will get their value by +1
    conditioner = 90,
    bodysoap,
    facewash
}
const m = market.bodysoap;

export { }