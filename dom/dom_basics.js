// DOM - browser’s internal representation of a web page

/* Based on this model, the browser then renders the page on the screen */

/* modren js frameworks - they use the DOM API to tell the browser what to display on the page */

/* 
- inspect the page structure
- access the page metadata and headers
- edit the CSS styling
- attach or remove event listeners
- edit any node in the page
- change any node attribute
*/

//main 2 objects provided by the DOM API

window //represents the browser window
document //represents the web page

//DOM tree - hierarchical representation of the web page

/* each node is an object representing a part of the page
Document,Element,Attr,Text,Comment,DocumentType
*/

//Traversing the DOM - navigate the DOM structure and move to different nodes
//getting the parent, child, and sibling nodes

/* root - document node -> html element node -> head and body element nodes -> title and meta element nodes -> text nodes */

//editing the DOM - change the content of the page

document.createElement() //create a new element
document.createTextNode() //create a new text node

