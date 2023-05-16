//trigger on submission to approved-letters

// populate environment variables locally.
require('dotenv').config();
const {
    NETLIFY_AUTH_TOKEN
} = process.env;

function purgeComment(id) {
    var url = `https://api.netlify.com/api/v1/forms/639fa0208e1bce0008b4b819/submissions?access_token=${NETLIFY_AUTH_TOKEN}/${id}`;

    fetch(url, {method: "DELETE"})
        .then(r => console.log(r))
        .then(() => console.log("deletion successful!"))
        .catch((error) => console.log("Error Message: " + error));
}

//---------------------------------------------------------------------
exports.handler = async function (event, context, callback) {

    // get the arguments from the notification
    var bodyAlt = JSON.parse(event.body);

    // parse the payload
    var body = event.body.split("payload=")[1];
    var payload = JSON.parse(decodeURI(body));

    console.log(payload)

    // purgeComment(id);
    callback(null, {
        statusCode: 200,
        body: "sub create func worked! conga rat"
        // body: "Comment deleted"
    });

}

