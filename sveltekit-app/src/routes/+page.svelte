<script lang="ts">
	import type { PageData } from './$types';
	import AppearancesTable from '$lib/components/AppearancesTable.svelte';
	import Image from '$lib/components/Image.svelte';
	import Blog from '$lib/components/Blog.svelte';
	import About from '$lib/components/About.svelte';

	export let data: PageData;
	$: ({ blogPosts, about, appearances, homeImage } = data);
</script>

<div class="space-y-10">
	<div class="hidden items-center justify-center rounded-lg object-fill md:flex">
		<Image image={homeImage[0]} imageClass={''} />
	</div>

	<About {about} />

	<br />

	<AppearancesTable {appearances} />

	<Blog {blogPosts} />
</div>
