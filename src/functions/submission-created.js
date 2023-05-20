//trigger on submission to approved-letters

//need to send deletion-griddy ids through to this function
    //then call the DELETE form submission api for each one
        //return result (success message or error message) to the browser

//data received: array of submish-ids
//data sent: res or error

// populate environment variables locally.
require('dotenv').config();
const {
    NETLIFY_AUTH_TOKEN
} = process.env;

//ONLY RUN THE PURGE CALL WHEN DELETION-GRIDDY REACHES 10 LETTERS..???? or something

function purgeComment(formID, id) {
    var url = `https://api.netlify.com/api/v1/forms/${formID}/submissions?access_token=${NETLIFY_AUTH_TOKEN}/${id}`;

    return fetch(url, {method: "DELETE"})
        .then(r => console.log(r))
        .then(() => console.log("deletion successful!"))
        .catch((error) => console.log("Error Message: " + error));
}
//---------------------------------------------------------------------
exports.handler = async function (event, context, callback) {
    // Get data off the event body
    const {
        theFormID,
        letterIDs
    } = JSON.parse(event.body)

    // letterIDs.forEach(purgeComment(theFormID))
    for (const thisID of letterIDs) {
        await purgeComment(theFormID, thisID)
    }


    //below here is just log checking!

    var bodyAlt = JSON.parse(event.body);

    console.log(bodyAlt)

    callback(null, {
        statusCode: 200,
        body: "sub create func worked! conga rat my dude"
    });

}

