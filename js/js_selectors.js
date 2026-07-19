
// selectors in js
// 1. getElementsByClassName
let boxes= document.getElementsByClassName("box");
console.log(boxes);
boxes[2].style.backgroundColor="yellow";
boxes[2].style.color="red";

// 2. getElementById
let pink = document.getElementById("pink");
pink.style.backgroundColor="pink";
pink.style.color="white";


// 3. querySelector

document.querySelector(".box").style.backgroundColor="green";
document.querySelector(".box").style.color="white";
// or 
let lastbox=document.querySelector(".box:Last-child")
lastbox.style.backgroundColor="cyan";   
lastbox.style.color="black";

// 4. querySelectorAll
let allboxes=document.querySelectorAll(".box1");
allboxes.forEach((e)=>{
    e.style.backgroundColor="blue";
    e.style.color="white";
});

// 5. getElementsByTagName

let allparas=document.getElementsByTagName("div");
console.log(allparas);


// matches ,closest, contains

// 1. matches : to check if the element matches the given selector or not

let e=document.getElementsByTagName("div");
console.log(e);
console.log(e[4].matches(".box")); // true
console.log(e[4].matches(".box2")); //false
console.log(e[3].matches("pink")); // 


// 2. closest : to find the closest ancestor of the element that matches the given selector 

// let box2=document.getElementsByClassName("box2");
// box2.closest(".container1"); // null
// box2.closest(".container2"); // null    

