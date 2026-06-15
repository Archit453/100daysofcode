// A. get Elements By Name

const test_playground = document.getElementsByName('Playground');

//Traversing the DOM:

const itemList = document.getElementById('whole');

const parentContainer = itemList.parentElement;

const listChildren = itemList.children;
// If the variable contains one DOM node, traversal properties work directly.

// If it contains many nodes (NodeList/HTMLCollection), first select one node, then traverse from it.