/**
 * Evaluates an object parameter to check if it contains any properties.
 * @param {Object} obj - The target evaluation object dictionary.
 * @returns {boolean} True if object doesn't have any keys.
 */
export function isEmptyObject(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
}

// TEST CASES
console.assert(isEmptyObject({}) === true, 'Test Failed: Object is empty');
console.assert(isEmptyObject({ name: 'Thabo' }) === false, 'Test Failed: Object holds definitions');
console.assert(isEmptyObject(new Object()) === true, 'Test Failed: Standard instances flag empty');