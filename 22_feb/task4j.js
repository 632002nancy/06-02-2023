
function validinput(){
    try{
        if(IsNaN(principal,time,rate)) {throw "Ivalid Input please write numbers!!!"}
        if(rate>100||rate<=0||principal<=0||time<=0){ throw "Please provide correct rate between 1-100"}
    }
    catch(err){
        document.write(err);
    } 
}

function simpleInterest(){

    let p = document.getElementById("principal");
    let r = document.getElementById("rate");
    let t = document.getElementById("time");

     a = parseFloat(p.value);        //parse string and return float pointing number
     b = parseFloat(r.value);
     c = parseFloat(t.value);
    // validinput(a,b,c);
    let x=(a*b*c)/100;
    document.getElementById("si").innerHTML="The simple interest is "+ x;
}

function compoundInterest(){

    let p=document.getElementById("principal");
    let r=document.getElementById("rate");
    let t=document.getElementById("time");

     a= parseFloat(p.value);        //parse string and return float pointing number
     b= parseFloat(r.value);
     c= parseFloat(t.value);

    document.getElementById("ci").innerHTML="The compound interest is "+ ((a*((1+(b/100))**c))-a);
}

