/* eslint-disable @typescript-eslint/no-var-requires */
// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');
// const plugin = require('tailwindcss/plugin')

module.exports = {
	darkMode: 'class',
	variants: {
		extend: {
			boxShadow: ['dark'],
		},
	},
	theme: {
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			print: { raw: 'print' },
			// xl: '1280px',
			// 2xl: '1536px',
		},
		colors: {
			inherit: 'inherit',
			transparent: 'transparent',
			whisp: 'hsla(172, 50%, 96%, 0.0618)',
			gleam: 'hsla(172, 50%, 96%, 0.1618)',
			screen: 'hsla(172, 50%, 96%, 0.382)',
			haunt: 'hsla(233, 50%, 4%, 0.0618)',
			shade: 'hsla(233, 50%, 4%, 0.1618)',
			shadow: 'hsla(233, 50%, 4%, 0.382)',
			black: '#05090a',
			white: '#fff',
			gray: {
				100: '#fefeff',
				// 200: '#fbfbff',
				// 300: '#ededef',
				400: '#dadade',
				500: '#cbcfd2',
				600: '#c8cacb',
				700: '#969798',
				800: '#646566',
				900: '#323233',
			},
			purp: {
				// 100: '#ebd9f2',
				200: '#d6b3e5',
				// 300: '#c28cd9',
				// 400: '#ad66cc',
				// 500: '#9940bf',
				600: '#7a3399',
				// 700: '#5c2673',
				800: '#3d1a4c',
				// 900: '#1f0d26',
			},
			indigo: {
				100: '#d9dcf2',
				200: '#b3b9e5',
				// 300: '#8c97d9',
				// 400: '#6674cc',
				500: '#4051bf',
				// 600: '#334199',
				700: '#263173',
				800: '#1a204c',
				900: '#0d1026',
			},
			cyan: {
				// 100: '#d9f7f3',
				200: '#b2eee6',
				300: '#8ce6da',
				400: '#65ddcd',
				500: '#3fd5c1',
				600: '#32aa9a',
				700: '#268074',
				800: '#19554d',
				900: '#0d2b27',
			},
			lime: {
				// 100: '#d6f5dd',
				200: '#adebba',
				// 300: '#84e198',
				400: '#5bd775',
				500: '#32cd53',
				// 600: '#28a442',
				700: '#1e7b32',
				// 800: '#145221',
				// 900: '#0a2911',
			},
			gold: {
				// 100: '#fef4df',
				// 200: '#fceabe',
				// 300: '#fbdf9e',
				400: '#f9d57d',
				500: '#f8ca5d',
				// 600: '#c6a24a',
				// 700: '#957938',
				// 800: '#635125',
				// 900: '#322813',
			},
			flame: {
				100: '#fbdbd0',
				// 200: '#f7b6a1',
				300: '#f49271',
				400: '#f06d42',
				500: '#ec4913',
				// 600: '#bd3a0f',
				// 700: '#8e2c0b',
				800: '#5e1d08',
				// 900: '#2f0f04',
			},
			fuch: {
				// 100: '#ffd9f7',
				// 200: '#ffb2ee',
				// 300: '#ff8ce6',
				400: '#ff65dd',
				500: '#ff3fd5',
				600: '#cc32aa',
				700: '#992680',
				// 800: '#661955',
				// 900: '#330d2b',
			},
		},
		extend: {
			lineHeight: {
				tight: 1.25,
			},
			height: {
				half: '50vh',
			},
			fontSize: {
				'5xl': '2.5rem',
				'6xl': '3.25rem',
				'7xl': '4.5rem',
				'8xl': '6rem',
			},
			fontFamily: {
				serif: ['Quicksand', ...defaultTheme.fontFamily.serif],
				mono: ['Inconsolata', ...defaultTheme.fontFamily.mono],
				sans: ['MuseoModerno', ...defaultTheme.fontFamily.sans],
			},
			boxShadow: {
				small: '0 5px 10px rgba(0, 0, 0, 0.12)',
				medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
				moon: '0 0 50rem 2rem hsla(56, 85%, 87%, 0.4)',
			},
			borderRadius: {
				50: '50rem',
			},
			borderWidth: {
				bevel: '1.618vh',
			},
			borderStyle: {
				inset: 'inset',
			},
			keyframes: {
				burn: {
					'0%, 100%': { color: theme => theme.colors.gold[500] },
					'50%': { color: theme => theme.colors.flame[500] },
				},
				glam: {
					'0%, 100%': { color: theme => theme.colors.cyan[600] },
					'50%': { color: theme => theme.colors.fuch[600] },
				},
				rainbowheel: {
					'0%': { 'background-position': '0% 50%' },
					'50%': { 'background-position': '100% 50%' },
					'100%': { 'background-position': '0% 50%' },
				},
				shimmer: {
					'0%': { 'box-shadow': '0 0 50rem 2rem hsl(56, 85%, 87%)' },
					'50%': { 'box-shadow': '0 0 40rem 3rem hsl(64, 95%, 95%)' },
					'100%': { 'box-shadow': '0 0 50rem 2rem hsl(56, 85%, 87%)' },
				},
			},
			animation: {
				burn: 'burn 1.5s ease-in-out infinite',
				glam: 'glam 1.5s ease-in-out infinite',
				rainbowheel: 'rainbowheel 30s infinite alternate',
				shimmer: 'shimmer 15s ease infinite',
			},
			scale: {
				'-1': '-1',
			},
		},
	},
	purge: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
};
