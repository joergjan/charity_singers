<script lang="ts">
	import type { PageData } from './$types';
	import Blog from '$lib/components/Blog.svelte';
	import { blogDescription } from '$lib/components/SEO';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
	let { blogPosts } = $derived(data);
</script>

<svelte:head>
	<meta name="description" content={blogDescription} />
</svelte:head>

<Blog {blogPosts} />
