<script lang="ts">
	import { browser } from '$app/environment';
	import { fade } from 'svelte/transition';
	import WalterCard from './walter.png';

	export let username: string | null = null;
	export let walter: boolean = false;
	export let fancy3d: boolean = false;
	export let top: boolean = false;

	const screenWidth: number = globalThis.screen?.width / 2;
	const screenHeight: number = globalThis.screen?.height / 2;

	let image: string | null;
	let degreeX: number = 0;
	let degreeY: number = 0;

	function mousemove(event: MouseEvent) {
		if (!fancy3d) {
			return;
		}

		const centerOfX = event.clientX - screenWidth;
		const centerOfY = screenHeight - (event.clientY + 13);
		degreeX = centerOfX * 0.04;
		degreeY = centerOfY * 0.02;
	}

	async function fetchImage() {
		if (!browser) {
			return;
		}

		image = null;
		const response = await fetch(src, {
			mode: 'cors'
		});
		image = URL.createObjectURL(await response.blob());
	}

	$: src = walter ? WalterCard : `https://stage.appwrite.io/cards/makers/${username}`;
	$: style = `transform: perspective(1000px) rotateY(${degreeX}deg) rotateX(${degreeY}deg)`;
	$: if (src) {
		fetchImage();
	}
</script>

<svelte:body on:mousemove={mousemove} />

<figure>
	{#if image}
		<img src={image} alt={`GitHub ${username}`} style={fancy3d ? style : ''} in:fade />
		<div class="gradient" class:top in:fade />
	{/if}
</figure>

<style lang="scss">
	figure {
		min-height: 365px;
		img {
			height: 350px;
			width: auto;
		}
	}

	.gradient {
		position: absolute;
		width: 792px;
		height: 310px;
		background: linear-gradient(90deg, rgba(100, 227, 255, 0.7) 0%, rgba(145, 146, 255, 0.7) 100%);
		opacity: 0.35;
		z-index: -1;
		top: calc(50% - 150px);
		left: 50%;
		filter: blur(150px);

		&.top {
			top: calc(25% - 150px);
		}
	}
</style>
