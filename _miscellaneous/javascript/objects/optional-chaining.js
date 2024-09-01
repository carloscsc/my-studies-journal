// https://javascript.info/optional-chaining
// This is a recent addition to the language. Old browsers may need polyfills


let user = {
  
  address: {
    street: "Rua XPTO"
  },
  admin() {
    console.log('is admin')
  }
}

// console.log(user.address.street) will return an error
console.log(user.address?.street) // will return undefined

if(user.address?.street) {
  console.log(user.address?.street)
}

console.log(user.paymentMethod?.iscard) // undefined

// cam be used with brackets
console.log(user['doc']?.['cpf'])

// Using with document
// let html = document.querySelector('.class').innerText // throw a error
let html = document.querySelector('.class')?.innerText // return undefined
console.log(html)

// Using with function 
user.admin?.() // will return 
user.otherfunc?.() // undefined