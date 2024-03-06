//dom traversing - navigate the DOM structure and move to different nodes

/* root - document node -> html element node -> head and body element nodes -> title and meta element nodes -> text nodes */

//Getting the parent

Node.parentNode //returns the parent of the specified node in the DOM tree

Node.parentElement //returns the DOM node’s parent Element

//getting the children

Node.hasChildNodes() //returns a Boolean value

Node.childNodes //returns a NodeList of child nodes

Node.children //returns an HTMLCollection of child elements

Node.firstElementChild //get the first child element node

Node.lastElementChild //get the last child element node

Node.firstChild //get the first child node

Node.lastChild //get the last child node  

//getting the siblings

Node.previousElementSibling //get the previous sibling element node

Node.nextElementSibling //get the next sibling element node



