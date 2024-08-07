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

// integer properties are sorted
const codes = {
  49: "Germany",
  1000: "Mars",
  1: "Brazil",
  10: "Paris",
  2: "NW",
  name: "value",
};

for (let code in codes) {
  code; //?
}

// delete unary operator
delete codes[49];
delete codes.name;
codes; //?
"name" in codes; //?

// Properties of object
Object.keys(codes); //?
Object.keys(wife); //?

// assign Copy and merge all properties from one object to another
// and also can return a new object with te result
let objectA = { a: 1, b: 2 };
let objectB = { b: 3, c: 4 };
objectA; //?
objectB; //?
let objectC = Object.assign(objectA, objectB);
objectA; //?
objectB; //?
objectC; //?

// Object are mutable
let object1 = { value: 10 };
let object2 = object1;
let object3 = { value: 10 };
object1; //?
object2; //?
object3; //?

// so object1 and object2 are the same
object1 === object2; //?
object1 === object3; //?
object1.value == object3.value; //?

// the value of object 2 will change
object1.value = 15;
object2; //?

// Change object2 will change object2 too
object2.otherValue = 15;
"otherValue" in object1; //?
object3.value = 0;
object3.otherValue = 15; //?
object3.anotherValue = 15; //?

/**
 * Function for deep compare one object to another
 * @param {Object} obj1
 * @param {Object} obj2
 * @returns Boolean
 */
function deepEqual(obj1, obj2) {
  const keysObj1 = Object.keys(obj1); //?
  const keysObj2 = Object.keys(obj2); //?

  // check the size
  if (keysObj1.length !== keysObj2.length) {
    return false;
  }

  for (let key of keysObj1) {
    // check the keys
    if (!keysObj2.includes(key)) {
      return false;
    }

    // check the value
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

deepEqual(object1, object2); //?
deepEqual(object1, object3); //?

/** BUILD-IN  OBJECTS */
// or global objects
