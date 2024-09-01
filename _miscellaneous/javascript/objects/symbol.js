// https://javascript.info/symbol

let id = Symbol(); 

// Symbol name, most useful for debugging 
let namedID = Symbol('namedID')

console.log(id)
console.log(namedID)

//  using Symbol in a Object literal
const user = {
  name: "John",
  [id]: 123
}

console.log(user[id])

// Symbols are Skipped by for..in

for(let key in user) {
  console.log(key)
}

// Object.keys also ignore then 
console.log(Object.keys(user))

/** Global Symbol */
let newID = Symbol.for("newID")
console.log(newID)

let IDAgain = Symbol.for('newID')
console.log(IDAgain)

if(newID === IDAgain) console.log(true);

// Symbol KeyFor
// it doesn't  work for non-global symbols
console.log(Symbol.keyFor(newID))
console.log(Symbol.keyFor(IDAgain))

// get Symbols from object 
console.log(Object.getOwnPropertySymbols(user))
console.log(user[Object.getOwnPropertySymbols(user)[0]])

// Other Method to get obj key
console.log(Reflect.ownKeys(user))