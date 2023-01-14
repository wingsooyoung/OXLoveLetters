require("dotenv").config();
const {
    YOUR_API_KEY
} = process.env;
const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function() {
    try {
        const allApproved = `https://sheets.googleapis.com/v4/spreadsheets/1JL75fI-sIp5LATOkwV1rB9hYzCF1y0WeaBusj6rsHpw/values/Sheet1?alt=json&key=${YOUR_API_KEY}`;

        /* This returns a promise */
        return EleventyFetch(allApproved, {
            duration: "0s", // save for 1 day
            type: "json"    // we’ll parse JSON for you
        });
    } catch(e) {
        return {
            // my failure fallback data
            body: e
        }
    }

};
