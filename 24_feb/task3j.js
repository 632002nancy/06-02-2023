let button = document.getElementById("btn");
let para = document.getElementById("btnpara");

button.addEventListener("click",function(){
 para.innerHTML="The button has been clicked";
});

button.addEventListener("contextmenu",function(){
  para.innerHTML="The button has been right clicked";
});

button.addEventListener("dblclick",function(){
 para.innerHTML="The button has been double clicked";
});

button.addEventListener("mousedown",function(){
 para.innerHTML="The mouse button has been pressed on button"; //when mouse button is pressed
});

button.addEventListener("mouseenter",function(){
  para.innerHTML="The  mouse pointer moves into the button";  //onmouseenter event does not bubble (does not propagate to the parent )
});

button.addEventListener("mouseleave",function(){
  para.innerHTML="The mouse pointer moves out of the button";  ////onmouseleave event does not bubble (does not propagate to the parent )
});

button.addEventListener("mousemove",function(){
  para.innerHTML="The  mouse pointer moves over the button";   //when the pointer moves over an element
});

button.addEventListener("mouseout",function(){
  para.innerHTML="The mouse pointer moves out of the button in mouseout";  //this refelects the result to parent element also
});

button.addEventListener("mouseover",function(){
  para.innerHTML="The mouse pointer moves onto the button";    //reflects the result to parent element
});

button.addEventListener("mouseup",function(){
 para.innerHTML="The mouse  button is released over the button";   // a mouse button is released over an element.
});
