<script lang="ts">
	import Logo from './appwrite.svg';
</script>

<header>
	<nav>
		<a href="/">
			<img src={Logo} alt="Appwrite" />
		</a>
	</nav>
</header>

<style lang="scss">
	@use 'mixins';
	header {
		height: 94px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-bottom: 1px solid #373b4d;

		nav {
			max-width: 1285px;
			width: 100%;
			@include mixins.mobile {
				text-align: center;
			}
			img {
				max-height: 32px;
			}
		}
	}
</style>
