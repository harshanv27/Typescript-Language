import{test,expect} from "@playwright/test";

test("Test10", async({page})=>{

    let numbers: number[]=[1,2,3,4,5,6,7,8,9,10];
    let fruites:string[]=["kiwi","banana","pear","mango"];
    let names:string[]=["pop","top","nop","soch"];

    console.log("length===================");

    console.log(numbers.length);
    console.log(fruites.length);

    console.log("push command ==================");

    //push()  // add single/ multiple elements to the end of an array

    numbers.push(11,12);
    console.log(numbers);

    //pop  // remove last element of an array  

    numbers.pop();
    console.log(numbers);

    // shift  -- removes the first element of an array 

    numbers.shift()
    console.log(numbers);

    // Unshift -- add single/multiple elements at the begining of an array

    numbers.unshift(101,102);
    console.log(numbers);


// concat  - this method combines two or more array of the same data type. 
let combineArray:number[]=numbers.concat([201,202,203]);
console.log(combineArray);

let combineStringArray:string[]= fruites.concat(names);
console.log(combineStringArray);

// slice - extracts the section of an array 

console.log(numbers);
console.log(fruites);

let sliceArray:number[]= numbers.slice(1,4);
console.log(sliceArray);

let sliceArray1:number[]= numbers.slice(3,8);
console.log(sliceArray1);


// splice();
numbers.splice(2,5);
console.log(numbers);

fruites.push("megrante","Orange");
console.log(fruites);

console.log(fruites.slice(2,4));
console.log(fruites.splice(1,3));
console.log(fruites);

fruites.splice(1,0,"Tomato","Potato");
console.log(fruites);

fruites.splice(1,2,"kala","Pale","Tale");
console.log(fruites);

// indexof() - find the index of an element 

let kiwiIndex=fruites.indexOf("kiwi");
console.log(kiwiIndex);// 

let orangIndex=fruites.indexOf("Orange");
console.log(orangIndex);

let megranteIndex= fruites.indexOf("megrante");
console.log(megranteIndex);

let taleIndex= fruites.indexOf("Tale",1);
console.log(taleIndex);

// includes == check wheather the element is present on the array or not True/False 

let isKiwi= fruites.includes("kiwi");
console.log(isKiwi);

let isOrange= fruites.includes("Orange");
console.log(isOrange);

let isApple= fruites.includes("Apple");
console.log(isApple);

// tostring()== converts array to the string 

console.log(numbers);
let numberString = numbers.toString();
console.log(numberString);

let welcomeArray:string[]=['w','e','l','c','o','m','e'];
let welcomeString = welcomeArray.toString();
console.log(welcomeString); // w

console.log(fruites);

let fruitesStringconversion= fruites.toString();
console.log(fruitesStringconversion);

console.log(fruites);

for(let i in fruites){

    console.log(fruites[i]);
}

fruites.forEach(function(element,index){

console.log(`${index}`, `${element}`);

})

console.log("=======================");

numbers.forEach((num,index)=>{

    console.log(index,num);

})
})