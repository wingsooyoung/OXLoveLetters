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
exports.handler = async (event) => {
    // Get data off the event body
    const {
        theFormID,
        letterIDs
    } = JSON.parse(event.body)

    console.log("this is typeof letterIDs "+typeof letterIDs)
    // letterIDs.forEach(purgeComment(theFormID))
    async function doThis() {
        for (const thisID in letterIDs) {
            await purgeComment(theFormID, letterIDs[thisID])
        }
        return "cool"
    }

    //below here is just log checking!

    var bodyAlt = JSON.parse(event.body);

    console.log(bodyAlt)

    return doThis()
        .then((res) => {
            // Log the success into our function log
            console.log(`doThis function worked! ${res} `)
            // return with a 200 status and a stringified JSON object we get from the Sanity API
            return { statusCode: 200, body: "this is so sick" };
        })
        .catch(err => {
            // If there's an error, log it
            // and return a 500 error and a JSON string of the error
            console.log(err)
            return {
                statusCode: 500, body: JSON.stringify(err)
            }
        })

}

