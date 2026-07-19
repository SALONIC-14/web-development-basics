// // ############# 1 Question ############

// // The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

// // ["Gryffindor","Hufflepuff","Ravenclaw","Slytherin"]

// let name=["Harry","Ron","Draco","Hermione","Luna","Neville","Cedric","Cho","Ginny","Albus","Severus","Bellatrix","Minerva","Sirius","Remus","Dolores","Lucius","Narcissa","Fleur","Viktor","George","Fred","Percy","Dean","Seamus","Lavender","Parvati","Padma","Kingsley","Moody","Tonks","Dobby","Kreacheriiiiiiiiiiiii","Alexanderthegreatwarrior","Maximilianusconstantinus","Christopherjohnathanmaximus","Anastasiamariavictoria","Bartholomewtheconqueror"]

// function Magical_Sorting_Hat(name){
//     let Gryffindor =[]
//     let Hufflepuff =[]
//     let Ravenclaw =[]
//     let Slytherin =[]

//     for (let i = 0; i < name.length; i++) {
//         if (name[i].length<6){
//             Gryffindor.push(name[i])
//         }
//         else if (name[i].length<8){
//             Hufflepuff.push(name[i])
//         }
//         else if (name[i].length<12){
//             Ravenclaw.push(name[i])
//         }
//         else{
//             Slytherin.push(name[i])
//         }
        
       
        
//     } ;
    
//     console.log(`Gryffindor: [ ${Gryffindor}]`);
//     console.log(`Hufflepuff: [ ${Hufflepuff}]`);
//     console.log(`Ravenclaw: [ ${Ravenclaw}]`);
//     console.log(`Slytherin: [ ${Slytherin}]`);
// }
// Magical_Sorting_Hat(name)


// // The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

// single_arr=[1,1,1,1,2,2,3,4,5,6,6,7,7,8,99,13,1,4,5,]

// function doubles(single_arr) {
//     doubles_arr=[]
//     for (let i = 0; i < single_arr.length; i++) {
//         if(single_arr[i]===single_arr[i+1]){
//             doubles_arr.push(single_arr[i]*2)

//             while(single_arr [i]===single_arr[i+1]){
//                 i++
//             }
//         }
//         else{
//             doubles_arr.push(single_arr[i]*2)
//         }

          
        
//     }
//     console.log('Single_Array' ,':' , single_arr );
//     console.log('Doubles_Array' ,':' , doubles_arr );
    
    
// }
// doubles(single_arr);

// // The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

// original_arr=[1,2,3,4,5,6,7,8,9,10]
// reversed_arr=[]

// for (let i = original_arr.length-1; i>= 0; i--) {
//     let reverse=original_arr[i]
//     reversed_arr.push(reverse)
   
    
// }

// console.log('original',original_arr);
// console.log('reversed',reversed_arr);

// function appends(original_arr,reversed_arr) {
//     for (let i = 0; i < reversed_arr.length; i++) {
//         original_arr.push(reversed_arr[i])
        
//     }
//     console.log('Appended Array : ', original_arr);
    
    
    
    
// }
// appends(original_arr,reversed_arr)

// // The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

// // 'a' = 97
// // 'z' = 122

// // 'A' = 65
// // 'Z' = 90

// // '0' = 48
// // '9' = 57
// function Password_Validator(password) {
//     if (password.length < 8) {
//         console.log("Password must be at least 8 characters long");
//         return;
//     }

//     let hasUpper = false;
//     let hasLower = false;
//     let hasDigit = false;

//     for (let i = 0; i < password.length; i++) {
//         let code = password.charCodeAt(i);

//         if (code >= 65 && code <= 90) hasUpper = true;     // A-Z
//         else if (code >= 97 && code <= 122) hasLower = true; // a-z
//         else if (code >= 48 && code <= 57) hasDigit = true;  // 0-9
//     }

//     if (hasUpper && hasLower && hasDigit) {
//         console.log("Valid Password");
//     } else {
//         console.log("Invalid Password");
//     }
// }

// // test
// Password_Validator("ShraShrs1221");


// // The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

// before_sum_arr=[5,1,3,4,2,5,-6,1,2,3,4,5]

// function sum(before_sum_arr) {
//     let before_str_Arr=[]

//     for (let i = 0; i <before_sum_arr.length; i++) {
//         let str=String(before_sum_arr[i])
//         before_str_Arr.push(str)

        
//     }
//     // console.log('str',before_str_Arr);
//     {
//         let sum1=0
//         for (let i = 0; i < before_str_Arr.length; i++) {
        
            
//             if (before_str_Arr[i].startsWith("-")){

//                 return console.log('Sum', sum1);
                
                
//             }else{
//                 sum1=sum1+ parseInt(before_str_Arr[i]);
                
//             }   
//         }
//     }

// }
// sum(before_sum_arr)
// console.log('done');

// The Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels

string_vowels="ASupercalifragilisticexpialidociousProgrammingIsAbsolutelyIncredibleEND"

function counter(string_vowels) {
    let vowel=["A","E","I","O","U","a","e","i","o","u"];
    

    let counter_no=0;
    
    for (let i = 0; i < string_vowels.length; i++) {
         let j=0
        while(j<vowel.length){
            if (string_vowels[i]==vowel[j]){
                counter_no=counter_no+1
            }
                
           
             
            

        }
        
    }
        
    
    console.log('String : ',string_vowels);
    console.log('Upper Vowels : ',counter_upper);
    console.log('lower Vowels : ',counter_lower);
    
    
}
counter(string_vowels)
