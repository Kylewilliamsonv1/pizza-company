//Business logic for Pizza_________
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.sizeCost = function () {
  price= this.size * 1.5
};

Pizza.prototype.topCost = function () {
  let topArray = this.toppings.split(" ");
  let topPrice = 0;
  topArray.forEach(function(element) {
    topPrice += 1
  })
}

//User interface logic______________
let pizzaPrice= 0

$(document).ready(function() {
  $("form#newOrder").submit(function(event) {
    event.preventDefault();
    const inputtedToppings = $("#toppings").val();
    const inputtedSize = $("#size").val();
    let newOrder = new Pizza(inputtedToppings, inputtedSize);
    console.log(newOrder);
    pizzaPrice.cost(newOrder);
  });
});