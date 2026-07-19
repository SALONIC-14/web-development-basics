document.querySelectorAll(".box")
document.querySelector(".box").innerHTML
document.querySelector(".container").
document.querySelector(".container").innerText
document.querySelector(".box").outerHTML
document.querySelector(".conatiner").outerHTML
document.querySelector(".container"). tagName
document.querySelector(".container").nodeName
document.querySelector(".container").hidden
document.querySelector(".container").hidden = true
document.querySelector(".box2").innerHTML="main box"
document.querySelector(".box2").hasAttribute("style")
document.querySelector(".box").getAttribute("style")
document.querySelector(".box").setAttribute("style","display : flex")
document.querySelector(".box2").removeAttribute("style")
document.querySelector(".container").attributes
document.querySelector(".container").dataset
document.designMode = "on"

// insertion attributes

let div1 = document.createElement("div") // created element div
div1.innerHTML = "I AM inserted here using appendChild"; // this is the inner text
div1.setAttribute("class" ,"box11");  // to give attributes to div

let div2= document.createElement("div");
div2.innerHTML="I m inserted here using the prepend"
div1.setAttribute("class" ,"box22");


// ###1. using appendChild    // into  the container
document.querySelector(".container").appendChild(div1)

// ###2 node.prepend(e)  
// will insert at the begining of node

document.querySelector(".container").prepend(div2)

// ###3 node.before(e)
//  e will be inserted before the node

// ###4 node.after(e)
//  e wil be inserted after the node

//  ###5 node.replacewith(e)
//  node will be repalced by the e 



//  classList and className

//  .classList.add("box111")
//  .classList.remove("box111")
//  .classList.toggle("box111")

