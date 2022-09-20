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
	const isTouchDevice =
		browser && ('ontouchstart' in globalThis || globalThis.navigator.maxTouchPoints > 0);

	let error: string | null;
	let image: string | null;
	let degreeX: number = 0;
	let degreeY: number = 0;

	function mousemove(event: MouseEvent) {
		if (!fancy3d || isTouchDevice) {
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
		try {
			const response = await fetch(src, {
				mode: 'cors'
			});
			if (response.status >= 500) {
				throw new Error('Server Error');
			} else if (response.status === 404) {
				throw new Error(`User '${username}' not found`);
			}

			image = URL.createObjectURL(await response.blob());
		} catch (e) {
			error = (e as Error).message;
		}
	}

	$: src = walter
		? WalterCard
		: `https://appwrite.io/cards/makers/${username}?width=600&height=364`;
	$: style = `transform: perspective(1000px) rotateY(${degreeX}deg) rotateX(${degreeY}deg)`;
	$: if (src) {
		fetchImage();
	}
</script>

<svelte:body on:mousemove={mousemove} />

{#if error}
	<h2>{error}</h2>
{:else}
	<figure>
		{#if image}
			<img id="maker" src={image} alt={`GitHub ${username}`} style={fancy3d ? style : ''} in:fade />
			<div class="gradient" class:top in:fade />
		{/if}
	</figure>
{/if}

<style lang="scss">
	@use 'mixins';

	figure {
		min-height: 365px;
		margin: 0;
		transform: translateZ(0);

		img {
			height: 350px;
			width: auto;

			@include mixins.mobile {
				height: auto;
				width: 90vw;
			}
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

		@include mixins.mobile {
			display: none;
		}
		&.top {
			top: calc(25% - 150px);
		}
	}
</style>
