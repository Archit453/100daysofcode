const d1 = document.getElementById('description1')
const d2 = document.getElementById('description2')
const d3 = document.getElementById('description3')

// d1.textContent = 'Hello'
// d2.innerHTML = 'Hello'
// d3.innerText = 'Hello'

// d1.textContent = '<span> Why??</span>'
// d2.innerHTML = '<span> Why??</span>'
// d3.innerText = '<span> Why??</span>'

const test = `
Hello Students
<span style="display:none">Hidden Text</span>
<b>Bold Text</b>
`;

d1.textContent = test
d2.innerHTML = test
d3.innerText = test