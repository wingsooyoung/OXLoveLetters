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
        <p><a href="/admin/approveletters" style="text-decoration: none;"><i class="ph-key-bold"></i></a> <u> 2023 </u><i class="ph-copyright"></i> <a href="https://twitter.com/oxmasterlist">OXMasterlist</a>
        / <a href="https://omegaxmasterlist.tumblr.com">omegaxmasterlist</a> <span>&bull; <a href="/pages/sitemap">SITEMAP</a> &bull; <a href="/pages/faq">FAQ</a> &bull; <a href="/pages/aboutthisproject/#contact">CONTACT ME</a></span>
        </p>
        <p id="disclaimer"><small><em>DISCLAIMER:</em> THIS WEBSITE AND ITS ADMIN ARE NOT OFFICIALLY AFFILIATED WITH OMEGA X OR ITS MEMBERS IN ANY WAY WHATSOEVER. THERE IS NO GUARANTEE THE MEMBERS OF OMEGA X WILL READ ANY OF THE LETTERS SUBMITTED AND APPROVED TO THIS SITE. THIS IS AN UNOFFICIAL PROJECT CREATED BY ONE (1) INTERNATIONAL FOR X AND IS FOR ENTERTAINMENT PURPOSES ONLY.</small></p>
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
