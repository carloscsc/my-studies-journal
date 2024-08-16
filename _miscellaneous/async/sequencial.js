const asyncFunc1 = () => Promise.resolve('one')
const asyncFunc2 = () => Promise.resolve('two')

asyncFunc1()
  .then(result1 => {
    console.log(result1)
    return asyncFunc2() // Other promise
  })
  .then(result2 => {
    console.log(result2)
  })

// with Promise.all([])
Promise.all([asyncFunc1(), asyncFunc2()])
  .then(arr => {
    console.log(arr)
  })

