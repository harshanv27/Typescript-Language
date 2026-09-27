import{test,expect} from "@playwright/test";

test("test6", async({page})=>{

    // swap two numbers 

    let a=10;
    let b=20;
    let c= 30;

    a= a+b // 30
    b= a-b // 10 
    a= a-b // 20

    console.log(a);  // 20
    console.log(b); // 10 

    console.log("----------------");

    if(a>b){

        console.log(a, " is the largest number");
    }else{

        console.log(b, "is the largest number");
    }

    console.log("----------------");

    // find the largest number 

    if(a>b && a>c){

        console.log(a, "is a greater number");
    }else if(b>a && b>c ){

        console.log(b, "is a greater number");
    }else{

        console.log(c, " is a greater number");
    }
        console.log("----------------");


    // Find even number and print 
    let num:number[]=[1,2,3,4,5,6,7,8,9,10];  // array of num

    for(let i=0; i<num.length;i++){

        if(num[i]%2==0){

            console.log(num[i]);
        }
    }
        console.log("----------------");


    // find an odd number and print 

    let ele: number[]= [11,12,13,14,15,16,17,18,19,20];
    for (let i=0; i<ele.length; i++){

        if(ele[i]%2==1){
            console.log(ele[i]);
        }
    }

        console.log("----------------");

    // double the number 

    let dou: number[] = [2,4,6,8,10];

    for(let i=0; i<dou.length;i++){

      let resultDouble: number = dou[i]*2;
      console.log(resultDouble);
    }

 // Find whether a number is positive, negative, or zero
    console.log("Find whether a number is positive, negative, or zero");

    let xx= -100;

    if(xx>0){
        console.log(xx,"is a positive number");
    }else if(xx<0){
        console.log(xx, "is negative number");
    }else{
        console.log(xx, " is a zero number");
    }
// Find the sum of the digit 

let sum=0;
let digit: number[]= [1,2,3,4,5,6,7,8,9,10]

for(let i=0; i<digit.length; i++){

    sum= sum+digit[i];
}

console.log("sum should be:", sum);

// count the number of digit 
console.log("count the number of digit ");

let num11: number= 12345;
let count: number=0;

while(num11>0){ //12345>0,  1234>0,  123>0 12>0 1>0
    num11=Math.floor(num11/10);  // 1234 123 12 1 1/10==0.1 (0)
    count++;  // 1 2 3 4 5
}
console.log("Number of digits:", count);

// 

console.log("Reverse a number");

let rev: number= 12345;  // 1234, 123 12 1
let reverse:number=0;   // 5 54 543 5432

while(rev>0){ //12345>0, 1234>0, 123>0 12>0 1>0
let digit: number= rev%10;  // 5 4  3 2 1
reverse= reverse*10+digit; // 5 54 543 5432 54321
rev= Math.floor(rev/10);   // Math.floor() removes the decimal part:1234 123 12 1 0

}

console.log(reverse);

console.log("Check whether a number is palindrome");

let pallindrom:number=121;
let outputPallindrom:number=0;

while(pallindrom>0){  //121>0,  12>0, 

    let digit: number= pallindrom%10;// 12 ,1 0
    outputPallindrom= outputPallindrom*10+digit;// 12 121
    pallindrom= Math.floor(pallindrom/10);
}

console.log(outputPallindrom);

console.log("Print multiplication table");

let input= 5;
let multiplyNumber: number[]= [1,2,3,4,5,6,7,8,9,10];

for (let i=0; i<multiplyNumber.length;i++){

    let tableofFive= input*multiplyNumber[i];
    console.log("table of 5 is:", tableofFive);
    }


    console.log("Browser selection");

    let browser: string="chrome";

    if(browser==="chrome"){
        console.log(" the browser is chrome");
    }else if(browser==="firefox"){

        console.log("the browser is firefox");
    }else{

        console.log("the browser is Edge");
    }
// switch case statement 

console.log("switch case statement");


let day=4;

switch(day){
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wedenesday"); break;
    case 4: console.log("Thrusday");break;
    case 5: console.log("friday"); break;
    case 6: console.log("saturday"); break;
    case 7: console.log("sunday"); break;
    default: console.log("the day is not valid");
}


console.log("while loop");
let ii= 1;

while(ii<=5){

    console.log(ii);  // 1 2 3 4 5
    ii++;

}


console.log("Value Increment");

console.log(ii);

console.log("print odd numbers from 1 to 10");

let odd: number =1;

while(odd<=10){

    console.log(odd);

    odd+=2;

}
console.log("print revers number from 10, 9, 8, 7, 6, 5, 4, 3, 2, 1");

let revNumber: number = 10;

while(revNumber>=0){
console.log(revNumber);
revNumber--;
}

console.log("Infinite loop");

while(true){

    console.log(revNumber);
}





})