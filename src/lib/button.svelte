<script lang="ts">
	export let type: 'submit' | 'button' = 'button';
</script>

<button {type} on:click>
	<slot />
</button>

<style lang="scss">
	button {
		font-family: 'Inter', sans-serif;
		font-weight: 600;
		font-size: 16px;
		line-height: 150%;
		color: #ffffff;
		width: 100%;
		box-sizing: border-box;
		background: #da1a5b;
		border: 1px solid #da1a5b;
		border-radius: 4px;
		padding: 12px;
		margin-top: 36px;
	}
</style>
