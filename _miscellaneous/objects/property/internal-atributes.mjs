import assert from 'node:assert/strict'

const obj = {
  name: 'Carlos',
  age: 33,
  increaseAge() {
    this.age++
  }
}
console.log(obj)

// Defines the property 
Object.defineProperty(obj, 'name', {
  value: 'Arthur',
  writable: false // determine if a value can be changed
})

console.log(obj)

// Return a error
try {
  obj.name = 'Carlos'
} catch(e) {
  console.log(e)
}

console.log(obj)

// Get a property Descriptor 
console.log(Object.getOwnPropertyDescriptor(obj, 'age'))