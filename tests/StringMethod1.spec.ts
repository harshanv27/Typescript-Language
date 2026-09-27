import{test,expect} from "@playwright/test";

test("Test12",async({page})=>{


    let str1="Harsha";
    let str2='Garaye';
    let str3=`My name is Harsha Garaye`;

    console.log(str1);
    console.log(str2);
    console.log(str3);

    let str= "Hello, Typescript!";

    // length 
    console.log(str.length);

    // toUppercase and toLowercase 

    console.log(str.toUpperCase());
    console.log(str.toLowerCase());

    //charAt(index), indexof(string);

    console.log(str.charAt(5));
    console.log(str.indexOf("Type"));

// substring()

console.log(str.substring(2,7));

// includes()

console.log(str.includes("Type"));
console.log(str.includes("abc"));
console.log(str.includes("script"));

// stratwith and Endwith 

console.log(str.startsWith("Hello"));
console.log(str.startsWith("H"));
console.log(str.startsWith("hhaha"));
console.log(str.endsWith("!"));
console.log(str.endsWith("hshshs"));

// replace()

console.log(str.replace("Hello", "Welcome"));


// split

let splitstring= str.split(",");
console.log(splitstring);
console.log(splitstring[0]);
console.log(splitstring[1]);

// trim()

let mystring = "       welcome      ";

console.log(mystring.trim());
console.log(mystring.trimStart());
console.log(mystring.trimEnd());

// concat()

console.log(str.concat(mystring.trim()));
console.log(str.concat("Newvision"));
console.log(str1.concat(str2));
console.log(str1.concat(str2).concat(str3));
console.log(str+str1+str2);

// string immutability -- original string cannot change after applying all the methods 
let stringimmutable = "Javascript";
let concatString= stringimmutable.concat(" ").concat("Typescript");

console.log(stringimmutable);
console.log(concatString);


let multiline= `     typescript 
                                              Javascript`;
                                              console.log(multiline);
                                              
});