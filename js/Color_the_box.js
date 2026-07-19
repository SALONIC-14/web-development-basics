// ran_color=Math.floor(Math.random()*100)+1;
// ran_bg=Math.floor(Math.random()*100)+1;
// console.log(ran_color);

let color=["red","blue","green","yellow","cyan","magenta","orange","purple"];
let size=color.length;
let color_box=document.querySelectorAll(".box");
let ran_color=Math.floor(Math.random()*size);
    let ran_bg=Math.floor(Math.random()*size);
color_box.forEach(e=>{
    // let ran_color=Math.floor(Math.random()*size);
    // let ran_bg=Math.floor(Math.random()*size);
    if (ran_bg==ran_color){

        ran_bg= ran_bg+1;       
    }
   e.style.backgroundColor=color[ran_color];
   e.style.color=color[ran_bg];
});

{
let second_color_box=document.querySelectorAll(".box1");
second_color_box.forEach(e=>{

    let ran_color=Math.floor(Math.random()*size);
    let ran_bg=Math.floor(Math.random()*size);

    if (ran_bg==ran_color){

        ran_bg= ran_bg+1;


    }
    e.style.backgroundColor=color[ran_bg];
    e.style.color=color[ran_color];
});

}