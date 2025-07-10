<script lang="ts">
	import { urlFor } from '$lib/sanity/image';

	interface Props {
		image: Image;
		imageClass?: string;
	}

	let { image, imageClass = '' }: Props = $props();
</script>

<img
	class="${image.mainImage ? '' : ' bg-gray-800 '} rounded-lg ${imageClass}"
	src={image.mainImage ? urlFor(image.mainImage).url() : ''}
	alt={image.title}
/>
