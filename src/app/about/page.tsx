import { CallToAction2 } from '@/components/ui/CallToAction';
import PageLayout from '@/components/commons/PageLayout';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
const page = () => {
	const trans = useTranslations('About');
	const navTrans = useTranslations('Navigation');
	return (
		<PageLayout>
			<div className='mil-banner mil-banner-inner mil-dissolve'>
				<div className='container'>
					<div className='row align-items-center justify-content-center'>
						<div className='col-xl-8'>
							<div className='mil-banner-text mil-text-center'>
								<div className='mil-text-m mil-mb-20'>{trans('title')}</div>
								<h1 className='mil-mb-60'>{trans('subtitle')}</h1>
								<ul className='mil-breadcrumbs mil-center'>
									<li>
										<Link href='/'>{navTrans('home')}</Link>
									</li>
									<li>
										<Link href='about'>{navTrans('about')}</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* banner end */}
			{/* features */}
			<div className='mil-features mil-p-0-80'>
				<div className='container'>
					<div className='row justify-content-between align-items-center'>
						<div className='col-xl-5 mil-mb-80'>
							<h2 className='mil-mb-30 mil-up'>{trans('vision-title')}</h2>
							<p className='mil-text-m mil-soft mil-mb-60 mil-up'>{trans('vision-description')}</p>
							<ul className='mil-list-2 mil-type-2'>
								<li>
									<div className='mil-up'>
										<h5 className='mil-mb-15'>{trans('transformative-vision-title')}</h5>
										<p className='mil-text-m mil-soft'>
											{trans('transformative-vision-description')}
										</p>
									</div>
								</li>
							</ul>
						</div>
						<div className='col-xl-6 mil-mb-80'>
							<div className='mil-image-frame mil-up'>
								<img
									src='img/inner-pages/1.webp'
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
			{/* features end */}
			{/* facts */}
			<div className='mil-facts mil-p-0-130'>
				<div className='container'>
					<div className='row'>
						<div className='col-xl-4 mil-sm-text-center mil-mb-30 mil-up'>
							<p className='h1 mil-display mil-mb-15'>
								<span className='mil-accent mil-counter' data-number={7}>
									7
								</span>
								<span className='mil-pale'>{trans('currency')}</span>
							</p>
							<h5>{trans('registered-users-title')}</h5>
						</div>
						<div className='col-xl-4 mil-sm-text-center mil-mb-30 mil-up'>
							<p className='h1 mil-display mil-mb-15'>
								<span className='mil-accent mil-counter' data-number='1.6'>
									1.6
								</span>
								<span className='mil-pale'>{trans('currency')}</span>
							</p>
							<h5>{trans('regular-users-title')}</h5>
						</div>
						<div className='col-xl-4 mil-sm-text-center mil-mb-30 mil-up'>
							<p className='h1 mil-display mil-mb-15'>
								<span className='mil-accent mil-counter' data-number={170}>
									170
								</span>
								<span className='mil-pale'>+</span>
							</p>
							<h5>{trans('countries-coverage-title')}</h5>
						</div>
					</div>
				</div>
			</div>
			{/* facts end */}
			{/* call to action */}
			<div className='mil-cta mil-up'>
				<div className='container'>
					<div className='mil-out-frame mil-p-160-100'>
						<div className='row justify-content-center mil-text-center'>
							<div className='col-xl-8 mil-mb-80-adaptive-30'>
								<h2 className='mil-up'>
									{trans.rich('strengths-title', {
										br: () => <br />,
									})}
								</h2>
							</div>
						</div>
						<div className='row'>
							<div className='col-xl-4 mil-mb-60'>
								<div className='mil-icon-box'>
									<img src='img/inner-pages/icons/1.svg' alt='icon' className='mil-mb-30 mil-up' />
									<h5 className='mil-mb-20 mil-up'>{trans('global-network-title')}</h5>
									<p className='mil-text-m mil-soft mil-up'>
										{trans('global-network-description')}
									</p>
								</div>
							</div>
							<div className='col-xl-4 mil-mb-60'>
								<div className='mil-icon-box'>
									<img src='img/inner-pages/icons/2.svg' alt='icon' className='mil-mb-30 mil-up' />
									<h5 className='mil-mb-20 mil-up'>{trans('security-title')}</h5>
									<p className='mil-text-m mil-soft mil-up'>{trans('security-description')}</p>
								</div>
							</div>
							<div className='col-xl-4 mil-mb-60'>
								<div className='mil-icon-box'>
									<img src='img/inner-pages/icons/3.svg' alt='icon' className='mil-mb-30 mil-up' />
									<h5 className='mil-mb-20 mil-up'>{trans('innovation-title')}</h5>
									<p className='mil-text-m mil-soft mil-up'>{trans('innovation-description')}</p>
								</div>
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
							<h2 className='mil-mb-30 mil-up'>{trans('values-title')}</h2>
							<p className='mil-text-m mil-soft mil-mb-60 mil-up'>{trans('values-description')}</p>
							<ul className='mil-list-2 mil-type-2'>
								<li>
									<div className='mil-up'>
										<h5 className='mil-mb-15'>{trans('transparency-title')}</h5>
										<p className='mil-text-m mil-soft'>{trans('transparency-description')}</p>
									</div>
								</li>
								<li>
									<div className='mil-up'>
										<h5 className='mil-mb-15'>{trans('commitment-to-safety-title')}</h5>
										<p className='mil-text-m mil-soft'>
											{trans('commitment-to-safety-description')}
										</p>
									</div>
								</li>
							</ul>
						</div>
						<div className='col-xl-5 mil-mb-80'>
							<div className='mil-image-frame mil-up'>
								<img
									src='img/inner-pages/2.webp'
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
			{/* features end */}
			{/* team */}
			{/* <div className='mil-cta mil-up'>
				<div className='container'>
					<div className='mil-out-frame mil-visible mil-image mil-p-160-130'>
						<div className='row justify-content-center mil-text-center'>
							<div className='col-xl-8 mil-mb-80-adaptive-30'>
								<h2 className='mil-light mil-up'>Meet Those Who Make Finote Possible</h2>
							</div>
						</div>
						<div className='row'>
							<div className='col-xl-3 col-md-6 col-sm-6'>
								<div className='mil-team-card mil-mb-30 mil-up'>
									<div className='mil-portrait mil-mb-30'>
										<img src='img/inner-pages/team/1.png' alt='portrait' />
									</div>
									<h5 className='mil-light mil-mb-15'>Isabella Haugen</h5>
									<p className='mil-text-xs mil-soft'>CEO &amp; Founder</p>
								</div>
							</div>
							<div className='col-xl-3 col-md-6 col-sm-6'>
								<div className='mil-team-card mil-mb-30 mil-up'>
									<div className='mil-portrait mil-mb-30'>
										<img src='img/inner-pages/team/2.png' alt='portrait' />
									</div>
									<h5 className='mil-light mil-mb-15'>Alexandr Dahl</h5>
									<p className='mil-text-xs mil-soft'>Chief Technology Officer (CTO)</p>
								</div>
							</div>
							<div className='col-xl-3 col-md-6 col-sm-6'>
								<div className='mil-team-card mil-mb-30 mil-up'>
									<div className='mil-portrait mil-mb-30'>
										<img src='img/inner-pages/team/3.png' alt='portrait' />
									</div>
									<h5 className='mil-light mil-mb-15'>Lucia Knutsen</h5>
									<p className='mil-text-xs mil-soft'>Director of Operations (COO)</p>
								</div>
							</div>
							<div className='col-xl-3 col-md-6 col-sm-6'>
								<div className='mil-team-card mil-mb-30 mil-up'>
									<div className='mil-portrait mil-mb-30'>
										<img src='img/inner-pages/team/4.png' alt='portrait' />
									</div>
									<h5 className='mil-light mil-mb-15'>Carlos Martinez</h5>
									<p className='mil-text-xs mil-soft'>Chief Information Security Officer (CISO)</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div> */}
			{/* team */}
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
												<h5 className='mil-mb-15'>{trans('privacy-policies-title')}</h5>
												<p className='mil-text-m mil-soft'>
													{trans('privacy-policies-description')}
												</p>
											</div>
										</li>
									</ul>
								</div>
								<div className='col-xl-6'>
									<ul className='mil-list-2 mil-type-2 mil-mb-30'>
										<li>
											<div className='mil-up'>
												<h5 className='mil-mb-15'>{trans('data-protection-title')}</h5>
												<p className='mil-text-m mil-soft'>
													{trans('data-protection-description')}
												</p>
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
