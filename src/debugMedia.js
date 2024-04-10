// Infer types => Variable infer the type from the value assigned
var myName = 'Akhil'; // myName:string
var age = 23; //age:number
var livingStatus = true; //livingStatus:boolean
var languagesKnow = ["malayamalm", "english"]; //languagesKnow:string[]
var date = "11-01-2002"; //date:string
var arrays = [1, 2, 3, 4, 5, 6, 7]; //arrays:number[]
//Defining type => Explicite Types
var Authour = "Jackson";
var book = ["book1", "book2", "book2"];
var hisAge = 45;
var active = true;
var authorDetails = {
    name: "Hacker Rank", //cntrl+space bar give suggestion
    age: 45,
    address: "House name",
    dob: "11-01-2001"
};
var userDetails = {
    address: "my hose",
    age: 34,
    name: "my Name",
    get: function () {
        console.log(this.name);
    },
};
userDetails.get();
