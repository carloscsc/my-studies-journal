// using Quokka to console

const array = ["c", "d", "e", "b", "a"];

// Array sort, return new array
const sortedArray = array.sort(); //?
sortedArray; //?

// Doesn't work well with numbers
const numberArray = [1, 100, 3, 40, 30, 1000];
numberArray.sort(); //?

// join
const joinStr = array.join("-"); // return a str
joinStr; //?
typeof joinStr; //?

// concat merge two arrays, return new array
const concatenatedArr = array.concat(numberArray);
concatenatedArr; //?

// push vs concat
array; //?
array.push(numberArray);
array; //?
// When use push, an array is add inside a original array
// concat the data of the origin is merged with the new in a single array
// concat don't chance the original array they return a new one instead

// by reference
const array1 = [0, 1, 2];
const array2 = array1;
array2; //?
array1.push(3);
array2; //?

// you can use destructuring to to create another independent
const array3 = [...array1];
array3; //?
array1.push(4);
array1; //?
array2; //?
array3; //?

const spices = [
  { name: "Emma", nickname: "Baby" },
  { name: "Geri", nickname: "Ginger" },
  { name: "Mel B", nickname: "Scary" },
  { name: "Mel C", nickname: "Sporty" },
  { name: "Victoria", nickname: "Posh" },
];

/** MAP */
// short way, reduce and return
const nickname1 = spices.map((s) => s.name);
nickname1; //?

// other way
spices.map((spice, index) => {
  console.log(`${index} | ${spice.name}`);
});

/** FILTER */
const namesWithoutSpace = spices.filter((s) => !/[\s]/.test(s.name));
namesWithoutSpace; //?

/** REDUCE */
