// var request = require("request");
import request from 'request';

// populate environment variables locally.
// require('dotenv').config();
import 'dotenv/config';

const {
    NETLIFY_AUTH_TOKEN
} = process.env;

// hardcoding this for a moment... TO DO: replace request with something that follows redirects
const URL = "https://forxloveletters.com/";

/*
  delete this submission via the api
*/
function purgeComment(id) {
    var url = `https://api.netlify.com/api/v1/submissions/${id}?access_token=${NETLIFY_AUTH_TOKEN}`;
    request.delete(url, function(err, response, body){
        if(err){
            return console.log(err);
        } else {
            return console.log("Letter hidden from queue.");
        }
    });
}


/*
  Handle the lambda invocation
*/
export const handler = async (event, context) => {
// exports.handler = function (event, context, callback) {

    // parse the payload
    console.log('Event: ', event.body)
    var body = event.body.split("payload=")[1];
    console.log('body: ', body);
    var payload = JSON.parse(decodeURIComponent(body));
    console.log('payload: ', payload);

    var method = payload.actions[0].name;
    var id = payload.actions[0].value;

    // parse the payload
    // var body = event.body.split("payload=")[1];
    // var payload = JSON.parse(unescape(body));
    // var method = payload.actions[0].name;
    // var id = payload.actions[0].value;

    if(method === "hide") {
        purgeComment(id);
        callback(null, {
            statusCode: 200,
            body: "Letter hidden"
        });
    }


    else if (method === "approve"){

        // get the comment data from the queue
        var url = `https://api.netlify.com/api/v1/submissions/${id}?access_token=${NETLIFY_AUTH_TOKEN}`;
        // replace with: ???????????
        // var url = 'https:// api.netlify.com/api/v1/forms/{form_id}/submissions'



        request(url, function(err, response, body){
            if(!err && response.statusCode === 200){
                var data = JSON.parse(body).data;

                // now we have the data, let's massage it and POST IT TO THE APPROVED FORM
                var payload = {
                    'form-name' : "approved-letters",
                    'path': data.path,
                    'signature': data.signature,
                    'nickname': data.nickname,
                    'message': data.message
                };
                var approvedURL = URL;

                console.log("Posting to", approvedURL);
                console.log(payload);

                // post the comment to the approved list
                request.post({'url':approvedURL, 'formData': payload }, function(err, httpResponse, body) {
                    var msg;
                    if (err) {
                        msg = 'Post to approved letters failed:' + err;
                        console.log(msg);
                    } else {
                        msg = 'Post to approved letters list successful.'
                        console.log(msg);
                        purgeComment(id);
                    }
                    var msg = "Letter registered. Site deploying to include it.";
                    callback(null, {
                        statusCode: 200,
                        body: JSON.stringify(msg)
                    })
                    return console.log(msg);
                });
            }
        });

    }
}
