// One way: with then 
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json()) // response.json return another promise
  .then(json => {
    console.log("First", json);
  })
  .catch(err => console.log(err))

// Exec getData here to see witch console will be print fist 
getData()

// Other Way with async func
async function getData() {
  try {

    // await pauses the current async function and returns from it
    // Once the awaited result is ready, the execution of the function
    // continues where it left off
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    const json = await response.json()
    
    console.log("Second", json)
  
  } catch(err) {

    console.log(err)

  }
}
getData()

console.log('last')

/*
  Results: 
  
  In my observation, sometimes, when the fetch occurs in a small file, 
  then the response is fast, the order of console is 
  
  -> last
  -> first
  -> second
  -> second

  but, when fetch in a large file, that tend to take more time to response,
  async/await run in a better performance. 
  
  Then the order of console tend to be

  -> last
  -> second
  -> first 
  -> second
*/