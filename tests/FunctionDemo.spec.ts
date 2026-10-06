import{test,expect} from "@playwright/test";

test("Test7", async({page})=>{
// syntax
    
// function functionName(){   // Block of code}


1 // Named function with no parameter and no return type 

function greeting() {
    console.log("Hello TypeScript")

}

greeting();


// 2
let greet= ():void=>{
    console.log("welcome to the TS");
}
greet();

 console.log("&&&&&&&&&&&&&&&&");


2 // Named function with Parameter and Return type 
    function addNumber(x:number,y:number):number{
        return x/y;
    }

    console.log(addNumber(20,2));

3 // Named Function with rest parameter
// 1
    function restPara(...nums:number[]){

        let i;
        let sum = 0;

        for(let i=0; i<nums.length; i++){
            sum = sum +  nums[i];    
        }
        console.log("sum of numbers:", sum);
    }

   restPara(10,20,30,40,50,60,70);
   
   restPara(10,20,30);

   restPara(60,70);

//2 

     function getInfo(param: number|string):string {

         if(typeof param==="number"){
          return `User ID is ${param}`;
         }else{
            return `User ID is ${param}`;
         }
    }
console.log(getInfo(100));
console.log(getInfo("Harsha"));

// 3

function processInput(input: string|number):string|number{

    if(typeof input==="string"){

        return input.toUpperCase();
    }else{

        return input*5;
    }
}

console.log(processInput(10));
console.log(processInput("harsha"));

4 // Named function with rest parameter for any type of data storage 

function findElements(
    ...elements: (number | string)[]
): number {
    return elements.length;
}

console.log(findElements(3, "john", 2, 1, "scott")); // 5

console.log(findElements(10, 20, 30, 40, 50, 60, 70)); // 7

console.log(findElements("abc", "xyz")); // 2


5 // Named function with optional Parameter

   console.log("Named function with optional Parameter");
// 1
   function optionalPara(a:number, b:number, c?:number){

    if(c==undefined){
        return a+b;
    }
    else{
        return a+b+c;
    }
   }

   optionalPara(38,60);
   optionalPara(10,11,29);

// 2
   function displayDetails(ids: number, fName:string, emailId?:string){

    if(emailId !=undefined){
    console.log(ids);
    console.log(fName);
    console.log(emailId);
   }
   else
    {
    console.log(ids);
    console.log(fName);
   }
 }
console.log(displayDetails(10,"Tini"));
console.log(displayDetails(10,"Tini", 'tini@gmail.com'));

// When we create an optional parameter then threre is 
// one restriction that if first parameter is optional, then following
//  parameter should also be optional. You can see from below image that if name
//  is optional then mailId is showing error that 
// means we need to optional mailId also. 

// 3

let message=(x:number,y:number,z?:number)=>{

    if(z!= undefined){

        return x*y*z;
    }else{

        return x*y;
    }
}
console.log(message(101,201));
console.log(message(99,88,77));

// 4
function addingNumber(a:number,b:number,c?:number):number{

    if(c==undefined){
        return a+b;
    }else{
        return a+b+c;
    }
}
console.log(addingNumber(10,20));
console.log(addingNumber(10,20,30));
  
// Named function with Default parameter 

console.log("Named function with Default  parameter");

//1 

function restPar(price: number, rate=0.5):void{

    let discount: number = price*rate;
    console.log(discount);
    
}
console.log(restPar(100));
console.log(restPar(10000,0.3));
console.log(restPar(2000,0.9));

//2 

let multiply = function(x:number,y:number){

    return x*y;
}

console.log(multiply(100,200));





});