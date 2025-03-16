import { CallToAction2 } from '@/components/ui/CallToAction';
import Pricing from '@/components/ui/Pricing';
import PageLayout from '@/components/commons/PageLayout';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export const metadata = {
	icons: ['/img/logo-2.svg'],
	title: 'Finote | Pricing',
	description: 'Finote - Your Financial Companion',
};

const page = () => {
	const trans = useTranslations('Pricing');
	const navTrans = useTranslations('Navigation');

	return (
		<PageLayout bg={false}>
			{/* banner */}
			<div className='mil-banner mil-banner-inner mil-dissolve'>
				<div className='container'>
					<div className='row align-items-center justify-content-center'>
						<div className='col-xl-8'>
							<div className='mil-banner-text mil-text-center'>
								<div className='mil-text-m mil-mb-20'>{navTrans('pricing')}</div>
								<h1 className='mil-mb-60'>{trans('title')}</h1>
								<ul className='mil-breadcrumbs mil-pub-info mil-center'>
									<li>
										<Link href='home'>{navTrans('home')}</Link>
									</li>
									<li>
										<Link href='price'>{navTrans('home')}</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* banner end */}
			{/* prices*/}
			<div className='mil-blog-list mil-p-0-130'>
				<div className='container'>
					<Pricing />
				</div>
			</div>
			{/* prices end */}
			<CallToAction2 />
		</PageLayout>
	);
};
export default page;
