import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	PUBLIC_SANITY_DATASET: { public: true, static: true },
	PUBLIC_SANITY_CHARITY_SINGERS_PROJECT_ID: { public: true, static: true },
	PUBLIC_SANITY_CHARITY_SINGERS_API_VERSION: {
		public: true,
		static: true,
		schema: (value) => value
	},
	PUBLIC_SANITY_CHARITY_SINGERS_STUDIO_URL: {
		public: true,
		static: true,
		schema: (value) => value
	},
	PUBLIC_LIGHTGALLERY_KEY: { public: true, static: true },
	SANITY_CHARITY_SINGERS_API_READ_TOKEN: { static: true }
});
