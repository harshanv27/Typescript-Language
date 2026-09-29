import {test,expect} from "@playwright/test";

test("swap two numbers", async({page})=>{

    let a:number=10;  // 30
    let b:number=20;  //10
    
    a= a+b;  // 30
    b= a-b;  10
    a= a-b; 20
    console.log(a, b);
})
console.log("================");

test("Two number largest", async({page})=>{

    let a:number=10;
    let b:number=20;

    if(a>b){

        console.log(a , "is the largest number");
    }else{

        console.log(b , "is the largest number");
    }
})

console.log("================");

test("Largest of 3 numbers", async({page})=>{

    let a:number=10;
    let b:number=20;
    let c:number=30;

    if(a>b && a>c){

    console.log(a , "is the largest number");

    }else if(b>a && b>c){

    console.log(b , "is the largest number");

    }else{

    console.log(c , "is the largest number");

    }
})

console.log("================");

test("smallest of three number", async({page})=>{
let a:number=10;
let b:number=20;
let c:number=30;

if(a<b && a<c){

       console.log(a, "is the smallest number");
}else if(b<a && b<c){
        console.log(b, "is the smallest number");

}else{
        console.log(c, "is the smallest number");
}
})

console.log("================");

test("Number is even or not", async({page})=>{

    let a:number=15;

    if(a%2==0){

        console.log(a, "is the even number");
    }else{

        console.log(a, "is the odd  number");
    }
}) 

console.log("================");

test("Find even number and Print from array", async({page})=>{

    let num:number[]=[1,2,3,4,5,6,7,8,10,11,12];
  
    for(let i=0; i<num.length;i++){

        if(num[i]%2==0){

            console.log("Even Number:", num[i]);  
            
        }
    }
})

test("Find odd number and Print from array", async({page})=>{

    let od:number[]=[11,12,13,14,15];
     
    for(let i=0; i<od.length; i++){

        if(od[i]%2==1){

            console.log(od[i]);
        }
    }
})


test("Double the number", async({page})=>{

    let x:number[]=[1,2,3,4,5,6,7,8,9,10];

    for(let i=0; i<x.length; i++){
        let double:number= x[i]*2;
        console.log(double);
    }
})

test("Multiplication of 5", async({page})=>{

    let num:number=5;
    for(let i=1; i<=10; i++){

        let TableOfFive:number;
        TableOfFive = num*i;
        console.log("Table of 5",TableOfFive); 
    }
})

test("Validate number is Positive, negative or zero", async({page})=>{

    let num:number=-100;

    if(num>0){

        console.log(num, "is the positive number");
    }else if(num<0){

        console.log(num, "is the negative number");
    }else{

        console.log(num, "is the zero number");


    }
})

test("Sum of the digit", async({page})=>{

    let sum:number=0;

    let num:number[]=[1,2,3,4,56,88,99];

    for(let i=0; i<num.length; i++){

        sum= sum+num[i];
    }
    console.log("sum of the array is:", sum);
})

test("Reverse a number from 10 to 1", async({page})=>{

   let i:number=10;

   for(i=10; i>=1; i--){

    console.log(i);
   }
})

test("Reverse a number", async({page})=>{

    let num:number=12345;
    let rev:number=0;  // 5

    while(num>0){  // 12345>0, 1234>0

        let digit:number= num%10; // 5 4
        rev= rev*10+digit; //54
        num=Math.floor(num/10);
    }

    console.log(rev);
})

test("pallindrom number", async({page})=>{

    let pallindrom:number=1555551;
    let outputpallindrom:number=0;

    while(pallindrom>0){

        let digit:number=pallindrom%10;
        outputpallindrom=outputpallindrom*10+digit;
        pallindrom=Math.floor(pallindrom/10);
    }
    console.log(outputpallindrom);
})

test("Count the number of digit", async({page})=>{
    let num:number=18818181;
    let count:number=0;

    while(num>0){
        num=num/10;
        count++;
    }
    console.log("The number of digit in the number is:", count);
})

test("Factorial of Number", async({page})=>{
    let num:number=10;
    let fac:number=1;

    for(let i=num; i>=1; i--){

        fac=fac*i;  
    }

    console.log(fac);
})


test("Function Factorial", async({page})=>{

    function factorial(num:number):number{
      let fac:number=1;

        for(let i=num; i>=1; i--){
            fac=fac*i;
        }
        return fac;
    }
    console.log(factorial(10));
    console.log(factorial(5));

})

test("add arary", async({page})=>{

    let num:number[]=[10,20,30,40,50,60,70];
    let sum:number=0;

    for(let i=0; i<num.length;i++){

        sum=sum+num[i];
    }
    console.log("Sum of array is:",sum);
})