import client from '/client.js'



// Get a pre-configured url-builder from your sanity client

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:




export async function getPosts() {
    // function urlFor(source) {
    //     return builder.image(source)
    // }
    const query = '*[_type == "postcard-1"] {"": postcardDesign->{"":postcardBase{"design": asset->url}}, letterTo[0], letterSigned, letterFrom, letterMessage, _id}'

    const posts = await client.fetch(query)
        // .then((res) => console.log(res.json()))
        .then((res) => {
            // get the list element, and the first item
            // let list = document.querySelector("ul");
            // let firstListItem = document.querySelector("ul li");

            // document.getElementById("l1").innerText = res;

            if (res.length > 0) {
                // remove the placeholder content
                // list.removeChild(firstListItem);

                res.forEach((postcard) => {
                    // add the pet name as the text content
                    // document.getElementById('l1').innerText  = postcard?.postcardDesign;
                    // console.log(postcard.postcardDesign.postcardBase)
                    // let x = urlFor(postcard.postcardDesign.postcardBase).width(200).url();
                    // console.log(x)
                    // document.getElementById("l1img").src = x;

                    document.getElementById("l1img").src = postcard?.design;

                    document.getElementById('l2').innerText  = postcard?.letterTo;
                    document.getElementById('l3').innerText  = postcard?.letterSigned;
                    document.getElementById('l4').innerText  = postcard?.letterFrom;
                    document.getElementById('l5').innerText  = postcard?.letterMessage;


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
