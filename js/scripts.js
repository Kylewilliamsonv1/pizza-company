//Business logic for Orders__________
function Orders() {
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

Orders.prototype.findOrder = function(id) {
  if (this.orders[id] != undefined) {
    return this.orders[id];
  }
  return false
})
// prototype find()


//Business logic for Pizza_________
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.cost = function () {
  return this.size * 1.5
};

//User interface logic______________
let orderBook = new Orders();

$(document).ready(function() {
  $("form#order").submit(function(event) {
    event.preventDefault();
    const inputtedToppings = $("#toppings").val()
    const inputtedSize = $("#size").val()
    let newOrder = new Pizza(inputtedToppings, inputtedSize);
    orderBook.addOrder(newOrder);
    console.log(orderBook.orders);
  });
});
