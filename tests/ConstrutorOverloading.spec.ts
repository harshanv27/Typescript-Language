import {test,expect} from "@playwright/test";

class ConOverloading{

    constructor(); // default constructor

    constructor(a:number, b:number);  // Parameterize constructor 


    constructor(a?:number, b?:number){

          if (a !=undefined && b!= undefined) {

             console.log("sum of two number:",(a+b));

        }else{
           
            console.log("default constructor called");
        }
    }
}

test("calculator", async({page})=>{

    let c1= new ConOverloading();
    let c2= new ConOverloading(10,50);




})