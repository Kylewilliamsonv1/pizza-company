Create a website for a pizza company where a user can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc) and a size to order a pizza and see the final cost.

Allow the user to choose toppings and size for the pizza they'd like to order.
Create a pizza object constructor with properties for toppings and size.
Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this.
Keep it simple to start! You do not need to have a complex formula for determining cost (although you can if you like). The most important part of this code review is using and demonstrating your understanding of constructors and prototypes.

Describe: Orders()

Test: This object stores orders taken from input form and stores the order ID.
code: 
let order = new OrderBook (order, orderId)
Expected Output:
order =
OrderBook {orders: , orderId: }

Test: Orders prototype addOrder adds order to OrderBook.
Code: Orders.prototype.addOrder
Expected Output: within OrdersBook, property orders will increase by 1.

Test: Orders prototype assignId assigns an ID to the order taken
Code: Orders.prototype. assignID
Expected Output: Within OrderBook, property orders will increase by 1.

Describe: Pizza()

Test: This function should take a user's order and create a new object (instance) that inherites properties "toppings" and "size". 
Code:  let order = new Pizza(toppings, size)
Expected Output: 
order
Pizza {toppings: , size: }

Test: Pizza prototype cost takes the size property of the pizza and multiplys it by the rate  $1.5/in.
Code: Pizza.prototype.cost = function () {
return this.size * 1.5 } 
Expected Output: 
order.cost()



