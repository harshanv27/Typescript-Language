import{test,expect} from "@playwright/test";

test("Test8",async({page})=>{

    // Different Parameter Types

    function getInfo(id:number):string;
    function getInfo(name:string):string;

    function getInfo(param: number|string):string {

         if(typeof param==="number"){
          return `User ID is ${param}`;
         }else{
            return `User ID is ${param}`;
         }
    }
console.log(getInfo(100));
console.log(getInfo("Harsha"));


function addNumber(a:number, b:number, c:number):number;
function addNumber(a:number, b:number):number;

function addNumber(a:number,b:number,c?:number):number{

    if(c==undefined){
        return a+b;
    }else{
        return a+b+c;
    }
}
console.log(addNumber(10,20));
console.log(addNumber(10,20,30));

function processInput(input:string):string;
function processInput(input:number):number;

function processInput(input: string|number):string|number{

    if(typeof input==="string"){

        return input.toUpperCase();
    }else{

        return input*5;
    }
}

console.log(processInput(10));
console.log(processInput("harsha"));




});