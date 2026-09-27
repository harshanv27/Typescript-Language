import{test,expect} from "@playwright/test";

test("Test7", async({page})=>{

    // break conditions 

    for(let i=1;i<=10; i++){

        if(i==7){

            break;
        }
        console.log(i);
    }

    // continue 

    console.log("continue");

    for(let j=1; j<=20; j++){

        if(j==15 || j==3 || j==2){

            continue;
        }
        console.log(j);
    }

    function addNumber(x:number,y:number):number{
        return x+y;
    }

    console.log(addNumber(2,3));

    // Named Function with rest parameter

    function restPara(...nums:number[]){

        let i;
        let sum = 0;

        for(let i=0; i<nums.length; i++){
            sum = sum +  nums[i];    
        }
        console.log("sum of numbers:", sum);
    }

   console.log(restPara(10,20,30,40,50,60,70));
   
   console.log(restPara(10,20,30));

   console.log(restPara(60,70));

   // Named function with optional Parameter

   console.log("Named function with optional Parameter");

   function optionalPara(a:number, b:number, c?:number){

    if(c==undefined){
        return a+b;
    }
    else{
        return a+b+c;
    }
   }

   function displayDetails(ids: number, fName:string, emailId?:string){

    if(emailId !=undefined){
    console.log(ids);
    console.log(fName);
    console.log(emailId);
   }else{
    console.log(ids);
    console.log(fName);
   }
 }
console.log(displayDetails(10,"Mini"));
console.log(displayDetails(10,"Mini", 'mini@gmail.com'));
  
// Named function with rest parameter 

console.log("Named function with rest parameter");


function restPar(price: number, rate=0.5):void{

    let discount: number = price*rate;
    console.log(discount);
    
}
console.log(restPar(100));
console.log(restPar(10000,0.3));
console.log(restPar(2000,0.9));


let multiply = function(x:number,y:number){

    return x*y;
}

console.log(multiply(100,200));


let greet= ():void=>{
    console.log("welcome to the TS");
}
greet();

 console.log("&&&&&&&&&&&&&&&&");

// When we create an optional parameter then threre is 
// one restriction that if first parameter is optional, then following
//  parameter should also be optional. You can see from below image that if name
//  is optional then mailId is showing error that 
// means we need to optional mailId also. 

let message=(x:number,y:number,z?:number)=>{

    if(z!= undefined){

        return x*y*z;
    }else{

        return x*y;
    }
}

console.log(message(101,201));
console.log(message(99,88,77));

});