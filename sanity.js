import sanityClient from "@sanity/client"

const client=sanityClient({
    projectId: '24qv8pf5',
    dataset: 'production',
    apiVersion: '2021-10-21', // use current UTC date - see "specifying API version"!
    useCdn: true, 
})
export default client