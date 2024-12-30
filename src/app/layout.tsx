import { Inter } from 'next/font/google';

import '@fonts/css/inter.css';
import './globals.css';

import '@fonts/font-awesome.min.css';

import '@css/plugins/bootstrap-grid.css';

import '@css/plugins/swiper.min.css';

import '@css/plugins/magnific-popup.css';

import 'react-toastify/dist/ReactToastify.css';

import Preloader from '@/commons/Preloader';
import '@css/style.css';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { Bounce, ToastContainer } from 'react-toastify';

const secondary_font = Inter({
	weight: ['400'],
	style: ['normal'],
	subsets: ['latin'],
	variable: '--font-secondary',
	display: 'swap',
	adjustFontFallback: false,
});

export const metadata = {
	title: 'Finote | Home',
	description: 'Finote - Your Financial Partner',
	icons: ['/img/logo-2.svg'],
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const locale = await getLocale();
	const messages = await getMessages();

	return (
		<html lang={locale} className={`${secondary_font.variable} no-scrollbar`}>
			<body>
				<NextIntlClientProvider messages={messages}>
					<Preloader />
					{children}
				</NextIntlClientProvider>
				<ToastContainer
					position='top-right'
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					draggable
					limit={2}
					pauseOnHover
					theme='light'
					transition={Bounce}
					pauseOnFocusLoss={false}
				/>
			</body>
		</html>
	);
}
