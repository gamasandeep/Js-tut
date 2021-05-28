const firstName ='Shrey';
const lastName = 'Malhotra';
const str = 'shrey is learning this new concept'

let val;
val = firstName + lastName;

//Concatenation
val = firstName+' '+lastName;

//Append
val = 'Shrey ';
val += 'Malhotra';

//Escaping
val = "thats awesome, i can't wait";
val = 'that\'s awesome, i can\'t wait';

//length
val = firstName.length;

//concat
val = firstName.concat(' ',lastName);

//Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

//indexOf() --- 
val = firstName.indexOf('y');
val = firstName.lastIndexOf('y');

//charAt() --- to find character 
val = firstName.charAt('4');

//get last char
val = firstName.charAt(firstName.length - 1);

//substring()
val = firstName.substring(0,4);

//slice()
val = firstName.slice(0,4);
val = firstName.slice(-3);

//split()
val = str.split(' ');

//replace()
val = str.replace('shrey', 'krish');

//includes() --- to check if the string has it or not
val = str.includes('shrey');


console.log(val);
