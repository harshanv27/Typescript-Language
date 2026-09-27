import{test,expect} from "@playwright/test";

test("test3", async({page})=>{

    let age=30;
    console.log(typeof age);

    let name="Harsha";
    console.log(typeof name);

    const fName= "Mini"
    console.log(typeof fName)

    let data:number =80;
    console.log(data)
   //data= "Ten"// error is showing 

   let result = 5 +"3";
   console.log(result);

   let data1: number=400;
   let data2: string=" Harsha";
   console.log(data1+data2);



})