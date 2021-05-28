//Global Scope

var a = 1;
let b = 2;
const c = 3;

function test(){
    var a =4;
    let b = 5;
    const c =6;
    console.log('function scope: ',a,b,c);
}
test();
var a =7;
z =7;
console.log(a)

//Block Scope

// if(true){
//     var a =7;
//     let b=8;
//     const c = 9;
//     console.log('If Scope: ',a,b,c);
// }

// for(var a=0;a<10;a++){
//     console.log(`For Loop: ${a}`);
// }

// console.log('Global Scope: ',a,b,c)

//Let and const have a block level scope 

// same variable names defined at function level and global level are different
