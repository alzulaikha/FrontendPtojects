/*.. 2.1 — Arrays: theBasics..*/ 
const cities = ["Muscat", "Samail","Nizwa", "Sohar", "Sur","Salalah"];
//push
cities.push("Izki");
console.log(cities);
//pop
cities.pop();
console.log(cities);
//shift
cities.shift();
console.log(cities);
//unshift
cities.unshift("Barka");
console.log(cities);
//Log .lenght befor adding a duplicate entry
console.log("Cities before adding duplicate:", cities.length);
//Log .lenght after adding a duplicate entry
cities.push("Muscat");
console.log("Cities after adding duplicate:", cities.length);
//fo loop
for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
}
//for...of
for (const city of cities) {
    console.log(city);
}

/*.. 2.2 — Destructuring..*/ 
const order = {	id:	101, customer:"Sara	Ahmed",	total: 249.99, status:"Shipped"	}; 
const { customer, total } = order;
console.log(customer); 
console.log(total);  

const numbers = [10, 20, 30, 40, 50];
const [first, second, ...rest] = numbers;

function getOrderSummary({ customer, total }) {
    return `${customer} - $${total}`;
}

console.log(getOrderSummary(order));
/*.. 2.3 —	Spread & Rest..*/ 
//separated arrays	
const onlineOrders = [100, 200, 300];
const inStoreOrders = [400, 500, 600];
const allOrders = [...onlineOrders, ...inStoreOrders];
console.log(allOrders)
//Object Spread
const order1 = {
    id: 101,
    customer: "Sara Ahmed",
    total: 249.99,
    status: "Shipped"
};
const updatedOrder = { ...order, status: "Cancelled" };
console.log("Original order:", order);
console.log("Cancelled order:", updatedOrder);

//a	function using a rest parameter	
function getOrderTotals(...totals) {
    return totals;
}

console.log(getOrderTotals(100, 150, 200, 250));