import svelte from "@astrojs/svelte";
import { defineConfig } from "astro/config";
import Unocss from "unocss/astro";

export default defineConfig({
	integrations: [svelte(), Unocss()],
});
