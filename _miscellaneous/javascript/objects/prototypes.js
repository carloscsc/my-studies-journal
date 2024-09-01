// https://www.codeguage.com/courses/js/objects-prototypes

// For a given object O, the object from which O inherits
// properties is called the prototype of O.

function Point(x = 0, y = 0) {
  this.x = x;
  this.y = y

  this.setTo = function(x, y) {
    this.x = x;
    this.y = y;
  }
}

const myPoint = new Point(10, 11)
console.log(myPoint)
myPoint.setTo(20, 30)
console.log(myPoint)

// Every object in JavaScript has an internal [[Prototype]] 
// attribute which contains a reference to its prototype.

var arr = [10, -5, 60]

/*

// internal representation of arr
arr: {
    0: 10,
    1: -5,
    2: 60,
    length: 3,
    [[Prototype]]: Array.prototype
}
  This is not a complete illustration of all the internal attributes 
  of an array, or an object in general. For now, we're only concerned 
  with [[Prototype]] and hence only showcase that for simplicity.
*/

/** Object.create() */

let a = {x: 10, y: 20}
let b = Object.create(a)

console.log(b)

b.q = 100 
b.p = 200

console.log(b)
console.log(a)
