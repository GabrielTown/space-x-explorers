import { gql, GraphQLClient } from 'graphql-request'

export async function GET() {
	const hygraphClient = new GraphQLClient(
		import.meta.env.VITE_GRAPHCMS_ENDPOINT,
		{ headers: {} }
	)
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
	return new Response(JSON.stringify(allLaunches))
}
