<script lang="ts">
	import { useQuery } from '@sanity/svelte-loader';
	import type { PageData } from './$types';
	import AppearancesTable from '$lib/components/AppearancesTable.svelte';

	export let data: PageData;
	const q = useQuery(data);

	$: ({ data: appearances } = $q);
</script>

<AppearancesTable {appearances} showAll={true} />
