import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import prefetch from "@astrojs/prefetch";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	output: "hybrid",
	integrations: [tailwind(), prefetch()],
	adapter: cloudflare(),
});
