import{test,expect} from "@playwright/test";

test("Test10", async({page})=>{

let num:number[]=[1,2,3,4,5];
let sqElement=num.map(function(element){

    return (element*element);

})

console.log(sqElement);
console.log(num);

let doubleEachNumber= num.map(function(ele){

    return ele*2;

})

console.log(doubleEachNumber);

// filter()

let filterEvenNumber= num.filter(function(element){

  return (element%2==0);

})
 let oddNumbers= num.filter((numbers)=>{

    return (numbers%2==1);

 })

 console.log("reduce===================");

 let sumOfNumber= num.reduce((total,element)=>{

    return (total+element);
 })

 console.log(sumOfNumber);


 })

