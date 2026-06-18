/**
 * Computes what percentage a portion value is of a total sum amount.
 * @param {number} part - The subset score value.
 * @param {number} total - The baseline total value.
 * @returns {number} Calculated percentage value out of 100.
 */
export function calculatePercentage(part, total) {
    if (total === 0) return 0;
    return (part / total) * 100;
}

// TEST CASES
console.assert(calculatePercentage(50, 200) === 25, 'Test Failed: 50 of 200 is 25%');
console.assert(calculatePercentage(10, 10) === 100, 'Test Failed: 10 of 10 is 100%');
console.assert(calculatePercentage(5, 0) === 0, 'Test Failed: Division by zero fallback failed');