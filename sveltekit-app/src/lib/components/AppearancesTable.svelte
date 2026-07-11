<script lang="ts">
	import { MapPin, ExternalLink } from 'lucide-svelte';
	import { formatDate } from '$lib/utils';
	import { Button } from '$lib/components/ui/button';
	import { page } from '$app/stores';

	interface Props {
		appearances?: Appearance[];
	}

	let { appearances = [] }: Props = $props();
</script>

{#if appearances.length}
	<div class="sm:flex sm:items-center">
		<div class="text-center sm:flex-auto">
			<h1 class="text-lg font-semibold">Auftritte</h1>

			{#if $page.url.pathname.includes('appearances')}
				<p class="mt-2 mb-10 text-sm text-gray-300">
					Alle unsere anstehenden Auftritte auf einen Blick.
				</p>
			{/if}
		</div>
	</div>
	<div class="flow-root">
		<div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
			<div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
				<table class="min-w-full divide-y divide-gray-700">
					<thead>
						<tr>
							<th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold">Datum</th>
							<th scope="col" class="py-3.5 pr-3 pl-4 text-left text-sm font-semibold sm:pl-0"
								>Auftritt</th
							> <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold">Ort</th>
						</tr>
					</thead>
					<tbody class="divide-y divide-gray-800">
						{#each appearances as { title, location, date }}
							<tr>
								<td class="px-3 py-4 text-sm whitespace-nowrap">{formatDate(date)}</td>
								<td class="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap sm:pl-0">{title}</td
								>
								<td class="flex px-3 py-4 text-sm whitespace-nowrap">
									<MapPin />

									<p class="pl-2">{location}</p>
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>
{:else}
	<div class="pt-5 text-center">Momentan haben wir keine anstehenden Auftritte</div>
{/if}
{#if !$page.url.pathname.includes('appearances')}
	<div class="flex items-center justify-center">
		<Button href="/appearances">
			<p class="pr-2">Alle Auftritte</p>
			<ExternalLink />
		</Button>
	</div>
{/if}
