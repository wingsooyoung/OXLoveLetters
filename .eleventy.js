const { EleventyServerlessBundlerPlugin } = require("@11ty/eleventy");

module.exports = function(config) {
    // eleventy config settings
    config.addPassthroughCopy("assets");
    config.addPassthroughCopy("index.html");
    config.addPassthroughCopy("sheets");
    config.addPassthroughCopy("oxllstamp.ico");
    config.addPassthroughCopy("favicon-16x16.png");
    config.addPassthroughCopy("favicon-32x32.png");

    // Universal Shortcodes (Adds to Liquid, Nunjucks, Handlebars)
    config.addShortcode("footer", function() {
        return `<footer>
        <div class="identity-overlay"><div data-netlify-identity-button></div></div>
        <p><u>2022 </u><i class="ph-copyright"></i> <a href="https://twitter.com/oxmasterlist">OXMasterlist</a>
        / <a href="https://omegaxmasterlist.tumblr.com">omegaxmasterlist</a> <a href="/admin/approveletters" style="text-decoration: none;"><i class="ph-key-bold"></i></a>
        </p>
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
