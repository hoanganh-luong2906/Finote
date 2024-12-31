import { useTranslations } from 'next-intl';
import Link from 'next/link';

export const CallToAction1 = () => {
	const trans = useTranslations('CallToAction');

	return (
		<div className='mil-cta mil-up'>
			<div className='container'>
				<div className='mil-out-frame mil-visible mil-image mil-illustration-fix mil-p-160-0'>
					<div className='row align-items-end'>
						<div className='mil-text-center'>
							<h2 className='mil-mb-30 mil-light mil-up'>
								{trans.rich('v1-title', {
									br: () => <br />,
								})}
							</h2>
							<p className='mil-text-m mil-dark-soft mil-mb-60 mil-up'>
								{trans.rich('v1-subtitle', {
									br: () => <br />,
								})}
							</p>
							<div className='mil-up mil-mb-60'>
								<Link
									href='/register'
									className='mil-btn mil-button-transform mil-md mil-add-arrow'
								>
									{trans('v1-button')}
								</Link>
							</div>
						</div>
					</div>
					<div className='mil-illustration-absolute mil-type-2 mil-up'>
						<img src='/img/home-3/5.png' alt='illustration' />
					</div>
				</div>
			</div>
		</div>
	);
};

export const CallToAction2 = () => {
	const trans = useTranslations('CallToAction');

	return (
		<div className='mil-cta mil-up'>
			<div className='container'>
				<div
					className='mil-out-frame mil-p-160-160'
					style={{ backgroundImage: 'url(img/home-3/5.png)' }}
				>
					<div className='row justify-content-between align-items-center'>
						<div className='col-xl-7 mil-sm-text-center'>
							<h2 className='mil-light mil-mb-30 mil-up'>
								{trans.rich('v2-title', {
									br: () => <br />,
								})}
							</h2>
							<p className='mil-text-m mil-mb-60 mil-dark-soft mil-up'>
								{trans.rich('v2-subtitle', {
									br: () => <br />,
								})}
							</p>
							<div className='mil-buttons-frame mil-up'>
								<a href='https://apps.apple.com/' target='_blank' className='mil-btn mil-md'>
									{trans('v2-button1')}
								</a>
								<a
									href='https://play.google.com/'
									target='_blank'
									className='mil-btn mil-border mil-md'
								>
									{trans('v2-button2')}
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
