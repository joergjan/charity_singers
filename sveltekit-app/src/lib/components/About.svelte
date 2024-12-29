<script lang="ts">
	export let about: About;

	console.log(about);
</script>

<div class="max-w-4xl text-center flex justify-center"> 
<div class="items-center">
	<h1 class="pb-3 pt-2 text-xl font-bold">{about.title}</h1>
	<p>{about.body}</p>
</div>
</div>