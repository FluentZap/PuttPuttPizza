var prices;
var order;

function Order(storeNumber) {
  this.storeNumber = storeNumber;
  this.orderItems = [];
  this.currentItem = 0;
  this.clientInformation = ""
}

Order.prototype.addItem = function () {
  var name = "Item " + (this.orderItems.length + 1)
  this.orderItems.push(new OrderItem(name));
};

function OrderItem(name) {
  this.cost = 0;
  this.itemName = name;
  this.size = ""
  this.crustStyle = ""
  this.sauce = ""
  this.toppings = [];
}

OrderItem.prototype.addToPizza = function (name) {
  if (name.includes("crust")) {
    this.crustStyle = name; return;
  }
  if (name.includes("sauce")) {
    this.sauce = name; return;
  }
  if (name.includes("size")) {
    this.size = name; return;
  }
  console.log(name);
  for (var i = 0; i < this.toppings.length; i++) {
    if (this.toppings[i] === name) return;
  }
  this.toppings.push(name);
};


OrderItem.prototype.getCost = function () {
  if (!this.size || !this.crustStyle || !this.sauce) {
    return false;
  }
  var cost = 0;
  //add topping cost
  this.toppings.forEach(function (topping) {
    cost += prices.getCost(topping);
  });
  cost += prices.getCost(this.crustStyle);
  cost += prices.getCost(this.sauce);
  //multiply by size
  cost *= prices.getCost(this.size);
  return cost;
}


function ClientInformation() {
  this.name
  this.phoneNumber
  this.address
  this.zipCode
  this.city
  this.state
}


function PriceDatabase() {
  this.entries = [];
}

PriceDatabase.prototype.addEntry = function (name, cost) {
  this.entries.push(new PriceDatabaseEntry(name, cost));
};

PriceDatabase.prototype.getCost = function (name) {
  for (var i = 0; i < entries.length; i++) {
    if (entries[i].name === name) return entries[i].cost;
  }
  return false;
};

function PriceDatabaseEntry(name, cost) {
  this.cost = cost;
  this.name = name;
}


function updateOrderUi(item) {
  var orders = ""
  for (var i = 0; i < item.orderItems.length; i++) {
    orders += "<h3>" + item.orderItems[i].name + item.orderItems[i].cost + "</h3>"
  }

  $("order-list").html(orders);
}


function updatePizzaUi() {



}

function addBasicPrices() {
  prices.addEntry("size-small", 0.80);
  prices.addEntry("size-medium", 1.00);
  prices.addEntry("size-large", 1.30);
  prices.addEntry("size-extraLarge", 2.00);

  prices.addEntry("crust-thin", 7.00);
  prices.addEntry("crust-normal", 8.00);
  prices.addEntry("crust-deepdish", 9.50);

  prices.addEntry("sauce-white", 0.70);
  prices.addEntry("sauce-pesto", 0.70);
  prices.addEntry("sauce-red", 0.50);
  prices.addEntry("sauce-bbq", 0.50);

  prices.addEntry("cheese-mozzarella", 0.50);
  prices.addEntry("cheese-cheddar", 0.70);
  prices.addEntry("cheese-gouda", 1.00);

  prices.addEntry("topping-whiteOnions", 0.30);
  prices.addEntry("topping-redOnions", 0.30);
  prices.addEntry("topping-tomatoes", 0.50);
  prices.addEntry("topping-olives", 0.60);

  prices.addEntry("topping-bacon", 0.50);
  prices.addEntry("topping-meatballs", 0.75);
  prices.addEntry("topping-sausage", 0.50);
  prices.addEntry("topping-pepperoni", 0.50);
}

function addEventHandlers(order) {
  $(".options").on("click", ".option", function (event) {
    order.orderItems[order.currentItem].addToPizza(event.target.id);
  });
}

$(document).ready(function () {
  prices = new PriceDatabase();
  order = new Order();
  order.addItem();
  addBasicPrices();
  addEventHandlers(order);
  //Size Prices are a multiplier for the pizzia price


});
