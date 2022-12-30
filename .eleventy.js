module.exports = function(config) {
    // eleventy config settings

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