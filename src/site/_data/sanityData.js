const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function() {

    let PROJECT_ID = "o9bzeud3";
    let DATASET = "production";
    let QUERY = encodeURIComponent(`*[_type == "postcard-1"]{
                    "": postcardDesign->{
                        "altText":postcardAlt,
                        "":postcardBase{
                          "design":asset->{
                            _id,
                            url
                          }
                        }
                    }, 
                    letterTo[0], 
                    letterSigned, 
                    letterFrom, 
                    letterMessage, 
                    _id
                }`);

    // Compose the URL for your project's endpoint and add the query
    let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

    /* This returns a promise */
    return EleventyFetch(URL, {
        duration: "5m", // save for 1 day
        type: "json"    // we’ll parse JSON for you
    });
};