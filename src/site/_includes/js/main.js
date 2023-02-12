function openMailbox() {
    const ogbox = document.getElementById("static-mailbox");

    ogbox.src = "/assets/mailbox animated opening atmp3 -noshadows.gif";

    setTimeout(myReadURL, 2800);
}
function myReadURL() {
    document.location.href = '/pages/readletters/';
}
function myWriteURL() {
    document.location.href = '/pages/writeletters/';
}
function writebtnFunc() {
    setTimeout(myWriteURL, 1000);
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

function openHome() {
    document.location.href = '/';
}

// ABOUT logo modal
var aboutModal = document.getElementById("abModal");
var modContainer = document.getElementById("modContainer");
function openAbout() {
    const list = modContainer.classList;
    list.remove("closing");
    list.add("opening");
    modContainer.addEventListener("animationstart", myStartFunction);
    function myStartFunction() {
        aboutModal.style.display = "block";
    }
}

function myLoadFunc() {
    if (window.location.pathname === "/") {
        openAbout();
    }
    else {
        aboutModal.style.display = "none";
    }
}

var closer = document.getElementsByClassName("closer")[0];
closer.onclick = closeAbout;
function closeAbout() {
    const list = modContainer.classList;
    list.remove("opening");
    list.add("closing");
    modContainer.addEventListener("animationend", myEndFunction);
    function myEndFunction() {
        aboutModal.style.display = "none";
    }
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
try {
    span.onclick = function() {
        modal.style.display = "none";
    }}
catch(err) {
    console.log("doesnt apply to this page dwbi")
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


