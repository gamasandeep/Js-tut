// var, let, const

// var name = 'Shrey';
// console.log(name);
// name ='krish'
// console.log(name);

// // Initializing var
// var greetings;
// console.log(greetings);
// greetings = 'Hello';
// console.log(greetings);

// // variables can have letters, numbers, _, $
// // Can not start with number
// // var 1name ='John' --- not allowed
// // var $name ='John' --- is allowed
// // multi word variables
// var firstName = 'Shrey'; //camel case
// var first_name = 'Krish'; //Underscore
// var FirstName = 'Tom'; //Pascal case

// //LET
// let name;
// name = 'Shrey';
// console.log(name)

// //Constant -- Cant be changed or reassigned 
// const name ='Shrey';
// console.log(name);
// //cannot reassign
// //name ='krish' --- will give an error

const person = {
    name : 'Shrey',
    age : 30
}
console.log(person)
person.name = 'Sara';
person.age = 32;
console.log(person)

const numbers = [1,2,3,4,5];
console.log(numbers)
numbers.push(6);

console.log(numbers)


