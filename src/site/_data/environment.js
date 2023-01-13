// Make it easier for us to provide some UI logic
// based on whether environment variables have been initialised

module.exports = () => {

    const {
        NETLIFY_AUTH_TOKEN,
        SITE_NAME,
        YOUR_API_KEY,
        YOUR_CLIENT_ID
    } = process.env;

    return {
        ready : !!(NETLIFY_AUTH_TOKEN),
        NETLIFY_AUTH_TOKEN_ready : !!NETLIFY_AUTH_TOKEN,
        SITE_NAME,
        YOUR_API_KEY,
        YOUR_CLIENT_ID
    }

};