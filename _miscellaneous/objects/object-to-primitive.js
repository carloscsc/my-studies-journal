/** Symbol.toPrimitive */ 

let user = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    console.log(`hint: ${hint}`)
    return hint === "string" ? `{name: ${this.name}}` : this.money
  }
}

console.log(user)

// Without Symbol.toPrimitive it will return NaN
console.log(+user)

// perform the sum   
console.log(user + 500)

/** toString and valueOf */
let admin = {
  name: "Carlos",
  money: 1000,

  // for hint="string"
  toString() {
    return this.name
  },

  // to hint="number" or "default"
  valueOf() {
    return this.money
  }
}

console.log("user: " +  admin)
console.log(+admin)
console.log(admin + 500)
