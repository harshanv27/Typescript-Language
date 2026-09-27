// Method overloading and constructor Overloading 

import{test,expect} from "@playwright/test";

class calculator{

// Method Overloading 

// this are the method signature  
//Method overloading means method names are same with different parameters and data type
    add(a:number, b:number):number;
    add(a:number, b:number, c:number):number;

    add(a:number, b:number, c?:number){

        if(c===undefined){

            return a+b;
        }else{

            return a+b+c;
        }
    }
}

test("Addition of Numbers", async({page})=>{

    let c1= new calculator();

    console.log(c1.add(10,20));  // 30
   console.log(c1.add(10,20,30));  // 60

   console.log("================");

   let c2= new calculator();

   console.log(c1.add(1,4,6));  // 11
   console.log(c1.add(10,80));  // 90


})