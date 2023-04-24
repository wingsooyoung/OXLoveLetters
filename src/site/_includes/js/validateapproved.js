
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
                form.submit()
            }

            // if (inputByName.checkValidity()) {
            //     form.submit();
            // } else {
            //     return false;
            // }

        }, false);
    }
})();