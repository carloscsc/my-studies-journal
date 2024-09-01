// Creating Object via an object Literal 
const myObject = {
  myProperty: 1,
  b: {
    a: 1
  },
  myMethod() {
    return 2
  },
  get myAccessor() {
    return this.myProperty
  },
  set myAccessor(value) {
    this.myProperty = value
  }
}

console.log(myObject.myProperty) //1
console.log(myObject.myMethod()) //2
console.log(myObject.myAccessor) //1
myObject.myAccessor = 3
console.log(myObject.myProperty) // 3
console.log(myObject.myAccessor) // 3

// Copy a object with spreading 
const copy = {
  ...myObject
}

console.log(copy)
copy.myProperty = 4
console.log(myObject,copy)

// It not a deep copy, so b is a reference to b property in the original object
copy.b.a = 6
console.log(myObject,copy)

