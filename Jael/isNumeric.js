
/**
 * Assesses whether a string value consists purely of readable numerical characters.
 * @param {string} val - Input tracking target.
 * @returns {boolean} True if values parse out cleanly to raw numbers.
 */
export function isNumeric(val) {
    if (typeof val === 'number') return true;
    return !isNaN(val) && !isNaN(parseFloat(val));
}

// TEST CASES
console.assert(isNumeric('1234') === true, 'Test Failed: Pure digit block strings match numeric flags');
console.assert(isNumeric('abc') === false, 'Test Failed: Non-numeric strings must return false');
console.assert(isNumeric(45) === true, 'Test Failed: Primitive number values match numeric status flags');