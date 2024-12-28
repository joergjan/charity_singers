<script lang="ts">
	import { urlFor } from '$lib/sanity/image';

	export let image: Image;
	export let imageClass = '';
</script>

<img class="rounded-lg ${imageClass}" src={urlFor(image.mainImage).url()} alt={image.title} />
