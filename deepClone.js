/**
 * Generates an unlinked deep structural replica copy of an object layout configuration.
 * @param {Object} itemSource - Original object map data profile.
 * @returns {Object} A brand new replica copy with detached reference layers.
 */
export function deepClone(itemSource) {
    return JSON.parse(JSON.stringify(itemSource));
}

// TEST CASES
const profile = { nested: { score: 90 } };
const replica = deepClone(profile);
console.assert(replica.nested.score === 90, 'Test Failed: Object properties deep state clone verification broken');
console.assert(replica !== profile, 'Test Failed: Direct pointer space matches original reference');
profile.nested.score = 20;
console.assert(replica.nested.score === 90, 'Test Failed: Reference decoupling mutation contamination occurred');