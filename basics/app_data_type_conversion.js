let val;

//Numbers to string
val = 5;
val = String(5);
val =String(4+4);

// Bool to string
val =String(true);

// Date to String
val = String(new Date());

//Array to string
val = String([1,2,3,4,5]);

//toString()
val =(5).toString();

//String to number
val = Number('5');

//Bool to number
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('hello');
val =Number([1,2,3,4]);

//parseInt

val = parseInt('100');
val = parseFloat('100.3001')


//Output
console.log(val);
console.log(typeof val);
// console.log(val.length);
console.log(val.toFixed());
