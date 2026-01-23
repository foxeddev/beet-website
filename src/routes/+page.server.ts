import { getCredits } from '$lib/server/credits';

export async function load() {
	return {
		credits: await getCredits()
	};
}
