
const approved = require('./approved-letters_submissions.json');


module.exports = () => {
    let letters = {};

    for(var i = 0; i < approved.length; i++) {
        let entry = approved[i];
        let picked = entry.data.members;


        let postcardLink = '';
        if (picked === 'Jaehan') {
            postcardLink = '/assets/base/jaehanbase.svg';
        } else if (picked === 'Hwichan') {
            postcardLink = '/assets/base/hwichanbase.svg';
        } else if (picked === 'Sebin') {
            postcardLink = '/assets/base/sebinbase.svg';
        } else if (picked === 'Hangyeom') {
            postcardLink = '/assets/base/hangyeombase.svg';
        } else if (picked === 'Taedong') {
            postcardLink = '/assets/base/taedongbase.svg';
        } else if (picked === 'Xen') {
            postcardLink = '/assets/base/xenbase.svg';
        } else if (picked === 'Jehyun') {
            postcardLink = '/assets/base/jehyunbase.svg';
        } else if (picked === 'Kevin') {
            postcardLink = '/assets/base/kevinbase.svg';
        } else if (picked === 'Junghoon') {
            postcardLink = '/assets/base/junghoonbase.svg';
        } else if (picked === 'Hyuk') {
            postcardLink = '/assets/base/hyukbase.svg';
        } else if (picked === 'Yechan') {
            postcardLink = '/assets/base/yechanbase.svg';
        } else {
            postcardLink = '/assets/small borders postcard.svg';
        }

        //**** ADD IN THE TRANSLATED MEMBER NAMES + TRANSLATED 'ALL' SO THEY ARE CORRECTED TO THE PROPER VALUE!!!

        let letterTo = "";
        if (entry.data.members === "") {
            letterTo = "All";
        } else {
            letterTo = picked;
        }

        let mydearest = entry.data.lettercontent.replace(/(\r\n|\n|\r)/gm," ");
        mydearest = mydearest.replace(/\s+/g," ");

        let letter = {
            type: 'final',
            signature: entry.data.signature,
            nickname: entry.data.nickname.trim(),
            message: mydearest,
            member: letterTo,
            src: postcardLink,
            indexNum: i
        };
        // Add it to an existing array or create a new one in the comments object
        if (letters[entry.data.path]) {
            letters[entry.data.path].push(letter);
        } else {
            letters[entry.data.path] = [letter];
        }
    }
    return letters;
};

