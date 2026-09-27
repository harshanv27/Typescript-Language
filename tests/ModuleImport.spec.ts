import{test,expect} from "@playwright/test";
import { appName,Formatter,add } from "./Module";

test("ModuleFileUsed", async({page})=>{

    console.log(appName);
    console.log(add(12,15));
    console.log(Formatter.toUpper("welcome"));



})