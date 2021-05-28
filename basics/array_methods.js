const numbers = [1,2,3,4,5,6,7,8,9];
const num2 = new Array(11,22,33,44,55,66);
const fruits = ['Apple','Pear','Orange'];
const mixed = [22,'Hello', true, undefined, null, {a:1,b:1}, new Date()];

let val;

//Get array length
val = numbers.length

//Check if is array
val = Array.isArray(numbers)

//get single value
val = numbers[3];
val = numbers[0];

// insert into array
numbers[2] = 100;

//find index of value
val = numbers.indexOf(5);

//Mutating arrays
//add on to end
numbers.push(250);
//add on to first
numbers.unshift(120);
//take off from end
numbers.pop();
// take off from the front
numbers.shift();

//splice values
numbers.splice(1,3);

//reverse
numbers.reverse();

//Concate
val = numbers.concat(num2);

//sort arrays
val = fruits.sort();
val = numbers.sort();

//USe the compare function
val = numbers.sort(function(x,y){
    return x-y;
});
// reverse sort
val = numbers.sort(function(x,y){
    return y-x;
});

//Find 
function under5(num){
    return num <5
}
val = numbers.find(under5);

function over5(num){
    return num >5
}
val = numbers.find(over5);


console.log(numbers);
console.log(val);
