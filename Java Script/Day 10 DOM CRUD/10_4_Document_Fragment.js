const container = document.getElementById("main-container");


// 1. Without document.fragment
// for(let i = 1; i <= 5; i++) {
//     const p = document.createElement("p");
//     p.textContent = `Item ${i}`;

//     container.appendChild(p);
// }

//What happens??
// container.appendChild(p1)
// container.appendChild(p2)
// container.appendChild(p3)
// container.appendChild(p4)
// container.appendChild(p5)


// // 2. Without document.fragment
// const fragment = document.createDocumentFragment();

// for(let i = 1; i <= 5; i++) {
//     const p = document.createElement("p");
//     p.textContent = `Item ${i}`;

//     fragment.appendChild(p);
// }

// container.appendChild(fragment);


// //What happens??
// // fragment.appendChild(p1)
// // fragment.appendChild(p2)
// // fragment.appendChild(p3)
// // fragment.appendChild(p4)
// // fragment.appendChild(p5)

// // container.appendChild(fragment)


// // 3. With Array

// const nodes = [];

// for(let i = 1; i <= 5; i++) {
//     const p = document.createElement("p");
//     p.textContent = `Item ${i}`;

//     nodes.push(p);
// }

// container.append(...nodes);


// //What happens??
// // nodes.push(p1)
// // nodes.push(p2)
// // nodes.push(p3)
// // nodes.push(p4)
// // nodes.push(p5)

// // container.append(...nodes)


const fragment = document.createDocumentFragment();

fragment.appendChild(document.createElement("p"));
fragment.appendChild(document.createElement("p"));

console.log(fragment.childNodes.length); // 2

container.appendChild(fragment);

console.log(fragment.childNodes.length); // 0