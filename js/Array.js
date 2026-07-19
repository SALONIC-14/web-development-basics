let arr=[2,3,4,5,6,677,"ee",1];
console.log(arr.length);

arr[1]=22;
console.log(arr);

// toString

console.log(arr.toString());

// join

console.log(arr.join(" "));
console.log(arr.join(" and "));

//pop :---> remove last element

console.log(arr.pop());
console.log(arr);

//push :---> add element to last place

console.log(arr.push("hello")); //return the length
console.log(arr.push("hello2"));
console.log(arr);


// shift

arr.shift();  //remove  first element
console.log(arr);

//unshift:------> Add ELement to first place

arr.unshift(11);
console.log(arr);

//loops

arr.sort((a, b) => a - b);
console.log(arr);
for(let i=0;i<arr.length; i++){
    console.log("ELEMENT NO "+i+" is : "+arr[i])
}

//forEach loops

arr.forEach((value, index,arr)=> {
    console.log(value, index ,arr)
});

