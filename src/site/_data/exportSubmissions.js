// massage the approved letters data into the shape we'd like

const submissions = require('./letter-form_submissions.json');

module.exports = () => {
    let previews = {};
    console.log(typeof previews); //object

    for(var i = 0; i < submissions.length; i++) {
        let entry = submissions[i];
        let letter = {
            type: 'preview',
            signature: entry.data.signature,
            nickname: entry.data.nickname,
            message: entry.data.lettercontent,
            member: entry.data.members
        };
        // Add it to an existing array or create a new one in the comments object
        if(previews[entry.data.path]){
            previews[entry.data.path].push(letter);
        } else {
            previews[entry.data.path] = [letter];
        }
    }

    // console.log(letters);
    console.log("default = " + previews['default']);


    return previews;
};

