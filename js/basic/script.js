let count=0
let input=document.body.querySelector("input")

let span=document.body.querySelector('span')
input.addEventListener('input' , function(){
    
 span.textContent= input.value.length
})



