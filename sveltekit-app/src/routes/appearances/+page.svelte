<script lang="ts">
	import type { PageData } from './$types';
	import AppearancesTable from '$lib/components/AppearancesTable.svelte';
	import { appearancesDescription } from '$lib/components/SEO';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	let { appearances } = $derived(data);
</script>

<svelte:head>
	<meta name="description" content={appearancesDescription} />
</svelte:head>

<AppearancesTable {appearances} />
