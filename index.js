function calculateTax(amount) {
    const taxRate = 0.1; // 10% tax
    return amount * taxRate;
}
//Test calculateTax
let tax = calculateTax(100);
console.log(`Tax on 100: ${tax}`);




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };