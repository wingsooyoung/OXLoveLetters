
(function(){
    var forms = document.querySelectorAll('form');
    if(forms.length === 0){ return;}

    // do this for all forms on the page
    for (let f = 0; f < forms.length; f++) {
        forms[f].addEventListener('submit', function(event) {
            event.preventDefault();
            let form = event.target;

            let wannaSign = document.getElementById("yessign");
            let defaultSign = document.getElementById("nosign");
            if (wannaSign.checked) {
                console.log("signing my own name");
            } else if (defaultSign.checked) {
                form.set('nickname', 'FOR X');
            } else {
                console.log ('something didnt go write with the name part...')
            }

            // let nickname = form.get('nickname');
            const inputs = document.getElementById("letter-form").elements;
            const inputByName = inputs["nickname"];

            if(inputByName.length === 0) {
                return false;
            } else {
                form.submit();
            }

        }, false);
    }
})();