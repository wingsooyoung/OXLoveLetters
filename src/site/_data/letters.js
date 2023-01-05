// massage the approved letters data into the shape we'd like

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const submissions = require('./approved-letters_submissions.json');

export default function () {
    let letters = {};
    for (var i = 0; i < submissions.length; i++) {
        let entry = submissions[i]
        let letter = {
            signature: entry.data.signature,
            nickname: entry.data.nickname,
            message: entry.data.message.trim()
        };
        // Add it to an existing array or create a new one in the comments object
        if (letters[entry.data.path]) {
            letters[entry.data.path].push(letter);
        } else {
            letters[entry.data.path] = [letter];
        }
    }
    return letters;
}

