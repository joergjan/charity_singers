import { upcomingAppearancesQuery, imagesQuery } from '$lib/sanity/queries';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const { loadQuery } = event.locals;

	const appearances = await loadQuery<Appearance[]>(upcomingAppearancesQuery);
	const images = await loadQuery<Image[]>(imagesQuery);

	// We pass the data in a format that is easy for `useQuery` to consume in the
	// corresponding `+page.svelte` file, but you can return the data in any
	// format you like.
	return {
		options: { appearances: appearances, images: images }
	};
};
