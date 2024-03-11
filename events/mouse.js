//mouse events

mousedown
mouseup
click
dblclick
mouseover //moved over an element or one of its child elements
mousemove // mouse is moved over the element
mouseenter //Similar to mouseover but does not bubble
mouseout // moved out of an element
mouseleave // Similar to mouseout but does not bubble
contextmenu //right-clicked on an element

/* mousedown, mousemove and mouseup can be used in combination to track drag-and-drop events */

//example - check which mouse button was pressed using button property

const link = document.getElementById('my-link')
link.addEventListener('mousedown', event => {
  // mouse button pressed
  console.log(event.button) //0=left, 2=right
})

//properties 

altkey //true if the alt key was pressed
button 
clientX clienty //coordinates of the mouse pointer relative to the window
ctrlKey 
metakey //windows key on windows, command key on mac
movementx movementy // the distance the mouse has moved
region //the region of the mouse pointer
relatedTarget //the element related to the event
screenX screenY //coordinates of the mouse pointer relative to the screen
shiftKey 


