let studentImage = document.getElementById("displayData");
let studentcreate = document.getElementById("createstudent");
let deleteButton = document.getElementById("deleteButton");
let button = document.createElement("button");

//submitting information and displaying in html
const submitInfo = async () => {
  document.getElementById("studentCreated").style.display = "block";
  document.getElementById("studentCreated").innerHTML = "Data is SAVED successfully";
  
};
//updating information and displaying in html
const updateInfo = async () => {
  document.getElementById("studentCreated").style.display = "block";
  document.getElementById("studentCreated").innerHTML = "Data is saved and UPDATED successfully";
  
};
//deleting information and displaying in html
const deleteInfo = async () => {
  document.getElementById("studentCreated").style.display = "block";
  document.getElementById("studentCreated").innerHTML = "Data is DELETED successfully";
  
};

// making the show data function
const showData = async () => {
  let url = "http://localhost:3010/display";
  studentImage.innerHTML = " ";
  let response = await fetch(url);
  let { data } = await response.json();
  // console.log(data);
  for (let i = 0; i < data.length; i++) {
    studentImage.innerHTML += `Student Name: ${data[i].name} Class: ${data[i].class} Roll No:${data[i].rollNo} Subjects:${data[i].subjects} Profile Image: <img src="uploads/${data[i].image.data}" alt="${data[i].name}" style="width:80px; height:80px">`;
    studentImage.innerHTML += "&nbsp;&nbsp";
    button.type = "button";
    button.value = data[i]._id;
    button.setAttribute("onclick", "updateData(this.value)");
    // console.log(updateData(this.value));
    studentImage.appendChild(button);
    button.innerHTML = "UPDATE";
    studentImage.innerHTML += "<br><br><br>";
  }
};

//putting data into input fields when update button is clicked
const updateData = async (buttonValue) => {
  console.log(buttonValue);
  document.getElementById("addButton").style.display = "none";
  document.getElementById("updateButton").style.display = "";
  let url = `http://localhost:3010/display/${buttonValue}`;
  console.log(url);
  // console.log(button.value);
  let response = await fetch(url);
  let { data } = await response.json();
  console.log({data});
  // console.log(data.class);
  document.getElementById("studentName").value = data.name;
  document.getElementById("studentRollno").value = data.rollNo;
  document.getElementById("studentClass").value = data.class;
  document.getElementById("studentSubjects").value = data.subjects;
  
  console.log(data._id)
  console.log("up dataid");
  deleteButton.value = data._id;
  console.log(deleteButton.value);
  deleteButton.setAttribute("formaction", `/display/${deleteButton.value}`);
};
