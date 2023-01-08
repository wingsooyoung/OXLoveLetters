var request = require("request");

// populate environment variables locally.
require('dotenv').config();

const URL = "https://forxloveletters.com/";

/*
  Our serverless function handler
*/
exports.handler = function (event, context, callback) {


    return console.log("form handler activated");


}
