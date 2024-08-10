// https://javascript.info/object-methods

// the value of this is the object "before dot"
// The one used to call the method.

let user = {
  name: "John",
  age: 30,

  // direct to the object 
  sayHi() {
      console.log(`Hello ${this.name}`)
  },

}

user.sayHi = function() {
  console.log(`${this.name}, you are Welcome`)
}

user.sayHi()