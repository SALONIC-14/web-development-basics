alert("Outside js");

console.log("Code is running... for alert");


var name = prompt("Enter your name :");
console.log("hello " + name);

 var istrue= confirm("are you sure you want to leave this page?");
 if (istrue){
    console.log("byye " + name);
 }
 else{
    console.log("welcome back " + name);
 }


 document.body.style.backgroundColor = "lightblue";