import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Simple Soundboard - Svelte Edition'
	}
});

export default app;