import{test,expect} from "@playwright/test";

class Car{

    name:string;
    color:string;
    model:string;

    constructor(name:string,color:string,model:string){

        this.name=name;
        this.color=color;
        this.model=model;
    }

    start(){

        console.log("Car started");
    }

    stop(){

      console.log("Car stop");

    }

    displayInformation():string{

        return `Name: ${this.name} color: ${this.color} Model: ${this.model}`;
    }

}

class Honda extends Car{
    year:number;

    constructor(name:string,color:string,model:string, year:number){
        super(name,color,model);
        this.year=year;
    }

    start(){   // overide the method in the child class 
        console.log("Honda started");
    }

    displayInfoYear(){
        console.log("Honds started in the year:", this.year);
    }

    yom():string{

        return `${this.name} ${this.year} ${this.model}`;
    }
}

test("HondaDetails", async({page})=>{

    let h1= new Honda("HondaName", "Red", "HSHHSHS-JSJ", 2028);

    h1.start();
    h1.displayInfoYear();
   console.log(h1.yom());

 console.log(h1.displayInformation());
 h1.stop()

console.log("======parent class variable is holding child class object======");


 // parent class variable is holding child class object.
 let c1:Car= new Honda("hondaB","White", "899-jjjj", 2010);
c1.start();  // child implementation exist here 
c1.stop();
console.log(c1.displayInformation());
//c1.displayInfoYear();
//console.log(c1.yom());

})