const { EleventyServerlessBundlerPlugin } = require("@11ty/eleventy");

module.exports = function(config) {
    var helpers = require('handlebars-helpers')();

    // eleventy config settings
    config.addPassthroughCopy("assets");
    config.addPassthroughCopy("index.html");

    // config.addPlugin(EleventyServerlessBundlerPlugin, {
    //     name: "serverless",
    //     functionsDir: "src/functions",
    //     copy: ["form-action.js", "form-handler.js"],
    //     copyEnabled: true
    // });
    // config.addPlugin(EleventyServerlessBundlerPlugin, {
    //     name: "dynamic",
    //     functionsDir: "src/functions",
    // });
    // permalink:
    //     build: "/pages/writeletters/"
    // serverless: "/pages/writeletters/:slug/"
    // dynamic: "/pages/writeletters/:slug/dynamic/"
    //
    // [[redirects]]
    // from = "/:slug/dynamic/"
    // to = "/.netlify/functions/dynamic"
    // status = 200
    // force = true
    // _generated_by_eleventy_serverless = "dynamic"
    //
    // [[redirects]]
    // from = "/:slug/"
    // to = "/.netlify/functions/serverless"
    // status = 200
    // force = true
    // _generated_by_eleventy_serverless = "serverless"

    // Universal Shortcodes (Adds to Liquid, Nunjucks, Handlebars)
    config.addShortcode("footer", function() {
        return `<footer>
        <p><small><u>2022 </u><i class="ph-copyright"></i> <a href="https://twitter.com/oxmasterlist">OXMasterlist</a>
        / <a href="https://omegaxmasterlist.tumblr.com">omegaxmasterlist</a></small></p>
        </footer>`;
    });

    return {
        dir: {
            input: "src/site",
            output: "dist",
            includes: "_includes"
        },
        templateFormats : ["hbs", "md", "html", "css", "js", "njk"],
        htmlTemplateEngine : "html"
    };
};