// https://javascript.info/constructor-new

// implement reusable object creation code 

function User(name) {
  this.name = name;
  this.isAdmin = false; 
}

// a new object is created and assigned to this "userJack"
let userJack = new User("Jack"); 

console.log(userJack.name)
console.log(userJack.isAdmin)

let userCarmen = new User("Carmen");
console.log(userCarmen)

/** Immediately called constructor  */
const jhon = new function() {
  this.name = "Jhon";
  this.isAdmin = true

  this.sayName = function() {
    console.log(this.name)
  }
}

jhon.sayName()

// This constructor can't be called again, because it is no saved anywhere,
// just created and called.

/** new.target */
function Person(name, age) {
  if(!new.target) {
    return new Person(name, age)
  }

  this.name = name;
  this.age = age;

  this.sayName = () => {
    console.log(this.name)
  }
    
}

const carlos = Person("Carlos", 33)
carlos.sayName()

// This approach is sometimes used in libraries to make the syntax more flexible
// so that people may call the function with or without new, and it sill works

/** Return */
// Return with an object returns that object, in all other cases 'this' is
// returned 

function BigUser() {
  this.name = "John"

  return { name: "Godzilla" }
}

console.log( new BigUser().name )