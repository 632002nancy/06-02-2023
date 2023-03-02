//we cant make object of abstract class
abstract class A {
    cameraMode: string;
    burst: number;

    abstract getsepia(): void            // to make methods compulsory in the class that inherits it we declare them as abstract
    getReels(): void {
        console.log("reels ");
    }
}

class B extends A {            //here we need to define abstract method 
    // constructor(cameraMode:string,burst:number){           //but need not to define properties
    //     super(cameraMode,burst)
    // }
    getsepia(): void {
        console.log("got sepia!!!");
    }
}

const obj=new B();
obj.getReels();
obj.getsepia();
export{}