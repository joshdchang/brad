import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";

// https://astro.build/config
export default defineConfig({
	output: "hybrid",
	integrations: [tailwind(), react(), markdoc(), markdoc(), keystatic()],
	adapter: vercel({
		edgeMiddleware: true,
	}),
});