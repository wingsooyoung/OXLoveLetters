
// const {createClient} = await import('https://esm.sh/@sanity/client')
const {createClient} = require('@sanity/client')

const client = createClient({
    projectId: 'o9bzeud3',
    dataset: 'production',
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: '2023-11-05', // use current date (YYYY-MM-DD) to target the latest API version
})

export default client