// massage the approved letters data into the shape we'd like

const approved = require('./approved-letters_submissions.json');

module.exports = () => {
    let letters = {};
    console.log(typeof letters); //object

    for(var i = 0; i < approved.length; i++) {
        let entry = approved[i];
        let postcardLink = '';
        if(entry.data.members === 'Jaehan'){
            postcardLink = '/assets/jaehanpostcard.svg'
        }
        if(entry.data.members === 'Hwichan') {
            postcardLink = '/assets/hwichanpostcard.svg'
        }
        if(entry.data.members === 'Sebin') {
            postcardLink = '/assets/sebinpostcard.svg'
        }
        if(entry.data.members === 'Hangyeom') {
            postcardLink = '/assets/hangyeompostcard.svg'
        }
        if(entry.data.members === 'Taedong') {
            postcardLink = '/assets/taedongpostcard.svg'
        }
        if(entry.data.members === 'Xen') {
            postcardLink = '/assets/xenpostcard.svg'
        }
        if(entry.data.members === 'Jehyun') {
            postcardLink = '/assets/jehyunpostcard.svg'
        }
        if(entry.data.members === 'Kevin') {
            postcardLink = '/assets/kevinpostcard.svg'
        }
        if(entry.data.members === 'Junghoon') {
            postcardLink = '/assets/junghoonpostcard.svg'
        }
        if(entry.data.members === 'Hyuk') {
            postcardLink = '/assets/hyukpostcard.svg'
        }
        if(entry.data.members === 'Yechan') {
            postcardLink = '/assets/yechanpostcard.svg'
        }
        else{
            postcardLink = '/assets/postcard%20handdrawn%201.svg'
        }

        let letter = {
            type: 'final',
            signature: entry.data.signature,
            nickname: entry.data.nickname,
            message: entry.data.lettercontent,
            member: entry.data.members,
            src: postcardLink
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

