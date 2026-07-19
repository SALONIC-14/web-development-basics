// <!-- synchronous programming is when code is executed line by line, in sequence -->
// <!-- asynchronous programming is when code can be executed out of order, allowing for tasks to be performed while waiting for other tasks to complete -->



// <!-- callbacks are functions that are passed as arguments to other functions and are executed after a certain event or condition is met -->
// <!-- they are commonly used in asynchronous programming to handle tasks that take time to complete, such as fetching data from an API or reading a file -->


// <!-- example of a callback function -->
 

function loadScript(src_link,callback){
    let script= document.createElement("script");   
    script.src=src_link;
    script.onload= ()=>callback("done", end)
    document.head.append(script);
}

let callback =(arg , end)=>{
    console.log("script loaded", arg);
    end();
}
let end=()=>{
    console.log("script ended" )
}


loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js",callback);



// promises are a way to handle asynchronous operations in JavaScript. They represent a value that may not be available yet, but will be resolved at some point in the future. Promises can be in one of three states: pending, fulfilled, or rejected.

// <!-- example of a promise -->


let promise1=new Promise((resolve, reject) => {
    ran=Math.random();
    if(ran<0.5){
        reject('Promise rejected');
    }
    else{
        setTimeout(() => {
        console.log('i m done');
        resolve('Promise resolved');
    }, 1000);
    }
    
});

promise1.then((a) => {
 console.log(a);
 
}).catch((e) => {
    console.log(e);
}   );


// **********Promise API (Names + Short Description)*************
// 1. Promise.resolve() – returns resolved promise

// 2. Promise.reject() – returns rejected promise

// 3. Promise.all() – resolves when all promises resolve, rejects if one fails

// 4. Promise.allSettled() – waits for all, returns results (success + failure)

// 5. Promise.race() – returns first settled promise

// 6. Promise.any() – returns first resolved promise, rejects if all fail