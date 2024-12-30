import Banner from '@/commons/components/Banner';
import { CallToAction1 } from '@/commons/components/CallToAction';
import Testimonials1 from '@/commons/components/Testimonials';
import PageLayout from '@/commons/PageLayout';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
const page = () => {
	const trans = useTranslations('LandingPage');

	return (
		<PageLayout bg={false} margin={0}>
			<Banner
				title={trans('banner-title')}
				subTitle={trans('banner-subtitle')}
				img='/img/home-3/1.png'
				style={{ maxWidth: '140%', transform: 'translateX(20%)' }}
			/>
			{/* banner end */}

			{/* features */}
			<div className='mil-features mil-p-80-80'>
				<div className='container'>
					<div className='row flex-sm-row-reverse justify-content-between align-items-center'>
						<div className='col-xl-6 mil-mb-80'>
							<h2 className='mil-mb-30 mil-up'>{trans('features-title-1')}</h2>
							<p className='mil-text-m mil-soft mil-mb-60 mil-up'>
								{trans('features-desc-1a')} <br />
								{trans('features-desc-1b')}
							</p>
							<ul className='mil-list-1'>
								<li>
									<div className='mil-up'>
										<h5 className='mil-mb-15 mil-up'>{trans('features-item-1')}</h5>
										<p className='mil-text-m mil-soft mil-up'>
											{trans('features-item-desc-1a')} <br />
											{trans('features-item-desc-1b')}
										</p>
									</div>
								</li>
								<li>
									<div className='mil-up'>
										<h5 className='mil-mb-15 mil-up'>{trans('features-item-2')}</h5>
										<p className='mil-text-m mil-soft mil-up'>
											{trans('features-item-desc-2a')} <br />
											{trans('features-item-desc-2b')}
										</p>
									</div>
								</li>
								<li>
									<div className='mil-up'>
										<h5 className='mil-mb-15 mil-up'>{trans('features-item-3')}</h5>
										<p className='mil-text-m mil-soft mil-up'>
											{trans('features-item-desc-3a')} <br />
											{trans('features-item-desc-3b')}
										</p>
									</div>
								</li>
							</ul>
						</div>
						<div className='col-xl-5 mil-mb-80'>
							<div className='mil-image-frame mil-visible-overflow'>
								<img src='/img/home-3/2.png' alt='image' className='mil-up' />
								<div className='mil-img-box mil-accent-box mil-up'>
									<img src='/img/home-3/icons/1.svg' alt='icon' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* features end */}
			{/* features */}
			<div className='mil-features mil-p-0-80'>
				<div className='container'>
					<div className='row justify-content-between align-items-center'>
						<div className='col-xl-6 mil-mb-80'>
							<h2 className='mil-mb-30 mil-up'>{trans('features-title-2')}</h2>
							<p className='mil-text-m mil-soft mil-mb-60 mil-up'>
								{trans('features-item-desc-2a')} <br />
								{trans('features-item-desc-2b')}
							</p>
							<ul className='mil-list-2 mil-mb-60'>
								<li>
									<div className='mil-up'>
										<h5 className='mil-mb-15'>{trans('features-item-4')}</h5>
										<p className='mil-text-m mil-soft'>
											{trans('features-item-desc-4a')} <br />
											{trans('features-item-desc-4b')}
											<br />
											{trans('features-item-desc-4c')}
										</p>
									</div>
								</li>
								<li>
									<div className='mil-up'>
										<h5 className='mil-mb-15'>{trans('features-item-5')}</h5>
										<p className='mil-text-m mil-soft'>
											{trans('features-item-desc-5a')} <br />
											{trans('features-item-desc-5b')}
										</p>
									</div>
								</li>
							</ul>
							<div className='mil-up mil-mb-60'>
								<Link href='/about' className='mil-btn mil-button-transform mil-m mil-add-arrow'>
									{trans('cta-title-1')}
								</Link>
							</div>
						</div>
						<div className='col-xl-4 mil-mb-80'>
							<div className='mil-image-frame mil-image-frame-2 mil-visible-overflow'>
								<img src='/img/home-3/3.png' alt='image' className='mil-up' />
								<div className='mil-img-box mil-left-box mil-left-max mil-soft-box mil-up'>
									<img src='/img/home-3/icons/2.svg' alt='icon' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* features end */}
			{/* call to action */}
			<div className='mil-cta mil-up'>
				<div className='container'>
					<div className='mil-out-frame mil-visible mil-image mil-p-160-130'>
						<div className='row align-items-end'>
							<div className='col-xl-8 mil-mb-80-adaptive-30'>
								<h2 className='mil-up mil-light'>{trans('cta-title-1')}</h2>
							</div>
							<div className='col-xl-4 mil-mb-80 mil-up'>
								<Link href='/services' className='mil-btn mil-m mil-add-arrow mil-adaptive-right'>
									{trans('cta-btn-1')}
								</Link>
							</div>
						</div>
						<div className='row'>
							<div className='col-xl-4 mil-mb-30'>
								<Link href='/about' className='mil-icon-box mil-center mil-hover'>
									<img src='/img/home-3/icons/3.svg' alt='icon' className='mil-mb-30 mil-up' />
									<h5 className='mil-mb-20 mil-light mil-up'>{trans('cta-feat-title-1')}</h5>
									<p className='mil-text-m mil-light mil-mb-30 mil-up'>
										{trans('cta-feat-desc-1')}
									</p>
									<div className='mil-link mil-accent mil-up'>{trans('cta-feat-button-1')}</div>
								</Link>
							</div>
							<div className='col-xl-4 mil-mb-30'>
								<Link href='/career' className='mil-icon-box mil-center mil-hover'>
									<img src='/img/home-3/icons/4.svg' alt='icon' className='mil-mb-30 mil-up' />
									<h5 className='mil-mb-20 mil-light mil-up'>{trans('cta-feat-title-2')}</h5>
									<p className='mil-text-m mil-light mil-mb-30 mil-up'>
										{trans('cta-feat-desc-2')}
									</p>
									<div className='mil-link mil-accent mil-up'>{trans('cta-feat-button-2')}</div>
								</Link>
							</div>
							<div className='col-xl-4 mil-mb-30'>
								<Link href='/pricing' className='mil-icon-box mil-center mil-hover'>
									<img src='/img/home-3/icons/5.svg' alt='icon' className='mil-mb-30 mil-up' />
									<h5 className='mil-mb-20 mil-light mil-up'>{trans('cta-feat-title-3')}</h5>
									<p className='mil-text-m mil-light mil-mb-30 mil-up'>
										{trans('cta-feat-desc-3')}
									</p>
									<div className='mil-link mil-accent mil-up'>{trans('cta-feat-button-3')}</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* call to action end */}
			{/* features */}
			<div className='mil-features mil-p-160-80'>
				<div className='container'>
					<div className='row flex-sm-row-reverse justify-content-between align-items-center'>
						<div className='col-xl-6 mil-mb-80'>
							<h2 className='mil-mb-30 mil-up'>{trans('features-title-3')}</h2>
							<p className='mil-text-m mil-soft mil-mb-60 mil-up'>
								{trans('features-desc-3a')} <br />
								{trans('features-desc-3b')}
							</p>
							<ul className='mil-list-2'>
								<li>
									<div className='mil-up'>
										<h5 className='mil-mb-15'>{trans('features-item-6')}</h5>
										<p className='mil-text-m mil-soft'>{trans('features-item-desc-6')}</p>
									</div>
								</li>
								<li>
									<div className='mil-up'>
										<h5 className='mil-mb-15'>{trans('features-item-7')}</h5>
										<p className='mil-text-m mil-soft'>{trans('features-item-desc-7')}</p>
									</div>
								</li>
							</ul>
						</div>
						<div className='col-xl-5 mil-mb-80'>
							<div className='mil-image-frame mil-visible-overflow'>
								<img src='/img/home-3/4.png' alt='image' className='mil-up' />
								<div className='mil-img-box mil-soft-box mil-up'>
									<img src='/img/home-3/icons/6.svg' alt='icon' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* features end */}
			{/* testimonials */}
			<div className='mil-cta mil-up'>
				<div className='container'>
					<div className='mil-out-frame mil-bg-1 mil-p-160-160'>
						<div className='row justify-content-center'>
							<div className='col-xl-7 mil-relative'>
								<Testimonials1 />
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* testimonials end */}
			{/* facts */}
			<div className='mil-facts mil-p-160-80'>
				<div className='container'>
					<div className='row justify-content-between align-items-center'>
						<div className='col-xl-6'>
							<div className='row'>
								<div className='col-xl-6 mil-sm-text-center mil-mb-30 mil-up'>
									<p className='h1 mil-display mil-mb-15'>
										<span className='mil-accent mil-counter' data-number={20}>
											20
										</span>
										<span className='mil-pale'>%</span>
									</p>
									<h5>{trans('facts-stat-1')}</h5>
								</div>
								<div className='col-xl-6 mil-sm-text-center mil-mb-80 mil-up'>
									<p className='h1 mil-display mil-mb-15'>
										<span className='mil-accent mil-counter' data-number={98}>
											98
										</span>
										<span className='mil-pale'>%</span>
									</p>
									<h5>{trans('facts-stat-2')}</h5>
								</div>
							</div>
						</div>
						<div className='col-xl-5 mil-mb-80'>
							<p className='mil-text-m mil-soft mil-up'>{trans('facts-desc')}</p>
						</div>
					</div>
				</div>
			</div>
			{/* facts end */}
			{/* call to action */}
			<CallToAction1 />
			{/* call to action end */}
		</PageLayout>
	);
};
export default page;
