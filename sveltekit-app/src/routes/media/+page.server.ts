import { videosQuery } from '$lib/sanity/queries';
import type { PageServerLoad } from './$types';
import { client } from '$lib/sanity/client';

export const load: PageServerLoad = async (event) => {
	const videos = await client.fetch(videosQuery);

	return {
		videos
	};
};
