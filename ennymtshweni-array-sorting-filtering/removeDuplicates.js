/**
 * Strips out duplicated matching array values to return an index collection of unique records.
 * @param {Array} arr - Dataset containing potential repeated values.
 * @returns {Array} List showing unique values only.
 */
export function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// TEST CASES
const sampleArr = removeDuplicates([1, 1, 2, 3, 3]);
console.assert(sampleArr.length === 3, 'Test Failed: Duplicates not stripped correctly');
console.assert(sampleArr[1] === 2, 'Test Failed: Index alignment broken');
console.assert(removeDuplicates([]).length === 0, 'Test Failed: Empty duplicate arrays failed');