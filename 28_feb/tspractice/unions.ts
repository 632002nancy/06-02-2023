// helps in the situation where we dont know the exact datatype of variable
//instead of any using union is better
let score: number = 66;
score = 55;
// score="99"; //this gives problem as 99 here is string

let score1: number | string = 89;    //here we can store number as well as string value in score1
score1 = 90;
score1 = "56";

type user = {
    name: string;
    id: number;
}
type admin = {
    username: string;
    id: number;
}

let ritik: user | admin = { name: "jhgsj", id: 787 }; //here the ritik can work as user as well as admin
ritik = { username: "dhg", id: 432 }


function getid(id: number | string) {
    // id.toUpperCase();  //it gives error as id is nor a number neither a string is works as combined new datatype
    console.log(`id is ${id}`);
}
getid(3)
getid("3")

const arr: (string | number)[] = [1, 2, 3, "45"]   // here our array can store number array or string array or both

let pi:3.14=3.14;
//pi=9;        //gives error as we can assign only 3.14

let windowseat: "aisle" | "middle" |"window";
windowseat="aisle";
//windowseat="crew";        //not possible as it is not already defined

export { }