function timesTwoSync(x) {
  return 2 * x
}

const arr = [1, 2, 3]

const result = arr.map(timesTwoSync)

console.log(result)

// Array of promises 
function timesToAsync(x) {
  return new Promise(resolve => resolve(x * 2))
}

const asyncArr = [1, 2, 3]
const promiseArr = arr.map(timesToAsync)

Promise.all(promiseArr)
  .then(result => {
    console.log(result)
  })

// More realistic example 
