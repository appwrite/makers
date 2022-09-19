<script lang="ts">
	import { page } from '$app/stores';
	import Link from '$lib/link.svelte';
	import Linkedin from '$lib/linkedin.svelte';
	import Maker from '$lib/maker.svelte';
	import Twitter from '$lib/twitter.svelte';
	const username = $page.params.username;
</script>

<svelte:head>
	<title>Appwrite Makers - {username}</title>
	<meta property="og:type" content="website" />
	<meta property="og:title" content={`Appwrite Makers - ${username}`} />
	<meta property="og:image" content={`https://stage.appwrite.io/cards/makers/${username}`} />
</svelte:head>

<div class="layout">
	<p>Thank You for Creating Appwrite With Us</p>
	<div class="result">
		<Maker {username} fancy3d />
		<ul>
			<li><a href="#/"><Twitter />tweet it</a></li>
			<li><a href="#/"><Linkedin /> post it</a></li>
			<li><a href={`/${username}`} target="_blank"><Link /> share link</a></li>
		</ul>
	</div>
</div>

<style lang="scss">
	p {
		font-weight: 600;
		font-size: 48px;
		line-height: 72px;
		color: #fcfcff;
	}
	div.layout {
		display: grid;
		grid-template-columns: 2fr 3fr;
		grid-template-rows: 1fr;
		grid-template-areas: '. .';
		align-items: center;
		gap: 36px;

		div.result {
			display: flex;
			flex-direction: column;
			align-items: center;

			ul {
				list-style-type: none;
				display: flex;
				align-items: center;
				gap: 48px;
				li {
					a {
						color: #ffffff;
						font-family: 'Inter';
						font-style: normal;
						font-weight: 400;
						font-size: 18px;
						line-height: 22px;
						text-decoration: none;
						display: flex;
						align-items: center;
					}
				}
			}
		}
	}
</style>
