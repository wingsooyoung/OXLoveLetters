function openMailbox() {
    const ogbox = document.getElementById("static-mailbox");

    ogbox.src = "/assets/mailbox animated opening atmp3.gif";

    setTimeout(myReadURL, 5000);
}
function myReadURL() {
    document.location.href = '/pages/readletters/';
}
function myWriteURL() {
    document.location.href = '/pages/writeletters/';
}
function writebtnFunc() {
    setTimeout(myWriteURL, 5000);
}

const nname = document.getElementById("nickname");
function yesCheck() {
    nname.disabled = false;
}
function noCheck() {
    nname.disabled = true;
}
function showDrop() {
    document.getElementById("dropdowncontent").classList.toggle("drop");
    document.getElementById("aboutbtn").classList.toggle("corners");
}

// document.querySelector('#letter-form').submit();
function checkName() {
    const myform = document.querySelector('#letter-form');
    const mynameinput = myform.querySelector('#nickname');

    if(mynameinput.value.trim() === '') {
        mynameinput.value = mynameinput.getAttribute('placeholder');
    }

}