// Task 1 - Customer Discounts
// Setting a purchase amount to check if discount applies
let purchaseAmount = 420; // purchase amount
let finalAmount = purchaseAmount;  // amount after discount

// If purchase is more than $100, apply a 15% discount
if (purchaseAmount > 100) {
    finalAmount = purchaseAmount * 0.85; // 15% discount
}
console.log(`Final amount after discount: $${finalAmount}`);

// Task 2 - For Loop
// List of sales figures
let sales = [230, 85, 320, 310, 60];
let totalSales = 0;

// Loop through sales array to add up total
for (let i = 0; i < sales.length; i++) {
    totalSales += sales[i];
}
console.log(`Total sales: $${totalSales}`);

// Task 3 - While Loop
// Starting stock value
let stock = 10;

// While loop to decrease stock until 0
while (stock > 0) {
console.log(`Stock remaining: ${stock}`);
stock--; // Decrease stock
}
console.log("Stock is empty");