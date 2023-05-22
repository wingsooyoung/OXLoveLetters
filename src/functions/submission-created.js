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

// const NetlifyAPI = require('netlify')


//ONLY RUN THE PURGE CALL WHEN DELETION-GRIDDY REACHES 10 LETTERS..???? or something

async function purgeComment(formID, id) {
    var url = `https://api.netlify.com/api/v1/forms/${formID}/submissions/${id}?access_token=${NETLIFY_AUTH_TOKEN}`;

    return await fetch(url, {method: "DELETE"})
        .then(() => console.log("deletion successful!"))
        .catch((error) => console.log("Error Message: " + error));

}
//---------------------------------------------------------------------
exports.handler = async (event) => {
    // const client = new NetlifyAPI(process.env.NETLIFY_API_ACCESS_TOKEN)

    const {
        theFormID,
        letterIDs
    } = event.body

    const responses = [];
    console.log(letterIDs.iterator)
    console.log(JSON.stringify(letterIDs))

    for (var thisID in letterIDs) {
        const resp = await purgeComment(theFormID, thisID)
        responses.push(resp)
    }
    return responses


        // .then((res) => {
        //     console.log(`doThis function worked! ${res} `)
        //     return { statusCode: 200, body: "this is so sick" };
        // })
        // .catch(err => {
        //     console.log("errormesage = " +err)
        //     return {
        //         statusCode: 500, body: JSON.stringify(err)
        //     }
        // })

}

