// [[Prototype]]

let animal = {
  eats: true,
  walk() {
    console.log('Animal Walk');
  },
};

let rabbit = {
  jumps: true,
};

rabbit.__proto__ = animal;

console.log(Object.getPrototypeOf(animal));
console.log(Object.getPrototypeOf(rabbit));

// there is a prototype chain
let longEar = {
  earLength: 10,
  __proto__: rabbit,
};
console.log(Object.getPrototypeOf(longEar));

longEar.walk();
