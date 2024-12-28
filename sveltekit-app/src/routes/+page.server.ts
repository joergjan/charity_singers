import {
	upcomingAppearancesQuery,
	homeImageQuery,
	recentBlogPostsQuery
} from '$lib/sanity/queries';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const { loadQuery } = event.locals;

	// Fetch multiple queries concurrently
	const [appearances, blogPosts, homeImage] = await Promise.all([
		loadQuery<Appearance[]>(upcomingAppearancesQuery),
		loadQuery<BlogPost[]>(recentBlogPostsQuery),
		loadQuery<Home[]>(homeImageQuery)
	]);

	// Return the data separately for each query
	return {
		upcomingAppearancesQuery,
		homeImageQuery,
		recentBlogPostsQuery,
		appearances: {
			options: { initial: appearances }
		},
		homeImage: {
			options: { initial: homeImage }
		},
		blogPosts: {
			options: { initial: blogPosts }
		}
	};
};
