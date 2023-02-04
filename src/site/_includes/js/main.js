function openMailbox() {
    const ogbox = document.getElementById("static-mailbox");

    ogbox.src = "/assets/mailbox animated opening atmp3 -noshadows.gif";

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

// ABOUT logo modal
var aboutModal = document.getElementById("abModal");
function openAbout() {
    aboutModal.style.display = "block";

}
var closer = document.getElementsByClassName("closer")[0];
closer.onclick = function() {
    aboutModal.style.display = "none";
}

// READ LETTERS postcard modal
var modal = document.getElementById("myModal");
var modalLetter = document.getElementById("modal1");
function modalZoom(x) {
    modal.style.display = "block";
    let m = modalLetter.children;
    let y = x.children;
    m["contentboxM"].textContent = y[1].innerHTML;
    m["nameboxM"].textContent = y[2].innerHTML;
    m["lettercountM"].textContent = y[3].innerHTML;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}

//FAQ open/close
var ques = document.getElementsByClassName("questions");
var i;

for (i = 0; i < ques.length; i++) {
    ques[i].addEventListener("click", function() {
        var answ = this.nextElementSibling;
        if (answ.style.display === "block") {
            answ.style.display = "none";
        } else {
            answ.style.display = "block";
        }
    });
}

