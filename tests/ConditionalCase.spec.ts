import{test,expect} from "@playwright/test";

test("test5", async({page})=>{

    let a:number=10;
    let b:number=20;

    console.log(a>b);
    console.log(a<b);
    console.log(a>=b);
    console.log(b>=a);
    console.log(a*b);
    console.log(a%b);
    console.log(a/b);
    console.log(5*2);

    // Assignment operator

    let x: number= 40;
    let y: number = 50;
    console.log(x+=y);
    console.log(x-=y);
    console.log(x*=y);
    console.log(x%=y);
    console.log(x/=y);

    // Assignment 

    console.log("=================");

    let c= 20;
    let d= 20;

    console.log(c+=d);  // 40
    console.log(c-=d);  //20
    console.log(c*=d);  //400
    console.log(c%=d);  // 0
    console.log(c/=d);  //0
    console.log(c==d);  // f
    console.log(c!=d);  // t
    console.log(c>d);  // f
    console.log(c<d); // t


    // Difference between equality and strict equality 

        console.log("++++++++++++++++");

    let num1: any=200;
    let num3: any= "200";
    console.log(num1==num3);  //== equlaity it will check the value only 
    console.log(num1===num3);  // ==== it check data type and value both 

    // Logical Operators 

    console.log("Logical Operators")

    let b1: boolean= true;
    let b2: boolean= false;

    console.log(b1&&b2);
    console.log(b1||b2);
    console.log(!b1);
    console.log(!b2);
      console.log("Logical Operators")
    console.log(20>10 && 30>10);
    console.log(10>20 || 5>2);
    console.log(10>=20);

// Increment and decrement operator 

let x1= 10;
x1++; 
console.log(x1); //11

let x2= 20;
x2++;
console.log(x2); //21 

x1= 500
x1--;  // 499
console.log(x1) // 499

x2= 50; 
x2--; // 49
console.log(x2); // 49 

// 
console.log("&&&&&&&&&&&&&&&&&&");

let age: number=30;
console.log("age:", age);
let result: number= age++;
console.log(result);
console.log("age:", age);


console.log("&&&&&&&&&&&&&&&&&&");

let xyz= 10;
console.log(xyz);
let result1: number = xyz--;
console.log(result1);
console.log(xyz);

console.log("&&&&&&&&&&&&&&&&&&");

let abc= 20;
console.log(abc); // 20
let result2: number = --abc; //19
console.log(result2)  // 19
console.log(abc); //19

let def=10;
console.log(def); //10
let result3: number= ++def;  // 11
console.log(result3); // 11
console.log(def);  // 11

// ternary operator 

console.log("ternary operator");


let aa: number=100;
let bb: number =200;

let res: number =(aa>bb)? aa:bb;

console.log(res)

let personAge: number = 40;

let res1: string= (personAge>18)? "Adult": "Minor";
console.log(res1);


})
