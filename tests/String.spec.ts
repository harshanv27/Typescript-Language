import {test,expect} from "@playwright/test";

test("String Method", async({page})=>{

    let str1:string='Hello';
    let str2:string="TypeScript";
    let str3:string=`I am Harsha Garaye learni ${str2}`;

    console.log(str1);
    console.log(str2);
    console.log(str3);

    let stringValue:string="Hello Typescript";

    console.log(stringValue);

 //   length method 

 console.log((stringValue.length));

 let upperCase:string= stringValue.toUpperCase();
 console.log(upperCase);

 let lowerCase:string= stringValue.toLowerCase();
 console.log(lowerCase);

 //chartAt
console.log(stringValue.charAt(5));

// Indexof
console.log(stringValue.indexOf("Script"));

//

let subString:string=stringValue.substring(1,6);
console.log(subString);

// includes()

console.log(stringValue.includes("abc"));
console.log(stringValue.includes("type"));
console.log(stringValue.includes("hello"));

//startWith() and Endwith()

console.log(stringValue.startsWith("H"));
console.log(stringValue.startsWith("Hello"));
console.log(stringValue.endsWith("script"));
console.log(stringValue.endsWith("hhhh"));

//replace()

let replaceString:string= stringValue.replace("Hello", "Welcome");
console.log(replaceString);

// split();

let splitString:string[]= stringValue.split(" ");
console.log(splitString);

console.log(splitString[0]);
console.log(splitString[1]);

// concat()

let concatstring:string=str1.concat(str2).concat(str3);
console.log(concatstring);
console.log("Welcome".concat(str3));
console.log(str1+str2+str3);

// trim(), trimstart(), trimend()

let trimString: string= "      welcome to tyescript         ";

console.log(trimString)
console.log(trimString.trim);
console.log(trimString.trimStart);
console.log(trimString.trimEnd);

let backstring:string=  `                 welcome to 
                                                                  tyrkjkkkk`;
console.log(backstring);


                                                           

})