function Order(storeNumber) {
  this.storeNumber = storeNumber;
  this.orderItems = []
  this.clientInformation =
}

function OrderItem(name, ) {
  this.cost = 0;
  this.itemName = name;
  this.size = ""
  this.crustStyle = ""
  this.sauce = ""
  this.toppings = [];
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
  entries.push[new PriceDatabaseEntry(name, cost)];
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


var prices = new PriceDatabase();
prices.addEntry("crust-thin", 7.00);
prices.addEntry("crust-normal", 8.00);
prices.addEntry("crust-deepdish", 9.50);

prices.addEntry("cheese-mozzarella", 0.50);
prices.addEntry("cheese-cheddar", 0.70);
prices.addEntry("cheese-gouda", 1.00);

prices.addEntry("topping-onions", 0.35);
prices.addEntry("topping-tomatoes", 0.35);
prices.addEntry("topping-bacon", 0.50);
prices.addEntry("topping-meatballs", 0.75);
prices.addEntry("topping-sausage", 0.50);
prices.addEntry("topping-pepperoni", 0.50);



$(document).ready(function () {

});
