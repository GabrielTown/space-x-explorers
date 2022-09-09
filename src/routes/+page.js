import {gql, GraphQLClient} from 'graphql-request'

export async function load () {
    const hygraphClient = new GraphQLClient('https://api-us-west-2.hygraph.com/v2/cl7tgckpj038l01t63gyu4xto/master', {headers:{}})
	const query = gql`
        query LaunchesIndex {
            launches {
                id 
                slug
                date
                name
            }
        }
    `
    let allLaunches = await hygraphClient.request(query)
	return {
		// remove the props object
		allLaunches
	}
}
