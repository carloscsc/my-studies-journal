// Map is a key collection, that accept any value as key
// Map is case insensitive
// Watch later: https://www.youtube.com/watch?v=4UqSqF4foy4


// create a map
const map = new Map();

map.set('Name', 'Carlos');
map.set('Age', 32);
map.set('Country', 'Brazil');

// Log the map
console.log(map);

// get the size of the Map
console.log(map.size);

// Get one value
console.log(map.get('Name'));

// Search for a key
console.log(map.has('Age')); // True
console.log(map.has('Profession')); // False

// Delete a key pair
map.delete('Country');
console.log(map);

// Loop through a Map
map.forEach((value, key) => {
  console.log(`[${key}]: ${value}`);
});

// Loop it for..of
for (const [key, value] of map) {
  console.log(`[${key}]: ${value}`);
}

// Loop through Values
for (const value of map.values()) {
  console.log(value);
}

// Loop through Keys
for (const key of map.keys()) {
  console.log(key);
}

// clear a map
map.clear();

console.log(map);

// Using a function as key and value
const funcMap = new Map();
const sayHi = () => 'Hi!!';
funcMap.set(sayHi, sayHi());
console.log(funcMap.get(sayHi));
console.log(funcMap);

// Converter regular object into map
const person = {
  name: 'Carlos',
  Age: 33,
  Profession: 'Software Engineer',
};

const Person = new Map(Object.entries(person));
console.log(Person);
