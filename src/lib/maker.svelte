<script lang="ts">
	import WalterCard from './walter.svg';

	export let username: string | null = null;
	export let walter: boolean = false;
	export let fancy3d: boolean = false;

	const screenWidth: number = globalThis.screen?.width / 2;
	const screenHeight: number = globalThis.screen?.height / 2;

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

	$: src = walter ? WalterCard : `https://stage.appwrite.io/cards/makers/${username}`;
	$: style = `transform: perspective(1000px) rotateY(${degreeX}deg)  rotateX(${degreeY}deg)`;
</script>

<svelte:head>
	<link rel="preload" as="image" href={src} />
</svelte:head>

<svelte:body on:mousemove={mousemove} />

<figure>
	<img {src} alt={`GitHub ${username}`} style={fancy3d ? style : ''} />
	<div class="gradient" />
</figure>

<style>
	img {
		height: auto;
		width: 100%;
	}

	.gradient {
		position: absolute;
		width: 792px;
		height: 310px;
		background: linear-gradient(90deg, rgba(100, 227, 255, 0.7) 0%, rgba(145, 146, 255, 0.7) 100%);
		opacity: 0.35;
		filter: blur(150px);
		z-index: -1;
		top: calc(50% - 150px);
		left: 50%;
	}
</style>
