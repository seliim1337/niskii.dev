<script lang="ts">
	import type { Readable } from "svelte/store";
	import { activities } from "./activities.js";
	import Game from "./activity/Game.svelte";
	import type { LanyardData } from "$lib/lanyard/types";

	export let data$: Readable<Partial<LanyardData>>;

	const activities$ = activities(data$);
</script>

{#if $activities$?.length}
	{#each $activities$ as activity}
		{#if activity.type === 0}
			<Game {activity} />
		{/if}
	{/each}
{/if}
