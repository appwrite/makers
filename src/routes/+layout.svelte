<script lang="ts">
	import Header from '$lib/header.svelte';
	import { browser } from '$app/environment';
	import { plausible } from '$lib/analytics';

	plausible?.enableAutoPageviews();
</script>

<svelte:head>
	<meta
		name="description"
		content="Appwrite was built by all of us! Celebrate Appwrite 1.0 by grabbing your own unique Appwrite Maker card."
	/>
	<meta
		property="og:description"
		content="Appwrite was built by all of us! Celebrate Appwrite 1.0 by grabbing your own unique Appwrite Maker card."
	/>
	<meta property="og:locale" content="en_US" />
	<meta property="og:site_name" content="Appwrite" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@appwrite" />
	<meta name="twitter:creator" content="@appwrite" />
</svelte:head>

<Header />
<main>
	<div class="container">
		<slot />
	</div>
</main>

<style lang="scss">
	@import '@fontsource/poppins/index.css';
	@import '@fontsource/poppins/400.css';
	@import '@fontsource/poppins/600.css';
	@import '@fontsource/inter/400.css';
	@import '@fontsource/inter/600.css';

	:global(body) {
		background-color: #14141f;
		margin: 0;
		font-family: 'Poppins', sans-serif;
		font-weight: 400;
		color: #e8e9f0;
		overflow-x: hidden;
	}

	main {
		display: flex;
		justify-content: center;

		.container {
			display: flex;
			align-items: center;
			max-width: 1285px;
			width: 100%;
			min-height: calc(100vh - 95px);
			flex-wrap: wrap;
		}
	}
</style>
