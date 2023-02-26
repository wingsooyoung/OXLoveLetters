// massage the approved letters data into the shape we'd like

const approved = require('./approved-letters_submissions.json');

module.exports = () => {
    let letters = {};
    console.log(typeof letters); //object

    for(var i = 0; i < approved.length; i++) {
        let entry = approved[i];
        let letter = {
            type: 'final',
            signature: entry.data.signature,
            nickname: entry.data.nickname,
            message: entry.data.lettercontent,
            member: entry.data.members
        };
        // Add it to an existing array or create a new one in the comments object
        if(letters[entry.data.path]){
            letters[entry.data.path].push(letter);
        } else {
            letters[entry.data.path] = [letter];
        }
    }

    console.log("default = " + letters['default']);


    return letters;
};

