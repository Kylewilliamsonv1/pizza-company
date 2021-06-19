### Objective: 
Create a website for a pizza company where a user can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc) and a size to order a pizza and see the final cost.

### Program Essentials:
Var Toppings: Cheese, Pepperoni, Arctichoke, Olives
Var Size: 10 in, 15 in, 20 in. -these sizes were choseen to simplify the prototype.cost function.  Multiplier $1.5/inch of pizza to determine price- pick as many toppings as you like!

### Objective: 
1. Allow the user to choose toppings and size for the pizza they'd like to order.
function Orders(), function Pizza()
2. Create a pizza object constructor with properties for toppings and size.
function Pizza() {toppings, size}
3. Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this.  Keep it simple to start! You do not need to have a complex formula for determining cost (although you can if you like). The most important part of this code review is using and demonstrating your understanding of constructors and prototypes.
Pizza.prototype.cost function (){
 return this.size * 1.5
}

# Describe: 
Orders()

Test: 
This object stores orders taken from input form and stores the order ID.
Code: 
let order = new Order (order, orderId)
Expected Output:
order =
Order {orders: , orderId: }

Test: 
Orders prototype addOrder adds order to Order.
Code: 
Orders.prototype.addOrder
Expected Output: 
within Orders, property orders will increase by 1.

Test: 
Orders prototype assignId assigns an ID to the order taken
Code: 
AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
Expected Output: 
Within the object Order, the property orderID will increase by 1.
Test:
Orders prototype findContact returns a list of contacts
Code:
AddressBook.prototype.findContact = function(id) {
  if (this.contacts[id] != undefined) {
    return this.contacts[id];
Expected Output:
Within the object Order, the property findContact will return a specific ID

# Describe: 
Pizza()

Test: 
This function should take a user's order and create a new object that inherites properties "toppings" and "size". 
Code:
let order = new Pizza(toppings, size)
Expected Output: 
order
Pizza {toppings: , size: }

Test: 
Pizza prototype cost takes the size property of the pizza and multiplys it by the rate  $1.5/in.
Code: 
Pizza.prototype.cost = function () {
return this.size * 1.5 } 
Expected Output: 
order.cost()



