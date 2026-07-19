"use strict";
class maker {
    name;
    lastName;
    age;
    constructor(name, lastName = 'bhaya', age = 20) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }
}
let m = new maker('sachin', undefined, 30);
