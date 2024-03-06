// DOM offers various methods to edit the nodes of the page and alter the document tree

document.createElement() //create a new element

document.createTextNode() //create a new text node

document.appendChild() //add a new child node to the end of the list of children of a node 

const div = document.createElement('div')
div.appendChild(document.createTextNode('Hello world!'))

first.removeChild(second) //removes the child node “second” from the node “first”

document.insertBefore(newNode, existingNode) //inserts the node “newNode” before the node “existingNode” in the list of child nodes

element.appendChild(newChild) //adds a new child node to the end of the list of children of a node

element.prepend(newChild) //adds a new child node to the beginning of the list of children of a node

element.replaceChild(newChild, existingChild) //replaces the child node “existingChild” with the node “newChild”

element.insertAdjacentElement(position, newElement) //inserts a new element node at a specified position relative to the element

element.textContent = 'new text' //sets the text content of the element

