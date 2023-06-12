const { EleventyServerlessBundlerPlugin } = require("@11ty/eleventy");

module.exports = function(config) {
    // eleventy config settings
    config.addPassthroughCopy("assets");
    // config.addPassthroughCopy("css");
    config.addPassthroughCopy("index.html");
    config.addPassthroughCopy("oxllstamp.ico");
    config.addPassthroughCopy("favicon-16x16.png");
    config.addPassthroughCopy("favicon-32x32.png");

    // Universal Shortcodes (Adds to Liquid, Nunjucks, Handlebars)
    config.addShortcode("footer", function() {
        return `<footer>
        <p id="disclaimer"><small><em class="show">DISCLAIMER</em></small></p>
        <p id="line1"><a href="/admin/page-1/" style="text-decoration: none;"><i class="ph-bold ph-key"></i></a> <u> 2023 </u><i class="ph ph-copyright"></i> <a href="https://twitter.com/oxmasterlist">OXMasterlist</a>
        / <a href="https://omegaxmasterlist.tumblr.com">omegaxmasterlist</a> <span>&bull; <a href="/pages/sitemap">SITEMAP</a> &bull; <a href="/pages/faq">FAQ</a> &bull; <a href="/pages/aboutthisproject/#contact">CONTACT ME</a></span>
        </p>
        <div class="identity-overlay"><div data-netlify-identity-button></div></div>
        </footer>`;
    });

    config.addShortcode("pagNav", function() {
        return `<div class="centered" id="pagNavCentered">
    <div aria-labelledby="nav-for-page" id="pagNavDiv">
        {% if pagination.href.first %}
{#            enter first link#}
            <span class="pagNavSpan">
                <a href="{{ pagination.href.first }}" class="navArrow pagNavButton">
                    <svg viewBox="0 0 14.565 12.001" width="14.565" height="12.001">
                        <path d="M 7.476 5.535 L 12.817 0.194 C 13.074 -0.064 13.492 -0.064 13.749 0.194 L 14.373 0.817 C 14.629 1.074 14.629 1.491 14.373 1.749 L 10.141 6 L 14.373 10.254 C 14.629 10.511 14.629 10.927 14.373 11.185 L 13.749 11.807 C 13.491 12.065 13.074 12.065 12.817 11.807 L 7.476 6.467 C 7.218 6.209 7.218 5.792 7.476 5.535 Z" style=""></path>
                        <path d="M 0.193 5.535 L 5.534 0.194 C 5.791 -0.064 6.209 -0.064 6.466 0.194 L 7.09 0.817 C 7.346 1.074 7.346 1.491 7.09 1.749 L 2.858 6 L 7.09 10.254 C 7.346 10.511 7.346 10.927 7.09 11.185 L 6.466 11.807 C 6.208 12.065 5.791 12.065 5.534 11.807 L 0.193 6.467 C -0.065 6.209 -0.065 5.792 0.193 5.535 Z" style=""></path>
                    </svg>
                </a>
            </span>
        {% endif %}

        {% if page.url !== pagination.href.previous %}
            <span class="pagNavSpan">
                <a href="{{ pagination.href.previous }}" class="navArrow pagNavButton">
                    <svg viewBox="0 0 7.282 12.001" width="7.282" height="12.001">
                        <path d="M 0.193 5.535 L 5.534 0.194 C 5.791 -0.064 6.209 -0.064 6.466 0.194 L 7.09 0.817 C 7.346 1.074 7.346 1.491 7.09 1.749 L 2.858 6 L 7.09 10.254 C 7.346 10.511 7.346 10.927 7.09 11.185 L 6.466 11.807 C 6.208 12.065 5.791 12.065 5.534 11.807 L 0.193 6.467 C -0.065 6.209 -0.065 5.792 0.193 5.535 Z" style=""></path>
                    </svg>
                </a>
            </span>
        {% endif %}

        {%- for pageEntry in pagination.pages %}
            <a href="{{ pagination.hrefs[ loop.index0 ] }}"{% if page.url == pagination.hrefs[ loop.index0 ] %} aria-current="page" class="navNum pagNavButton" {% else %} class="navNum pagNavButton"{% endif %}> {{ loop.index }} </a>
        {%- endfor %}

        {% if pagination.href.next %}
            <span class="pagNavSpan">
                <a href="{{ pagination.href.next }}" class="navArrow pagNavButton">
                    <svg viewBox="0 0 7.282 12.001" width="7.282" height="12.001">
                      <path d="M 0.193 6.466 L 5.534 11.807 C 5.791 12.065 6.209 12.065 6.466 11.807 L 7.09 11.184 C 7.346 10.927 7.346 10.51 7.09 10.252 L 2.858 6.001 L 7.09 1.747 C 7.346 1.49 7.346 1.074 7.09 0.816 L 6.466 0.194 C 6.208 -0.064 5.791 -0.064 5.534 0.194 L 0.193 5.534 C -0.065 5.792 -0.065 6.209 0.193 6.466 Z" style="" transform="matrix(-1, 0, 0, -1, 7.2815, 12.000999)"></path>
                    </svg>
                </a>
            </span>
        {% endif %}

        {% if pagination.href.last %}
{#            enter last link#}
            <span class="pagNavSpan">
                <a href="{{ pagination.href.last }}" class="navArrow pagNavButton">
                  <svg viewBox="0 0 14.565 12.001" width="14.565" height="12.001">
                      <path d="M 0.193 6.466 L 5.534 11.807 C 5.791 12.065 6.209 12.065 6.466 11.807 L 7.09 11.184 C 7.346 10.927 7.346 10.51 7.09 10.252 L 2.858 6.001 L 7.09 1.747 C 7.346 1.49 7.346 1.074 7.09 0.816 L 6.466 0.194 C 6.208 -0.064 5.791 -0.064 5.534 0.194 L 0.193 5.534 C -0.065 5.792 -0.065 6.209 0.193 6.466 Z" style="" transform="matrix(-1, 0, 0, -1, 7.2815, 12.000999)"></path>
                      <path d="M 7.476 6.466 L 12.817 11.807 C 13.074 12.065 13.492 12.065 13.749 11.807 L 14.373 11.184 C 14.629 10.927 14.629 10.51 14.373 10.252 L 10.141 6.001 L 14.373 1.747 C 14.629 1.49 14.629 1.074 14.373 0.816 L 13.749 0.194 C 13.491 -0.064 13.074 -0.064 12.817 0.194 L 7.476 5.534 C 7.218 5.792 7.218 6.209 7.476 6.466 Z" style="" transform="matrix(-1, 0, 0, -1, 21.847499, 12.000999)"></path>
                  </svg>
                </a>
            </span>
        {% endif %}
    </div>
</div>`
    })






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
