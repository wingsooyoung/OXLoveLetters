// massage the approved letters data into the shape we'd like

const approved = require('./approved-letters_submissions.json');
console.log("app " + JSON.stringify(approved)); // delete


module.exports = () => {
    // let objList = {"human_fields":{"Lettercontent":"Hi Sebin!"}}
    // console.log(objList.human_fields.Lettercontent)
    //
    // let objList2 = {"human_fields":{"Lettercontent":"I love you so \r\nmuch 💚"}}
    // let grr = objList2.human_fields.Lettercontent;
    // console.log(grr)

    let letters = {};

    for(var i = 0; i < approved.length; i++) {
        let entry = approved[i];
        console.log("entry["+ i + "] = " + entry.data.values) //delete

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
        // console.log(postcardLink); //delete

        let letterTo = "";
        if(entry.data.members === "") {
            letterTo = "All";
        } else {
            letterTo = entry.data.members;
        }
        // console.log(letterTo); //delete

        let letter = {
            signature: entry.data.signature,
            nickname: entry.data.nickname,
            message: entry.data.lettercontent,
            member: letterTo,
            src: postcardLink
        };
        console.log(letter); // delete
        // Add it to an existing array or create a new one in the comments object
        if(letters[entry.data.path]){
            letters[entry.data.path].push(letter);
        } else {
            letters[entry.data.path] = [letter];
        }
    }

    // let text = "";
    // for (var i = 0; i < letters['/default'].length; i++) {
    //     text += letters['/default'][i] + " & ";
    // }
    // console.log("/default = " + text)



//actually helpful and working tests.... :
    // console.log("letters['default'] = ");
    // console.log(letters['default']);
    // console.log("letters = ");
    // console.log(letters);


    return letters;
};

