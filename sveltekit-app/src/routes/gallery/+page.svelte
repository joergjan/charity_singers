<script lang="ts">
	import { useQuery } from '@sanity/svelte-loader';
	import type { PageData } from './$types';
	import { urlFor } from '$lib/sanity/image';

	export let data: PageData;
	const q = useQuery(data);

	$: ({ data: images } = $q);

	$: images && console.log(images);
</script>

<section>
	{#if images.length}
		{#each images as image}
			<div>
				<p>{image.title}</p>
				<img src={urlFor(image.mainImage).width(500).height(300).url()} alt="" />
			</div>
		{/each}
	{/if}
</section>
