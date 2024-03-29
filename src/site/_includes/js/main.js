function openMailbox() {
    const ogbox = document.getElementById("static-mailbox");

    ogbox.src = "/assets/mailbox animated opening atmp3 -noshadows 150speed coloradj.gif";

    setTimeout(myReadURL, 1700); //1350ms gif length
}
function myReadURL() {
    document.location.href = '/pages/readletters/';
}

function writebtnFunc() {
    setTimeout(myWriteURL, 350);
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
if (nname != null) {
    nname.addEventListener("input", (event) => {
        if (nname.validity.valueMissing) {
            nname.setCustomValidity("Please enter your name or select 'No' above!");
        } else {
            nname.setCustomValidity("");
        }
    });
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
    if (aboutModal.classList != null) {
        if (!aboutModal.classList.contains("hidden")) {
            aboutModal.classList.toggle("hidden");
        }
        console.log("you CANNOT see the modal");
    }
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
    m["postcardM"].src = y[0].src;
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
// const ele = document.getElementsByClassName("template");
// for (let i = 0; i < ele.length; i++) {
//     if (ele[i].innerHTML === "4") {
//         ele[i].parentElement.remove();
//     }
// }

function myFilter(member) {
    var x, i, cards, j;
    x = document.getElementsByClassName("membersbox");
    cards = document.getElementsByClassName("containerbox");

    //start by making all the cards visible
    for (j = 0; j < cards.length; j++) {
        if (cards[j].classList.contains("notvisible")) {
            cards[j].classList.remove("notvisible")
        }
    }

    //go through each card, check the membersbox, if it doesn't match the member filter then hide that card
    let buttonNameClicked;
    let membersboxNameInside;
    for (i = 0; i < x.length; i++) {
        buttonNameClicked = member;

        if (x[i].innerHTML === '') {
            membersboxNameInside = 'All';
        } else {
            membersboxNameInside = x[i].innerHTML;
        }

        if (buttonNameClicked !== membersboxNameInside) {
            x[i].parentElement.classList.add("notvisible");
        }
    }
}


function filterToggle() {
    var x = document.getElementById("buttons");
    var x2 = document.getElementById("filterCloser");
    var y = document.getElementById("filterTitle");
    if (x.style.visibility === "hidden" && x2.style.visibility === "hidden") {
        x.style.visibility = "visible";
        x2.style.visibility = "visible";
        y.innerHTML = "FILTER <i class=\"ph-bold ph-minus\"></i>";
    } else {
        x.style.visibility = "hidden";
        x2.style.visibility = "hidden";
        y.innerHTML = "FILTER <i class=\"ph-bold ph-plus\"></i>";
    }
}

function removeFilters() {
    //code ... here!
    //code below is just copied from the first couple lines of myFilter(member) lol
    var cards, j;
    cards = document.getElementsByClassName("containerbox");

    //start by making all the cards visible
    for (j = 0; j < cards.length; j++) {
        if (cards[j].classList.contains("notvisible")) {
            cards[j].classList.remove("notvisible")
        }
    }
}


// code below - filter as select element test
const selectElement = document.querySelector("#filterSelect");

try {
    selectElement.addEventListener("change", (event) => {
        //get result text box element:
        // const result = document.querySelector(".result");
        //change result text to the selected option:
        // result.textContent = `You like ${event.target.value}`;
        let member = event.target.value;

        if (member === "All Members") {
            member = "All";
            myFilter(member);
        } else if (member === "(view all letters)") {
            removeFilters();
        } else {
            myFilter(member);
        }


        // ***yuh wait... can i just call myFilter(${event.target.value}) ?
        // do i need to actually change anything... O_O
    });
} catch (e) {
    console.log("error message: " + e)
}

let myButton = document.getElementById("myTopBtn");
window.onscroll = function() {scrollFunction(); scrollDown()};
function scrollFunction() {
    // console.log("scr t "+Math.round(document.documentElement.scrollTop))
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        // console.log("scrollTop > 20")
        myButton.style.display = "block";
    } else {
        // console.log("scrollTop <= 20")
        myButton.style.display = "none";
    }
}
function topFunction() {
    // document.body.scrollTop = 0; // For Safari
    // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    let headerEl = document.getElementById("bannerA");
    headerEl.scrollIntoView();
}




let otherBtn = document.getElementById("myBtmBtn");
function scrollDown() { //if at bottom of page, then hide, otherwise show
    // console.log("sc h "+document.documentElement.scrollHeight)
    // console.log("scr t "+Math.round(document.documentElement.scrollTop))
    // console.log("cl h "+document.documentElement.clientHeight)
    if (document.documentElement.scrollHeight - Math.round(document.documentElement.scrollTop) === document.documentElement.clientHeight) {
        // console.log("reached the bottom")
        otherBtn.style.display = "none";
    } else if (document.documentElement.scrollHeight - Math.round(document.documentElement.scrollTop) === document.documentElement.clientHeight + 1) {
        otherBtn.style.display = "none";
    } else {
        // console.log("not at the bottom")
        otherBtn.style.display = "block";
    }
}
function btmFunction() {
    let footerEl = document.getElementById("disclaimer");
    footerEl.scrollIntoView()
}



