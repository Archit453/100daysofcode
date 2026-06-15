// A. Manipulating elements that has id
const element1 = document.getElementById('title')
element1.style.border = '2px solid red';

// B. Manipulating elements By Tag Name
const all_li = document.getElementsByTagName('li')

for (let i = 0; i < all_li.length; i++) {
  all_li[i].style.fontStyle = 'italic';
}


// C. Manipulating elements By Class Name
const element_class = document.getElementsByClassName('Btn')

element_class[0].style.border = '4px solid blue'