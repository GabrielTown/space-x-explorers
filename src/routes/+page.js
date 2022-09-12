import {gql, GraphQLClient} from 'graphql-request'

export async function load ({fetch}) {
    const res = await fetch('/launches')
    if (res.ok){
        const allLaunches = await res.json()
        return {
			allLaunches,
		}
    }
}
