import circle_of_fifths from './circle-of-fifths.js'
import key_signatures from './key-signatures.js';
import maj_3_7 from './maj-3-7.js';
import maj_7_3 from './maj-7-3.js';
import min_3_7 from './min-3-7.js';
import min_7_3 from './min-7-3.js';
import dom_3_7 from './dom-3-7.js';
import dom_7_3 from './dom-7-3.js';

export const names_to_slug = [
    {
        name: "Circle of Fifths",
        slug: "circle-of-fifths"
    },
    {
        name: "Key Signatures",
        slug: "key-signatures"
    },
    {
        name: "Major Chords (3-7 Voicings)",
        slug: "maj-3-7"
    },
    {
        name: "Major Chords (7-3 Voicings)",
        slug: "maj-7-3"
    },
    {
        name: "Minor Chords (3-7 Voicings)",
        slug: "min-3-7"
    },
    {
        name: "Minor Chords (7-3 Voicings)",
        slug: "min-7-3"
    },
    {
        name: "Dominant Chords (3-7 Voicings)",
        slug: "dom-3-7"
    },
    {
        name: "Dominant Chords (7-3 Voicings)",
        slug: "dom-7-3"
    },
]

const slugs_to_set = {
    "circle-of-fifths": circle_of_fifths,
    "key-signatures": key_signatures,
    "maj-3-7": maj_3_7,
    "maj-7-3": maj_7_3,
    "min-3-7": min_3_7,
    "min-7-3": min_7_3,
    "dom-3-7": dom_3_7,
    "dom-7-3": dom_7_3
}

export function get_set(name) {
    return slugs_to_set[name];
}