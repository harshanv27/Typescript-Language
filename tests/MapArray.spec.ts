import {test,expect} from "@playwright/test";

test("MapArray", async({page})=>{

let num: number[]=[2,3,4,5,6,7];
 
console.log(num);

 let sqNum= num.map(function(ele){

    return ele*ele;
 })

 console.log(sqNum);

 let sqNum1= num.map(function(ele){

    return ele*ele;
 })

  console.log(sqNum1);

  let addNumber= num.map((ele)=>{

    return ele+ele;

  })

  console.log(addNumber);

  let mul= num.map(function(ele){

    return ele*10;
  })
console.log(mul);


// filter - return array 

let number:number[]=[1,2,3,4,5,6,7,8,9,10];

let filternum= number.filter(function(ele){

   return (ele%2==0);

});

console.log(filternum);

let Mul5= number.filter(function(ele){

    return (ele%5==0);
})
console.log(Mul5);

let total:number=0;

let addReduce= number.reduce((total,element):number=>{

    return (total+element);
})

console.log(addReduce);


}); 