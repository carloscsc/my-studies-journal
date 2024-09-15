// Object.create()

const a = { x: 10, y: 15 };

const b = Object.create(a);

b.p = 100;
b.q = 200;

console.log(b);

// Create a object with no prototype
const c = Object.create(null);
console.log(c);
