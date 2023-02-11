<script lang="ts">
	import type { Readable } from "svelte/store";
	import type { LanyardData } from "$lib/lanyard/types";
	
	export let data$: Readable<LanyardData | undefined>;

	const statusClasses = (status: string | undefined) => {
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
	};
</script>

<circle
	class={statusClasses($data$?.discord_status)}
	cx="68"
	cy="68"
	mask={`url(#svg-mask-status-${$data$?.discord_status ?? "offline"})`}
	r="8"
/>
