import type { PortableTextBlock } from '@portabletext/types';
import type { ImageAsset, Slug } from '@sanity/types';
import groq from 'groq';

export const appearancesQuery = groq`*[_type == "appearance" && date > now()]  | order(date asc)`;
export const upcomingAppearancesQuery = groq`*[_type == "appearance" && date > now()] | order(date asc) [0..2]`;

export const imagesQuery = groq`*[_type == "photo"]  | order(_createdAt desc)`;

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
