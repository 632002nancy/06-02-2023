function testfunc(){
    let x =document.getElementById("num").value;
    try{
        if(x.trim==" ") throw "is empty";
        if(isNaN(x)) throw " is not a number please provide number betwen 1-100";
        if(x<1) throw "is below 1 !!!";
        if(x>100) throw "is more than 100 !!!";
    }
    catch(mssg){
        document.getElementById("test").innerHTML ="Input "+mssg;
    }
    finally{
        document.getElementById("fin").innerHTML ="Finally has been executed";
    }
}