import {readFile} from 'node:fs/promises'
import path from 'node:path'

const filePath = path.resolve('async/examples/person.json')

readFile(filePath)
  .then(text => {
      console.log( JSON.parse(text) )
  })
  // handle async and sync (JSON.parse) errors 
  .catch(err => {
    console.log(`Error: ${err}`)
  })