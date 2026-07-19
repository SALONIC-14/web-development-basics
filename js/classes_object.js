// 1.class :-is a blueprint and A class is just a cleaner way to create objects and handle inheritance. Under the hood, it still uses prototypes.

// 2. object :- An object is a collection of key-value pairs.

// 3. Prptptype:- Every JavaScript object has a hidden property called [[Prototype]].

//  // without class 
// let animal ={
//     eats:true
// };
// let rabbit={
//     jumps:true
// };
// rabbit.__proto__=animal;


class vehicle{
    constructor(name,tyre ,color){
        this.name1=name
        this.tyre1=tyre
        this.color1=color
        console.log(`this is a ${this.name1} Vehicle`)
    }

    tyre() {
        console.log('this is a ', this.tyre1,"Vehicle");
        
        
    }
    color() {
        console.log(`this is a ${this.color1} Vehicle`);
        
        
    }

}


class car extends vehicle{
    constructor(name2,tyre2,color2,x){
        super(name2 , tyre2,color2)
        this.name2=name2
        this.tyre2=tyre2
        this.color2=color2
        this.x2=x
        
    }
    speed(){
        console.log('speed is 44km/h');
        
    }
    tyre(){                                // overrideing methode
        super.tyre()                        // for also running the above tyre methode and ours 
        console.log('this is a 4 wheeler');
        
    }
}

let a=new vehicle("car",4 , 'pink');
console.log(a);

let b= new car("bus",8,'blue',3);


// instanceof operation


console.log(`a instanceof vehicle ${ a instanceof vehicle}`);
console.log(`a instanceof car ${ a instanceof car}`);
console.log(`b instanceof vehicle ${ b instanceof vehicle}`);
console.log(`b instanceof car ${ b instanceof car}`);

