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

// now these two objects hold a reference to the same point of
// of the memory, so change one will affect the other
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
// because object1 and object2 are sharing the same reference in the memory
// for value property
object1.value = 15;
object2; //?

// Change object2 will change object2 too
object2.otherValue = 15;
"otherValue" in object1; //?
object3.value = 0;
object3.otherValue = 15; //?
object3.anotherValue = 15; //?

// cloning objects
const systemUser = {
  name: "Carlos",
  isAdmin: true,
};
systemUser.name; //?

// get all properties of systemUser
let subscriber = Object.assign({}, systemUser);

subscriber; //?
subscriber.name = "John";
subscriber; //?

// Then, system user will not change
systemUser; //?

// other way to clone user spread
editorUser = { ...subscriber };
editorUser; //?
editorUser.name = "Michael";
// so data will not change
editorUser; //?
subscriber; //?
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

//cloning objects
let clone = {};

for (let key in user) {
  clone[key] = user[key];
}

console.log(clone);
clone.name = "John";
console.log(clone);
console.log(user.name);
user.name = "Richard";
console.log(clone);

// Other method is use assign, it'll merge the empty array with the key and value
// of a source array
const secondClone = {};
Object.assign(secondClone, user);
console.log(secondClone);
user.name = "Pablo";
secondClone.name = "Peter";
console.log(secondClone);

const colorPalet = {
  whitColors: ["whit", "sky blue"],
};

const blackColors = ["grey", "deep dark"];

Object.assign(colorPalet, { blackColors: blackColors });
console.log(colorPalet);

let person = {
  name: "John",
  sizes: {
    height: 182,
    width: 50,
  },
};

let clonePerson = Object.assign({}, person);

console.log(person.sizes === clonePerson.sizes); // true, same object

// person and clone share sizes
// In this case, person and clonePerson, are sharing the same spot in the memory
// So change one will reflect in another
person.sizes.width = 60;
person.name = "Carlos"; // change a property from one place
console.log(clonePerson.name);
console.log(clonePerson.sizes.width);

// Using a structuredClone
// Clone objects with all nested properties
ClonePerson2 = structuredClone(person); // https://developer.mozilla.org/en-US/docs/Web/API/structuredClone

person.sizes.width = 80;
person.name = "Carlos";

// now the changes in Person aren't reflected on ClonePerson2
console.log(ClonePerson2.name);
console.log(ClonePerson2.sizes.width);

// check is object is empty 
function isEmpty(obj) {
  for(key in obj) {
    return false
  }

  return true
}

const any = {

}

console.log(isEmpty(user))
console.log(isEmpty(any))