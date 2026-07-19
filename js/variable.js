console.log("variables learning");

var a1 = 2;
var b1=3;
var name1 = "shra";
console.log(a1+b1);
console.log(typeof a1,typeof b1 , typeof name1);

const a = 5;
// a = 6; // This will  cause an error because 'a' is a constant
console.log(a);

let b=10;
{
    let b=20;
    console.log(b);
}
console.log(b);


var c=12
{
    var c=15; // set a global variable because c is overwritten
    console.log(c);
}
console.log(c);

//object 

let person={
    personName:"shra",
    age:21,
    hobbies:["reading","coding","travelling"]
}

console.log(person);


