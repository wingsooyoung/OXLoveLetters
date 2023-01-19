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

var modal = document.getElementById("myModal");
var modalLetter = document.getElementById("modal1");
function modalZoom(x) {
    modal.style.display = "block";
    modalLetter.childNodes[3]["outerText"] = x.getElementById("namebox").innerHTML;
    modalLetter.childNodes[5]["outerText"] = x.getElementById("contentbox").innerHTML;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}
