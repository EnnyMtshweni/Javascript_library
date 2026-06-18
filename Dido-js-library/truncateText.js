export function truncateText(text, limit) {
    if (!text || text.length <= limit) return text;
    return text.slice(0, limit) + '...';
}

// TEST CASES
console.assert(truncateText('JavaScript Engine', 10) === 'JavaScript...', 'Test Failed: Truncation mismatch');
console.assert(truncateText('Hello', 10) === 'Hello', 'Test Failed: Short text shouldn\'t truncate');
console.assert(truncateText('', 5) === '', 'Test Failed: Empty string handling failed');