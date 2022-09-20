<script lang="ts">
	import Maker from '$lib/maker.svelte';
	import Create from './create.svelte';
</script>

<svelte:head>
	<title>Appwrite Makers</title>
</svelte:head>

<div class="layout">
	<Create />
	<Maker walter />
</div>

<style lang="scss">
	@use '../lib/mixins';
	div.layout {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr;
		grid-template-areas: '. .';
		align-items: center;
		justify-items: center;
		gap: 36px;

		@include mixins.mobile {
			grid-template-columns: 1fr;
			grid-template-areas: '.';
		}
	}
</style>
