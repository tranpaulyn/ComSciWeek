class Pizza {

    constructor(size, crust) {
        this.size = size;
        this.toppings = ['cheese'];
        this.crust = crust;
    }

    addTopping(topping) {
        this.toppings.push(topping);
    }
    
}

let pizza = new Pizza ('large', 'thin');
pizza.addTopping('lasagna');

let pizza2 = new Pizza ('extra small', 'thicc');
pizza2.addTopping('dairy free cheese');
console.log(pizza2);