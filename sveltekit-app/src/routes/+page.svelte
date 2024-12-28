<script lang="ts">
	import { useQuery } from '@sanity/svelte-loader';
	import type { PageData } from './$types'; // Assuming you have this type
	import AppearancesTable from '$lib/components/AppearancesTable.svelte';
	import Image from '$lib/components/Image.svelte';
	import Blog from '$lib/components/Blog.svelte';

	// Receive the data passed from load function
	export let data: PageData;

	// Initialize useQuery for each query separately
	const appearancesQuery = useQuery(data.appearances); // Query for appearances
	const homeImageQuery = useQuery(data.homeImage);
	const recentBlogPostsQuery = useQuery(data.blogPosts);

	// Destructure the data for each query
	$: ({ data: appearances } = $appearancesQuery);
	$: ({ data: homeImage } = $homeImageQuery);
	$: ({ data: blogPosts } = $recentBlogPostsQuery);
</script>

<div class="space-y-10">
	<div class="hidden items-center justify-center rounded-lg object-fill md:flex">
		<Image image={homeImage[0]} imageClass={''} />
	</div>

	<Blog {blogPosts} />

	<AppearancesTable {appearances} />
</div>
