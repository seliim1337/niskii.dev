<script lang="ts">
	import type { LanyardData } from "$lib/lanyard/types";
	import type { Readable } from "svelte/store";

	export let data$: Readable<LanyardData | undefined>;

	function handleStatusChange(status: string | undefined) {
		switch (status) {
			case "dnd":
				return "fill-red-500";
			case "idle":
				return "fill-amber-400";
			case "online":
				return "fill-green-600";
			case "offline":
				return "fill-slate-500";

			default:
				return "fill-slate-500";
		}
	}
</script>

<circle
	class={`${handleStatusChange($data$?.discord_status)} transition transition-colors duration-300 ease-in-out`}
	cx="68"
	cy="68"
	mask={`url(#svg-mask-status-${$data$?.discord_status ?? "offline"})`}
	r="8"
/>
