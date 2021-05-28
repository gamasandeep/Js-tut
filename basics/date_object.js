let val;
const today = new Date();
let birthday = new Date('05-10-1998 11:25:00');
birthday = new Date('September 10 2000')
birthday = new Date('9/10/2000')

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(2021);
birthday.setHours(3);
birthday.setMinutes(50);

console.log(birthday);
console.log(val);