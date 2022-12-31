function openMailbox() {
    const ogbox = document.getElementById("static-mailbox");

    ogbox.src = "/assets/mailbox animated opening atmp3.gif";

    setTimeout(myReadURL, 5000);
}
function myReadURL() {
    document.location.href = '../../../../html pages/readletters/';
}
function myWriteURL() {
    document.location.href = '../../../../html pages/writeletters/';
}
function writebtnFunc() {
    setTimeout(myWriteURL, 5000);
}
