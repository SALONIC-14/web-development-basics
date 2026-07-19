 async function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(364343643);
        },2000)
    })
}
console.log('Getting data');


// console.log('please wait for few seconds');
// let data = getData();

// 1. method with async await
// data.then((v)=>{
//     console.log('Loading Data');

//     console.log(data);
//    console.log('Data Loaded');


// console.log('addition')
// });

// fetch API


//  async function getData(){
    
//     let x= await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     let data = await x.json(); //x.json  gives data injason format 
//                             //   x.text() gives data in text format
//     console.log(data);
//     return 333;
    
// }

async function main(){
    console.log('Getting data');

    console.log('please wait for few seconds');
    let data = await getData(); 
    console.log('Loading Data');

    console.log(data);
    console.log('Data Loaded');


}
main();


console.log('addition')
