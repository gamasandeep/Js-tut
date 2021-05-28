const firstName ='Shrey';
const age = 23;
const job = 'analyst';
const city = 'Delhi';
let html;

// without template strings (es5)
html = '<ul><li>Name: '+ firstName + '</li><li>Age: '+ age + '</li><li> Job: '+ job +'</li><li>City: ' + city + '</li></ul>';
html = '<ul>' +
        '<li>Name: '+ firstName + '</li>' +
        '<li>Age: '+ age + '</li>' +
        '<li> Job: '+ job +'</li>' +
        '<li>City: ' + city + '</li>'+
        '</ul>'; 

//With template strings (es6)
function hello(){
    return 'hello';
}
html = `
    <ul>
        <li>Name: ${firstName}</li>
        <li>Age: ${age}</li> 
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>${2+2}</li>
        <li>${hello()}</li>
        <li>${age>30 ? 'over 30': 'Under 30'}</li> 
    
    </ul>

`
// in line 28 -- '?' is if the statement is true and ':' is else

document.body.innerHTML = html;
