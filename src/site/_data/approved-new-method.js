// formId: "63ae73c8f163f600095aea56"

// required packages
const axios = require("axios");
const EleventyFetch = require("@11ty/eleventy-fetch");
const flatCache = require("flat-cache");
const path = require("path");

// Config
const ITEMS_PER_REQUEST = 100;
const CACHE_KEY = "approvedform";
const CACHE_FOLDER = path.resolve("./.cache");
const CACHE_FILE = "approvedformSubs.json";

// gather our environment variables
require('dotenv').config()
const {
    NETLIFY_AUTH_TOKEN,
    SITE_ID
} = process.env;


//getUrl - new!
//accepts params > returns url string
function getUrl({filter = "ham", formId = "63ae73c8f163f600095aea56", page = 1, perPage = 100} = {}) {
    let url;
    let resultsPerPage = 20;
    if (formId) {
        url = `https://api.netlify.com/api/v1/forms/${(formId)}/submissions?access_token=${NETLIFY_AUTH_TOKEN}&`;
    } else {
        url = `https://api.netlify.com/api/v1/submissions?access_token=${NETLIFY_AUTH_TOKEN}&`;
    }
    return url += `state=${filter || "ham"}&page=${page || 1}&per_page=${perPage || resultsPerPage}`
}


async function requestSubmissions(urlParams) {
    try {
        let actualUrl;

        if (urlParams === undefined) {
            actualUrl = getUrl();
        } else {
            actualUrl = getUrl(urlParams);
        }

        const otherRes = await axios(actualUrl, {
            method: "get",
            headers: { "Accept-Encoding": "gzip,deflate,compress" },
        })
        const siteRes = await axios(`https://api.netlify.com/api/v1/sites/${SITE_ID}/forms?access_token=${NETLIFY_AUTH_TOKEN}`,{
            method: "get",
            headers: { "Accept-Encoding": "gzip,deflate,compress" },
        })
        console.log("site api call result type: "+typeof siteRes.data)
        console.log("site api call result body: "+ siteRes.data)

        // return the total number of items to fetch and the data
        return {
            total: parseInt(siteRes.data[0].submission_count, 10),
            data: otherRes.data,
        };
    } catch (err) {
        throw new Error(err);
    }
}

/**
 * Get all posts
 * - check if we have a cache
 * - if not make api requests and create cache
 * @ return {Array} - array of API data (from cache if there is one or from API)
 */
async function getAllPosts() {
    // load cache
    const cache = flatCache.load(CACHE_FILE, CACHE_FOLDER);
    const cachedItems = cache.getKey(CACHE_KEY);

    // if we have a cache, return cached data
    // UNCOMMENT LINES BELOW WHEN YOU ARE NOT APPROVING NEW LETTERS!!!!! / or delete lines completely? idk
    // reason: when rebuilding site after mass deleter, it will pull cached letters and return submissions that have already been deleted
        // if (cachedItems) {
        //     console.log("Blogposts from approved cache");
        //     return cachedItems;
        // }

    // if we do not, make queries
    console.log("Blogposts from approved API");

    // variables
    const allRequests = [];
    const apiData = [];
    let additionalRequests = 0;

    // make first request and marge results with array
    const request = await requestSubmissions();
    apiData.push(...request.data);
    console.log("request.total for approved-letters = "+request.total)


    // calculate how many additional requests we need
    additionalRequests = Math.ceil(request.total / ITEMS_PER_REQUEST) - 1;

    // create additional requests
    for (let i = 1; i <= additionalRequests; i++) {
        //create params
        // const start = i * ITEMS_PER_REQUEST;
        let x1 = {
            formId: "63ae73c8f163f600095aea56",
            page: i + 1,
            perPage: 100,
            filter: "ham"
        }
        //call getUrl(params)
        const request = requestSubmissions(x1);
        //add Promise to array of requests
        allRequests.push(request);
    }

    // resolve all additional requests in parallel
    const allResponses = await Promise.all(allRequests);
    allResponses.forEach((response) => {
        apiData.push(...response.data);
    });


    // sort data as needed - ** ? change this sort method actually
    // apiData.sort((a, b) => {
    //     return a.id - b.id;
    // });

    // set and save cache
    if (apiData.length) {
        cache.setKey(CACHE_KEY, apiData);
        cache.save();
    }

    // return data
    return apiData;
}

module.exports = getAllPosts();






