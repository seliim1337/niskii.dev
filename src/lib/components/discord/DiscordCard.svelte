<script>
	import { lanyard } from "$lib/lanyard/index";
	import DiscordActivities from "./Activities.svelte";
	import DiscordAvatar from "./DiscordAvatar.svelte";

	const data$ = lanyard();
</script>

<div class="w-[300px] drop-shadow-xl dark:text-slate-200">
	<div class="h-full overflow-hidden rounded-2xl bg-slate-50 dark:bg-zinc-900">
		<div class="relative">
			<picture>
				<source srcset="/img/banner.webp" type="image/webp" />
				<source srcset="/img/banner.gif" type="image/gif" />
				<img
					alt="banner"
					aria-hidden="true"
					class="block"
					draggable="false"
					height="120"
					src="/img/banner.gif"
					width="300"
				/>
			</picture>

			<section class="absolute top-[76px] left-[16px]">
				<div class="rounded-full">
					<DiscordAvatar {data$} />
				</div>
			</section>

			<section class="px-4 pt-16 pb-3">
				<div class="text-xl font-semibold leading-6">
					<span class="text-zinc-900 dark:text-slate-50">selim</span>
					<span class="dark:text-slate-300">#1337</span>
				</div>

				<!-- Badges -->
			</section>

			<section class="flex-initial px-4 pb-3.5 text-sm">
				<div class="pb-2.5">
					<img
						alt="twice"
						aria-label="An image representing the logo of the k-pop group 'TWICE'."
						class="-my-px mr-1"
						draggable="false"
						src="/img/twice.webp"
					/>
				</div>

				<div class="mb-3 h-[1px] w-full bg-slate-200 dark:bg-zinc-800" />

				<section class="mb-3">
					<h2 class="mb-2 text-xs font-bold uppercase leading-4 text-zinc-700 dark:text-slate-300">About Me</h2>
					<div class="whitespace-pre-line">
						<span class="inline-block">just be yourself.</span>
					</div>
				</section>

				<section class="mb-3">
					<h2 class="mb-2 text-xs font-bold uppercase leading-4 text-zinc-700 dark:text-slate-300">
						Discord Member Since
					</h2>
					<span class="whitespace-pre-line">Sep 17, 2017</span>
				</section>

				{#if $data$?.activities?.length}
					<DiscordActivities {data$} />
				{/if}
			</section>
		</div>
	</div>
</div>
