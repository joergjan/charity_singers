<script lang="ts">
	import { useQuery } from '@sanity/svelte-loader';
	import type { PageData } from './$types';
	import { formatDate } from '$lib/utils';

	export let data: PageData;
	const q = useQuery(data);

	$: ({ data: images } = $q);
</script>

<section>
	{#if images.length}
		{#each images as appearance}
			<div>
				<p>{images.title}</p>
				<img src={images.title} alt="" />
			</div>
		{/each}
	{/if}
</section>
