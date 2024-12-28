<script lang="ts">
	import type { PageData } from './$types';

	import Gallery from '$lib/components/Gallery.svelte';

	export let data: PageData;

	$: ({ images } = data);
</script>

<Gallery photos={images} />
