function openMailbox() {
    const ogbox = document.getElementById("static-mailbox");

    ogbox.src = "/assets/mailbox animated opening atmp3.gif";

    setTimeout(myReadURL, 2500);
}
function myReadURL() {
    document.location.href = '/pages/readletters/';
}
function myWriteURL() {
    document.location.href = '/pages/writeletters/';
}
function writebtnFunc() {
    setTimeout(myWriteURL, 2500);
}

const nname = document.getElementById("nickname");
function yesCheck() {
    nname.removeAttribute('readonly')
}
function noCheck() {
    nname.setAttribute('readonly', 'readonly')
}
function showDrop() {
    document.getElementById("dropdowncontent").classList.toggle("drop");
    document.getElementById("aboutbtn").classList.toggle("corners");
}

// const user = auth.currentUser();
// // "app_metadata": {"roles": ["admin", "creator"]}
// if (user) {
//     const timeCheck =
//         netlifyIdentity.currentUser().token.expires_at <= new Date().getTime();
//     if (timeCheck) {
//         netlifyIdentity.refresh(); //.then((jwt)=>console.log(jwt))
//         console.log('Welcome', user.user_metadata.full_name);
//     }
// }
// if (user) {
// ...
// } else {
//     netlifyIdentity.open();
// }
