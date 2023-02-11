<script>
	import ExternalLink from "$lib/components/ExternalLink.svelte";
	import Heading from "$lib/components/Heading.svelte";
	import Icon from "$lib/components/Icon.svelte";
	import DiscordCard from "$lib/components/discord/DiscordCard.svelte";
</script>

<main class="container m-auto mx-auto flex w-auto grow flex-col items-center justify-center md:flex-row">
	<section class="flex-col justify-center md:pr-16 lg:flex-grow lg:pr-24">
		<div class="flex flex-col items-center justify-between xl:flex-row">
			<header class="px-24">
				<Heading interval={[80, 90, 110]}>
					<h1 class="justify-center text-center text-6xl font-bold leading-tight xl:text-start" slot="heading">
						<span>Hiyu, I'm </span><span class="text-pink-400">Niskii</span><span class="blink">|</span>
					</h1>
				</Heading>
				<Heading delay={1_180} interval={[60, 70, 90]}>
					<h2 class="justify-center text-center text-2xl font-light xl:text-start" slot="heading">
						<span>Software Engineer</span><span class="blink">|</span>
					</h2>
				</Heading>

				<nav class="mt-4 flex justify-center gap-4 xl:justify-start">
					<ExternalLink href="mailto:business@niskii.dev" label="Email">
						<Icon class="text-2xl" icon="i-octicon-mail" />
					</ExternalLink>

					<ExternalLink href="https://github.com/nicolasribeiroo" label="GitHub">
						<Icon class="text-2xl" icon="i-octicon-mark-github-16" />
					</ExternalLink>

					<ExternalLink href="https://open.spotify.com/user/wu6vyqmi5jig37nh6nkp3wzhg" label="Spotify">
						<Icon class="text-2xl" icon="i-fa6-brands-spotify" />
					</ExternalLink>

					<ExternalLink href="https://twitter.com/niskiitwc" label="Twitter">
						<Icon class="text-2xl" icon="i-fa6-brands-twitter" />
					</ExternalLink>
				</nav>
			</header>

			<div class="mt-12">
				<DiscordCard />
			</div>
		</div>
	</section>
</main>
