var prices;
var order;

function Order(storeNumber) {
  this.storeNumber = storeNumber;
  this.orderItems = [];
  this.currentItem = 0;
  this.clientInformation = ""
}

Order.prototype.addItem = function () {
  var name = "Pizza " + (this.orderItems.length + 1)
  this.orderItems.push(new OrderItem(name));
};

Order.prototype.getCurrent = function () {
  return (order.orderItems[order.currentItem])
};

function OrderItem(name) {
  this.cost = 0;
  this.name = name;
  this.options = ["size-medium", "crust-normal", "sauce-red"];
}

OrderItem.prototype.addToPizza = function (name) {
  for (var i = 0; i < this.options.length; i++) {
    if (this.options[i] === name) {
      if (!this.options[i].includes("crust") && !this.options[i].includes("size")) {
        delete this.options[i]
      }
    return;
    }
  }

  if (name.includes("crust")) removeIfContained(this.options, "crust")
  if (name.includes("sauce")) removeIfContained(this.options, "sauce")
  if (name.includes("size")) removeIfContained(this.options, "size")

  this.options.push(name);
};

OrderItem.prototype.getCost = function () {
  var cost = 0;
  var size = 0;
  //add topping cost
  this.options.forEach(function (option) {
    if (option.includes("size")) {
      size = prices.getCost(option)
    } else {
      cost += prices.getCost(option);
    }
  });
  //multiply by size
  cost *= size;
  this.cost = cost.toFixed(2);
  return this.cost;
}

function removeIfContained(collection, entry) {
  for (var i = 0; i < collection.length; i++) {
    if (typeof collection[i] === "string" && collection[i].includes(entry))
    delete collection[i]
  }
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
  for (var i = 0; i < this.entries.length; i++) {
    if (this.entries[i].name === name) return this.entries[i].cost;
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
    if (item.orderItems[i]) {
      orders += "<h3 class='order rounded' id='" + i + "'>" + item.orderItems[i].name + " $" + item.orderItems[i].cost + "</h3>"
    }
  }

  $("#order-list").html(orders);
}

function updateToppingsUi(item) {
  $(".option").removeClass("selected");

  if (item.crustStyle === "crust-normal" ) $("#crust-normal").addClass("selected")

  for (var i = 0; i < item.options.length; i++) {
    $("#" + item.options[i]).addClass("selected");
  }

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
  prices.addEntry("crust-deepDish", 9.50);

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
  prices.addEntry("topping-garlic", 0.60);

  prices.addEntry("topping-bacon", 0.50);
  prices.addEntry("topping-meatballs", 0.75);
  prices.addEntry("topping-sausage", 0.50);
  prices.addEntry("topping-pepperoni", 0.50);
}

function addEventHandlers(order) {
  $(".options").on("click", ".option", function (event) {
    var currentOrder = order.getCurrent()
    currentOrder.addToPizza(event.target.id);
    updateToppingsUi(currentOrder);
    currentOrder.getCost();
    updateOrderUi(order);
  });

  $("#order-list").on("click", ".order", function (event) {
    var currentOrder = order.getCurrent()
    $(".order").removeClass("selected")
    $("#" + event.target.id).addClass("selected")
    order.currentItem = event.target.id;
    updateToppingsUi(currentOrder);
    updateOrderUi(order);
  });
}

$(document).ready(function () {
  prices = new PriceDatabase();
  order = new Order();
  order.addItem();
  order.addItem();
  order.addItem();
  updateToppingsUi(order.orderItems[order.currentItem]);
  updateOrderUi(order)
  addBasicPrices();
  addEventHandlers(order);
  //Size Prices are a multiplier for the pizzia price


});
