import {test,expect} from "@playwright/test";

class coverload{


    constructor(a:number, b:number);

    constructor(a:number, b:number, c:number)

    constructor();

    constructor(a?:number, b?:number, c?:number){

        if(a!=undefined && b!=undefined && c!=undefined){

            console.log("sum of three numbers:", a+b+c);

        }else if(a!=undefined && b!=undefined)
            {

            console.log("sum of two numbers:", a+b);
        }else{

            console.log("default constructor called............");
        }
    }
}

test("caloverload", async({page})=>{

    let cal1= new coverload(10,20,30);  // 60

console.log("=================");

    let cal2= new coverload(1,2);  // 3

    console.log("=================");

    let cal3= new coverload();  

})