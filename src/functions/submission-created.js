// exports.handler = async function (event, context) {
//     // your server-side functionality
// };

/* Triggered when a form submission is posted to your site. */
exports.handler = function(event, context, callback) {
    console.log('submission-created')
    console.log('event', event)
    console.log('context', context)
    return callback(null, {
        statusCode: 200,
        body: "Hello, World"
    })
}