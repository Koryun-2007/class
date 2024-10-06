class CoffeeShop {
    constructor(name, menu) {
        this.name = name;
        this.menu = menu;
        this.orders = [];
    }
    addOrder(itemName) {
        const item = this.menu.find(menuItem => menuItem.item === itemName);
        if (item) {
            this.orders.push(item);
            return "Order added!";
        } else {
            return "This item is currently unavailable!";
        }

    }
    fulfillOrder() {
        if (this.orders.length > 0) {
            let fulfilledItem = this.orders.shift();
            return `The ${fulfilledItem.item} is ready!`;
        } else {
            return "All orders have been fulfilled!";
        }
    }
    listOrders() {
        return this.orders.map(order => order.item)
    }

    dueAmount(){
        return this.orders.reduce((total, order) => total + order.price, 0);
    }

    cheapestItem(){
        let cheapest = this.menu.reduce((cheapest, item) => {
            return item.price < cheapest.price ? item : cheapest;
          });
          return cheapest.item;
    }
    drinksOnly(){
        return this.menu.filter(item => item.type === 'drink').map(item => item.item);
    }

    foodsOnly(){
        return this.menu.filter(item => item.type === 'food').map(item => item.item);
    }
}
const menu = [
    { item: "cinnamon roll", type: "food", price: 1.50 },
    { item: "iced coffee", type: "drink", price: 0.67 },
    { item: "burger", type: "food", price: 3.00 },
    { item: "coffee", type: "drink", price: 1.00 }
];
const tcs = new CoffeeShop("Tesha's Coffee Shop", menu);

console.log(tcs.addOrder("iced coffee"));
console.log(tcs.fulfillOrder(2));
console.log(tcs.addOrder("cinnamon roll"));
console.log(tcs.addOrder("iced coffee"));
console.log(tcs.listOrders())
console.log(tcs.dueAmount())
console.log(tcs.cheapestItem())
console.log(tcs.drinksOnly());
console.log(tcs.foodsOnly());

