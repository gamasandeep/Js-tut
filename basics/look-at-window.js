//Window Methods Objects and Properties

//Alert
// window.alert('Hello world');

//Prompt
// const input = prompt();
// alert(input);

//Confirm
// if (confirm('Are you sure')){
//     console.log('YES');
// }else{
//     console.log("NO")
// }

let val;

//Outter height and width
val = window.outerHeight;
val = window.outerWidth;

//Inner height and width
val = window.innerHeight;
val = window.innerWidth;

//Scroll Points
val = window.scrollY;
val = window.scrollX;

//Location object
val = window.location;
val = window.location.hostname;
val = window.location.href;
val = window.location.search;

//Redirect
//window.location.href = 'https://google.com';

//Reload
//window.location.reload();

//History Object

// window.history.go(); // move to previous website with '-' and next website with '+'

//Navigator Object

val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;




console.log(val);
