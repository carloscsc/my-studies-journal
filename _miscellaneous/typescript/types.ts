/** NESTED */
type Address = {
  street: string,
  city: string,
  country: string,
}

type Person = {
  name: string,
  age: number,
  isStudent: boolean,
  address: Address,
}


const person01: Person = {
  name: "Carlos",
  age: 33,
  isStudent: false,
  address: {
    street: "Uma rua",
    city: "São Paulo",
    country: "Brasil"
  }
}

const person02: Person = {
  name: "Nayara",
  age: 33,
  isStudent: false,
  address: {
    street: "Uma rua",
    city: "São Paulo",
    country: "Brasil"
  }
}

/** ARRAY */
let persons: Array<Person> = [person01, person02]
let persons2: Person[] = [person01, person02] // Alternative
console.log(persons)

/** OPTIONAL */
type Car = {
  model: string
  year: number
  color: string
  isUsed?: boolean
}

const porsche: Car = {
  model: "911",
  year: 2024,
  color: 'black'
}

const ferrari: Car = {
  model: "F-45",
  year: 2020,
  color: 'red',
  isUsed: true
}

console.log(porsche?.isUsed)
console.log(ferrari?.isUsed)

/** LITERAL TYPE */
let choices: "Option 01" | "Option 02" = "Option 01"
choices = "Option 02"
// choices = "Option 03" throw a error 


/** UNIONS */
type User = {
  name?: string,
  username: string,
  role: "guest" | "admin" | "member"
  age?: number
}

const users: User[] = [
  { username: 'carlos.cantanzaro', role: 'admin' },
  { username: 'nicolas', role: 'member' },
  { username: 'gabriel', role: 'guest' },
]

/** FUNCTION RETURN TYPE */
function fetchUserDetails(username: string): User {
  const user = users.find(user => user.username === username)
  if (!user) {
    throw new Error(`User: ${username} was not found`)
  }
  return user;
}
console.log(fetchUserDetails('carlos.cantanzaro').username);

/** ANY -> never use!!*/
let value: any = 1
value = 'any'

/** UTILITY TYPE */

// All the properties was default set as optional  
type updateUser = Partial<User>

/** OMIT TYPE */

// Select witch properties you want to omit 
type otherTypeOfUser = Omit<User, "role" | "username">

/** GENERICS */

const gameScore: number[] = [14, 21, 33, 42, 59]
const favoriteThings: string[] = ['Pizza', 'Books', 'Cars', 'Movies']
const voters: updateUser[] = [
  { name: 'Carlos', age: 33 },
  { name: 'bob', age: 42 }
]

function getLastItem<T>(array: T[]): T | undefined {
  return array[array.length - 1]
}

console.log(typeof getLastItem(gameScore))
console.log(typeof getLastItem(favoriteThings))
console.log(typeof getLastItem(voters))
console.log(typeof getLastItem(users))

function addToArray<T>(array: T[], item: T): T[] {
  array.push(item)
  return array;
}

addToArray(gameScore, 60)
addToArray(favoriteThings, 'Travel')
addToArray(voters, { name: 'Michael', age: 32 })
addToArray(users, { username: 'Michael', role: 'guest' })

console.log(gameScore)
console.log(favoriteThings)
console.log(voters)
console.log(users)