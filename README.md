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
Pizza()

Test: 
It should create a Pizza object that properties toppings and size. 
Code:
Pizza(toppings, size)
Expected Output: 
Pizza {toppings: , size: }

Test: 
It should take the the size of the pizza and multiplys it by $1.5/in.
Code: 
Pizza.prototype.cost = function (10) {
return this.size * 1.5 } 
Expected Output: 
15

Test:


