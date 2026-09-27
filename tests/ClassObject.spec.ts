import{test, expect} from "@playwright/test";

class student{

    ssn: number
    firstName: string;
    lastName: string;

    constructor(ssn:number, firstName:string, lastName: string){
        this.ssn=ssn;
        this.firstName=firstName;
        this.lastName=lastName;
    }

    getFullName():string{
        return `${this.firstName} ${this.lastName}`;
    }

    getSSNDetails():number{
        return this.ssn;
    }

    getFullDetails():string{
        return `SSN: ${this.ssn} FirstName: ${this.firstName} LastName: ${this.lastName}`;
    }
}

test("student1Details", async({page})=>{
let student1= new student(555667777, "komal", "nema");
console.log(student1.getFullName());
console.log(student1.getSSNDetails());
console.log(student1.getFullDetails());

});