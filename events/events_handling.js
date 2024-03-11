//event handler - respond to events which is a function that is called when enent occurs 

//three ways to handle events

//inline event handling

<a href="#" onclick="alert('link clicked')">A link</a>

// DOM on-event handlers

document.querySelector('a').onclick = () => {
    alert('link clicked')
  }

//addEventListener - modern way 

window.addEventListener('load', () => {
    //window loaded
  })

document.querySelector('div').addEventListener('click', () => {
  //
})



