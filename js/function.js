let name11='shra';
function wish(name11){
    console.log("happy brithday"+name11);
}
wish(name11);

// arrow function       =()=>{}:
// arrow function is a shorter syntax for writing function expressions in JavaScript. It is often used for writing concise functions, especially for callbacks and higher-order functions.

let name1='shraddha';
let wish1=(name)=>{
    console.log("happy brithday"+name1);
}
wish1(name1);


const multiply =(a,b, c=1,d=1)=>{
    return a*b*c*d;
}

let result1= multiply(2,3); // Output: 6
let result2= multiply(2,3,4);    // Output: 24
let result3= multiply(2,3,4,5);  // Output: 120              

console.log(result1);
console.log(result2);
console.log(result3);   