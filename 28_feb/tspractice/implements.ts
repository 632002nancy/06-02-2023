interface Pingable {         //declaring interface
    ping(): void;
}

class Sonar implements Pingable {      //implementing properties of interface in class
    ping() {
        console.log("ping!");
    }
}

//class Ball implements Pingable {
//   Class 'Ball' incorrectly implements interface 'Pingable'.
//     Property 'ping' is missing in type 'Ball' but required in type 'Pingable'.
//     pong() {
//       console.log("pong!");
//     }
//   }

interface Checkable {
    check(name: string): boolean;
}
class NameChecker implements Checkable {
    // check(s) // Parameter 's' implicitly has an 'any' type.
    check(s: string) {

        // Notice no error here
        return s.toLocaleLowerCase() === "ok";

    }
}
const ss = new NameChecker();
ss.check("OK");


interface A {
    x: number;
    y?: number;
}
class C implements A {
    x = 0;
}
const c = new C();
  // c.y = 10;     //Property 'y' does not exist on type 'C'. as it is optional property of A

  export{}