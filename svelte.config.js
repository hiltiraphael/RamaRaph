import adapter from '@sveltejs/adapter-node'; // Geändert von static zu node
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		// Der Node-Adapter braucht keine speziellen Optionen für den Start
		adapter: adapter(),

		paths: {
			// Wenn du die Seite direkt über die IP aufrufst, 
			// sollte der base-Pfad leer sein ('').
			base: '',
		}
	}
};

export default config;