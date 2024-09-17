// Cannot contain duplicated value

const mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(1); // Will not be add

console.log(mySet);

// converter to array
const arrayFromSet = Array.from(mySet);
console.log(arrayFromSet);

// Set Operations
const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);

const union = new Set([...setA, ...setB]);
console.log(union);

const intersection = new Set([...setA].filter((x) => setB.has(x)));
console.log(intersection);

const diff = new Set([...setA].filter((x) => !setB.has(x)));
console.log(diff);

// Using to remove duplicated entries in a array
const numbers = [1, 2, 3, 3, 5, 5, 7, 1, 2, 0];
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers);
