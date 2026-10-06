
import{test,expect} from "@playwright/test";


test('Break and Continue', async({page})=>{

    // break conditions 

    for(let i=1;i<=10; i++){

        if(i==7){

            break;
        }
        console.log(i);
    }

    // continue 

    console.log("continue");

    for(let j=1; j<=20; j++){

        if(j==15 || j==3 || j==2){

            continue;
        }
        console.log(j);
    }


})


 