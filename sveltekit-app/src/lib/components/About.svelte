<script lang="ts">
	interface Props {
		about: About;
	}

	let { about }: Props = $props();
</script>

<div class="flex w-full flex-col items-center">
	<h1 class="pb-3 pt-2 text-xl font-bold">{about.title}</h1>
	<p class="max-w-3xl text-center">{about.body}</p>
</div>
