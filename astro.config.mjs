// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	site: "http://emiliosg23.github.io/curriculum",
	base: "/curriculum/",
	integrations: [tailwind()],
});
