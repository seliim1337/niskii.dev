<script lang="ts">
	import type { Readable } from "svelte/store";
	import DiscordStatus from "./DiscordStatus.svelte";
	import type { LanyardData } from "$lib/lanyard/types.js";
	
	export let data$: Readable<LanyardData>;
</script>

<div
	aria-hidden="false"
	aria-label="niskii, avatar"
	class="border-6 relative h-[92px] w-[92px] rounded-full border-white dark:border-zinc-900"
	role="img"
>
	<svg class="absolute" height={92} viewBox="0 0 92 92" width={92}>
		<defs>
			<mask id="avatar-mask">
				<circle cx="40" cy="40" fill="white" r="40" />
				<circle cx="68" cy="68" fill="black" r="14" />
			</mask>
			<mask id="svg-mask-status-dnd" maskContentUnits="objectBoundingBox">
				<circle cx="0.5" cy="0.5" fill="white" r="0.5" />
				<rect fill="black" height="0.25" rx="0.125" ry="0.125" width="0.75" x="0.125" y="0.375" />
			</mask>
			<mask id="svg-mask-status-idle" maskContentUnits="objectBoundingBox">
				<circle cx="0.5" cy="0.5" fill="white" r="0.5" />
				<circle cx="0.25" cy="0.25" fill="black" r="0.375" />
			</mask>
			<mask id="svg-mask-status-offline" maskContentUnits="objectBoundingBox">
				<circle cx="0.5" cy="0.5" fill="white" r="0.5" />
				<circle cx="0.5" cy="0.5" fill="black" r="0.25" />
			</mask>
		</defs>
		<foreignObject height="80" mask="url(#avatar-mask)" width="80" x="0" y="0">
			<div class="grid h-full w-full">
				<picture>
					<source srcset="/img/avatar-128.webp 1x, /img/avatar-256.webp 2x, /img/avatar-512.webp 4x" type="image/webp" />
					<source srcset="/img/avatar-128.png 1x, /img/avatar-256.png 2x, /img/avatar-512.png 4x" type="image/png" />
					<img
						alt="niskii, avatar"
						aria-hidden="true"
						class="block"
						draggable="false"
						height="80"
						src="/img/avatar-80.webp"
						width="80"
					/>
				</picture>
			</div>
		</foreignObject>

		<DiscordStatus {data$} />
	</svg>
</div>
