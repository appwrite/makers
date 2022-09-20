<script lang="ts">
	export let full: boolean = false;
</script>

<article class:full>
	<slot />
</article>

<style lang="scss">
	@use '../lib/mixins';
	article {
		z-index: 10;
		background: #1b1b28;
		border: 1px solid #282a3b;
		box-shadow: 0px 16px 32px rgba(55, 59, 77, 0.02);
		border-radius: 16px;
		padding: 36px;
		display: grid;

		@include mixins.mobile {
			margin: 36px 0;
		}
		&.full {
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 1fr;
			grid-template-areas: '. .';
			gap: 64px;

			@include mixins.mobile {
				grid-template-columns: 1fr;
				grid-template-areas: '.';
			}
		}
	}
</style>
