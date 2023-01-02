'use strict';
const querystring = require("querystring");
const fetch = require("node-fetch");

exports.handler = async (event, context) => {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  // When the method is POST, the name will no longer be in the event’s
  // queryStringParameters – it’ll be in the event body encoded as a queryString
  const params = querystring.parse(event.body);
  const name = params.name || "World";

  // Send greeting to Slack
  return fetch(process.env.SLACK_WEBHOOK_URL, {
    headers: {
      "content-type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ text: `${name} says hello!` }),
  })
    .then(() => ({
      statusCode: 200,
      body: `Hello, ${name}! Your greeting has been sent to Slack 👋`,
    }))
    .catch((error) => ({
      statusCode: 422,
      body: `Oops! Something went wrong. ${error}`,
    }));
};

var request = require("request");

// populate environment variables locally.
require('dotenv').config();

const URL = "https://forxloveletters.com/";

/*
  Our serverless function handler
*/
export function handler(event, context, callback) {

    // get the arguments from the notification
    var body = JSON.parse(event.body);

    // prepare call to the Slack API
    var slackURL = process.env.SLACK_WEBHOOK_URL
    var slackPayload = {
        "text": "New comment on " + URL,
        "attachments": [
            {
                "fallback": "New letter submitted on the site",
                "color": "#444",
                "signature":body.data.signature,
                "nickname":body.data.nickname,
                "message":body.data.message
            },
            {
                "fallback": "Manage comments on " + URL,
                "callback_id": "form-action",
                "actions": [
                    {
                        "type": "button",
                        "text": "Approve letter",
                        "name": "approve",
                        "value": body.id
                    },
                    {
                        "type": "button",
                        "style": "danger",
                        "text": "Hide letter",
                        "name": "hide",
                        "value": body.id
                    }
                ]
            }]
    };

    // post the notification to Slack
    request.post({url:slackURL, json: slackPayload}, function(err, httpResponse, body) {
        var msg;
        if (err) {
            msg = 'Post to Slack failed:' + err;
        } else {
            msg = 'Post to Slack successful!  Server responded with:' + body;
        }
        callback(null, {
            statusCode: 200,
            body: msg
        })
        return console.log(msg);
    });

}
