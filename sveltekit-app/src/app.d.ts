import type { LoaderLocals } from '@sanity/svelte-loader';
import { Appearance, News, Blog, Image } from '$lib/sanity/queries';

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		interface Locals extends LoaderLocals {}
	}
	type Appearance = Appearance;
	type News = News;
	type Blog = Blog;
	type Image = Image;
}

export {};
