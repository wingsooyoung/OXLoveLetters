module.exports = function(config) {
    var helpers = require('handlebars-helpers')();

    var fs = require('fs');
    config.addHandlebarsHelper("include", (filename = "") => {
        var content = fs.readFileSync(filename); // Using the 'fs' module of nodejs
        var compiled = config.compile(content.toString());
        return compiled();
    });

    // eleventy config settings
    config.addPassthroughCopy("pages");
    config.addPassthroughCopy("assets");
    config.addPassthroughCopy("index.html");

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
        templateFormats : ["hbs", "md", "html", "css", "js"],
        htmlTemplateEngine : ["hbs"],
        markdownTemplateEngine : ["hbs"]
    };
};