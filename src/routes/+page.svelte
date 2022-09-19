<script lang="ts">
	import { goto } from '$app/navigation';
	import Card from '$lib/card.svelte';
	import Maker from '$lib/maker.svelte';

	let username: string = '';

	function submit() {
		goto(`/${username}`);
	}
</script>

<div class="layout">
	<Card>
		<h2>Create Your Maker Card</h2>
		<p>
			It doesn't matter if you've submitted a pull request, shared your frustration or love of our
			product, or recommended us to your peers, you all helped Appwrite reach this major milestone.
			This is why we want to list any of our community members who are interested along side our
			core team as makers.
		</p>
		<form on:submit|preventDefault={submit}>
			<label for="githut">GitHub Username</label>
			<input
				name="github"
				type="text"
				placeholder="Enter your GitHub Username"
				required
				bind:value={username}
			/>
			<button type="submit">Create your maker card</button>
		</form>
	</Card>
	<Maker walter />
</div>

<style lang="scss">
	h2 {
		font-weight: 700;
		font-size: 36px;
		line-height: 150%;
		color: #fcfcff;
	}

	p {
		font-size: 16px;
		line-height: 150%;
		font-weight: 400;
	}

	form {
		margin-top: 42px;
	}

	input {
		font-family: 'Poppins', sans-serif;
		display: block;
		box-sizing: border-box;
		width: 100%;
		height: 40px;
		background: #171723;
		border: 1px solid #373b4d;
		border-radius: 4px;
		padding: 12px;
		color: #e8e9f0;
	}

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

	div.layout {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr;
		grid-template-areas: '. .';
		align-items: center;
		gap: 36px;
	}
</style>
