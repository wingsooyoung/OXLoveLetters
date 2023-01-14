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
    nname.readonly = false;
}
function noCheck() {
    nname.readonly = true;
}
function showDrop() {
    document.getElementById("dropdowncontent").classList.toggle("drop");
    document.getElementById("aboutbtn").classList.toggle("corners");
}
