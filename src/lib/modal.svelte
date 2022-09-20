<script lang="ts">
	import Button from './button.svelte';
	import X from './x.svelte';

	let dialog: HTMLDialogElement;
</script>

<dialog bind:this={dialog}>
	<header>
		<h2><slot name="title" /></h2>
		<X on:click={() => dialog.close()} />
	</header>
	<slot />
</dialog>
<span on:click={() => dialog.showModal()}>
	<slot name="trigger" />
</span>

<style lang="scss">
	dialog {
		width: auto;
		max-width: 640px;
		height: 250px;
		background-color: #1b1b28;
		border: 1px solid #282a3b;
		border-radius: 16px;

		&::backdrop {
			background: rgba(0, 0, 0, 0.5);
		}
		header {
			color: #fcfcff;
			display: flex;
			align-items: baseline;
			justify-content: space-between;
			align-content: center;

			h2 {
				margin-top: 0;
			}
		}
	}
</style>
