type Pizza = {
  id: number
  name: string
  price: number
}

type Order = {
  id: number
  pizza: Pizza,
  status: "ordered" | "completed"
}

const menu: Pizza[] = []

let cashInRegister: number = 100
let nextOrderId: number = 1
const orderQueue: Array<Order> = []

/**
 * Creates a unique pizza ID generator.
 *
 * This function returns a new function that can be used to generate unique pizza IDs.
 *
 * @returns {Function} A function that, when called, returns a unique pizza ID.
 */
function createPizzaID(): Function {
  let id: number = 0;

  /**
   * Increments and returns the unique ID.
   *
   * @returns {number} The next unique ID.
   */
  return function(): number {
    return ++id
  }
}
const id = createPizzaID();


/**
 * Adds a new pizza to the menu.
 *
 * @param {Pizza['name']} name - The name of the pizza.
 * @param {Pizza['price']} price - The price of the pizza.
 * @return {void}
 */
function addNewPizza(name: Pizza['name'], price: Pizza['price']): void {
  menu.push({id: id(), name, price})
}

/**
 * Places an order for a pizza.
 *
 * @param {string} pizzaName - The name of the pizza to be ordered.
 * @throws {Error} If the selected pizza is not found in the menu.
 * @return {void}
 */
function placeOrder(pizzaName: string): void {
  const selectedPizza = menu.find((pizza) => pizza.name === pizzaName)
  
  if(!selectedPizza) {
    throw new Error(`Pizza: ${pizzaName} was not found in the menu`)
  }
  
  cashInRegister += selectedPizza.price
  orderQueue.push(
    { id: nextOrderId++, 
      pizza: selectedPizza, 
      status: "ordered" 
    }
  )
}

/**
 * Marks an order as completed.
 *
 * @param {number} orderId - The ID of the order to be marked as completed.
 * @returns {Order} - The completed order.
 * @throws {Error} - If the orderId is not found in the orderQueue.
 */
function completeOrder(orderId: number): Order {
  const order = orderQueue.find((order: Order ) => order.id === orderId)
  if(!order) {
    throw new Error(`ID: ${orderId} was not found in the orderQueue`)
  }
  order.status = "completed"
  return order
}

/**
 * Retrieves details of a pizza from the menu based on the provided identifier.
 *
 * @param {string | number} identifier - The identifier of the pizza to retrieve. This can be either the name or the ID of the pizza.
 * @throws {Error} If the pizza with the given identifier is not found in the menu.
 * @return {Pizza} The retrieved pizza details.
 */
function getPizzaDetail(identifier: string | number ): Pizza {
  const pizza = menu.find(pizza => pizza.name == identifier || pizza.id == identifier)
  
  if(!pizza) {
    throw new Error(`Pizza ${identifier} was not found`)
  }

  return pizza
}

/** call */
addNewPizza("Margherita", 8)
addNewPizza("Pepperoni", 10)
addNewPizza("Hawaiian", 10)
addNewPizza("Veggie", 9)
addNewPizza("Chicken Bacon Ranch", 12)
addNewPizza("BBQ Chicken", 12)
addNewPizza("Spicy Sausage", 11)

placeOrder("Chicken Bacon Ranch")
completeOrder(1)

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)

console.log(getPizzaDetail('BBQ Chicken'))
console.log(getPizzaDetail(2))
console.log(getPizzaDetail('Margherita'))

