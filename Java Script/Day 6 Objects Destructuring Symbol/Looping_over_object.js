const user = {
  name: "Alice",
 forklift: "Linde",
  age: 30,
  isStudent: true
};

const keys = Object.keys(user)

// console.log(keys)

for (const key of keys) {
  const value = user[key];
  console.log(key);
  console.log(value)
}

// const keys = Object.keys(user);
// // keys is now: ["name", "age", "isStudent"]

// // Now we can use a simple for...of loop on this new array
// for (const key of keys) {
//   // To get the value, we use bracket notation on the original object
//   const value = user[key];

//   console.log(`The key is "${key}" and the value is "${value}".`);
// }
