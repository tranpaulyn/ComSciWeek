class Pizza {

    constructor() {
        this.toppings = ['cheese'];
    }

    addTopping(topping) {
        this.toppings.push(topping);
    }

    get price() {
        const basePrice = 10;
        const toppingPrice = 2;
        return basePrice + this.toppings.length * toppingPrice;
    }

    set size(size) {
        if (size === 's' || size === 'm' || size === 'l') {
            this.size = size;
        }
    }
    
}

let pizza = new Pizza ();
console.log(pizza.price);
pizza.size = 's';