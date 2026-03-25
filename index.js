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

// Function to find the maximum of two numbers
function findMaximum(a, b) {
    if (a > b) {
        return `${a} is greater than ${b}`;
}
    else if (b > a) {
        return `${b} is greater than ${a}`;
    } else {
        return `${a} is equal to ${b} `;
    }
}
//Test findMaximum
let max = findMaximum(10, 20);
console.log(max);

//Function to test if a word is a palindrome
function isPalindrome(word) {
    const reversedWord = word.split('').reverse().join('');
    if (reversedWord === word) {
      return `${word} is a palindrome.`
    } else {
      return `${word} is NOT a palindrome.`
    }
}
//Test isPalindrome
let madame = isPalindrome('madame');
console.log(madame);//Output: madame is NOT a palindrome.
let racecar = isPalindrome('racecar');
console.log(racecar);//Output: racecar is a palindrome.







// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };