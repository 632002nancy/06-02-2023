let tablesBooked = [];
var timeslot = document.getElementById("timeSlot");
var tableslot = document.getElementById("tableSlot");

var customerName = document.getElementById("membersName").value;
var customerNumber = document.getElementById("phno").value;

//disabling tables on selected time-slot if prebooked in create operation using mongo
const newBooking = async (select) => {
  document.getElementById("tableSlot").style.display = "";
  let selectedTimeIndex = select.selectedIndex;
  let selectedTimeValue = select.options[selectedTimeIndex].value;
  const response = await fetch("http://localhost:2020/showDetails");
  const { data } = await response.json();
  console.log(data);

  for (let k = 0; k < tableslot.length; k++) {
    tableslot.options[k].disabled = false;
  }
  for (let i = 0; i < data.length; i++) {
    if (data[i].timeSlot === selectedTimeValue) {
      for (let j = 0; j < tableslot.length; j++) {
        if (tableslot.options[j].value == data[i].tableNumber) {
          tableslot.options[j].disabled = true;
        } 
      }
    }
  }
}

function confirmBooking() {
  const selectedTimeSlot = timeslot.options[timeslot.selectedIndex].value;
  const selectedTableSlot = tableslot.options[tableslot.selectedIndex].value;

  if (selectedTimeSlot === "empty") {
    alert("please fill TIME-SLOT!!!");
    return;
  } else if (selectedTableSlot === "empty") {
    alert("please fill TABLE number!!!");
    return;
  } else {

    const obj = {
      Time: selectedTimeSlot,
      bookedTable: selectedTableSlot,
    };
    tablesBooked.push(obj);

    localStorage.setItem(customerName, JSON.stringify(obj)); //it converts the obj into string
    let a = JSON.parse(localStorage.getItem(customerName)); //it converts the string into object and saveit to key value pair in  local storage for this we need to make sure that our string is in json format or else we get error


    document.getElementById("details").style.color = "black";
    document.getElementById("details").innerHTML = "WELCOME!!!" + customerName + " your table " + selectedTableSlot + " is booked for timings " + selectedTimeSlot + "<br>";

    for (let i = 0; i < timeslot.length; i++) {
      //enable all the options in both lists when printing is done
      timeslot.options[i].disabled = false;
      tableslot.options[i].disabled = false;
    }

    let allDetails = document.getElementById("allCustDetail");
    allDetails.style.color = "white";
    allDetails.innerHTML += "Time Slot: " + tablesBooked[tablesBooked.length - 1].Time + "     Table NO.:" + tablesBooked[tablesBooked.length - 1].bookedTable + '<br>';
  }
}
// ----------------------------------------------using sql------------------------------------------- 
//read(displaying data on html)
const allDetails = async (p) => {
  document.getElementById("bookingDetails").style.display = "block";
  document.getElementById("allCustDetail").style.display = "block";
  const response = await fetch("http://localhost:2020/showDetails");
  const { data } = await response.json();
  console.log(data);

  for (let i = 0; i < data.length; i++) {
    document.getElementById("allCustDetail").innerHTML += ` Customer Name: ${data[i].customerName}   &nbsp;&nbsp; Phone Number: ${data[i].phoneNumber}&nbsp;&nbsp; Table Number: ${data[i].tableNumber} &nbsp;&nbsp; Time Slot: ${data[i].timeSlot}` + '<br>'
  }
}



