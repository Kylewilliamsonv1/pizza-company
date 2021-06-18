//Business logic for Pizza_________
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.cost = function () {
  return this.size * 1.5
};











//User interface logic______________
let order1 = new Pizza(["pepperoni", "cheese", "olives"], 10);
