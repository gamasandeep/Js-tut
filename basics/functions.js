//Function Declaration

function greet(firstName){
    //console.log('Hello');
    return 'Hello '+ firstName;
}

console.log(greet('Shrey'));

function meet(firstName, lastName){
    //console.log('Hello');
    return 'Hello '+ firstName+' '+lastName;
}

console.log(meet('Shrey','Malhotra'));

//Without ES6
function yes(firstName, lastName){
    if (typeof firstName==='undefined'){firstName = 'Shrey'}
    if (typeof lastName==='undefined'){lastName = 'Malhotra'}
    //console.log('Hello');
    return 'Hello '+ firstName+' '+lastName;
}

console.log(yes());

//With ES6

function es6(firstName = 'Shrey', lastName = 'Malhotra'){

    return 'Hello '+ firstName+' '+lastName;
}

console.log(es6());

//Function Expression

const square = function(x){
    return x*x;
}
console.log(square(8));

//Immediately invokable functions - IIFEs

(function(){
    console.log('IIFE Ran..');
})();

(function(name){
    console.log(`Hello ${name}`);
})('Shrey');

//Property Methods -- function put in object is called method

const todo = {
    add: function(){
        console.log('Add todo');
    },
    edit: function(id){
        console.log(`Edit Todo is ${id}`)
    }
}
todo.delete = function(){
    console.log('Delete Todo')
}

todo.add();
todo.edit(22);
todo.delete();

