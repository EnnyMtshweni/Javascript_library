export function capitalise(str) {
if (!str) return '';
return str.charAt(0).toUpperCase() + str.slice(1);
}

// TEST CASES
console.assert(capitalise('hello') === 'Hello', 'Test Failed: hello should become Hello');
console.assert(capitalise('zaio') === 'Zaio', 'Test Failed: zaio should become Zaio');
console.assert(capitalise('') === '', 'Test Failed: Empty string should return empty string');