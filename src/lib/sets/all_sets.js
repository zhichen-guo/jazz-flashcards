import circle_of_fifths from './circle-of-fifths.js';

export const names_to_slug = [
    {
        name: "Circle of Fifths",
        slug: "circle-of-fifths"
    }
]

const slugs_to_set = {
    "circle-of-fifths": circle_of_fifths
}

export function get_set(name) {
    return slugs_to_set[name];
}