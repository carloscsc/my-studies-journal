/**
 * Objects
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
 * @link https://javascript.info/object
 */

// Object Literal
const user = {
  name: "Carlos", // key => value
  age: 33, // key => value
  "like birds": true,
};

// dot notation
user.isAdmin = true;

// delete
delete user.age;

console.log(user);
console.log(user.name);
console.log(user["like birds"]); // square bracket notation

// key as result of any expression
// The dot notation cannot be used in a similar way
let key = `like birds`;
console.log(user[key]);

// computed properties
const fruit = "apple";

const bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

console.log(bag.apple);
console.log(bag.fruit); // undefined, you can access only with obj key
// or square bracket referring the original variable
console.log(Object.keys(bag)); // ['apple']

// more complex expressions
const apple = {
  [fruit + "Computer"]: 5,
};

console.log(apple.appleComputer);

// shorthand
function makeUser(name, age) {
  return {
    name,
    age,
  };
}

const wife = makeUser("Nayara", 33); //?

// Property names doesn't have reserved names
let obj = {
  for: 1,
  let: 2,
  const: 3,
  return: function () {
    return `for: ${this.for}, let: ${this.let}, const: ${this.const} `;
  },
};

console.log(obj.return());

// access any properties even if its doesn`t exists
console.log(user.profileURL); // undefined

// in operator
if ("name" in wife) {
  console.log("true");
}

// in operator allow variables
key = "name";
if (key in wife) {
  console.log("true");
}

// for..in loop
for (key in wife) {
  console.log(key);
}

for (key in wife) {
  console.log(wife[key]);
}

// Ordered like an object - https://javascript.info/object#ordered-like-an-object
