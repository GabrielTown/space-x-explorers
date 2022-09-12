import { gql, GraphQLClient } from 'graphql-request'

export async function load({ params }) {
	const {slug} = params

    const hygraphClient = new GraphQLClient(
			'https://api-us-west-2.hygraph.com/v2/cl7tgckpj038l01t63gyu4xto/master',
			{ headers: {} }
		)
		const query = gql`
			query GetMission($slug: String!) {
				 mission: launch(where: {slug: $slug}) {
                    year
                    date
                    name
                    launchSuccess
                    rocket {
                        name
                        type
                        image {
                            fileName
                            url(transformation: {image: {resize: {width: 500, height: 500, fit: clip}}})
                        }
                    }
                    launchSite {
                        name
                        longName
                    }
                    link {
                        article
                        pressKit
                        video
                        wikipedia
                        flickrImages {
                            url(transformation: {image: {resize: {width: 500, height: 500, fit: clip}}})
                        }
                    }
                }
			}
		`
    const variables = {slug}
	let theMission = await hygraphClient.request(query, variables)
	return {
		theMission
	}
	
}
