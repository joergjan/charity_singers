<script lang="ts">
	import { useQuery } from '@sanity/svelte-loader';

	import type { PageData } from './$types';

	export let data: PageData;
	const q = useQuery(data);

	$: ({ data: videos } = $q);
</script>

{#if videos.length}
	<ul role="list" class="grid grid-cols-1 gap-x-5 gap-y-8 sm:gap-x-6 lg:grid-cols-2 xl:gap-x-8">
		{#each videos as { url, title }}
			<li class="relative">
				<p>{title}</p>
				<div class="group overflow-hidden rounded-lg">
					<!-- svelte-ignore a11y-media-has-caption -->
					<video controls>
						<source src={url} type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				</div>
			</li>
		{/each}
	</ul>
{/if}
