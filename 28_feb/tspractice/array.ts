const superhero: string[]=[]     //the array is of type string array
const heropower: Array<number>=[]       //the array is of type number array
const heropower1: ReadonlyArray<number>=[]       //the array is  readonly array

superhero.push("thor");
heropower.push(7);

type v={
    name:string;
    pass:string;
    id:string;
}

const vv: v[]=[]; //here vv array is taking parameters of v type 
vv.push({name:"ujrsg",pass:"hskug",id:"gjadygf"});   //this is the first element of aRRAY
export{}