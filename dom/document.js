//The document object represents the DOM tree loaded in a window.

//propeties and methods - Selectors API methods

/*
<div id="parent">
    <div class="child">Child 1</div>
    <div class="child special">Child 2</div>
    <div class="child">Child 3</div>
    <p>Paragraph</p>
</div>
*/

// document.getElementById()
let parent = document.getElementById('parent');
console.log(parent); // div with id parent

// document.querySelector()
let firstChild = document.querySelector('.child');
console.log(firstChild); // first div with class child

// document.querySelectorAll()
let allChildren = document.querySelectorAll('.child');
console.log(allChildren); // NodeList of all divs with class child

// document.getElementsByTagName()
let paragraphs = document.getElementsByTagName('p');
console.log(paragraphs); // HTMLCollection of all p elements

// document.getElementsByClassName()
let specialChildren = document.getElementsByClassName('special');
console.log(specialChildren); // HTMLCollection of all elements with class special



