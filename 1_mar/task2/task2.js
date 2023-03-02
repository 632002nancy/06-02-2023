//we are applying abstraction using abstract class bcz defining public and private is not possible in interface or types 
class CartoonChannel {
    constructor(chnlName, chnlRate, chnlBud) {
        this.channelName = chnlName;
        this.channelRating = chnlRate;
        this.channelBudget = chnlBud;
    }
    get chanelBud() {
        return this.channelBudget;
    }
}
class Raters extends CartoonChannel {
    constructor(chnlName, chnlRate, chnlBud, raterName) {
        super(chnlName, chnlRate, chnlBud);
        this.raterName = raterName;
    }
    details() {
        console.log("Raters are rating our channels...");
    }
    channelReviews() {
        if (this.channelRating >= 4) {
            console.log(`The channel ${this.channelName} is toping in charts with ratings ${this.channelRating} with budget ${this.chanelBud}, review by ${this.raterName}`);
        }
        else {
            console.log(`The channel ${this.channelName} is not doing great in charts with ratings ${this.channelRating} with budget ${this.chanelBud}, review by ${this.raterName}`);
        }
    }
    popular(channelRating) {
        if (channelRating >= 4) {
            return "top in charts";
        }
        else {
            return "not up to expectations";
        }
    }
}
class Viewers extends Raters {
    constructor(chnlNm, chnlRate, chnlBud, raterName) {
        super(chnlNm, chnlRate, chnlBud, raterName);
    }
    details() {
        console.log("Viewers are viewing our cartoons..."); //method overriding
    }
    displayDetailsOfViewers(chnlNm, chnlRate, chnlBud) {
        if (chnlBud) {
            console.log(`we are watching channel ${chnlNm} with rating ${chnlRate} and budget ${chnlBud}`);
        }
        else {
            console.log(`we are watching channel ${chnlNm} with rating ${chnlRate}`);
        }
    }
}
console.log("CHANNELS:");
const r = new Raters("pogo", 4.5, 6900000, "sneha");
r.details();
console.log(r.popular(4.5));
r.channelReviews();
const v = new Viewers("HUNGAMA", 4.9, 90890000, "preeti");
v.details();
v.displayDetailsOfViewers("cartoonNetworks", 4.1);
v.displayDetailsOfViewers("nick", 3.9, 8990978);
//const c=new CartoonChannel("Pogo",4.4,290000000);   //we cant create instance of an abstract class
