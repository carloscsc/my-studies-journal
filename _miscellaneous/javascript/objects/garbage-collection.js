// https://javascript.info/garbage-collection

let user = {
  name: "John"
}

let admin = user 
console.log(user)
console.log(admin)

user = null
console.log(user)

// Will keep the reference to the property name
// Because this still reachable in admin 
// if admin lost the reference, Garbage Collector
// will remove `name` from the memory
console.log(admin)

// Outgoing references not matter. 
//Only incoming ones can make an object reachable