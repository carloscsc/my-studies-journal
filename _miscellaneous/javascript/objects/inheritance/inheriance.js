// [[Prototype]] - https://javascript.info/prototype-inheritance

let animal = {
  eats: true,
  walk() {
    console.log('Animal Walk');
  },
};

let rabbit = {
  jumps: true,
  __proto__: animal,
};

console.log(Object.getPrototypeOf(animal));
console.log(Object.getPrototypeOf(rabbit));

// there is a prototype chain
let longEar = {
  earLength: 10,
  // __proto__: rabbit,
  walk() {
    // Execute without search in the prototype
    console.log('Long Ear own Walk!');
  },
};
Object.setPrototypeOf(longEar, animal);
console.log(Object.getPrototypeOf(longEar));

longEar.walk();
