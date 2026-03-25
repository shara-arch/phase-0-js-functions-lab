function calculateTax(amount) {
    const taxRate = 0.1; // 10% tax
    return amount * taxRate;
}
//Test calculateTax
let tax = calculateTax(100);
console.log(`Tax on 100: ${tax}`);

// Function to convert text to uppercase
function convertToUpperCase(text) {
    return text.toUpperCase();
}
//Test convertToUpperCase
let name = convertToUpperCase(`name`);
console.log(`Uppercase of 'name': ${name}`);




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };