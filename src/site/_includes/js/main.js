function openMailbox() {
    const ogbox = document.getElementById("static-mailbox");

    ogbox.src = "/assets/mailbox animated opening atmp3 -noshadows 150speed coloradj.gif";

    setTimeout(myReadURL, 1700); //1350ms gif length
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

function toggleAnnouncement(btn) {
    const outerDiv = document.getElementById("special-announcement");
    const imgEle = outerDiv.children.item(0);
    const pEle = outerDiv.children.item(1);

    imgEle.classList.toggle("hidden");
    pEle.classList.toggle("hidden");
    if (btn.innerHTML === "HIDE") {
        btn.innerHTML = "SHOW";
    } else {
        btn.innerHTML = "HIDE";
    }
    if (outerDiv.classList.contains("contentsonly")) {
        document.getElementById("toggler").style.margin = "5px auto 35px;";
    } else {
        document.getElementById("toggler").style.margin = "5px auto 5px;";
    }
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
var aboutContent = document.getElementById("modContainer");
function openAbout() {
    const list = aboutContent.classList;
    if (list.contains("closing")) {
        list.remove("closing");
    }
    list.add("opening");
    if (aboutModal.classList.contains("hidden")) {
        aboutModal.classList.toggle("hidden");
    }
    console.log("you CAN see the modal");
    aboutContent.removeEventListener("animationend", myEndFunction);
}

if (document.referrer !== "") {
    var prev = new URL(document.referrer);
} else {
    var prev = "empty";
}
function myLoadFunc() {
    if ((window.location.pathname === "/") && (prev.hostname !== window.location.hostname)) {
        openAbout();
    }
    else {
        myEndFunction();
    }
}
function myEndFunction() {
    if (!aboutModal.classList.contains("hidden")) {
        aboutModal.classList.toggle("hidden");
    }
    console.log("you CANNOT see the modal");
}

var closer = document.getElementsByClassName("closer")[0];
closer.onclick = closeAbout;
function closeAbout() {
    const list = aboutContent.classList;
    if (list.contains("opening")) {
        list.remove("opening");
    }
    list.add("closing");
    aboutContent.addEventListener("animationend", myEndFunction);
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


//--------------------------------
const ele = document.getElementsByClassName("template");
for (let i = 0; i < ele.length; i++) {
    if (ele[i].innerHTML === "4") {
        ele[i].parentElement.remove();
    }
}

function myFilter(member) {
    var x, i;
    x = document.getElementsByClassName("memberbox");
    if (member === "All") member = "";
    for (i = 0; i < x.length; i++) {
        // w3RemoveClass(x[i], "show");
        if (x[i].parentElement.classList.contains("visible")) {
            x[i].parentElement.classList.remove("visible");
        }
        if (x[i].innerHTML === member) {
            // w3AddClass(x[i], "show");
            x[i].parentElement.classList.add("visible");
        }
    }
}


function filterToggle() {
    var x = document.getElementById("buttons");
    var y = document.getElementById("filterTitle");
    if (x.style.display === "none") {
        x.style.display = "inline";
        y.innerHTML = "FILTER -";
    } else {
        x.style.display = "none";
        y.innerHTML = "FILTER +";
    }
}

