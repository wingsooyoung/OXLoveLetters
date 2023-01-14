// Make it easier for us to provide some UI logic
// based on whether environment variables have been initialised
// exports.handler = async function (event, context) {
//     const nauth = process.env.NETLIFY_AUTH_TOKEN;
//     const sitename = process.env.SITE_NAME;
//     const googapi = process.env.YOUR_API_KEY;
//     const googclid = process.env.YOUR_CLIENT_ID;
//
//
//     return {
//         statusCode: 200,
//         body: JSON.stringify({ message: `Value of NETLIFY_AUTH_TOKEN is ${nauth},
//             Value of SITE_NAME is ${sitename}, Value of YOUR_API_KEY is ${googapi}, Value of YOUR_CLIENT_ID is ${googclid}.` }),
//     };
// };


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