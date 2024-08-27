import assert from 'node:assert/strict';

const obj = {
  name: 'Carlos',
  age: 33,
  increaseAge() {
    this.age++;
  },
};
console.log(obj);

// Defines the property
Object.defineProperty(obj, 'name', {
  value: 'Arthur',
  writable: false, // determine if a value can be changed
});

console.log(obj);

// Return a error
try {
  obj.name = 'Carlos';
} catch (e) {
  console.log(e);
}

console.log(obj);

// Get a property Descriptor
console.log(Object.getOwnPropertyDescriptor(obj, 'age'));

// transform property into non-enumerable
Object.defineProperty(obj, 'increaseAge', {
  enumerable: false,
});

// now increaseAge will note be listed
for (let key in obj) {
  console.log(key);
}

/** Non Configurable */

// Math.PI is non-writable, non-enumerable and non-configurable
let Descriptor = Object.getOwnPropertyDescriptors(Math, 'PI');
console.log(Descriptor);

// Error, because of configurable: false
// So the property ca'not bet configurable again
// Object.defineProperty(Math, "PI", { writable: true });

const toFreeze = {
  status: "It's cold as hell here!",
};

Object.freeze(toFreeze);

// toFreeze.status = 'Now is warm!'; // Cannot assign to read only property 'status' of object
