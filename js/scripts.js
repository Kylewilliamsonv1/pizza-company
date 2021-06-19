//Business logic for Orders__________
function Orders() {
  this.orders = {};
  this.orderId = 0;
}

Orders.prototype.addOrder = function (order) {
  order.id = this.assignId();
  this.orders[order.id] = order;
};

Orders.prototype.assignId = function () {
  this.orderId += 1;
  return this.orderId;
};

Orders.prototype.findOrder = function(id) {
  if (this.orders[id] != undefined) {
    return this.orders[id];
  }
  return false
};

//Business logic for Pizza_________
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.cost = function () {
  return this.size * 1.5;
};

//User interface logic______________
$(document).ready(function() {
  $("form#newOrder").submit(function(event) {
    event.preventDefault();
    const inputtedToppings = $("#toppings").val();
    const inputtedSize = $("#size").val();
    let newOrder = new Pizza(inputtedToppings, inputtedSize);
    console.log(newOrder);
    let newOrderPrice = newOrder.cost();
    console.log(newOrderPrice);
    $("#submit").on("click",function(){
      $("#cost").text(newOrderPrice);
    })
  });
});