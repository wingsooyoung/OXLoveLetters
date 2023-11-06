
// const {createClient} = await import('https://esm.sh/@sanity/client')
// const {createClient} = require('@sanity/client')
import {createClient} from 'https://esm.sh/@sanity/client'

const client = createClient({
    projectId: 'o9bzeud3',
    dataset: 'production',
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: '2023-11-05', // use current date (YYYY-MM-DD) to target the latest API version
})

const data = await client.fetch(`count(*)`)
document.getElementById('results').innerText = `Number of documents: ${data}`

// Get a pre-configured url-builder from your sanity client

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
export async function getPosts() {
    // function urlFor(source) {
    //     return builder.image(source)
    // }
    const query = `*[_type == "postcard-1"]{
                    "": postcardDesign->{
                        "altText":postcardAlt,
                        "":postcardBase{
                          "design":asset->{
                            _id,
                            url
                          }
                        }
                    }, 
                    letterTo[0], 
                    letterSigned, 
                    letterFrom, 
                    letterMessage, 
                    _id
                }`
    // altText ,
    // design._id ,
    // design.url ,
    // letterTo ,
    // letterSigned ,
    // letterFrom ,
    // letterMessage ,
    // _id

    console.log(query)

    const posts = await client.fetch(query)
        // .then((res) => console.log(res.json()))
        .then((res) => {
            console.log(res.json)
            // get the list element, and the first item
            // let list = document.querySelector("ul");
            // let firstListItem = document.querySelector("ul li");

            // document.getElementById("l1").innerText = res;

            if (res.length > 0) {
                // remove the placeholder content
                // list.removeChild(firstListItem);
                console.log("res.length: "+res.length)
                let pcbox = document.getElementById("postcard");

                let mbox = document.getElementById('membersbox');
                let sbox = document.getElementById('lettercount');
                let nbox = document.getElementById('namebox');
                let cbox = document.getElementById('contentbox');
                res.forEach((postcard) => {
                    console.log("postcard: "+postcard)
                    // add the pet name as the text content
                    // document.getElementById('l1').innerText  = postcard?.postcardDesign;
                    // console.log(postcard.postcardDesign.postcardBase)
                    // let x = urlFor(postcard.postcardDesign.postcardBase).width(200).url();
                    // console.log(x)
                    // document.getElementById("l1img").src = x;

                    pcbox.src = postcard?.design.url;
                    pcbox.alt = postcard?.altText;

                    try {
                        mbox.innerText = postcard?.letterTo;
                        sbox.innerText = postcard?.letterSigned;
                        nbox.innerText = postcard?.letterFrom;
                        cbox.innerText= postcard?.letterMessage;
                    } catch (e) {
                        console.log("error message: "+e)
                    }




                });
                let pre = document.querySelector("pre");
                // add the raw data to the preformatted element
                pre.textContent = JSON.stringify(res, null, 2);
            }
        })
        .catch((err) => {
            console.error(err);
            // let list = document.querySelector("ul");
            // let firstListItem = document.querySelector("ul li");
            // firstListItem.textContent = "you reached an error"
        });
    return posts}
getPosts()
