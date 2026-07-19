// events is a simple event emitter implementation, inspired by Node.js's EventEmitter.
// It allows you to register event listeners and emit events.

let btn= document.querySelector(".b");

//**********/ Basic Click Events************

//####### 1. click → triggered when user clicks (press + release)

btn.addEventListener("click", ()=>{
    document.querySelector(".box").innerHTML= "<b>I Was Clicked</b>";
})
//####### 2. dblclick → triggered on double click
btn.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML= "<b>I Was Double Clicked</b>";
})

// ************Mouse Button Events**********8

//########3. mousedown → when mouse button is pressed down
btn.addEventListener("mousedown", ()=>{
    document.querySelector(".box").innerHTML+= "<b>I Was Pressed</b>";
})

//########4. mouseup → when mouse button is released
btn.addEventListener("mouseup", ()=>{
    document.querySelector(".box").innerHTML+= "<b>I Was Released................</b>";
    console.log("Mouse Button Released");
})

// *****************Hover Events********************

//5.################# mouseover → when mouse enters an element
btn.addEventListener("mouseover", ()=>{
    document.querySelector(".box").innerHTML+= "<b>Mouse Entered</b>";
});

//6.################# mouseout → when mouse leaves an element
btn.addEventListener("mouseout", ()=>{
    document.querySelector(".box").innerHTML+= "<b>Mouse Left</b>";
});


//  *****Mouse Events (List with Short Description)******
// 1. click – mouse button pressed and released
// 2. dblclick – double click on element
// 3. mousedown – mouse button pressed down
// 4. mouseup – mouse button released
// 5. mouseover – mouse enters element
// 6. mouseout – mouse leaves element
// 7. mouseenter – mouse enters (no bubbling)
// 8. mouseleave – mouse leaves (no bubbling)
// 9. mousemove – mouse moves over element
// 10. contextmenu – right-click triggers menu
// 11. wheel – mouse wheel scroll


// ******Drag-related Mouse Events*****
// 12. drag – element is being dragged
// 13. dragstart – dragging starts
// 14. dragend – dragging ends
// 15. dragenter – dragged item enters target
// 16. dragleave – dragged item leaves target
// 17. dragover – dragged item over target
// drop – element dropped on target

// ******Keyboard Events (List with Short Description)******
//#######1.  keydown – key is pressed down
btn.addEventListener("keydown",()=>{
    document.querySelector(".box").innerHTML+= "<b>Key Pressed</b>";    

})


//#######2.  keyup – key is released

btn.addEventListener("keyup",()=>{
    document.querySelector(".box").innerHTML+= "<b>Key Released</b>";   
})  



//************* */ Form Events (List with Short Description)************
// 1. submit – form is submitted
// 2. input – value changes while typing
// 3. change – value changed and focus lost
// 4. focus – element gets focus
// 5. blur – element loses focus
// *********** Additional Useful Form Events**********
// 6. reset – form is reset
// 7. select – text inside input/textarea is selected