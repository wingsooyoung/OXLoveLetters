// var request = require("request");
//
// // populate environment variables locally.
// require('dotenv').config();
// /*
//   Our serverless function handler
// */
//
// <a href="/.netlify/functions/hello-world">Trigger Function</a>
// //     use this^ to get postcards??????
//
// exports.handler = function (event, context, callback) {
//     // massage the approved letters data into the shape we'd like
//     const submissions = require('./letter-form_submissions.json');
//
//     let postcards = {};
//     for(var i = 0; i < submissions.length; i++) {
//         let entry = submissions[i]
//         let letter = {
//             signature: entry.data.signature,
//             nickname: entry.data.nickname,
//             lettercontent: entry.data.lettercontent
//         };
//         // Add it to an existing array or create a new one in the comments object
//         if(postcards[entry.data.path]){
//             postcards[entry.data.path].push(letter);
//         } else {
//             postcards[entry.data.path] = [letter];
//         }
//     }
//     return postcards;
//     //return console.log("form handler activated");
// }
