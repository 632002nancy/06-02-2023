class Students1{
    //----------------------public members--------------
    public studCode: number;   
    studName:string;

    private studid: number;
    protected studadhar: string;
    sid(x){
        return this.studid=x;
    }
}

class Student2 extends Students1{
       studcollege:string;
       studadharnum(s){
        return this.studadhar=s;
       }
}



let stud=new Students1();
stud.studCode=9745;
stud.studName="Nancy Verma";
//stud.studid= 75178;        //private member so cant be accessed outside the class
//stud.studadhar="7989ga";      //itis protected member so can't be acessed outside the class 


// -----------------object of student2 class--------------- 
let st= new Student2();
st.studcollege="IP University";


console.log(stud.studName);    //public members so can be accessed outside
console.log(stud.studCode);    //public members so can be accessed outside
console.log(stud.sid(7899));    //we can access private members from functions when declared inside same class

// printing members of second class 
console.log(st.studcollege);
console.log(st.studadharnum("688HJH787"));        //here we are accessing protected member of first class through inheriting it to second class