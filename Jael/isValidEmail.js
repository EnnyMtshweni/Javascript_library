/**
 * Evaluates a string to test if it fits standard email pattern regulations.
 * @param {string} email - String text line target.
 * @returns {boolean} True if layout format matches standard patterns.
 */
export function isValidEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

// TEST CASES
console.assert(
    isValidEmail('test@zaio.com') === true,
    'Test Failed: Valid address failed template alignment'
);

console.assert(
    isValidEmail('bademail.com') === false,
    'Test Failed: Bad structural layout validation missing'
);

console.assert(
    isValidEmail('') === false,
    'Test Failed: Empty parameters must flag false'
);