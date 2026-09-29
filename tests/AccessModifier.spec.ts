//Access modifier – decides the scope of properties and scope of method.
//  How we can used and where. 
//Public, Protected and Private
//By default Public is the access modifier. 
// If you are not specifying any access modifier then Public access modifier 
// we are using by default. 
import{test,expect} from "@playwright/test";

class Person{

    public name:string // Public property - accessible everywhere // same class , child class and outside of the class
    protected age:number // Protected property - accessible within class and its sub-class
    private ssn:number; // accessible only within this class // accesible inside the same class

    constructor(name:string,age:number,ssn:number){

        this.name=name;
        this.age=age;
        this.ssn=ssn;
    }

    personDetails(){

        return `${this.name} ${this.age} ${this.ssn}`;
    }
}

class Employee extends Person{

    private employeeId:number;

    constructor(name:string,age:number,ssn:number, employeeId:number){

        super(name,age,ssn);
        this.employeeId=employeeId;
    }

    showEmployeeDetails(){

        console.log(this.name); // accessible everywhere - public 
        console.log(this.age); // accessible within class and its sub-class 
       // console.log(this.ssn) // private property accessible within class only 
       console.log(this.employeeId)
    }
}

test("AccessModifier", async({page})=>{

    let Emp1= new Employee("Komal",29,828282828,101);
    Emp1.showEmployeeDetails();
    console.log(Emp1.name);
 // console.log(Emp1.age);  // property age is accessible within class and its sub-class
// console.log(Emp1.ssn)  // ssn is private and accessible within class only Person

 let person1:Person= new Employee("Puja", 12, 111111,102);
 console.log(person1.name);
// console.log(person1.age);
 //console.log(person1.ssn);

 let p2= new Person("PPPP", 13, 38383883);
 console.log(p2.name);
 //console.log(p2.age); // property age is protected and accessible within class and its sub-class
 //console.log(p2.ssn); // ssn is private and accessible within class only Person

 })