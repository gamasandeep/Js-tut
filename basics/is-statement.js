// if(something){
//     do something
// } else{
//     do something else
// }

const id = 100;

// //Equal to 

// if (id == 100){
//     console.log('Correct');
// } else{
//     console.log("incorrect");
// }

// //Not equal to 

// if(id != 100){
//     console.log('correct');
// } else {
//     console.log('incorrect');
// }

// // Equal to value and type 

// if(id===100){
//     console.log('Correct');
// }else{
//     console.log('Incorrect');
// }

// // NOT Equal to value and type 

// if(id!==100){
//     console.log('Correct');
// }else{
//     console.log('Incorrect');
// }

// if(id){
//     console.log(`the id is ${id}`);
// }else{
//     console.log('No ID');

// }

// //TEST Undefined
// if(typeof id !=='undefined'){
//     console.log(`the id is ${id}`);
// }else{
//     console.log('No ID');
    
// }

//Greater than and less than

// if(id>=100){
//     console.log(`The ID: ${id} is GREATER`)
// }else{
//     console.log(`The ID ${id} is LESS THAN`)
// }

//IF ELSE

const color = 'red';

// if (color==='red'){
//     console.log('Color is red')
// }else if(color==='blue'){
//     console.log('Color is blue')
// }else {
//     console.log('Color is Yellow')
// }

//Logical Operator

const name ='Shrey';
const age = 23;

// AND &&
if(age>0 && age<12){
    console.log(`${name} is a child`);
} else if (age >=13 && age<=19){
    console.log(`${name} is a teenager`);
}else{
    console.log(`${name} is an adult`);

}

// OR||

if(age<16 || age>40){
    console.log(`${name} cannot run in race`);
} else{
    console.log(`${name} is registered`);
}

// Ternary operator 

console.log(id === 100 ? 'Correct':'Incorrect');
 