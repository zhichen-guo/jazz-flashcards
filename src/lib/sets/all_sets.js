import { animals, animals_in_spanish } from './example-sets.js';
import circle_of_fifths from './circle-of-fifths.js';

export const names_to_slug = [
    {
        name: "Animals in Spanish",
        slug: "animals-in-spanish"
    },
    {
        name: "Animals",
        slug: "animals"
    },
    {
        name: "Circle of Fifths",
        slug: "circle-of-fifths"
    }
]

const slugs_to_set = {
    "animals-in-spanish": animals_in_spanish,
    "animals": animals,
    "circle-of-fifths": circle_of_fifths
}

export function get_set(name) {
    return slugs_to_set[name];
}