// Infer types => Variable infer the type from the value assigned

let myName = 'Akhil';   // myName:string
let age = 23;  //age:number
let livingStatus = true;  //livingStatus:boolean
let languagesKnow = ["malayamalm","english"]; //languagesKnow:string[]
let date = "11-01-2002";   //date:string
let arrays = [1,2,3,4,5,6,7]; //arrays:number[]

//Defining type => Explicite Types

let Authour:string = "Jackson";
let book:string[] = ["book1","book2","book2"];
let hisAge:number = 45;
let active:boolean = true;
let authorDetails:{name:string;age:number;address:string; dob?:string} = {
    name:"Hacker Rank",    //cntrl+space bar give suggestion
    age:45,
    address:"House name",
    dob:"11-01-2001"
}

// authorDetails. => we get suggestion for name, age, address in the object;

// Interface => avoid inline type difining explicitly

interface details{
    name:string;
    age:number;
    address:string;
    dob?:string;
    getName:()=>void;
}

let userDetails:details = {
    address:"my hose",
    age: 34,
    name:"my Name",
    getName() {
        console.log(this.name);
        
    },
}
userDetails.getName()

//Type in javascript

type detailstype = {
    name:string;
    age:number;
    address:string;
    dob?:string;
    getName:()=>void;
}

let myDetails:detailstype = {
    address:"my hose",
    age: 34,
    name:"my Name is Akhil",
    getName() {
        console.log(this.name);
        
    },
}
myDetails.getName()

// Union optional operator => | => pipe

let myage:number|string = 78
myage = "hello"


let array4:(string|number|boolean)[]=[1,3,"34","sdd",true];

//Optional 

type detailstype1 = {
    name:string;
    age:number;
    address:string;
    dob?:string; // here dob is optional. when an object define using this type the 'dob' attribure is optional
    getName:()=>void;
}

//Functions in typescript
let userDetail1:detailstype1 = {
    name:"Akhil",
    age:34,
    address:"sjdhfklj",
    getName() {
        console.log(this.name);
        
    },
}

function getUserDetails(userDetail1:detailstype1):string{ //give type of the parameter and return type in function.
    return userDetail1.address
}

const result = getUserDetails(userDetail1);
// result.   give all suggestin for teh return type => here return is string so it give all string methodes;


//Named types or custom types => we can

type stausType = "pending"|"completed"|"failed";

// let currentStatus:stausType = ""    //we get suggestion of created typed when we creaete the double quote
let currentStatus:stausType = "completed";

type ToggleSwitches = "on"|"off";
let toggleSwitch:ToggleSwitches = "off"