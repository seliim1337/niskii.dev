<script>
	import Typewriter from "svelte-typewriter";

	export let interval;
	export let delay;
</script>

<Typewriter cascade cursor={false} {interval} {delay}>
	<slot name="heading" />
</Typewriter>
