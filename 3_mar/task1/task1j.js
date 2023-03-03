

function customerName() {
    var memName = document.getElementById("membersName").value;
}

const customerMembers = () => {
    var mem = document.getElementById("members").value;
}

var timeslot = document.getElementById("timeSlot");
var tableslot = document.getElementById("tableSlot");

let tablesBooked = [];
function newBooking(time) {

    for (let i = 0; i < tablesBooked.length; i++) {
        if (tablesBooked[i].Time === time.value) {
            for (let j = 0; j < tableslot.length; j++) {
                if (tableslot.options[j].value === tablesBooked[i].bookedTable) {
                    tableslot.options[j].disabled = true;
                    //alert("Sorry this table is not available for this time slot!!!");
                }
            }
        }
    }
}

function confirmBooking() {
    const selectedTimeSlot = timeslot.options[timeslot.selectedIndex].value;
    const selectedTableSlot = tableslot.options[tableslot.selectedIndex].value;

    const obj = { Time: selectedTimeSlot, bookedTable: selectedTableSlot };
    tablesBooked.push(obj);
    localStorage.setItem("slot",obj);

    let a=localStorage.getItem('slot');
    console.log(a);

    //document.getElementById("details").innerHTML=`${memName} your ${selectedTableSlot} is booked for tome-slot ${selectedTimeSlot}`;

}

