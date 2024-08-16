/*

  - Promise are a placeholder and container for the final result that
    we are waiting for
  - It is an object with which we can register listeners

*/

function addAsync(x, y) {
  return new Promise((resolve, reject) => {
    if (x === undefined || y === undefined) {
      reject(new Error('Must provide two parameters'))
    } else {
      resolve(x + y)
    }
  })
}
addAsync(10, 10)
  .then(result => { console.log(result) })
  .catch(error => { console.log(error) })



/** Resolve and Reject */

// resolve - Convert a that may or may not be a Promise
// to a value that is guaranteed to be a Promise 

Promise.resolve(123)
  .then(x => { console.log(x) })

const abcPromise = Promise.resolve('abc');
console.log(abcPromise)
abcPromise.then(value => { console.log(value) })

// reject 
const myError = new Error('My error!')
Promise.reject(myError)
  .catch(err => { console.log(myError) })

// .then() and .catch() returns will return a new promise 
Promise.resolve('abc')
  .then(str => str + str)
  .then(strDouble => console.log(strDouble))

// the advantage is that avoid nested functions and give more "flat" code

// The same happen with the catch
Promise.reject('default')
  .catch(e => 'default value')
  .then(str => { console.log(str) })

/** FINALLY */
// Finally is alway executed independently of Promise and the values 
// returned by then() and catch()
// One common use case for finally() is cleaning

function loadPost() {
  return new Promise((resolve, reject) => {
    const id = setTimeout(() => resolve('ok'), 2000)
    if (!id) {
      reject('Time Error')
    }
  })
}

let isWaiting = true
loadPost()
  .finally(() => {
    console.log('Do something first')
  })
  .then(status => {
    console.log(status)
  })
  .catch(err => { console.log(err) })
  .finally(() => {
    console.log('Do something after')
    isWaiting = false
    console.log("isWaiting is: ", isWaiting);
  })

console.log("isWaiting is: ", isWaiting);

/** PROMISE WITH RESOLVERS */
const isTrue = true;
const { promise, resolve, reject } = Promise.withResolvers();

if(isTrue) {
  resolve('A string')
} else {
  reject(new Error('is note true'))
}

promise
  .then(value => { console.log(value)} )
  .catch(err => { throw err })