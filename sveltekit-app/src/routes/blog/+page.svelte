<script lang="ts">
	import { useQuery } from '@sanity/svelte-loader';
	import type { PageData } from './$types';
	import { formatDate } from '$lib/utils';

	export let data: PageData;
	const q = useQuery(data);

	$: ({ data: appearances } = $q);
</script>

<section>
	{#if appearances.length}
		{#each appearances as appearance}
			<div>
				<p>{appearance.title}</p>
				<p>{appearance.location}</p>
				<p>{formatDate(appearance.date)}</p>
			</div>
		{/each}
	{/if}
</section>
