function customerName() {
    var memName = document.getElementById("membersName").value;
    return memName;
}

const customerMembers = () => {
    var mem = document.getElementById("members").value;
    return mem;
}

var timeslot = document.getElementById("timeSlot");
var tableslot = document.getElementById("tableSlot");

let tablesBooked = [];
function newBooking(time) {

    for (let k = 0; k < tableslot.length; k++) {
        tableslot.options[k].disabled = false;
    }
    for (let i = 0; i < tablesBooked.length; i++) {
        if (tablesBooked[i].Time === time.value) {
            for (let j = 0; j < tableslot.length; j++) {
                if (tableslot.options[j].value === tablesBooked[i].bookedTable) {
                    tableslot.options[j].disabled = true;
                }
                else {
                    tableslot.options[j].disabled = false;
                }
            }
        }
    }
}
let memberNAME=document.getElementById("membersName").value;
function confirmBooking() {
    const selectedTimeSlot = timeslot.options[timeslot.selectedIndex].value;
    const selectedTableSlot = tableslot.options[tableslot.selectedIndex].value;
     
    if(memberNAME===customerName()){
        alert("please fill and submit  your NAME !!!");
        return;
    }
    else if(selectedTimeSlot==="empty"){
        alert("please fill TIME-SLOT!!!");
        return;
    }
    else if(selectedTableSlot==="empty"){
        alert("please fill TABLE number!!!");
        return;
    }
    else{
        var bookId = Math.floor(Math.random() * (700 - 60 + 1)) + 60;
        const obj = { Time: selectedTimeSlot, bookedTable: selectedTableSlot, bookID: bookId };
        tablesBooked.push(obj);
        
        localStorage.setItem(customerName(), JSON.stringify(obj));
        let a = JSON.parse(localStorage.getItem(customerName()));
       
        timeslot.selectedIndex = 0;
        tableslot.selectedIndex = 0;
    
        document.getElementById("details").innerHTML = "WELCOME!!!" + customerName() + " your table " + selectedTableSlot + " is booked for timings " + selectedTimeSlot + " AND YOUR BOOKING ID IS:" + bookId + '<br>';
    
        for (let i = 0; i < timeslot.length; i++) {              //enable all the options in both lists when printing is done
            timeslot.options[i].disabled = false;
            tableslot.options[i].disabled = false;
        }
        memberNAME.value="";
        let allDetails = document.getElementById("allCustDetail");
        allDetails.innerHTML += "Time Slot: " + tablesBooked[tablesBooked.length - 1].Time + "     Table NO.:" + tablesBooked[tablesBooked.length - 1].bookedTable + "     Booking ID:"+bookId + '<br>';
    }
    }




