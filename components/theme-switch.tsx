import { useTheme } from 'next-themes'
import { Fragment } from 'react'

export const themes = [
	{ name: 'system', emoji: '💻' },
	{ name: 'light', emoji: '🌞' },
	{ name: 'dark', emoji: '🌝' },
	// { name: 'land', emoji: '🌳' },
	// { name: 'sea', emoji: '🐳' },
	// { name: 'fuch', emoji: '🌺' },
]

export default function ThemeSwitch() {
	const { theme, setTheme } = useTheme()
	let dex = themes.findIndex(node => node.name === theme) ?? 0
	let themoji = themes[dex]?.emoji ?? '💻'

	const nextTheme = () => {
		dex = dex + 1 < themes.length ? dex + 1 : 0
		setTheme(themes[dex].name)
		themoji = themes[dex].emoji
	}

	return (
		<Fragment>
			<button
				type='button'
				className='sticky m-3 text-4xl rounded-full outline-none md:text-5xl lg:text-6xl bg-none focus:outline-none hover:opacity-100 top-2 right-2 md:top-3 md:right-3 lg:top-4 lg:right-4 moonface dark:moonshine dark:shimmer'
				onClick={nextTheme}>
				<span>{themoji}</span>
				<span aria-hidden='true' hidden>
					{theme + ' mode'}
				</span>
			</button>
		</Fragment>
	)
}
