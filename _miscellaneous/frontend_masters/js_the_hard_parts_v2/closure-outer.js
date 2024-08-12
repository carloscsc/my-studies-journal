/*
  Static ou Lexical Scope: Where you saved your functions determines 
  what data it has access to when you call it
*/

function outer() {
  let counter = 0; 
  
  return function incrementCounter() {
    counter++
    console.log(counter)
  }
}

// pass all surround data of outer to inc
// and for all label that get your return
const inc = outer()
const in2 = outer()

inc() 
inc() 
inc() 
inc() 
inc() 
inc() 
inc() 
inc() 
inc() 
inc() 

in2()
in2()
in2()
in2()
in2()
in2()
in2()
in2()


// Other way 
function myNewFunc() {
  let counter = 0;
  return () => { 
    counter++
    console.log(counter)
  }
}
const inc3 = myNewFunc()
inc3()
inc3()
inc3()
inc3()