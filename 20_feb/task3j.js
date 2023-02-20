

var prime = prompt("Enter any number(n) to find prime numbers between 1 to n :")
var isPrime;
let i = 2;
let j = 2;
// -------------------------------using for loop------------------------------- 
// take isprime=1 go to 1-n if value of i and j is equal change value of isprime that means it is not prime now check value of isPrime 
function forfunc() {
    for (let i = 2; i <= prime; i++) {
        isPrime = 1;
        for (let j = 2; j <= i / 2; j++) {
            if (i % j == 0)
                isPrime = 0;
        }
        if (isPrime == 1) {
            document.write(i + " ")
        }
    }
}
//   ------------------------------------using while loop------------------------------------------}
function whilefunc() {
    let i = 2;
       while (i <= prime) {
        isPrime = 1;
        let j = 2;
        while (j <= i/2){
            if (i % j == 0) {
                isPrime = 0;
            }
            j++;
        }
        if (isPrime == 1) {
            document.write(i + " ")
        }
        i++;
    }
}


// ----------------------------------do while-----------------------------------
function dowhilefunc() {
    let i = 2;

        do { 
            isPrime=1;
            for (let j = 2; j <= i / 2; j++) {
                if (i % j == 0)
                    isPrime = 0;
            }
             
        
        if (isPrime == 1) {
            document.write(i + " ")
        }
        i++;
    }while (i <= prime);
}
