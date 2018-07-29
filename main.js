var coffeeShop = {
    beans: 40,
    money: 100,
    beanPrice: 1,
    drinkRequirements: {
        latte: 10,
        americano: 5,
        doubleShot: 15,
        frenchPress: 12,
    },

    makeDrink: function(drinkType) {
        if (coffeeShop.drinkRequirements[drinkType] === undefined) {
            alert("Sorry, we don't make " + drinkType);
        } else if (this.beans >= this.drinkRequirements[drinkType]) {
            this.beans -= this.drinkRequirements[drinkType];
            console.log(drinkType + " is ready!");
        } else {
            alert("Sorry, we're all out of beans");
        }
    },

    buySupplies: function(units) {
        this.money -= (this.beanPrice * units);
        this.beans += units
    },
    buyDrink: function(drinkType) {
        if (coffeeShop.drinkRequirements[drinkType] === undefined) {
            alert("Sorry, we don't make " + drinkType);
        } else if (this.beans >= this.drinkRequirements[drinkType]) {
            this.money += (this.beanPrice * this.drinkRequirements[drinkType]);
            alert("you need to pay: " + this.beanPrice * this.drinkRequirements[drinkType]);
        } else {
            alert("Sorry, we're all out of beans");
        }
    }
}


coffeeShop.makeDrink("latte");
coffeeShop.buyDrink("latte");
//console.log(coffeeShop.money);
//coffeeShop.makeDrink("americano");
//coffeeShop.buyDrink("americano");
//coffeeShop.makeDrink("filtered");
//coffeeShop.buyDrink("filtered");
//coffeeShop.makeDrink("doubleShot");
//coffeeShop.buyDrink("doubleShot");
coffeeShop.buySupplies(10);
// now after we add more beans we can make coffee 
coffeeShop.makeDrink("frenchPress");
coffeeShop.buyDrink("frenchPress");
console.log(coffeeShop.money);