<script lang="ts">
	import Button from './button.svelte';

	let dialog: HTMLDialogElement;
</script>

<dialog bind:this={dialog}>
	<slot />
	<Button on:click={() => dialog.close()}>close</Button>
</dialog>
<span on:click={() => dialog.show()}>
	<slot name="trigger" />
</span>

<style lang="scss">
	dialog {
		top: 50%;
		max-width: 640px;
		background-color: #14141f;
		border: none;
	}
</style>
