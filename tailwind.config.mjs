/** @type {import('tailwindcss').Config} */
export default {
	content: {
		files: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
		relative: true,
    	transform: (content) => content.replace(/taos:/g, ''),
	},
	theme: {
		extend: {
			keyframes: {
				typing: {
					"0%": {
					  width: "0%",
					  visibility: "hidden"
					},
					"100%": {
					  width: "100%"
					}  
				  },
				  blink: {
					"50%": {
					  borderColor: "transparent"
					},
					"100%": {
					  borderColor: "white"
					}  
				  },
				  typewriter: {
					to: {
					  left: "100%"
					}
				  },
			},
			animation: {
				typing: "typing 2s steps(20) infinite alternate, blink .7s infinite",
				typewriter: "typewriter 2s steps(11) forwards"
			  },
			fontFamily: {
				main: ['JetBrains Mono', 'monospace'],
				title: ['monospace','Inter', 'sans-serif'],
				hand: ['Just Another Hand', 'cursive'],
			},
			colors:{
				'primary': 'var(--color-primary)',
				'gold': 'var(--color-gold)',
				'background': 'var(--color-background)',
				'content': 'var(--color-content)',
				'neon': 'var(--color-neon)',
				'hover': 'var(--color-hover)',
			},
		},
	},
	plugins: [require('taos/plugin')],
	safelist: [
		'!duration-[0ms]',
		'!delay-[0ms]',
		'html.js :where([class*="taos:"]:not(.taos-init))'
	  ],
}
