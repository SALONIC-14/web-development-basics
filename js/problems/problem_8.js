let arr=[1,2,3,4,5,6]


// Async Array Mapping: Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.

// async function doubles(arr) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
            
//                 let square_arr=(i)=>{
//                     resolve(i*2)
//                 }
//                 arr.map(square_arr)
            
//         }, 500);
//     })
//     console.log('done1');
    
// }

//  async function use_await() {
//     let array= await doubles(arr) 
//     console.log(array);
//     console.log('done2');
    
// }

// use_await()