const { EleventyServerless } = require("@11ty/eleventy");
const { builder } = require("@netlify/functions");

// For the bundler (auto-generated by the plugin)
require("./eleventy-bundler-modules.js");

async function handler (event) {
    let elev = new EleventyServerless("serverless", event.path, {
        inputDir: "src/site",
        functionsDir: "src/functions/",
        query: event.queryStringParameters,
    });

    try {
        return {
            statusCode: 200,
            headers: {
                "Content-Type": "text/html; charset=UTF-8"
            },
            body: await elev.render()
        };
    } catch (error) {
        return {
            statusCode: error.httpStatusCode || 500,
            body: JSON.stringify({
                error: error.message
            })
        };
    }
}

// Netlify On-demand Builder (runs on first request only)
exports.handler = builder(handler);