//We must use this syntax since interfaces cannot use constructors
//This is called object literal syntax. We make an object and store it in
//a mountain variable, which converts it from a generic object to a Mountain
var m1 = { name: "Everest", height: 29029 };
var m2 = { name: "Kilimanjaro", height: 19341 };
var m3 = { name: "Denali", height: 20310 };
var mountains = [m1, m2, m3];
function findNameOfTallestMountain(mounts) {
    var tallest = mounts.find(function (m) { return m.height === Math.max.apply(Math, mounts.map(function (m) { return m.height; })); });
    return tallest.name;
}
var tallest = findNameOfTallestMountain(mountains);
console.log("Tallest mountain: ".concat(tallest));
var motor = { name: "motor", price: 10 };
var sensor = { name: "sensor", price: 12.5 };
var led = { name: "LED", price: 1 };
var hammer = { name: "hammer", price: 15 };
var screwdriver = { name: "screwdriver", price: 9 };
var faucet = { name: "faucet", price: 32 };
var products = [motor, sensor, led, hammer, screwdriver, faucet];
function calcAverageProductPrice(prods) {
    var total = 0;
    for (var i = 0; i < prods.length; i++) {
        total += prods[i].price;
    }
    return total / prods.length;
}
var avg = calcAverageProductPrice(products);
console.log(avg);
var p1 = { product: motor, quantity: 10 };
var p2 = { product: sensor, quantity: 4 };
var p3 = { product: led, quantity: 20 };
var p4 = { product: hammer, quantity: 16 };
var p5 = { product: screwdriver, quantity: 15 };
var p6 = { product: faucet, quantity: 6 };
var inventory = [p1, p2, p3, p4, p5, p6];
function calcInventoryValue(inventory) {
    var total = 0;
    for (var i = 0; i < inventory.length; i++) {
        var sumProducts = inventory[i].product.price * inventory[i].quantity;
        total += sumProducts;
    }
    return total;
}
var totProducts = calcInventoryValue(inventory);
console.log(totProducts);
