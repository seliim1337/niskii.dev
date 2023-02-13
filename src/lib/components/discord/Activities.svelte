<script lang="ts">
	import type { LanyardData } from "$lib/lanyard/types";
	import type { Readable } from "svelte/store";
	import { activities } from "./activities";
	import Game from "./activity/Game.svelte";

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
