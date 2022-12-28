// massage the approved letters data into the shape we'd like

const submissions = require('./approved-letters_submissions.json');



module.exports = () => {

    let letters = {};

    submissions.forEach(entry => {
        let letter = {
            // avatar: gravatar.url(entry.data.email, {s: '100', r: 'x', d: 'retro'}, true),
            //signature nickname message
            signature: entry.data.signature,
            nickname: entry.data.nickname,
            message: entry.data.message.trim()
        };

        // Add it to an existing array or create a new one in the comments object
        if(letters[entry.data.path]){
            letters[entry.data.path].push(letter);
        } else {
            letters[entry.data.path] = [letter];
        }
    });

    return letters;

};