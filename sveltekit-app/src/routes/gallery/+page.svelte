<script lang="ts">
	import { useQuery } from '@sanity/svelte-loader';
	import type { PageData } from './$types';

	import Gallery from '$lib/components/Gallery.svelte';

	export let data: PageData;
	const q = useQuery(data);

	$: ({ data: images } = $q);
</script>

<Gallery photos={images} />
