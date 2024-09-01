/*
 
Difference between the terms 'asynchronous function' and 'async''

- asynchronous function is any function that delivers it result 
asynchronously

- An async function is defined via special syntax, involving 
the keywords 'async' and 'await'. Async function are based on Promises 
and therefore also asynchronous function. 


*/


const assert = require('assert');

const URL = 'https://jsonplaceholder.typicode.com/posts/1'

/** The Basis */
// async function fetchJsonAsync(url) {

//   try {
//     const request = await fetch(url)
//     const json = await request.json()
//     return json;
//   } catch(error) {
//     assert.fail('error')
//   }

// }

/** Async Constructs */

// Async function declaration
async function func1() {}

// Async function expression
const func2 = async function() {}

// Async arrow Function
const func3 = async () => {}

// Async method definition in a object literal 
const obj = { async m() {} }

// Async method definition in a class definition
class MyClass { async m() {} }

/** Return from Async Functions */

// async function asyncFunc() {
//   return 123
// }

// asyncFunc()
//   .then(result => {
//     assert.equal(result, 123)
//   })

// reject 
// async function rejectAsyncFunc() {
//   throw new Error('Problem!')
// }
// rejectAsyncFunc()
//   .then()
//   .catch(err => {
//     console.log(err)
//     assert.deepEqual(err, new Error('Problem!'))
//   })

/** Executing async functions: synchronous start, asynchronous settlement */

// The following code demonstrates that an async function is started  
// synchronous (A) then the current task finishes (C), then the result Promise
// is settled - asynchronously (B)


{
  async function asyncFunc() {
    console.log('asyncFunc() starts') // A
    return 'abc'
  }
  asyncFunc()
    .then(x => { // B
      console.log(`resolved: ${x}`) 
    })
  console.log('task ends') // C
}

