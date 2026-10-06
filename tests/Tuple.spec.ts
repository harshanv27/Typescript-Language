import{test,expect} from "@playwright/test";

// Touple means it is a fixed data type and fixed in length.
// fixed array is called as Touple

test("touple1", async({page})=>{

//1

    let data:[string,number]=['Pet',101];

    console.log(data[0]);
    console.log(data[1]);
    console.log(data);

//2    

    let person:[string,boolean,number,null,undefined,string]=["PET",true,103,null,undefined,"set"];

    console.log(person);
    console.log(person[0]);
    console.log(person[5]);

    // for loop 

    for(let i=0; i<person.length;i++){
        console.log(person[i]);
    }

    // for in loop 

    for(let i in person){

        console.log(person[i]);
    }

    // for off loop 

    for(let input of person){

        console.log(input);
    }

    // 2
    let MixedData:[number,string,number,string,number,string]=[10,'SET',11,'TET',12,'MET'];
    let num:number[]=[];
    for(let i=0; i<MixedData.length; i++){

        if(typeof MixedData[i]==='number'){

          num.push(MixedData[i] + 1);
        }
        
    }
    console.log(num);
})