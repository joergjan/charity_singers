<script lang="ts">
	import type { PageData } from './$types';
	import { contactDescription } from '$lib/components/SEO';

	import Gallery from '$lib/components/Gallery.svelte';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	let { images } = $derived(data);
</script>

<svelte:head>
	<meta name="description" content={contactDescription} />
</svelte:head>

<Gallery photos={images} />
