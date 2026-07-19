// // "+"---------->>"-"
// // "-"---------->>"/"
// // "*"---------->>"+"
// // "/"---------->>"**"
// console.log("calculator started");
// function faultcalc(num1,operator ,num2) {
    
//     random= Math.floor(Math.random()*100)+1;
    
//              //Math.random() → gives 0 to 0.9999…
//             // * 100 → gives 0 to 99.999
//             // Math.floor() → gives 0 to 99
//             // + 1 → shifts it to 1 to 100
//             // ✔ Includes 1
//             // ✔ Includes 100

//             if (random <=10){
//                 console.log( "random" +random + " : Faulty Calculation Triggered : ");

//                 if (operator == "+"){
//                     return num1-num2;
//                 }
//                 else if (operator =="-"){
//                     return num1/num2;
//                 }
//                 else if (operator =="*"){
//                     return num1+num2;
//                 }
//                 else if (operator =="/"){
//                     return num1**num2;
//                 }

//             }
//             else{
//                 if (operator == "+"){
//                     return num1+num2;
//                 }
//                 else if (operator =="-"){
//                     return num1-num2;
//                 }
//                 else if (operator =="*"){
//                     return num1*num2;
//                 }
//                 else if (operator =="/"){
//                     return num1/num2;
//                 }
//             }
// }

// console.log(faultcalc(5,"+",3));
// console.log(faultcalc(5,"+",3));
// console.log(faultcalc(5,"+",3));
// console.log(faultcalc(5,"+",3));
// console.log(faultcalc(5,"+",3));
// console.log(faultcalc(5,"+",3));
// console.log(faultcalc(5,"+",3));
// console.log(faultcalc(5,"+",3));
// console.log(faultcalc(5,"+",3));
// console.log(faultcalc(5,"+",3));
// console.log(faultcalc(5,"+",3));
// console.log(faultcalc(5,"+",3));
// console.log(faultcalc(5,"+",3));
// console.log(faultcalc(5,"+",3));
// console.log(faultcalc(5,"+",3));
// console.log(faultcalc(5,"+",3));
// console.log(faultcalc(5,"+",3));
// console.log(faultcalc(5,"+",3));
// console.log(faultcalc(5,"+",3));
// console.log(faultcalc(5,"+",3));
// console.log(faultcalc(5,"+",3));
// console.log(faultcalc(5,"+",3));
// console.log(faultcalc(5,"+",3));
// console.log(faultcalc(5,"+",3));
// console.log(faultcalc(5,"+",3));


let num1=prompt("ENTER FIRST NUMBER:");
let operator=prompt("ENTER OPERATOR:");
let num2=prompt("ENTER SECOND NUMBER:");

// let num1 = 3;
// let operator="+";
// let num2=5;
let faulty={
    "+":"-",
    "-":"/",
    "*":"+",
    "/":"**"
}
random=Math.floor(Math.random()*100)+1;
console.log("FCalculator started");


if (random<=10){
        operator=faulty[operator]
        
        console.log(`RANDOM : ${random} and calculation is ${eval(`${num1} ${operator} ${num2}`)}`)
    }
else{
        console.log(`RANDOM : ${random} and calculation is ${eval(`${num1} ${operator} ${num2}`)}`)
    }




// // "+"---------->>"-"
// // "-"---------->>"/"
// // "*"---------->>"+"
// // "/"---------->>"**"

