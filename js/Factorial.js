// // Factorial using  FOR LOOP
// let num=10;
// let Fact=1;
// for(let i=1;i<=num; i++){
//     Fact=i*Fact;
// }
// console.log(`THE Factorial of ${num} is ${Fact} (using  for loop)`);


// // Factorial using  REduce LOOP

// let red_Fact=1;
// let i=1;
// let factorial=(num)=>{
//     return i*red_Fact;
// }

// console.log(num.reduce(factorial));



let num=10;

function factorial(num){
    let arr=Array.from(Array(num+1).keys()).slice(1,);
    console.log(arr);
    let fact=arr.reduce((a,b)=>{
        return a*b;
    });
    console.log(`THE Factorial of ${num} is ${fact} (using  reduce loop)`);
}
factorial(num);