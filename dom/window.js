//window.document points to the document object loaded in the window


//properties

//console

console.log('Hello, World!');
console.error('This is an error!');

//document 

document.getElementById('example') //access an element with id

//history - gives access to history api 

history.back() // go back one page

//location - gives access to location api

location.href // get current url

//localStorage - gives access to local storage api

localStorage.setItem('key', 'value') //store data persistantly

//session storage - gives access to session storage api

sessionStorage.setItem('key', 'value') //store a session item


//methods

//alert() - display alert dialogs

alert('Hello, World!');

//postMessage() - used by channel messaging api

const iframe = document.querySelector('iframe');
iframe.contentWindow.postMessage('Hello from parent!', 'https://url');

//requestAnimationFrame() - used to perform animations

function animate() {
    // Animation logic here
    requestAnimationFrame(animate);
}
animate();

//setInterval() - used to call a function at specified intervals

let interval = window.setInterval(() => {
    console.log('Interval message');
}, 1000);

//clearInterval() - stop the interval 

setTimeout(() => {
    clearInterval(interval);
}, 5000);

//setTimeout() - execute a function after ‘n’ milliseconds

setTimeout(() => {
    console.log('Delayed message');
}, 2000);

//setImmediate() - execute a function immediately

setImmediate(() => { console.log('Immediate message') }, 0);

//addEventListener() - add an event listener to the window

function handleClick() {
    console.log('Button clicked');
}
document.addEventListener('click', handleClick);

//removeEventListener() - remove an event listener from the window

// To remove the event listener after a certain condition
document.removeEventListener('click', handleClick);

