import{test,expect} from "@playwright/test";

interface Animal{

    name:string;
}

interface Dog extends Animal{

    color:string;

    displayColur():void;
}


test("DogDetails", async({page})=>{

    let d1:Dog={
    name:"Poppy",
    color:"White",

    displayColur(){

        console.log(" The color of the dog is black ");
    }
}

console.log(d1.name, d1.color);
d1.displayColur();

})
