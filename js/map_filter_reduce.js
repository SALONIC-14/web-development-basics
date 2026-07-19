// 1. map() creates a new array by applying a function to each element of the original array.
// 2.filter() returns a new array containing elements that pass a given test.
// 3.reduce() executes a reducer function on each element and returns a single accumulated result.


let arr=[1,3,5,7,9,11];


// to get a  square of this array 
// 1.method

let squareArr=[];
for(let i=0;i<arr.length;i++){
    squareArr.push(arr[i]**2);
}
console.log(squareArr);

// 2.method is to use the Map() method

let squareArr2=(i)=>{
    return i**2;
}
arr.map(squareArr2)



 let arr_filter=arr.filter((i)=>{
    if(i>=7){
        return i;
    }
    
 })
 console.log(arr_filter)


 //reduce

let add=(a,b)=>{
    return a+b;
}

let ARR_reduce=arr.reduce(add);
 console.log( " this is :"+ARR_reduce);