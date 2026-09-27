import{test,expect} from "@playwright/test";

interface Person{

    firstName:string;
    lastName:string;
    age:number;
    displayInfo():void;
}

interface Emp{

    name:string;
    id:number;
    dep:string;

    empDetails():string;
}

test("PersonDetails", async({page})=>{

    let p1:Person={

        firstName:"John",
        lastName:"Pop",
        age:30,

        displayInfo():void{

            console.log("display info of person");
            console.log(this.firstName);
            console.log(this.lastName);
            console.log(this.age);
        }
    }

    p1.displayInfo();

    console.log("=====================");
    console.log(p1.firstName)


    let E1:Emp={

        name:"Komal",
        id:11,
        dep:"QA",

        empDetails():string{
            return `${this.name} ${this.id} ${this.dep}`;
        }
    }


    console.log("Emp details ==========")
    console.log(E1.name);
    console.log(E1.id);
    console.log(E1.dep);
    console.log("Emp details ==========")

    console.log(E1.empDetails())
})