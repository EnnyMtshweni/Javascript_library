/**
 * Flattens a two-dimensional nested array structure into a clean single-level layer array list.
 * @param {Array[]} arr - Nested arrays collection.
 * @returns {Array} Flattened single-level array layout.
 */
export function flattenArray(arr) {
    return arr.flat();
}

// TEST CASES
const flat = flattenArray([[1, 2], [3, 4]]);
console.assert(flat.length === 4, 'Test Failed: Array flattening depth tracking failed');
console.assert(flat[2] === 3, 'Test Failed: Element mapping displacement error');
console.assert(flattenArray([]).length === 0, 'Test Failed: Blank nested configuration check failed');