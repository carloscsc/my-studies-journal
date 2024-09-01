// https://javascript.info/object-methods

// the value of this is the object "before dot"
// The one used to call the method.
// The value of This is defined ate run-time

// When a function is declares, it may use this, but that this has no
// value until the function is called 

// When a function is called in the “method” syntax: object.method(), 
// the value of this during the call is object.

let user = {
  name: "John",
  age: 30,

  // direct to the object 
  sayHi() {
      console.log(`Hello ${this.name}`) 
  },

}

user.sayHi()

let admin = user;
admin.name = "Peter"
admin.sayHi()

/** Arrow functions don't have THIS */
// so they you use parent scope
let arrowUser = {
  firstName: "Ilya",
  sayHi() {
    let arrow = () => console.log(this.firstName)
    arrow()
  }
}

arrowUser.sayHi() 


/** Chaining */
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { // shows the current step
    console.log(this.step)
    return this;
  }
}
ladder.up().up().down().showStep().down().showStep().up().showStep();