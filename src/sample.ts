console.log("Typescript tutorial");

let awsomeName: string = "AkhilandSha";
let num: number = 34;
let check: boolean = true;
let arr: number[] = [1, 3, 4, 5];
let arr2: string[] = ["sd", "dsf"];
let turple: string | number = "sdkj";

awsomeName = awsomeName.toLowerCase();
console.log(awsomeName);


//type annotation of objects
let obj:{id:number,name:string} = {id:4398,name:"HEllow world"}

type obj = {
  name: string;
  age: number;
  place?: string;
};

let newObj: obj= {
  name: "akhi",
  age: 33,
};

interface inter {
  name: string;
  age: number;
  place: string;
}

let anObj: inter = {
  name: "sdf",
  age: 49,
  place: "skjfd",
};

//Union => using pipe |  => Allow to add multiple type to same varable

let variable: number | string = "1233";
variable = 324;

// user defined types

let requestStatus: "pending" | "completed" | "fullfilled" = "completed";
//Typescript automatically infer the type from the value;
let notSure = 234;

//Don't use any everywher it distroy the power of typescript

let random;
random = 342;
random = "sdfs";
random = true;

let notRandom: string = "Hello world";
notRandom.toLowerCase(); // give suggestions


const books = ['1930','hello','hii'];

let foundBook: string | undefined;

for(let book of books){
  if(book == 'hello'){
    foundBook = book;
    break;
  }
}

foundBook?.length // optional

//array
let array:(string|number)[]=[2,'errfe','er3'];

//type annotaion for object
let car:{brand:string; readonly year:number} = {
  brand:'toyota',
  year:3453
}
car.brand = 'Benz';
//car.color = 'orange';


let car1:typeof car = {
  brand:"Toyota",
  year:3455
}
car1.brand = "newcar";
// car1.year = 3455 //error beacaus read only


//Type annotation for array of objects
let items: {title:string;cost:number}[]=[{title:"skjhdf",cost:34},{title:'hello',cost:234}]

//function 
function sayHi(name:string):void {
  console.log(`Hello there ${name.toUpperCase()}`);
}

sayHi('john');
// sayHi(34) //error

function calculateDiscount(price:number,discount:number):number{
  return price-(price*(discount/100))
}

let discount = calculateDiscount(100,5);
console.log(discount.toPrecision());


function sum(message:string, ...numbers:number[]):string{
  let total = numbers.reduce((curr,acc)=>curr+acc,0);
  return `${message}${total}`;
}

let res = sum('Total number is ',1,2,3,4,5,6,7,8,9,10);
console.log(res);
