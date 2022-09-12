import { gql, GraphQLClient } from 'graphql-request'

export async function load({ fetch, params}) {
    const {slug} = params 
	const res = await fetch(`/mission/${slug}/get`)
	if (res.ok) {
		const theMission = await res.json()
		return {
			theMission,
		}
	}
}
