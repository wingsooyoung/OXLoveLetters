// https://script.google.com/macros/s/AKfycbwq8z25GedaYccJ__nD8lA4gyvrPXakRTRH7BFYOL3Ak7hEMDerTx4yI2SaFzjMXFp5/exec?gid=0



const EleventyFetch = require("@11ty/eleventy-fetch");
let message = document.getElementById('contentbox').innerHTML;
let name = document.getElementById('namebox').innerHTML;

module.exports = async function() {
    try {


        /* This returns a promise */
        return EleventyFetch("https://hooks.zapier.com/hooks/catch/14243142/bjge8n2/", {
            duration: "1d", // save for 1 day
            type: "json"    // we’ll parse JSON for you
        });
    } catch(e) {
        return {
            // my failure fallback data
            body: e
        }
    }

};