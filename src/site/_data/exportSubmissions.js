// massage the approved letters data into the shape we'd like

const submissions = require('./letter-form_submissions.json');
console.log("sub " + JSON.stringify(submissions));

module.exports = () => {
    let previews = {};

    for(var i = 0; i < submissions.length; i++) {
        let entry = submissions[i];
        let postcardLink = '';
        if(entry.data.members === 'Jaehan'){
            postcardLink = '/assets/base/jaehanbase.svg';
        }
        else if(entry.data.members === 'Hwichan') {
            postcardLink = '/assets/base/hwichanbase.svg';
        }
        else if(entry.data.members === 'Sebin') {
            postcardLink = '/assets/base/sebinbase.svg';
        }
        else if(entry.data.members === 'Hangyeom') {
            postcardLink = '/assets/base/hangyeombase.svg';
        }
        else if(entry.data.members === 'Taedong') {
            postcardLink = '/assets/base/taedongbase.svg';
        }
        else if(entry.data.members === 'Xen') {
            postcardLink = '/assets/base/xenbase.svg';
        }
        else if(entry.data.members === 'Jehyun') {
            postcardLink = '/assets/base/jehyunbase.svg';
        }
        else if(entry.data.members === 'Kevin') {
            postcardLink = '/assets/base/kevinbase.svg';
        }
        else if(entry.data.members === 'Junghoon') {
            postcardLink = '/assets/base/junghoonbase.svg';
        }
        else if(entry.data.members === 'Hyuk') {
            postcardLink = '/assets/base/hyukbase.svg';
        }
        else if(entry.data.members === 'Yechan') {
            postcardLink = '/assets/base/yechanbase.svg';
        }
        else{
            postcardLink = '/assets/small borders postcard.svg';
        }

        let letterTo = "";
        if(entry.data.members === "") {
            letterTo = "All";
        } else {
            letterTo = entry.data.members;
        }

        let letter = {
            type: 'preview',
            signature: entry.data.signature,
            nickname: entry.data.nickname,
            message: entry.data.lettercontent,
            member: letterTo,
            src: postcardLink
        };
        // Add it to an existing array or create a new one in the comments object
        if(previews[entry.data.path]){
            previews[entry.data.path].push(letter);
        } else {
            previews[entry.data.path] = [letter];
        }
    }
    let text = "";
    for (var i = 0; i < previews['/pages/writeletters/']; i++) {
        text += previews['/pages/writeletters/'][i] + " & ";
    }
    console.log("/pages/writeletters/ = " + text)

    return previews;
};

