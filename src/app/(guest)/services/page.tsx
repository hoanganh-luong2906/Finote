import { PageBanner } from '@/components/ui/Banner';
import { CallToAction2 } from '@/components/ui/CallToAction';
import PageLayout from '@/components/commons/PageLayout';
import { useTranslations } from 'next-intl';

export const metadata = {
	icons: ['/img/logo-2.svg'],
	title: 'Finote | Services',
	description: 'Finote - Your Financial Companion',
};

import Link from 'next/link';
const page = () => {
	const trans = useTranslations('Services');
	const navTrans = useTranslations('Navigation');

	return (
		<PageLayout bg={false}>
			<PageBanner title={trans('send-request-money')} pageName='Services' />

			{/* banner end */}
			{/* service */}
			<div className='mil-features mil-p-0-80'>
				<div className='container'>
					<div className='row justify-content-between align-items-center'>
						<div className='col-xl-5 mil-mb-80'>
							<h2 className='mil-mb-30 mil-up'>{trans('send-request-money')}</h2>
							<p className='mil-text-m mil-soft mil-mb-30 mil-up'>{trans('consumer-experience')}</p>
							<div className='mil-up'>
								<Link href='/price' className='mil-btn mil-m mil-add-arrow'>
									{navTrans('pricing')}
								</Link>
							</div>
						</div>
						<div className='col-xl-6 mil-mb-80'>
							<div className='mil-image-frame mil-up'>
								<img
									src='img/inner-pages/3.webp'
									alt='image'
									className='mil-scale-img'
									data-value-1={1}
									data-value-2='1.2'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* service end */}
			{/* service */}
			<div className='mil-features mil-p-0-80'>
				<div className='container'>
					<div className='row flex-sm-row-reverse justify-content-between align-items-center'>
						<div className='col-xl-5 mil-mb-80'>
							<h2 className='mil-mb-30 mil-up'>{trans('enterprise-solutions')}</h2>
							<p className='mil-text-m mil-soft mil-mb-30 mil-up'>
								{trans('enterprise-description')}
							</p>
							<div className='mil-up'>
								<Link href='/price' className='mil-btn mil-m mil-add-arrow'>
									{navTrans('pricing')}
								</Link>
							</div>
						</div>
						<div className='col-xl-6 mil-mb-80'>
							<div className='mil-image-frame ml-up'>
								<img
									src='img/inner-pages/4.webp'
									alt='image'
									className='mil-scale-img'
									data-value-1={1}
									data-value-2='1.2'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* service end */}
			{/* service */}
			<div className='mil-features mil-p-0-80'>
				<div className='container'>
					<div className='row justify-content-between align-items-center'>
						<div className='col-xl-5 mil-mb-80'>
							<h2 className='mil-mb-30 mil-up'>{trans('virtual-card-title')}</h2>
							<p className='mil-text-m mil-soft mil-mb-30 mil-up'>
								{trans('virtual-card-description')}
							</p>
							<div className='mil-up'>
								<Link href='/price' className='mil-btn mil-m mil-add-arrow'>
									{navTrans('pricing')}
								</Link>
							</div>
						</div>
						<div className='col-xl-6 mil-mb-80'>
							<div className='mil-image-frame mil-up'>
								<img
									src='img/inner-pages/5.webp'
									alt='image'
									className='mil-scale-img'
									data-value-1={1}
									data-value-2='1.2'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* service end */}
			{/* call to action */}
			<div className='mil-cta mil-up'>
				<div className='container'>
					<div className='mil-out-frame mil-p-160-100'>
						<div className='row justify-content-center mil-text-center'>
							<div className='col-xl-8 mil-mb-80-adaptive-30'>
								<h2 className='mil-up'>{trans('transaction-efficiency')}</h2>
							</div>
						</div>
						<div className='row'>
							<div className='col-xl-4 mil-mb-60'>
								<div className='mil-icon-box'>
									<img src='img/inner-pages/icons/4.svg' alt='icon' className='mil-mb-30 mil-up' />
									<h5 className='mil-mb-20 mil-up'>{trans('simplicity-title')}</h5>
									<p className='mil-text-m mil-soft mil-up'>{trans('simplicity-description')}</p>
								</div>
							</div>
							<div className='col-xl-4 mil-mb-60'>
								<div className='mil-icon-box'>
									<img src='img/inner-pages/icons/5.svg' alt='icon' className='mil-mb-30 mil-up' />
									<h5 className='mil-mb-20 mil-up'>{trans('security-title')}</h5>
									<p className='mil-text-m mil-soft mil-up'>{trans('security-description')}</p>
								</div>
							</div>
							<div className='col-xl-4 mil-mb-60'>
								<div className='mil-icon-box'>
									<img src='img/inner-pages/icons/6.svg' alt='icon' className='mil-mb-30 mil-up' />
									<h5 className='mil-mb-20 mil-up'>{trans('efficiency-title')}</h5>
									<p className='mil-text-m mil-soft mil-up'>{trans('efficiency-description')}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* call to action end */}
			{/* quote */}
			<div className='mil-quote mil-p-160-130'>
				<div className='container'>
					<div className='row justify-content-center'>
						<div className='col-xl-10'>
							<h2 className='mil-mb-30'>{trans('quote')}</h2>
							<p className='mil-text-m mil-soft mil-mb-60'>{trans('quote-author')}</p>
							<div className='row'>
								<div className='col-xl-6'>
									<ul className='mil-list-2 mil-type-2 mil-mb-30'>
										<li>
											<div className='mil-up'>
												<h5 className='mil-mb-15'>{trans('privacy-title')}</h5>
												<p className='mil-text-m mil-soft'>{trans('privacy-description')}</p>
											</div>
										</li>
									</ul>
								</div>
								<div className='col-xl-6'>
									<ul className='mil-list-2 mil-type-2 mil-mb-30'>
										<li>
											<div className='mil-up'>
												<h5 className='mil-mb-15'>{trans('data-title')}</h5>
												<p className='mil-text-m mil-soft'>{trans('data-description')}</p>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* quote end */}
			{/* call to action */}
			<CallToAction2 />
			{/* call to action end */}
		</PageLayout>
	);
};
export default page;
