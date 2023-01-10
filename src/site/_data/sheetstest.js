

// sheetId: '1e4JKidqlL1JLYf_xQM8OSTSxrtNkHy7AR4AJKCkpEtM';
// https:/ /docs.google.com/spreadsheets/d/1DpRZ4IA6Xd_rd4sNnkpuTkp_-6KOEJJWS-VqZxw4oU0/edit#gid=0&range=A2

const axios  = require('axios');
const seed   = require('../../../utils/save-seed.js');
require("dotenv").config();
const {
    YOUR_API_KEY
} = process.env;


// Once a googel sheet is "published to the web" we can access its JSON
// via a URL of this form. We just need to pass in the ID of the sheet
// which we can find in the URL of the document.
// https:/ /spreadsheets.google.com/feeds/cells/${sheetID}/1/public/full?alt=json

// 'https:/ /sheets.googleapis.com/v4/spreadsheets/1e4JKidqlL1JLYf_xQM8OSTSxrtNkHy7AR4AJKCkpEtM/values/1/?alt=json&key='
//  + YOUR_API_KEY;
// https:/ /sheets.googleapis.com/v4/spreadsheets/1e4JKidqlL1JLYf_xQM8OSTSxrtNkHy7AR4AJKCkpEtM/values/1/?alt=json&key=AIzaSyBOQeuna4PK-WCldGMOwOuAm9dHBpUoLlI

const sheetID = "1e4JKidqlL1JLYf_xQM8OSTSxrtNkHy7AR4AJKCkpEtM";
// let sheetID = `1e4JKidqlL1JLYf_xQM8OSTSxrtNkHy7AR4AJKCkpEtM`;
// const googleSheetUrl = `https://spreadsheets.google.com/feeds/list/${sheetID}/od6/public/values?alt=json`;
const googleSheetUrl = `https://sheets.googleapis.com/v4/spreadsheets/1e4JKidqlL1JLYf_xQM8OSTSxrtNkHy7AR4AJKCkpEtM/values/Sheet1?alt=json&key=${YOUR_API_KEY}`;

module.exports = () => {
    return new Promise((resolve, reject) => {

        console.log(`Requesting data from ${googleSheetUrl}`);

        axios
            .get(`${googleSheetUrl}`, {
                responseType: "json",
            })
            .then(function (response) {
                console.log(response.data);
            });

        // axios.get(googleSheetUrl)
        //     .then(response => {
        //
        //         // massage the data from the Google Sheets API into
        //         // a shape that will more convenient for us in our SSG.
        //         //response.values[i][j] i=submission j=value
        //
        //         // var data = {
        //         //     "East": [],
        //         //     "West": []
        //         // };
        //         //
        //         // response.data.feed.entry.forEach(item => {
        //         //     data[item.gsx$conference.$t].push({
        //         //         "name": item.gsx$name.$t,
        //         //         "team": item.gsx$team.$t
        //         //     })
        //         // });
        //
        //         // stash the data locally for developing without
        //         // needing to hit the API each time.
        //         // seed(JSON.stringify(data), `$../dev/sheet.json`);
        //         console.log(response);
        //         // resolve the promise and return the data
        //         resolve(response);
        //
        //     })
        //
        //     // uh-oh. Handle any errrors we might encounter
        //     .catch(error => {
        //         console.log('Error :', error);
        //         reject(error);
        //     });
    })
}