//Creating an object

//Method 1
const obj1 = {
  name : "Archit",
  age : 22
}

const obj2 = {}  // An empty object

//Method 2 (less used)
const obj3 = new Object()

// console.log(obj1)
// console.log(obj2)
// console.log(obj3)


//Reading an object

const user = {
  username: "archit",
  loginCount: 57,
  "is-premium-member": true
};

// Method 1 (dot notation)
// console.log(user.username)
// console.log(user.loginCount)
// console.log(user."is-premium-member")

//Method 2
// console.log(user["username"])
// console.log(user["loginCount"])
// console.log(user["is-premium-member"])

name_of_user = "username"
// console.log(user[name_of_user])


// Updating and Adding (Creating) in object

const book = {
  title: "The Hobbit"
};

// console.log(book)

// Update an existing property
book.title = "The Lord of the Rings";

// console.log(book)

// Add a new property
book.author = "J.R.R. Tolkien";

// console.log(book)


//Deleting Properties in an Object

delete book.author;
console.log(book);