# FORXLoveLetters
### How This Website Works

1. Navigate to /pages/writeletters and fill out the Netlify form. 
2. The form is sent to the Netlify UI for letter-form. The submission-created function does nothing. 
3. On building the site, letter-form-new-method.js will request all the letter-form submissions from the Netlify API and add them to the /admin page, and approved-new-method.js will request all the approved-letters submissions from the Netlify API and add them to /pages/readletters/page-{n} in groups of 100 using 11ty's data pagination method.
4. To approve letters:
   1. Each letter preview has an Approve and Undo button. Hit Approve.
   2. This manually submits the letter's data as FormData to the approved-letters form and moves the letter down to the deletion box.
   3. Once enough letters are in the box, hit the "Delete All Letters Below" button. This takes the formID (letter-form) and all the letterIDs (unique submission IDs put in an array) and POSTs it to a custom pipedream endpoint.
   4. The PipeDream endpoint consists of a function that will take all the letterIDs and ask the Netlify API to delete them from the letter-form submissions, as they are no longer needed since they have been approved for the Read Page.
   5. If the letter was approved by accident, the Undo button will move it back up to the preview box, so it will not be deleted. HOWEVER, you must go and manually remove it from the approved-letters submissions.
   6. Sometimes, too many letters are approved at once and the API calls will fail and not submit the letters to approved-letters. Wait at least 1 minute before you try again. Check the console for these errors. 
5. Each letter is wrapped in a `<div>` container that holds the following elements:
   1. `<img id="postcard">` which contains the appropriate postcard background based on the member each letter is written to - **_broken???_**
   2. `<div id="contentbox">` which holds the letter's message body.
   3. `<div id="namebox">` which holds the nickname of the person who submitted the letter
   4. `<div id="lettercount">` - **_broken_**, doesn't work properly with pagination, should be the number of this letter out of ALL aprroved-letters, not just number out of the ones on the current page
   5. `<div id="membersbox">` which contains the name of the member the letter is for (hidden, but used for filtering purposes)
6. The postcard images are stored as .svg files in /assets/base. 
7. Each page uses the base.njk layout, stored in /_includes/layouts, except for the Admin page and the Read pages which have their own layouts stored in the same folder.



