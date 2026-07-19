
async function text_1(){
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            document.querySelector('.text1').innerText = 'Initializing Hacking';
            
            setInterval(()=>{
                for(let i=0;i<3;i++){
                    setTimeout(()=>{
                        document.querySelector('.text1').innerText += '.';
                    },300*i)
                    document.querySelector('.text1').innerText = 'Initializing Hacking';
                }
            },1400);



            resolve("1st stage done");
        },1400)
    })
}
async function text_2(){
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            document.querySelector('.text2').innerText = 'Reading your Files';

            setInterval(()=>{
                for(let i=0;i<3;i++){
                    setTimeout(()=>{
                        document.querySelector('.text2').innerText += '.';
                    },300*i)
                    document.querySelector('.text2').innerText = 'Reading your Files';
                }

            },1400);
            

            resolve("2nd stage done");
        },2800)
    })
}
async function text_3(){
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            document.querySelector('.text3').innerText = 'Password files Detected';

            setInterval(()=>{
                for(let i=0;i<3;i++){
                    setTimeout(()=>{
                        document.querySelector('.text3').innerText += '.';
                    },300*i)
                    document.querySelector('.text3').innerText = 'Password files Detected';
                }

            },1400);

            resolve("3rd stage done");
        },4200)
    })
}
async function text_4(){
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            document.querySelector('.text4').innerText = 'Sending all passwords and personal files to server';
            setInterval(()=>{
                for(let i=0;i<3;i++){
                    setTimeout(()=>{
                        document.querySelector('.text4').innerText += '.';
                    },300*i)
                    document.querySelector('.text4').innerText = 'Sending all passwords and personal files to server';
                }

            },1400);

            resolve("4th stage done");
        },5600)
    })
}
async function text_5(){
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            document.querySelector('.text5').innerText = 'Cleaning up';

            setInterval(()=>{
                for(let i=0;i<3;i++){
                    setTimeout(()=>{
                        document.querySelector('.text5').innerText += '.';
                    },300*i)
                    document.querySelector('.text5').innerText = 'Cleaning up';
                }

            },1400);
            resolve("5th stage done");
        },7000)
    })
}


async function main() {
    let text1 = await text_1();
    console.log(text1);
    let text2 = await text_2();
    console.log(text2);
    let text3 = await text_3();
    console.log(text3);
    let text4 = await text_4();
    console.log(text4);
    let text5 = await text_5();
    console.log(text5);
}
main();

// async function text_2(){
//     setTimeout(()=>{
//         document.querySelector('.text2').innerText = 'Reading your Files';
//     },2800)
// }
// async function text_3(){
//     setTimeout(()=>{
//         document.querySelector('.text3').innerText = 'Password files Detected';
//     },4200)
// }
// async function text_4(){
//     setTimeout(()=>{
//         document.querySelector('.text4').innerText = 'Sending all passwords and personal files to server';
//     },5600)
// }
// async function text_5(){
//     setTimeout(()=>{
//         document.querySelector('.text5').innerText = 'Cleaning up';
//     },7000)
// }

// let text1 = await text_1();
// let text2 = await text_2();
// let text3 = await text_3();
// let text4 = await text_4();
// let text5 = await text_5();
