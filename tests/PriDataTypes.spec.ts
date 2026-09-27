import{test,expect} from "@playwright/test";

// Primitive data types
// Number
// String
// boolean
// null
// undefined
// union
// any
// void

test("test3", async({page})=>{
let num:number=3000
let age= 30;
let floatNumber= 828828.77;
let largeNumber= 272772727;
console.log(num);
console.log(age);
console.log(floatNumber);
console.log(largeNumber);

const name="harsha";
const fName= 'Komal';
const lName=`I am Harsha Garaye`;

console.log(name);
console.log(lName);
console.log(fName);


let isTest=true;
let isFailed=false;

console.log(isTest)
console.log(isFailed)

let XNull:null=null
console.log(XNull)

let yUndefined:undefined=undefined;
console.log(yUndefined)

let price:number;
// console.log(price); // undefined
price=600.99;
console.log(price);


let officeName:any= "NewVision"
console.log(officeName);
console.log(typeof officeName);

let id: number | string | boolean;
id = 30;
console.log(id)

id= "Harsha";
console.log(id)

id = true;
console.log(id)

function sum():void{

    console.log(100+200);

}
sum();

function sub():number{

    return 300-10;
}

console.log(sub());

function show():void{
    console.log("Welcome");
}

show();


})

