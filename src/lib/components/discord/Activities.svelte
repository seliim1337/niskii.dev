<script lang="ts">
	import type { Readable } from "svelte/store";
	import Game from "./activity/Game.svelte";
	import type { LanyardData } from "$lib/lanyard/types";

	export let data$: Readable<Partial<LanyardData>>;
	const activity = $data$.activities?.find((activity) => activity.type === 0);
</script>

{#if $data$.activities?.length}
	{#if activity}
		<Game {activity} />
	{/if}
{/if}
