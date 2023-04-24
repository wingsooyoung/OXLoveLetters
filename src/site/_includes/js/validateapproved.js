
(function(){
    var forms = document.querySelectorAll('form');
    if(forms.length === 0){ return;}

    // do this for all forms on the page
    for (let f = 0; f < forms.length; f++) {
        forms[f].addEventListener('submit', function(event) {
            event.preventDefault();
            let form = event.target;

            let wannaSign = document.getElementById("signature");
            const inputs = document.getElementById("approver").elements;
            const inputByName = inputs["nickname"];

            if (wannaSign) {
                console.log("please sign my own name!");
                if (inputByName === "") {
                    inputByName.value = "FOR X";
                    console.log("nickname has been properly added!")
                }
            } else {
                console.log("omg.... kms rn actually i hate this")
            }
            if (inputByName.length === 0) {
                console.log("FIX THE DAMN FORM ISTG")
            } else {
                const handleSubmit = (event) => {
                    event.preventDefault();
                    let ele = event.submitter;
                    const indexNumber = ele.className;
                    let dex = CSS.escape(indexNumber);

                    const myForm = event.target;
                    const formData = new FormData(myForm);

                    let message = document.querySelector(`#griddy > .griddywrap > div.containerbox.grid-item.${CSS.escape(indexNumber)} > #contentbox`).innerHTML;
                    let name = document.querySelector(`#griddy > .griddywrap > div.containerbox.grid-item.${CSS.escape(indexNumber)} > #namebox`).innerHTML;
                    let member = document.querySelector(`#griddy > .griddywrap > div.containerbox.grid-item.${CSS.escape(indexNumber)} + #membersbox`).innerHTML;
                    // let member = prem.substring(0, prem.indexOf("/"));

                    //manually enter form data
                    formData.set('path', 'default');
                    formData.set('signature','bool');
                    formData.set('nickname', name);
                    formData.set('lettercontent', message);
                    formData.set('members', member);

                    //send data above to the READ page
                    fetch("/", {
                        method: "POST",
                        headers: { "Content-Type": "application/x-www-form-urlencoded" },
                        body: new URLSearchParams(formData).toString(),
                    })
                        .then(() => alert("The letter has been submitted!"))
                        .then(() => ele.parentElement.remove())
                        .catch((error) => alert(error));
                };

                document
                    .querySelector("form")
                    .addEventListener("submit", handleSubmit);
            }

        }, false);
    }
})();