const { EleventyServerlessBundlerPlugin } = require("@11ty/eleventy");

module.exports = function(config) {
    // eleventy config settings
    config.addPassthroughCopy("assets");
    config.addPassthroughCopy("index.html");

    config.addPlugin(EleventyServerlessBundlerPlugin, {
        name: "serverless",
        functionsDir: "src/functions",
        copy: ["form-action.js", "form-handler.js"],
        copyEnabled: true
    });
    config.addPlugin(EleventyServerlessBundlerPlugin, {
        name: "dynamic",
        functionsDir: "src/functions",
        copy: ["form-action.js", "form-handler.js"],
        copyEnabled: true
    });
    // permalink:
    //     build: "/pages/writeletters/"
    // serverless: "/pages/writeletters/:slug/"
    // dynamic: "/pages/writeletters/:slug/dynamic/"
    //


    // Universal Shortcodes (Adds to Liquid, Nunjucks, Handlebars)
    config.addShortcode("footer", function() {
        return `<footer>
        <p><small><u>2022 </u><i class="ph-copyright"></i> <a href="https://twitter.com/oxmasterlist">OXMasterlist</a>
        / <a href="https://omegaxmasterlist.tumblr.com">omegaxmasterlist</a> <a href="/admin/approveletters"><i class="ph-key" style="text-decoration: none;"></i></a>
        </small> <div class="identity-overlay"><div data-netlify-identity-menu></div></div></p>
        </footer>`;
    });

    return {
        dir: {
            input: "src/site",
            output: "dist",
            includes: "_includes",
            data: "_data"
        },
        templateFormats : ["hbs", "md", "html", "css", "js", "njk"],
        htmlTemplateEngine : "html"
    };
};