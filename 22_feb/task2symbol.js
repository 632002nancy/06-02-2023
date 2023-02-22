// --------------------------acess modifiers species how variables and function wll be accessed to the outer world---------------------------- 
class Equipments{
    bottlecolor="black";       //public member 
    #waterlevel = 0;          //private member
    _bottletype = "plastic";          //protected member

    getvalue(){
        console.log(`The waterlevel of the bottle is ${this.#waterlevel}ml`);   //we can use private member inside the class
    }

    setvalue(value){
          this.#waterlevel=value;
    }

    _bottype(){
        console.log("protected method inside Equipment class!");
    }

}

let newbottle1 = new Equipments();
console.log(`The color of the bottle is ${newbottle1.bottlecolor}`);   //since bottlecolor is public member we can acess it from outside of the class
//console.log(`The color of the bottle is ${newbottle1.#waterlevel}`);   //since waterlevel is private member  so we can't acess it from outside of the class
newbottle1.getvalue();           //but we can access the public method of the class where its private member is used
newbottle1.setvalue(100); 
newbottle1.getvalue(); 

class Cello extends Equipments{
    cellointro(){
        console.log("I m method inside cello class which inherits Equipment class!");
    }

}

let cell=new Cello();
console.log(cell._bottletype);      //here protected variable of equipment class are inherited as public in cello
cell._bottype();
cell.cellointro();