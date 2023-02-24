function checkdetails(){
    var name=document.forms.Rform.nm.value;
    var add=document.forms.Rform.address.value;
    var pn=document.forms.Rform.pno.value;
    var mail=document.forms.Rform.email.value;
    var ps=document.forms.Rform.pass.value;
    var sub=document.forms.Rform.subject.value;
    
    if(name==""){
        console.log(!errname.test(name))
        alert("Please enter your name carefully");
        
    } 
    if(add==""){
        alert("Please enter your address carefully");
    } 
    if(pn==""){
        alert("Please enter your phone number");
    } 
    if(mail==""){
        alert("Please enter your mail carefully");
    } 
    if(ps==""){
        alert("Please do not leave your password empty or include special characters in your password");
    } 
    if(sub==""){
        alert("Please fill the subject");
    } 


    document.getElementById("dispdetails").innerHTML="Your Details are " +'<br>'+ name +"  "+add+"  "+pn+"  "+mail+ "  "+ps+"  "+sub;
        
}