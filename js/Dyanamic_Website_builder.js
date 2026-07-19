// function createCard(title, cName, views, monthsOld, duration, thumbnail){
//     // Finish this function
// }


// createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "link")
// https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw


function createCard(title ,cName, views, monthsOld, duration, thumbnail){

    // title
    let container=document.querySelector(".container");
    let h1=container.querySelector("h1");
    h1.innerHTML=title;

    // cName
    let codewithharry=container.querySelector(".codewithharry");
    codewithharry.innerHTML=cName;

    // views
    if ( views>0 && views<=999){
        let viewsSpan=container.querySelector(".views");
        viewsSpan.innerHTML=views+" views";


    }
    else if (views>=1000 && views<=999999){
        let viewsSpan=container.querySelector(".views");
        viewsSpan.innerHTML=(views/1000) + "K views";

    }
    else if (views>=1000000 && views<=999999999){
        let viewsSpan=container.querySelector(".views");
        viewsSpan.innerHTML=(views/1000000) + "M views";
    }
    else if (views>=1000000000 && views<=999999999999){
        let viewsSpan=container.querySelector(".views");
        viewsSpan.innerHTML=(views/1000000000) + "B views";

    }
    else{
        let viewsSpan=container.querySelector(".views");
        viewsSpan.innerHTML=views + " Invalid views";
    }

    // monthsOld
    let dateSpan=container.querySelector(".date");
    dateSpan.innerHTML=monthsOld + " month ago";

        // duration

        let imgTime=container.querySelector(".img_time");
        imgTime.innerHTML=duration;


    // thumbnail

    let img=container.querySelector("img");
    img.src=thumbnail;




}

createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")


