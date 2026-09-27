import{test,expect} from "@playwright/test";

test("Array", async({page})=>{

    //  function takes and araray and return an array

    function capitalizeWords(arr:string[]): string[]{

        let result:string[]=[];
         for(let i=0; i<arr.length;i++){

            result[i]=arr[i].toUpperCase();
         }
         return result;

    }

    let words:string[]=['pet','set','date','tet'];
   console.log(capitalizeWords(words));

   
   function addNumberPlusOne(num:number[]):number[]{

      let add:number[]=[];

    for(let i=0;i<num.length;i++){
      
        add[i]=num[i]+1;
    }
    return add;
   }

   let num:number[]=[1,2,3,4,5,6,7,8,9,10];
   console.log(addNumberPlusOne(num))

        
})