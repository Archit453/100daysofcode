// There are 3 phases -- Capture Phase or Bubble phase decided by Target Phase


const grandParent = document.getElementById('grandparent')
const parent = document.getElementById('parent')
const child = document.getElementById('child')


grandParent.addEventListener('click',()=>{
    console.log("Grand parent is clicked")
},true)

parent.addEventListener('click',()=>{
    console.log("parent is clicked")
},false)


child.addEventListener('click',()=>{
    console.log("Child is clicked")
},true)

// Event bubbling

// capture phase