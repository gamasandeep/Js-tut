const person = {
    firstName : 'Shrey',
    lastName : 'Malhotra',
    age : 23,
    email : 'shrey1035@gmail.com',
    hobbies : ['football', 'games'],
    address : {
        city : 'New delhi',
        state : 'Delhi'
    },
    getBirthYear: function(){
        return 2021- this.age;
    }
}

let val;

val = person;
//get specific value
val = person.firstName;
val = person.age;
val = person.hobbies;
val = person.address.city;
val = person.getBirthYear();



console.log(val);

const people = [
    {name:'Shrey', age:23},
    {name: 'Mike', age:30}
];

for(let i =0; i<people.length;i++){
    console.log(people[i].name); 
}
