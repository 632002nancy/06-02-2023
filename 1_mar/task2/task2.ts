//we are applying abstraction using abstract class bcz defining public and private is not possible in interface or types 

abstract class CartoonChannel {
    channelname: string;
    protected channelrating: number;
    private channelbudget: number;      //we cant access it outside the class so to get its value we can use setter and getter function

    constructor(chnm: string, chrate: number, chbud: number) {
        this.channelname = chnm;
        this.channelrating = chrate;
        this.channelbudget = chbud;
    }

    public abstract channelreviews(): void;   //abstract method

    public get chanelbud() {
        return this.channelbudget;
    }
}
class Raters extends CartoonChannel {
    ratername: string;
    constructor(chnm: string, chrate: number, chbud: number, ratername: string) {      //constructor overloading (polymorphism)
        super(chnm, chrate, chbud);
        this.ratername = ratername;
    }
    details() {
        console.log("Raters are rating our channels...");
    }
    public channelreviews(): void {
        if (this.channelrating >= 4) {
            console.log(`The channel ${this.channelname} is toping in charts with ratings ${this.channelrating} with budget ${super.chanelbud}, review by ${this.ratername}`);
        }
        else {
            console.log(`The channel ${this.channelname} is not doing great in charts with ratings ${this.channelrating} with budget ${super.chanelbud}, review by ${this.ratername}`);
        }
    }
    popular(channelrating: number): string {
        if (channelrating >= 4) {
            return "top in charts";
        }
        else {
            return "not up to expectations";
        }
    }


}
class Viewers extends Raters {
    constructor(chnm: string, chrate: number, chbud: number, ratername: string) {
        super(chnm, chrate, chbud, ratername);
    }
    details() {
        console.log("Viewers are viewing our cartoons...");       //method overriding
    }


    dispdetails(chnm: string, chrate: number, chbud?: number) {         //method overloding
        if (chbud) {
            console.log(`we are watching channel ${chnm} with rating ${chrate} and budget ${chbud}`)
        }
        else { console.log(`we are watching channel ${chnm} with rating ${chrate}`); }

    }

}

const r = new Raters("pogo", 4.5, 6900000, "sneha");
console.log("CHANNELS:");
r.details();
console.log(r.popular(4.5));
r.channelreviews();

const v = new Viewers("HUNGAMA", 4.9, 90890000, "preeti");
v.details();
v.dispdetails("cartoonNetworks", 4.1);
v.dispdetails("nick", 3.9, 8990978);


//const c=new CartoonChannel("Pogo",4.4,290000000);   //we cant create instance of an abstract class

