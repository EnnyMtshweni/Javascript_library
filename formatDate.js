/**
 * Formats a Date object into a readable string pattern format (YYYY-MM-DD).
 * @param {Date} dateObj - Instance element of system Date data.
 * @returns {string} Structured textual string line.
 */
export function formatDate(dateObj) {
    if (!(dateObj instanceof Date)) return '';
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const day = String(dateObj.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// TEST CASES
const mockDate = new Date(2026, 5, 18); // June 18 2026
console.assert(formatDate(mockDate) === '2026-06-18', 'Test Failed: Date structuring formatting pattern mismatch');
console.assert(formatDate('not-a-date') === '', 'Test Failed: Dynamic structural fallbacks tracking misaligned');
console.assert(formatDate(new Date(2026, 0, 1)) === '2026-01-01', 'Test Failed: Padding setup failures on early month metrics');