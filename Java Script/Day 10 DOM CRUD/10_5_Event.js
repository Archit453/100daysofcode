// Modern way :- addEventListner

const element = document.getElementById("event-playground")

// 1. Mouse Events
element.addEventListener('click', (e) => console.log('Clicked',e));
element.addEventListener('dblclick', (e) => console.log('Double clicked',e.target));
// element.addEventListener('mousedown', (e) => console.log('Mouse down')); //When Pressed
// element.addEventListener('mouseup', (e) => console.log('Mouse up')); //When released
// element.addEventListener('mousemove', (e) => console.log('Mouse moving')); //When mouse pointer moves
// element.addEventListener('mouseenter', (e) => console.log('Mouse entered')); //When mouse enters the element
// element.addEventListener('mouseleave', (e) => console.log('Mouse left')); // When mouse leaves the element
// element.addEventListener('mouseover',() => console.log('Mouse over')); // Fires whenever the mouse enters the element or any of its children.
// element.addEventListener('mouseout',() => console.log('Mouse out')); // Fires whenever the mouse leaves the element or any of its children.


// 2. Keyboard Events
// document.addEventListener('keydown', (e) => {
//   console.log('Key down:', e.key);
//   // console.log('Key code:', e.code);
//   // console.log('Ctrl pressed:', e.ctrlKey);
//   // console.log('Shift pressed:', e.shiftKey);
//   // console.log('Alt pressed:', e.altKey);
// });

// document.addEventListener('keyup', (e) => console.log('Key released'));
// document.addEventListener('keypress', (e) => console.log('Key press',e.key)); // Deprecated -- Older, Avoid


// 3. Form Events

const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const selectCountry = document.getElementById('country');
const form = document.querySelector('form');

// inputName.addEventListener('focus', () => console.log('Input Name focused'));  //Fires when an element receives focus.
// inputEmail.addEventListener('focus', () => console.log('Input Email focused'));
// selectCountry.addEventListener('focus', () => console.log('Select Country focused'));


// inputName.addEventListener('blur', () => console.log('Input Name blured'));  //Fires when an element loses focus.
// inputEmail.addEventListener('blur', () => console.log('Input Email blured'));
// selectCountry.addEventListener('blur', () => console.log('Select Country blured'));

// inputName.addEventListener('input', (e) => console.log('Input Name inputed',e.target.value));  //Fires every time the value changes.
// inputEmail.addEventListener('input', (e) => console.log('Input Email inputed',e.target.value));
// selectCountry.addEventListener('input', (e) => console.log('Select Country inputed',e.target.value));

// inputName.addEventListener('change', (e) => console.log('Input Name changeed',e.target.value));  //Fires when the value is committed.
// inputEmail.addEventListener('change', (e) => console.log('Input Email changeed',e.target.value));
// selectCountry.addEventListener('change', (e) => console.log('Select Country changeed',e.target.value));

// form.addEventListener('submit', (e) => {  
//   e.preventDefault(); // Prevent form submission
//   console.log('Form submitted',e.target.elements.name.value);
// });  //Fires when a form is submitted.


// 4. Window Events

// window.addEventListener('load', () => console.log('Page fully loaded')); 
// //Fires when everything is loaded

// window.addEventListener('DOMContentLoaded', () => console.log('DOM ready')); 
// //Fires when the HTML has been parsed and the DOM is ready. Does not wait for images.

// window.addEventListener('resize', () => console.log('Window resized',window.innerWidth));
// //Fires whenever the browser window size changes.

// window.addEventListener('scroll', () => console.log('Page scrolled',window.scrollY));
// //Fires whenever the page scrolls.


// For removing event listner

const button = document.querySelector('button');

function handle(){
    button.textContent = "Clicked";
    button.removeEventListener('click',handle);
}



button.addEventListener('click',handle);