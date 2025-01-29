import { animals, animals_in_spanish } from './example-sets.js';

export const names_to_slug = [
    {
        name: "Animals in Spanish",
        slug: "animals-in-spanish"
    },
    {
        name: "Animals",
        slug: "animals"
    }
]

const slugs_to_set = {
    "animals-in-spanish": animals_in_spanish,
    "animals": animals
}

export function get_set(name) {
    return slugs_to_set[name];
}