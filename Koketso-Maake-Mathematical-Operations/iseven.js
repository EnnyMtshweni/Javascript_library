/**
 * Checks whether an integer value is evenly divisible by 2.
 * @param {number} num - The integer number to check.
 * @returns {boolean} True if the number is even.
 */
export function isEven(num) {
    return num % 2 === 0;
}

// TEST CASES
console.assert(isEven(4) === true, 'Test Failed: 4 is even');
console.assert(isEven(7) === false, 'Test Failed: 7 is odd');
console.assert(isEven(0) === true, 'Test Failed: 0 is even');