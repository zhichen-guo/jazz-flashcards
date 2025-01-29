import circle_of_fifths from './circle-of-fifths.js'
import key_signatures from './key-signatures.js';

export const names_to_slug = [
    {
        name: "Circle of Fifths",
        slug: "circle-of-fifths"
    },
    {
        name: "Key Signatures",
        slug: "key-signatures"
    }
]

const slugs_to_set = {
    "circle-of-fifths": circle_of_fifths,
    "key-signatures": key_signatures
}

export function get_set(name) {
    return slugs_to_set[name];
}