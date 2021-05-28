//FOR LOOP
//i++ --- i+1
// for(let i =0;i<=10;i++){
//     console.log(i);
// }

// for(let y = 0 ; y < 10; y++){
//     if (y ===2 ){
//         console.log('2 is my fave no');
//         continue;
//     }
//     if(y ===5){
//         console.log('Stop the loop')
//         break;
//     }
//     console.log('Number '+ y );
// }


// WHILE LOOP

// let i =0;
// while(i<10){
//     console.log('Number '+i);
//     i++;
// }

// DO WHILE

// let i = 0;

// do{
//     console.log('Number '+i);
//     i++;
// }

// while(i<10);

// ARRAY LOOP

const cars = ['ford','honda','maruti'];

// for(let i=0;i<cars.length;i++){
//     console.log('Cars '+i+ ' : '+cars[i]);
// }

//forEach
cars.forEach(function(car,index){
    console.log(`${index}:${car}`);
});



//MAP

// const users = [
//     {id:1,name:'Shrey'},
//     {id:2,name:'krish'}
// ];

// const ids = users.map(function(user){
//     return user.id;

// });
// const names = users.map(function(user){
//     return user.name;
// })
// console.log(ids);
// console.log(names);

const users =
        {firstName:'Shrey', lastName:'Malhotra', age:23};
for(let x in users){
    console.log(`${x}:${users[x]}`);
}