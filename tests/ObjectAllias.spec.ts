import {test,expect} from "@playwright/test";

test("alliastest1", async({page})=>{

    type student={

        name:string,
        class:string,
        age:number,
        dep:string,
        getInfo: ()=> string,
    }
let stu1={
    name:"Sonika",
    class:"A",
    age: 12,
    dep:"Electrical",
    getInfo: function(){

        return this.name;

    }
}

let stu2={

     name:"Sonika",
    class:"A",
    age: 12,
    dep:"Electrical",
    getInfo: function(){

        return this.age;

    }
}

let stu3={

    name: "komal",
    age: 28,
    dep:"Ar",

    getInfo:function(){

        return this.dep;
    }
}

console.log(stu1.getInfo());
console.log(stu2.name);
console.log(stu3.dep);
console.log(stu3.getInfo());
console.log(stu2.getInfo());

})