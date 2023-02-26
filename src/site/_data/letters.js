// massage the approved letters data into the shape we'd like

const submissions = require('./letter-form_submissions.json');
const approved = require('./approved-letters_submissions.json');

// console.log("sub " + JSON.stringify(submissions));
// console.log("appr " + JSON.stringify(approved));

module.exports = () => {
    let letters = {};
    console.log(typeof letters);

    for(var i = 0; i < approved.length; i++) {
        let entry = approved[i];
        let letter = {
            type: 'submission',
            signature: entry.data.signature,
            nickname: entry.data.nickname,
            message: entry.data.lettercontent
        };
        // Add it to an existing array or create a new one in the comments object
        if(letters[entry.data.path]){
            letters[entry.data.path].push(letter);
        } else {
            letters[entry.data.path] = [letter];
        }
        // letters[entry.data.path] = [letter];
    }
    //console.log(letters.values()); //Object [Array Iterator] {} = if 'let letters = []'
    console.log(letters.values); //[Function: values]
    console.log(letters);


    return letters;
};

