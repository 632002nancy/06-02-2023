function getweather(){
    return new Promise(function(resolve,reject){
        let weather="sunny";
        if(weather=="sunny"){
            resolve(weather);   //gives the messge when issue was resolved
        }
        else{
           reject("Weather not found")
        }
    })
}
//console.log(getweather());     //if resolve and reject was not declared then pending state will be displayed
function onSucess(data){
    console.log(data);
}
function onError(data){
    console.log(data);
}
getweather().then(onSucess, onError)       //then and catch will be executed for resolved and reject in promise

// -------------------------fetching data from api---------------------------- 
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
.then(response =>response.json())
.then(data => console.log(data));