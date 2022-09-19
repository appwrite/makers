<script lang="ts">
	import Maker from '$lib/maker.svelte';
	import Create from './create.svelte';
</script>

<div class="layout">
	<Create />
	<Maker walter />
</div>

<style lang="scss">
	div.layout {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr;
		grid-template-areas: '. .';
		align-items: center;
		gap: 36px;
	}
</style>
