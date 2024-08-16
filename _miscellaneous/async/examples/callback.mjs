import * as fs from 'node:fs'
import path from 'node:path'

const filePath = path.resolve('async/examples/person.json')

fs.readFile(filePath, (error, text) => {
  console.log(error)
  if(error) {
    throw new Error('Error when try to access the file', error)
  } else {

    // Error handle for JSON.parse(text)
    try {
        const obj = JSON.parse(text)
        console.log(obj)
    } catch (e) {
      throw new Error('Invalid JSON', e)
    }

  }
})

