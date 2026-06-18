/**
 * Converts a text title into a URL-friendly clean string layout (slug).
 * @param {string} titleText - Heading string parameters to transform.
 * @returns {string} URL structural safe string path line.
 */
export function slugify(titleText) {
    return titleText.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
}

// TEST CASES
console.assert(slugify('Hello Zaio Devs!') === 'hello-zaio-devs', 'Test Failed: Complex conversion spacing characters match error');
console.assert(slugify('  Trim Spaces  ') === 'trim-spaces', 'Test Failed: Outer layout parameter clipping failed');
console.assert(slugify('Title--Text') === 'title-text', 'Test Failed: Compound structural divider clean-up failed');