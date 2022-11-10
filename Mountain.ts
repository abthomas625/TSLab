//What are interfaces and why are they needed in Angular?
//Interfaces are like classes - they can define properties, but unlike classes:
//They may not add functions or properties at run time <- prevents random function from sneaking their way into our code.
//They do not have constructors
//Angular loves interfaces since they will behave consistently and it side steps a lot of common JS errors/weird behavior
//With interfaces, every property must get a value
interface Mountain{
    name:string;
    height:number;
}
//We must use this syntax since interfaces cannot use constructors
//This is called object literal syntax. We make an object and store it in
//a mountain variable, which converts it from a generic object to a Mountain

let m1 : Mountain = {name: "Everest", height: 29029};
let m2 : Mountain = {name: "Kilimanjaro", height: 19341};
let m3 : Mountain = {name: "Denali", height: 20310};

let mountains : Mountain[] = [m1, m2, m3];

function findNameOfTallestMountain(mounts : Mountain[]) : string{
    let tallest : Mountain = mounts.find(m => m.height === Math.max(...mounts.map(m => m.height)))!;
    return tallest.name;
}
let tallest : string = findNameOfTallestMountain(mountains);
console.log(`Tallest mountain: ${tallest}`);

interface Product{
    name: string;
    price: number;
    
}

let motor : Product = {name: "motor", price: 10};
let sensor : Product = {name: "sensor", price: 12.5};
let led : Product = {name: "LED", price: 1};
let hammer : Product = {name: "hammer", price: 15};
let screwdriver : Product = {name: "screwdriver", price: 9};
let faucet : Product = {name: "faucet", price: 32};

let products: Product[] = [motor, sensor, led, hammer, screwdriver, faucet];

function calcAverageProductPrice(prods : Product[]) : number{
    let total : number = 0;
    for(let i = 0; i < prods.length; i++){
        total += prods[i].price;
    }
    return total / prods.length;
}

let avg : number = calcAverageProductPrice(products);
console.log(avg);

interface InventoryItem {
	product: Product;
	quantity: number;
}

let p1 : InventoryItem = {product: motor, quantity: 10};
let p2 : InventoryItem = {product: sensor, quantity: 4};
let p3 : InventoryItem = {product: led, quantity: 20};
let p4 : InventoryItem = {product: hammer, quantity: 16};
let p5 : InventoryItem = {product: screwdriver, quantity: 15};
let p6 : InventoryItem = {product: faucet, quantity: 6};

let inventory : InventoryItem[] = [p1, p2, p3, p4, p5, p6];

function calcInventoryValue(inventory : InventoryItem[]){
    let total : number = 0;
    for(let i = 0; i < inventory.length; i++){
        let sumProducts : number = inventory[i].product.price * inventory[i].quantity;
        total += sumProducts;
    }
    return total;
}
 let totProducts = calcInventoryValue(inventory);

 console.log(totProducts);