//Business logic for Orders__________
function OrdersBook(orderID) {
  this.orders = {};
  this.ordersId = 0;
}
Orders.prototype.addOrder = function (order) {
  order.id = this.assignId();
  this.orders[order.id] = order;
}
Orders.prototype.assignId = function (){
  this.orderId += 1;
  return this.orderID;
}
//Business logic for Pizza_________
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.cost = function () {
  return this.size * 1.5
};

//User interface logic______________
const inputtedToppings = $("#toppings").val()
const inputtedSize = $("#size").val()
let order1 = new Pizza(["pepperoni", "cheese", "olives"], 10);
