import '../styles/globals.css';
import '../styles/markdown.css';

import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<ThemeProvider attribute="class">
			<Component {...pageProps} />
			{/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
			{/* @ts-ignore Web Component */}
			<webring-widget
				data-source="https://kerry.ink/widgets/webring/webring.json"
				mode="compact"
				theme="auto"
				style={{
					position: 'fixed',
					bottom: '2rem',
					right: '2rem',
					maxWidth: '320px',
					zIndex: 1000,
				}}
			/>
		</ThemeProvider>
	);
};

export default MyApp;
