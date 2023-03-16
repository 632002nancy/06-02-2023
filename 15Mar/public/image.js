// making the show data function 
let url = "http://localhost:3030/display"
let studentImage = document.getElementById("displayData");

const showData = async() => {
    studentImage.innerHTML="";
    let response = await fetch(url);
    let {data} = await response.json();
    console.log(data)
    for(let i=0;i<data.length;i++){
        studentImage.innerHTML += `Student Name: ${data[i].name} Class: ${data[i].class} Roll No:${data[i].rollNo} Subjects:${data[i].subjects} Profile Image: <img src="uploads/${data[i].image.data}" alt="${data[i].name}" style="width:80px; height:80px"><br>`;
    }
}