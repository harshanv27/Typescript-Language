import { test, expect } from '@playwright/test';

test("variable", async({page})=>{

    var age=30;
    console.log(age);
    age=45;
    console.log(age);

    if(age===30){
        console.log("age is 30 year old");
        var ageFriend= 45
        console.log(ageFriend);

    }else{
        console.log("age is not 30 year old");
    }

})

test("Function scope", async({page})=>{
if(true){
    var age11= 45;
    console.log(age11)
}
console.log("message is 45 year old");
});


function varScope(){
    var age= 30; 
    if(true){
        console.log(age);
    }
}

varScope();

function blockscope(){

    if(true){

        let greet= "I am Harsha Garaye";
        const name="Harsha";
        console.log(greet);
        console.log(name);
    }
}

blockscope();

    
