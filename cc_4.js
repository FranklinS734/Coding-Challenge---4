// Task 1 - Customer Discounts
// Setting a purchase amount to check if discount applies
let purchaseAmount = 420; // purchase amount
let finalAmount = purchaseAmount;  // amount after discount

// If purchase is more than $100, apply a 15% discount
if (purchaseAmount > 100) {
    finalAmount = purchaseAmount * 0.85; // 15% discount
}
console.log(`Final amount after discount: $${finalAmount}`);
