// Creating, Adding, and Removing Elements

// 1. Creating a New Element: document.createElement()
const newParagraph = document.createElement('div');

newParagraph.innerHTML = "<p>This is a brand new paragraph created by JavaScript.</p>";
newParagraph.id = 'description4'

const parent = document.getElementById('main-container');
parent.append(newParagraph)
// 2. Append a New Element
// 2-1 . Adding Inside a Parent (as a Child)
// A. .append(...nodes)
// B. .prepend(...nodes)
// C. .appendChild(node)
// D. .insertBefore(newNode, referenceNode)

// const parent = document.getElementById('main-container'); //written at begin
// parent.append(newParagraph) //written at begin

const newPara1 = document.createElement('p')
const newPara2 = document.createElement('p')
const newPara3 = document.createElement('p')
const newPara4 = document.createElement('p')


newPara1.textContent = "This is for .append()"
newPara2.textContent = "This is for .prepend()"
newPara3.textContent = "This is for .appendChild()"
newPara4.textContent = "This is for .insertBefore()"

parent.append(newPara1)
// console.log(parent.append(newPara1)) //undefined

parent.prepend(newPara2)

parent.append(newPara3)
// console.log(parent.appendChild(newPara3)) //<p>This is for .appendChild()</p>

parent.insertBefore(newPara4, newPara2)

// 2-2 . Adding Next to an Element (as a Sibling)
// A. .after(...nodes)
// B. .before(...nodes)
// C. .insertAdjacentElement(position, element)


const newPara5 = document.createElement('p')
const newPara6 = document.createElement('p')
const newPara7 = document.createElement('p')
const newPara8 = document.createElement('p')
const newPara9 = document.createElement('p')
const newPara10 = document.createElement('p')

newPara5.textContent = "This is for .after()"
newPara6.textContent = "This is for .before()"
newPara7.textContent = "This is for .insertAdjacentElement() - beforebegin "
newPara8.textContent = "This is for .insertAdjacentElement() - afterbegin "
newPara9.textContent = "This is for .insertAdjacentElement() - 'beforeend "
newPara10.textContent = "This is for .insertAdjacentElement() - 'beforeend "

newPara1.after(newPara5)
newPara1.before(newPara6)

newParagraph.insertAdjacentElement("beforebegin",newPara7)
newParagraph.insertAdjacentElement("afterbegin",newPara8)
newParagraph.insertAdjacentElement("beforeend",newPara9)
newParagraph.insertAdjacentElement("afterend",newPara10)


// 3. Removing an Element

const element = document.getElementById('greetBtn')
element.remove()