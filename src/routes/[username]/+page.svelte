<script lang="ts">
	import { page } from '$app/stores';
	import Button from '$lib/button.svelte';
	import Link from '$lib/link.svelte';
	import Maker from '$lib/maker.svelte';
	import Modal from '$lib/modal.svelte';
	import Twitter from '$lib/twitter.svelte';
	import Create from '../create.svelte';

	$: username = $page.params.username;
	$: shareTwitter = encodeURI(
		`We are all the makers of Appwrite! Open source allows all of us to collaborate and build better software together!\n\nJoin us in celebrating Appwrite 1.0 on Product Hunt 😺\nhttps://appwrite.io/product-hunt\n\nYou can check out my maker card here: https://makers.appwrite.io/${username}`
	);

	$: embed = `<a href="${globalThis.location?.href}"">
    <img src="https://stage.appwrite.io/cards/makers/${username}" alt="Appwrite Maker - ${username}" />
</a>`;

	async function copy() {
		await navigator.clipboard.writeText(embed);
	}
</script>

<svelte:head>
	<title>{username}'s Maker Card</title>
	<meta property="og:type" content="website" />
	<meta property="og:title" content={`${username}'s Maker Card`} />
	<meta property="og:image" content={`https://stage.appwrite.io/cards/makers/${username}`} />
	<meta property="og:locale" content="en_US" />
	<meta property="og:site_name" content="Appwrite" />
	<meta
		property="og:image:alt"
		content={`Appwrite Makers Card with ${username}'s photo and GitHub username.`}
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@appwrite" />
	<meta name="twitter:creator" content="@appwrite" />
</svelte:head>

<div class="layout">
	<p>Thank You for Creating Appwrite With Us</p>
	<div class="result">
		<Maker {username} fancy3d top />
		<ul>
			<li>
				<a href={`https://twitter.com/intent/tweet?text=${shareTwitter}`}><Twitter />tweet it</a>
			</li>
			<li>
				<Modal>
					<svelte:fragment slot="title">Embed Code</svelte:fragment>
					<pre>{embed}</pre>
					<Button on:click={copy}>copy</Button>
					<svelte:fragment slot="trigger">
						<span class="link" href={`/${username}`}><Link />embed code</span>
					</svelte:fragment>
				</Modal>
			</li>
		</ul>
	</div>
</div>
<div class="create">
	<Create full />
</div>

<Modal />

<style lang="scss">
	@use '../../lib/mixins';
	div.create {
		border-top: 1px solid #373b4d;
		padding: 56px 0;
	}
	p {
		font-weight: 600;
		font-size: 48px;
		line-height: 72px;
		color: #fcfcff;

		@include mixins.mobile {
			text-align: center;
		}
	}
	pre {
		overflow: scroll;
		color: #fcfcff;
		line-height: 150%;
	}
	span.link {
		cursor: pointer;
	}
	div.layout {
		display: grid;
		grid-template-columns: 2fr 3fr;
		grid-template-rows: 1fr;
		grid-template-areas: '. .';
		align-items: center;
		justify-items: center;
		gap: 36px;
		padding: 48px 0;

		@include mixins.mobile {
			grid-template-columns: 1fr;
			grid-template-areas: '.';
		}

		div.result {
			display: flex;
			flex-direction: column;
			align-items: center;

			ul {
				list-style-type: none;
				display: flex;
				align-items: center;
				gap: 48px;
				padding: 0;
				li {
					a,
					.link {
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
