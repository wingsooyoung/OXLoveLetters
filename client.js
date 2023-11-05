
// import {createClient} from 'https://esm.sh/@sanity/client'
// const {createClient} = require('@sanity/client')
//
// const {imageUrlBuilder} = await import('https://esm.sh/@sanity/image-url')
// import imageUrlBuilder from '@sanity/image-url'
// const {imageUrlBuilder} = require('@sanity/image-url')

// const builder = imageUrlBuilder(client)

const {createClient} = await import('https://esm.sh/@sanity/client')

const client = createClient({
    projectId: 'o9bzeud3',
    dataset: 'production',
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: '2023-10-02', // use current date (YYYY-MM-DD) to target the latest API version
})

const data = await client.fetch(`count(*)`)

document.getElementById('results').innerText = `Number of documents: ${data}`

export default client