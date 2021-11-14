import { css } from '@emotion/react';
import { useState } from 'react';
import PuffLoader from 'react-spinners/PuffLoader';

const override = css`
	display: block;
	margin: 0 auto;
	border-color: blue;
`;

export default function Loading() {
	const windowed = typeof window !== 'undefined';
	const flair = windowed
		? getComputedStyle(document.documentElement).getPropertyValue('--flair')
		: '#1bd9d9';
	const loaderHeight = windowed ? document.documentElement.offsetHeight / 3 : 360;
	const [loading] = useState(true);
	const [color] = useState(flair);
	return (
		<div className="loading-rack">
			<PuffLoader color={color} loading={loading} css={override} size={loaderHeight} />
			{/* <button className="btn" onClick={() => setLoading(!loading)}>Toggle Loader</button> */}
			{/* <input
				value={color}
				onChange={(input) => setColor(input.target.value)}
				placeholder="Color of the loader"
			/> */}
		</div>
	);
}
