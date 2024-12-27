import type { PortableTextBlock } from '@portabletext/types';
import type { ImageAsset, Slug } from '@sanity/types';
import groq from 'groq';

export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]`;

export const postsQuery = groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`;

export const appearancesQuery = groq`*[_type == "appearance"]  | order(date desc)`;

export const imagesQuery = groq`*[_type == "photo"]  | order(_createdAt desc)`;

export interface Post {
	_type: 'post';
	_createdAt: string;
	title?: string;
	slug: Slug;
	excerpt?: string;
	mainImage?: ImageAsset;
	body: PortableTextBlock[];
}

export interface Appearance {
	_type: 'appearance';
	_createdAt: string;
	title?: string;
	date: Date;
	location: string;
}

export interface Image {
	_type: 'appearance';
	_createdAt: string;
	mainImage: ImageAsset;
	title: string;
}
