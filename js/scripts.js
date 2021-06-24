//Business logic for Pizza_________
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.sizeCost = function () {
  sizePrice= this.size * 1.5
  return sizePrice
};

Pizza.prototype.topCost = function () {
  let topArray = this.toppings.split(" ");
  let topPrice = 0;
  topArray.forEach(function(element) {
    topPrice += 1
  });
  return topPrice;
};

function totalPrice () {
  const inputtedToppings = $("#toppings").val();
  const inputtedSize = $("#size").val();
  let newOrder = new Pizza(inputtedToppings, inputtedSize);
  let pizzaPrice= 0;
  let priceBeforeTop = newOrder.sizeCost() + pizzaPrice;
  let totalCost = priceBeforeTop + newOrder.topCost();
  return totalCost;
}

//User interface logic______________
$(document).ready(function() {
  $("form#newOrder").submit(function(event) {
    event.preventDefault();
    $("ul#orders").text(totalPrice());
  });
});