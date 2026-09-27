import{test,expect} from "@playwright/test";

test("Test9", async({page})=>{

    // using lateral 

    let num:number[]=[];

    num[0]=10;
    num[1]=20;
    num[2]=25;
    num[3]=30;
    num[4]=40;
    num[5]=50;
    num[6]=60;
    console.log(num);

    let names:string[]=["john", "Harry","Poter", "Mommy", "Baby"]
    console.log(names);

    let empIds:Array<number>=[11,12,13,14,15];
    let empNames:Array<string>=['John', 'peter', 'Kamala'];
    let misData:Array<string|number>=[12,'pop',102,'John'];

    console.log(empIds);
    console.log(empNames);
    console.log(misData);
    console.log(empIds.length);

    for(let i=0; i<empIds.length;i++){

        console.log(empIds[i]);
    }

    for(let i in empNames){
        console.log(empNames[i]);
    }

    for(let value of misData){

        console.log(value);
    }

    });




