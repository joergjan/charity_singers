<script lang="ts">
	import '../app.css';
	import { isPreviewing, VisualEditing } from '@sanity/visual-editing/svelte';
	import { page } from '$app/stores';
	import LiveMode from '../components/LiveMode.svelte';
	import { navItems } from '$lib/navbar';

	let menu: boolean = false;

	function toggleMenu() {
		menu = !menu;
	}
</script>

{#if $isPreviewing}
	<a href={`/preview/disable?redirect=${$page.url.pathname}`} class="preview-toggle">
		<span>Preview Enabled</span>
		<span>Disable Preview</span>
	</a>
{/if}

{#if $isPreviewing}
	<VisualEditing />
	<LiveMode />
{/if}

<nav>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<div class="flex items-center">
				<div class="shrink-0">
					<img
						class="h-8 w-auto"
						src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
						alt="Your Company"
					/>
				</div>
				<div class="hidden sm:ml-6 sm:block">
					<div class="flex space-x-4">
						{#each navItems as { name, href }}
							<a {href} class="rounded-md px-3 py-2 text-sm font-medium text-white">{name}</a>
						{/each}
					</div>
				</div>
			</div>
			<div class="block sm:ml-6 sm:hidden">
				<div class="flex items-center">
					<div class="-mr-2 flex sm:hidden">
						<!-- Mobile menu button -->
						<button
							type="button"
							class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition-all duration-300 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
							aria-controls="mobile-menu"
							aria-expanded="false"
							on:click={toggleMenu}
						>
							<span class="absolute -inset-0.5"></span>
							<span class="sr-only">Open main menu</span>

							<svg
								class=" size-6 fill-white transition-all duration-300 ${menu ? 'rotate-45 ' : ''}"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								aria-hidden="true"
								data-slot="icon"
							>
								{#if menu}
									<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
								{:else}
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
									/>
								{/if}
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
		{#if menu}
			<div class="sm:hidden" id="mobile-menu">
				<div class="space-y-1 px-2 pb-3 pt-2">
					<a
						href="/"
						class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white">Home</a
					>
					<a
						href="#"
						class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
						>Team</a
					>
				</div>
			</div>
		{/if}
	</div>
</nav>

<main>
	<slot />
</main>

<footer>
	<div class="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
		<nav class="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6" aria-label="Footer">
			{#each navItems as { name, href }}
				<a {href} class="text-gray-400 hover:text-white">{name}</a>
			{/each}
		</nav>
		<div class="mt-16 flex justify-center gap-x-10">
			<a href="/" class="text-gray-400 hover:text-gray-300">
				<span class="sr-only">Facebook</span>
				<svg class="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path
						fill-rule="evenodd"
						d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
						clip-rule="evenodd"
					/>
				</svg>
			</a>
		</div>
		<p class="mt-10 text-center text-sm/6 text-gray-400">&copy; 2024 Charity Singers</p>
	</div>
</footer>
