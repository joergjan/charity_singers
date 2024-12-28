<script lang="ts">
	import type { PageData } from './$types';
	import AppearancesTable from '$lib/components/AppearancesTable.svelte';

	export let data: PageData;

	$: ({ appearances } = data);
</script>

<AppearancesTable {appearances} />
