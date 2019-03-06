class Pizza {

    constructor() {
        this.toppings = ['cheese'];
        this.crust = [];
    }

    addTopping(topping) {
        this.toppings.push(topping);
    }

    customCrust(crust) {
        this.crust.push(crust);
    }

    
}

let pizza1 = new Pizza();
console.log(pizza1.toppings);
pizza1.addTopping('mushrooms');
pizza1.addTopping('peppers');
pizza1.customCrust('thin');
console.log(pizza1);

let pizza2 = new Pizza ();
console.log(pizza2.toppings);
pizza2.addTopping('more cheese');
pizza2.customCrust('thick');
pizza2.customCrust('gluten free');
console.log(pizza2);