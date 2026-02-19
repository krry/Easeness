import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=MuseoModerno&family=Quicksand&family=Inconsolata&display=swap"
						rel="stylesheet"
					/>
					<script src="https://kerry.ink/widgets/webring/webring.wc.js"></script>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
