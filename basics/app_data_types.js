// Primitive Data types : 1. String, number, boolean, null, undefined, symbols(ES6)

const name ="Shrey";
console.log(typeof name);
const age = 45;
console.log(typeof age);
const question = true;
const car = null;
console.log(car)

let test;
console.log(typeof test);

const sym = Symbol();
console.log(typeof sym);


// Reference type : Arrays, obejct literals, functions, dates

const hobbies = ['movies','music'];
console.log(typeof hobbies);

//object literals
const address = {
    city:'Delhi',
    state:'New Delhi'
}
console.log(typeof address);

const today= new Date();
console.log(today);
console.log(typeof today);
