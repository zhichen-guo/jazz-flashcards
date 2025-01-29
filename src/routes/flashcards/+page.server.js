import { names_to_slug } from '$lib/sets/all_sets.js';

export function load() {
    return {
        sets: names_to_slug
    };
}