
// for loop

let table=5;
for (let i=1; i<11; i++){

    console.log(i*table)
}



let person ={
    name_of_person:"shra",
    age:22,
    class:'btech',
    year:'BE'
}


// for in loop
// used for iteration over object properties
for (let key in person) { 
    // let value=person[key];
    console.log(key +":"+person[key]);

}

//for of loop
// used for iteration over iterable objects like arrays, strings, maps, sets etc.

for(let iteration of person.name_of_person){
    console.log(iteration)
}

{
   // while loop
    let table=7;
    let i=1;
    while(i<=10){
        console.log(i*table)
        i++;
    } 
}

{
    // do while loop
    let table=10;
    let i=1;
    do {
        console.log("do while loop")
        console.log(i*table);
        i++;
        
    } while (i<=10);
}


