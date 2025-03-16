import { MetadataProps } from '@/store/types/global';
import { Metadata, ResolvingMetadata } from 'next';

export async function generateMetadata(
	{ params, searchParams }: MetadataProps,
	parent: ResolvingMetadata
): Promise<Metadata> {
	// read route params
	const { id } = await params;

	// fetch data
	const product = await fetch(`https://.../${id}`).then((res) => res.json());

	// optionally access and extend (rather than replace) parent metadata
	const previousImages = (await parent).openGraph?.images || [];

	return {
		title: product.title,
		openGraph: {
			images: ['/some-specific-page-image.jpg', ...previousImages],
		},
	};
}
