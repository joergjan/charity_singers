<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { urlFor } from '$lib/sanity/image';
	import type { Post } from '$lib/sanity/queries';

	export let post: Post;
</script>

<a class="card" href={`/post/${post.slug.current}`}>
	{#if post.mainImage}
		<img
			src={urlFor(post.mainImage).width(500).height(300).url()}
			alt="Cover image for {post.title}"
		/>
	{/if}

	<div>
		<h3>
			{post.title}
		</h3>
		{#if post.excerpt}
			<p>{post.excerpt}</p>
		{/if}
		<p>
			{formatDate(post._createdAt)}
		</p>
	</div>
</a>
