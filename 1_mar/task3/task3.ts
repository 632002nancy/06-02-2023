const arr = ["1", "a", "2", "b", "3", "c", "4", "d", "5", "e"];
function check() {
    for (let i = 0; i < arr.length; i++) {
        if (isNaN(parseInt(arr[i]))) {
            console.log(arr[i], "->", arr[i].toUpperCase());
        }
        else {
            console.log(arr[i], "->", parseInt(arr[i]));
        }
    }
}
check();

