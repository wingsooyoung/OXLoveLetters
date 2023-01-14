require("dotenv").config();
const {
    YOUR_API_KEY
} = process.env;
const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function() {
    try {
        const allSubmissions = `https://sheets.googleapis.com/v4/spreadsheets/1e4JKidqlL1JLYf_xQM8OSTSxrtNkHy7AR4AJKCkpEtM/values/Sheet1?alt=json&key=${YOUR_API_KEY}`;

        /* This returns a promise */
        return EleventyFetch(allSubmissions, {
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
