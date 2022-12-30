module.exports = function(config) {
    // eleventy config settings
    config.addPassthroughCopy("pages");
    config.addPassthroughCopy("assets");
    config.addPassthroughCopy("index.html");
    return {
        dir: {
            input: "src/site",
            output: "dist",
            includes: "_includes"
        },
        templateFormats : ["hbs", "md"],
        htmlTemplateEngine : ["hbs"],
        markdownTemplateEngine : ["hbs"]
    };
};