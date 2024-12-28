<script lang="ts">
	import { useQuery } from '@sanity/svelte-loader';
	import type { PageData } from './$types';
	import Blog from '$lib/components/Blog.svelte';

	export let data: PageData;
	const q = useQuery(data);

	$: ({ data: blogPosts } = $q);

	$: data && console.log(data);
</script>

<Blog {blogPosts} />
