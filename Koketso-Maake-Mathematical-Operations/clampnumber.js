/**
 * Restricts a number to stay between an explicit minimum and maximum boundary limit.
 * @param {number} num - The value to restrict.
 * @param {number} min - Lower boundary limit.
 * @param {number} max - Upper boundary limit.
 * @returns {number} The restricted bounded value.
 */
export function clampNumber(num, min, max) {
    return Math.min(Math.max(num, min), max);
}

// TEST CASES
console.assert(clampNumber(15, 0, 10) === 10, 'Test Failed: 15 should clamp down to 10');
console.assert(clampNumber(-5, 0, 10) === 0, 'Test Failed: -5 should clamp up to 0');
console.assert(clampNumber(5, 0, 10) === 5, 'Test Failed: 5 is inside range, should stay 5');