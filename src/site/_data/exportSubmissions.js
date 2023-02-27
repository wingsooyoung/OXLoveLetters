// massage the approved letters data into the shape we'd like

const submissions = require('./letter-form_submissions.json');

module.exports = () => {
    let previews = {};
    console.log(typeof previews); //object

    for(var i = 0; i < submissions.length; i++) {
        let entry = submissions[i];
        let postcardLink = '';
        if(entry.data.members === 'Jaehan'){
            postcardLink = '/assets/jaehanpostcard.svg';
        }
        else if(entry.data.members === 'Hwichan') {
            postcardLink = '/assets/hwichanpostcard.svg';
        }
        else if(entry.data.members === 'Sebin') {
            postcardLink = '/assets/sebinpostcard.svg';
        }
        else if(entry.data.members === 'Hangyeom') {
            postcardLink = '/assets/hangyeompostcard.svg';
        }
        else if(entry.data.members === 'Taedong') {
            postcardLink = '/assets/taedongpostcard.svg';
        }
        else if(entry.data.members === 'Xen') {
            postcardLink = '/assets/xenpostcard.svg';
        }
        else if(entry.data.members === 'Jehyun') {
            postcardLink = '/assets/jehyunpostcard.svg';
        }
        else if(entry.data.members === 'Kevin') {
            postcardLink = '/assets/kevinpostcard.svg';
        }
        else if(entry.data.members === 'Junghoon') {
            postcardLink = '/assets/junghoonpostcard.svg';
        }
        else if(entry.data.members === 'Hyuk') {
            postcardLink = '/assets/hyukpostcard.svg';
        }
        else if(entry.data.members === 'Yechan') {
            postcardLink = '/assets/yechanpostcard.svg';
        }
        else{
            postcardLink = '/assets/postcard%20handdrawn%201.svg';
        }

        let letter = {
            type: 'preview',
            signature: entry.data.signature,
            nickname: entry.data.nickname,
            message: entry.data.lettercontent,
            member: entry.data.members,
            src: postcardLink
        };
        // Add it to an existing array or create a new one in the comments object
        if(previews[entry.data.path]){
            previews[entry.data.path].push(letter);
        } else {
            previews[entry.data.path] = [letter];
        }
    }

    // console.log(letters);
    console.log("/pages/writeletters/ = " + previews['/pages/writeletters/']);


    return previews;
};

