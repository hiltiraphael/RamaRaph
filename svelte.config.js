import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			fallback: '404.html' // Erzeugt eine 404.html für GitHub Pages
		}),
		paths: {
			// Ersetze RamaRaph durch deinen exakten Repository-Namen
			base: process.env.NODE_ENV === 'production' ? '/RamaRaph' : '',
		}
	}
};

export default config;