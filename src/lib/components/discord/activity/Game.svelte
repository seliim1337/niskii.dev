<script lang="ts">
	import type { GatewayActivity } from "discord-api-types/v10";
	import { onDestroy } from "svelte";
	import GameIcon from "./GameIcon.svelte";
	import { getAssetUrl } from "$lib/utils/getAssetUrl.js";

	export let activity: GatewayActivity;

	const secondAsMilliseconds = 1_000;
	const minuteAsMilliseconds = secondAsMilliseconds * 60;
	const hourAsMilliseconds = minuteAsMilliseconds * 60;

	function computeElapsed() {
		if (!activity.timestamps?.start) return null;
		const distance = Date.now() - activity.timestamps?.start;
		const seconds = (Math.floor(distance / secondAsMilliseconds) % 60).toString().padStart(2, "0");
		const minutes = (Math.floor(distance / minuteAsMilliseconds) % 60).toString().padStart(2, "0");
		if (distance < hourAsMilliseconds) return `${minutes}:${seconds}`;
		const hours = Math.floor(distance / hourAsMilliseconds)
			.toString()
			.padStart(2, "0");
		return `${hours}:${minutes}:${seconds}`;
	}

	let elapsed = computeElapsed();

	$: if (activity.timestamps?.start) {
		const interval = setInterval(() => {
			elapsed = computeElapsed();
		}, 1_000);
		onDestroy(() => clearInterval(interval));
	}
</script>

<section class="mb-3 select-none">
	<h2 class="mb-2 select-none text-xs font-bold uppercase leading-4 text-zinc-700 dark:text-slate-300">
		Playing a Game
	</h2>

	<div class="flex items-center">
		<section class="relative self-start">
			{#if activity.assets?.large_image}
				<img
					class="large-mask block rounded-lg object-cover"
					draggable="false"
					height={60}
					alt={activity.assets?.large_text}
					src={getAssetUrl(activity.application_id, activity.assets?.large_image)}
					width={60}
				/>
			{:else}
				<GameIcon />
			{/if}

			{#if activity.assets?.small_image && activity.assets.large_image}
				<img
					class="absolute -bottom-1 -right-1 rounded-full"
					height="20"
					alt={activity.assets?.small_text}
					src={getAssetUrl(activity.application_id, activity.assets?.small_image)}
					width="20"
				/>
			{/if}
		</section>

		<section class="ml-2.5 flex-auto overflow-hidden">
			<span
				class="block overflow-hidden text-ellipsis whitespace-nowrap text-sm font-semibold text-zinc-700 dark:text-slate-300"
				title={activity.name}
			>
				{activity.name}
			</span>

			{#if activity.details}
				<span
					class="block overflow-hidden text-ellipsis whitespace-nowrap text-zinc-700 dark:text-slate-300"
					title={activity.details}
				>
					{activity.details}
				</span>
			{/if}

			{#if activity.state}
				<span
					class="block overflow-hidden text-ellipsis whitespace-nowrap text-zinc-700 dark:text-slate-300"
					title={activity.state}
				>
					{activity.state}
				</span>
			{/if}

			{#if activity.timestamps?.start}
				<span class="block overflow-hidden text-ellipsis whitespace-nowrap text-zinc-700 dark:text-slate-300">
					{elapsed} elapsed
				</span>
			{/if}
		</section>
	</div>

	{#each activity.buttons as button}
		<section class="mt-3 flex flex-col flex-wrap items-stretch justify-center space-y-2">
			<button
				class="relative flex h-8 w-full select-none items-center justify-center rounded bg-zinc-500 text-sm text-white transition-colors hover:bg-zinc-600 dark:bg-zinc-600 hover:dark:bg-zinc-500"
				type="button"
			>
				<div class="block overflow-hidden text-ellipsis whitespace-nowrap">{button}</div>
			</button>
		</section>
	{/each}
</section>
