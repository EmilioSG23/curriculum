// @ts-check
/* eslint-disable */
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	output: "server",
	adapter: vercel(),
	site: process.env.PUBLIC_SITE_URL ?? "https://emiliosg23.vercel.app",
	vite: {
		plugins: [tailwindcss()],
	},
});
