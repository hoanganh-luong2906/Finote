import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/libs/i18n/request.ts');

const nextConfig: NextConfig = {
	/* config options here */
	sassOptions: {
		implementation: 'sass-embedded',
	},
};

export default withNextIntl(nextConfig);
