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

const sign = document.getElementById("yessign");
document.getElementById("nickname").disabled = !sign.checked;
