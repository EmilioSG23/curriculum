// @ts-check
/* eslint-disable */
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	site: "http://emiliosg23.github.io/curriculum",
	base: "/curriculum/",
	vite: {
		plugins: [tailwindcss()],
	},
});
