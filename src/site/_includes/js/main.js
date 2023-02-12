function openMailbox() {
    const ogbox = document.getElementById("static-mailbox");

    ogbox.src = "/assets/mailbox animated opening atmp3 -noshadows.gif";

    setTimeout(myReadURL, 3000);
}
function myReadURL() {
    document.location.href = '/pages/readletters/';
}

function writebtnFunc() {
    setTimeout(myWriteURL, 1000);
}
function myWriteURL() {
    document.location.href = '/pages/writeletters/';
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
function openAbout() {
    const list = aboutModal.classList;
    if (list.contains("closing")) {
        list.remove("closing");
    }
    list.add("opening");
    function myStartFunction() {
        aboutModal.style.display = "block";
    }
    aboutModal.addEventListener("animationstart", myStartFunction);
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
    const list = aboutModal.classList;
    if (list.contains("opening")) {
        list.remove("opening");
    }
    list.add("closing");
    function myEndFunction() {
        aboutModal.style.display = "none";
    }
    aboutModal.addEventListener("animationend", myEndFunction);

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


