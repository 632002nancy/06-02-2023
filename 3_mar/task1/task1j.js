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
let nAME = customerName();
function confirmBooking() {
    const selectedTimeSlot = timeslot.options[timeslot.selectedIndex].value;
    const selectedTableSlot = tableslot.options[tableslot.selectedIndex].value;

    var bookId = Math.floor(Math.random() * (700 - 60 + 1)) + 60;

    const obj = { Time: selectedTimeSlot, bookedTable: selectedTableSlot, bookID: bookId };
    tablesBooked.push(obj);
    console.log(tablesBooked);
    localStorage.setItem(nAME, JSON.stringify(obj));
    let a = JSON.parse(localStorage.getItem(nAME));
    console.log(a);

    timeslot.selectedIndex = 0;
    tableslot.selectedIndex = 0;

    document.getElementById("details").innerHTML = "WELCOME!!!" + customerName() + " your table " + selectedTableSlot + " is booked for timings " + selectedTimeSlot + " AND YOUR BOOKING ID IS:" + bookId;

    for (let i = 0; i < timeslot.length; i++) {              //enable all the options in both lists when printing is done
        timeslot.options[i].disabled = false;
        tableslot.options[i].disabled = false;
    }
}

function cancelBooking() {
    let cancelid = document.getElementById("cancelID").value;
    for (let i in tablesBooked) {
        if (tablesBooked[i].bookID === cancelid) {
            tablesBooked.splice(i, 1);
            localStorage.removeItem(nAME);
        }
    }
}

