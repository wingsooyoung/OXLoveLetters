// const approved = require('./approved-letters_submissions.json');
const submissions = require('./letter-form_submissions.json');

module.exports = () => {
    let previews = {};
    console.log(submissions.length)

    myLoop: for(var i = 0; i < submissions.length; i++) {
        let entry = submissions[i];
        //compare to approved, skip if it has already been moved over!

        // for(var j = 0; j < approved.length; j++) {
        //     let check = approved[j];
        //     // console.log(check.data.lettercontent);
        //     console.log(entry.data.lettercontent);
        //     console.log(check.data.lettercontent == entry.data.lettercontent);
        //     console.log(check.data.lettercontent === entry.data.lettercontent);
        //     if(check.data.lettercontent == entry.data.lettercontent) {
        //         continue myLoop
        //     }
        // }

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
            nickname: entry.data.nickname.trim(),
            message: entry.data.lettercontent,
            member: letterTo,
            src: postcardLink,
            ip: entry.data.ip,
            subid: entry.id
        };
        // Add it to an existing array or create a new one in the comments object
        if(previews[entry.data.path]){
            previews[entry.data.path].push(letter);
        } else {
            previews[entry.data.path] = [letter];
        }
    }

    return previews;
};

