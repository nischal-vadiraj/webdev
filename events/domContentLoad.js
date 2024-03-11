// DOMContentLoaded event - fires when the initial HTML document has been completely loaded

    document.addEventListener('DOMContentLoaded', () => {
      alert('the DOM is fully loaded!')
    })

//event object - contains information about the event that has occurred

/*event handler gets an Event object as the first parameter */

const link = document.getElementById('my-link')
link.addEventListener('click', event => { //event is the event object
  // link clicked
})

/* This object contains a lot of useful properties and methods, like:
- event.target - the element that triggered the event
- event.type - the type of the event
- event.preventDefault() - prevents the default action of the event
- event.stopPropagation() - stops the event in the DOM tree */

//stop the propagation by calling the stopPropagation() 

/*<html>
  <body>
    <section>
      <a id="my-link" ...></section> */ 

/* a tag will propagate to section and then body - to its parent elements unless it is stopped*/

const link1 = document.getElementById('my-link')
link.addEventListener('mousedown', event => {
  // process the event

  event.stopPropagation()
})

