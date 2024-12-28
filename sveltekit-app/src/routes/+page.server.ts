import {
	upcomingAppearancesQuery,
	homeImageQuery,
	recentBlogPostsQuery,
	aboutQuery
} from '$lib/sanity/queries';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const { loadQuery } = event.locals;

	// Fetch multiple queries concurrently
	const [appearances, blogPosts, homeImage, about] = await Promise.all([
		loadQuery<Appearance[]>(upcomingAppearancesQuery),
		loadQuery<BlogPost[]>(recentBlogPostsQuery),
		loadQuery<Home[]>(homeImageQuery),
		loadQuery<About[]>(aboutQuery)
	]);

	// Return the data separately for each query
	return {
		upcomingAppearancesQuery,
		homeImageQuery,
		recentBlogPostsQuery,
		aboutQuery,
		appearances: {
			options: { initial: appearances }
		},
		homeImage: {
			options: { initial: homeImage }
		},
		blogPosts: {
			options: { initial: blogPosts }
		},
		about: {
			options: { initial: about }
		}
	};
};
