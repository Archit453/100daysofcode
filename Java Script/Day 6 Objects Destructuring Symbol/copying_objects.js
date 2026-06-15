//Shallow Copy
// use the spread syntax (...) or Object.assign().

// Spread syntax (...) is the modern, cleaner way.

// Object.assign() is older and can also merge properties into an existing object.

const original = {
  name: "Alice",
  age: 30
};

const copy = original;

const diff_copy = { ...original };


//Spread

const copy2 = {...original}

// console.log(copy2)
// console.log(original)

copy2.name="rohan"

// console.log(copy2)
// console.log(original)


//Object.assign
const diff_copy2 = Object.assign({}, original);
diff_copy2.name = "archit"

// console.log(original)
// console.log(diff_copy2)


//We can also merge in Object.assign()
const obj1 = {
  place: "Sahidnagar"
}
const diff_copy3 = Object.assign(obj1, original);

// console.log(obj1)
// console.log(diff_copy3)
// console.log(original)

//Merging using spread operator

const obj2 = {
  place: "Sahidnagar",
  city: "BBSR"
}

const copy3 = {...original,...obj2}

// console.log(copy3)
// console.log(original)
// console.log(obj2)

// console.log("Changing values")

copy3.name = "Mohan"
copy3.place = "Patia"
// console.log(copy3)
// console.log(original)
// console.log(obj2)

//Shallow copy

const account = {
  amount: 1200,
  about: {
    name:"archit",
    age: 21
  }
}

// const copy_account = {...account}

// copy_account.amount = 2000
// copy_account.about.name = "Rohit"

// console.log(account)
// console.log(copy_account)

//Deep copy
 const copy_account = structuredClone(account)
 
copy_account.amount = 2000
copy_account.about.name = "Rohit"

console.log(account)
console.log(copy_account)
