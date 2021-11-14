import { getPreviewPostBySlug } from '../../lib/api';

const preview = async (
	req: { query: { secret: string; slug: string } },
	res: {
		status: (arg0: number) => {
			(): any;
			new (): any;
			json: { (arg0: { message: string }): any; new (): any };
		};
		setPreviewData: (arg0: unknown) => void;
		writeHead: (arg0: number, arg1: { Location: string }) => void;
		end: () => void;
	}
) => {
	// Check the secret and next parameters
	// This secret should only be known to this API route and the CMS
	if (req.query.secret !== process.env.SANITY_PREVIEW_SECRET || !req.query.slug) {
		return res.status(401).json({ message: 'Invalid token' });
	}

	// Fetch the headless CMS to check if the provided `slug` exists
	const doc = await getPreviewPostBySlug(req.query.slug);

	// If the slug doesn't exist prevent preview mode from being enabled
	if (!doc) {
		return res.status(401).json({ message: 'Invalid slug' });
	}

	// Enable Preview Mode by setting the cookies
	res.setPreviewData({});

	// Redirect to the path from the fetched doc
	// We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
	res.writeHead(307, { Location: `/${doc.slug}` });
	res.end();
};

export default preview;
