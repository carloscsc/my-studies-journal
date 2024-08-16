fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(response => response.text())
.then(text => {
  console.log(text)
})
.catch(e => {
  console.log(`Error: ${e}`)
})