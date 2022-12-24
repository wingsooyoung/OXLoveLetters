function openMailbox() {
    const ogbox = document.getElementById("static-mailbox");
    const openbox = document.getElementById("opening-mailbox");

    ogbox.src = "/mailbox animated opening atmp3.gif";

    ogbox.onload = window.location.assign("/pages/readletters.html");
}

function writebtnFunc() {

}
