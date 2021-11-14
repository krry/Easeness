import sanityClient from '@sanity/client';
import sanityImage from '@sanity/image-url';

const options = {
	// Find your project ID and dataset in `sanity.json` in your studio project
	dataset: 'production',
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	useCdn: process.env.NODE_ENV === 'production',
	apiVersion: '2021-04-30', // use a UTC date string
	// useCdn == true gives fast, cheap responses using a globally distributed cache.
	// Set this to false if your application require the freshest possible
	// data always (potentially slightly slower and a bit more expensive).
};

export const client = sanityClient(options);

export const imageBuilder = sanityImage(client);

export const previewClient = sanityClient({
	...options,
	useCdn: false,
	token: process.env.SANITY_API_TOKEN,
});

export default client;
