//submitting information
const submitInfo=async(p)=>{
    document.getElementById("studentCreated").style.display="";
    let url="http://localhost:3030/create";
    let response = await fetch(url);
    let {data} = await response.json();
  
    for (let i = 0; i < data.length; i++) {
      document.getElementById("studentCreated").innerHTML = ` Student Name:${data[i].customerName}   &nbsp;&nbsp; Class: ${data[i].class}&nbsp;&nbsp; Roll No: ${data[i].rollNo} &nbsp;&nbsp; Subjects: ${data[i].subjects}` + '<br>'
    }
}

// making the show data function 

let studentImage = document.getElementById("displayData");
let studentcreate = document.getElementById("createstudent");
let button=document.createElement("button");

const showData = async() => {
    let url = "http://localhost:3030/display"
    studentImage.innerHTML=" ";
    let response = await fetch(url);
    let {data} = await response.json();
    console.log(data)
    for(let i=0;i<data.length;i++){
        studentImage.innerHTML += `Student Name: ${data[i].name} Class: ${data[i].class} Roll No:${data[i].rollNo} Subjects:${data[i].subjects} Profile Image: <img src="uploads/${data[i].image.data}" alt="${data[i].name}" style="width:80px; height:80px">`;
        studentImage.innerHTML+='&nbsp;&nbsp';
        button.type="button";
        button.value=data[i]._id;
        button.setAttribute("onclick","updateData(this.value)");
        // console.log(updateData(this.value));
        studentImage.appendChild(button);
        button.innerHTML="UPDATE";
        studentImage.innerHTML+='<br><br><br><br><br>';
    }
}


//putting data into input fields when update button is clicked
const updateData=async(buttonValue)=>{
    document.getElementById("addButton").style.display="none";
    document.getElementById("updateButton").style.display="";
    let url=`http://localhost:3030/${buttonValue}`;
    console.log(url);
    console.log(button.value);
    let response = await fetch(url);
    let {data} = await response.json();
    console.log(data.name);
    console.log(data.class);
    document.getElementById("studentName").value=data.name;
    document.getElementById("studentRollno").value=data.rollNo;
    document.getElementById("studentClass").value=data.class;
    document.getElementById("studentSubjects").value=data.subjects;
}

