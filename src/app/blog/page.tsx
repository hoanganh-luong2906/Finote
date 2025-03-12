import { PageBanner } from '@/commons/components/Banner';
import PageLayout from '@/commons/PageLayout';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const page = () => {
	const trans = useTranslations('Blog');
	return (
		<PageLayout>
			<PageBanner pageName='Blog' title={trans('blog-title')} />

			{/* banner end */}
			{/* blog list */}
			<div className='mil-blog-list mil-p-0-160'>
				<div className='container'>
					<div className='row'>
						<div className='col-xl-4 col-md-6'>
							<Link href='publication' className='mil-blog-card mil-mb-30 mil-up'>
								<div className='mil-card-cover'>
									<img
										src='img/inner-pages/blog/1.webp'
										alt='cover'
										className='mil-scale-img'
										data-value-1={1}
										data-value-2='1.2'
									/>
								</div>
								<div className='mil-descr'>
									<p className='mil-text-xs mil-accent mil-mb-15'>{trans('financial-advice')}</p>
									<h4>{trans('how-to-send-money-safely')}</h4>
								</div>
							</Link>
						</div>
						<div className='col-xl-4 col-md-6'>
							<Link href='publication' className='mil-blog-card mil-mb-30 mil-up'>
								<div className='mil-card-cover'>
									<img
										src='img/inner-pages/blog/2.webp'
										alt='cover'
										className='mil-scale-img'
										data-value-1={1}
										data-value-2='1.2'
									/>
								</div>
								<div className='mil-descr'>
									<p className='mil-text-xs mil-accent mil-mb-15'>{trans('personal-finance')}</p>
									<h4>{trans('benefits-virtual-cards')}</h4>
								</div>
							</Link>
						</div>
						<div className='col-xl-4 col-md-6'>
							<Link href='publication' className='mil-blog-card mil-mb-30 mil-up'>
								<div className='mil-card-cover'>
									<img
										src='img/inner-pages/blog/3.webp'
										alt='cover'
										className='mil-scale-img'
										data-value-1={1}
										data-value-2='1.2'
									/>
								</div>
								<div className='mil-descr'>
									<p className='mil-text-xs mil-accent mil-mb-15'>{trans('business-payments')}</p>
									<h4>{trans('optimize-business-payments')}</h4>
								</div>
							</Link>
						</div>
						<div className='col-xl-4 col-md-6'>
							<Link href='publication' className='mil-blog-card mil-mb-30 mil-up'>
								<div className='mil-card-cover'>
									<img
										src='img/inner-pages/blog/4.webp'
										alt='cover'
										className='mil-scale-img'
										data-value-1={1}
										data-value-2='1.2'
									/>
								</div>
								<div className='mil-descr'>
									<p className='mil-text-xs mil-accent mil-mb-15'>{trans('financial-inclusion')}</p>
									<h4>{trans('importance-financial-inclusion')}</h4>
								</div>
							</Link>
						</div>
						<div className='col-xl-4 col-md-6'>
							<Link href='publication' className='mil-blog-card mil-mb-30 mil-up'>
								<div className='mil-card-cover'>
									<img
										src='img/inner-pages/blog/5.webp'
										alt='cover'
										className='mil-scale-img'
										data-value-1={1}
										data-value-2='1.2'
									/>
								</div>
								<div className='mil-descr'>
									<p className='mil-text-xs mil-accent mil-mb-15'>{trans('product-updates')}</p>
									<h4>{trans('new-features-finote-enterprise')}</h4>
								</div>
							</Link>
						</div>
						<div className='col-xl-4 col-md-6'>
							<Link href='publication' className='mil-blog-card mil-mb-30 mil-up'>
								<div className='mil-card-cover'>
									<img
										src='img/inner-pages/blog/6.webp'
										alt='cover'
										className='mil-scale-img'
										data-value-1={1}
										data-value-2='1.2'
									/>
								</div>
								<div className='mil-descr'>
									<p className='mil-text-xs mil-accent mil-mb-15'>{trans('savings-tips')}</p>
									<h4>{trans('save-on-international-transactions')}</h4>
								</div>
							</Link>
						</div>
						<div className='col-xl-4 col-md-6'>
							<Link href='publication' className='mil-blog-card mil-mb-30 mil-up'>
								<div className='mil-card-cover'>
									<img
										src='img/inner-pages/blog/7.webp'
										alt='cover'
										className='mil-scale-img'
										data-value-1={1}
										data-value-2='1.2'
									/>
								</div>
								<div className='mil-descr'>
									<p className='mil-text-xs mil-accent mil-mb-15'>{trans('financial-advice')}</p>
									<h4>{trans('how-to-send-money-safely')}</h4>
								</div>
							</Link>
						</div>
						<div className='col-xl-4 col-md-6'>
							<Link href='publication' className='mil-blog-card mil-mb-30 mil-up'>
								<div className='mil-card-cover'>
									<img
										src='img/inner-pages/blog/8.webp'
										alt='cover'
										className='mil-scale-img'
										data-value-1={1}
										data-value-2='1.2'
									/>
								</div>
								<div className='mil-descr'>
									<p className='mil-text-xs mil-accent mil-mb-15'>{trans('personal-finance')}</p>
									<h4>{trans('benefits-virtual-cards')}</h4>
								</div>
							</Link>
						</div>
						<div className='col-xl-4 col-md-6'>
							<Link href='publication' className='mil-blog-card mil-mb-30 mil-up'>
								<div className='mil-card-cover'>
									<img
										src='img/inner-pages/blog/9.webp'
										alt='cover'
										className='mil-scale-img'
										data-value-1={1}
										data-value-2='1.2'
									/>
								</div>
								<div className='mil-descr'>
									<p className='mil-text-xs mil-accent mil-mb-15'>{trans('business-payments')}</p>
									<h4>{trans('optimize-business-payments')}</h4>
								</div>
							</Link>
						</div>
						<div className='col-xl-4 col-md-6'>
							<Link href='publication' className='mil-blog-card mil-mb-30 mil-up'>
								<div className='mil-card-cover'>
									<img
										src='img/inner-pages/blog/10.webp'
										alt='cover'
										className='mil-scale-img'
										data-value-1={1}
										data-value-2='1.2'
									/>
								</div>
								<div className='mil-descr'>
									<p className='mil-text-xs mil-accent mil-mb-15'>{trans('financial-inclusion')}</p>
									<h4>{trans('importance-financial-inclusion')}</h4>
								</div>
							</Link>
						</div>
						<div className='col-xl-4 col-md-6'>
							<Link href='publication' className='mil-blog-card mil-mb-30 mil-up'>
								<div className='mil-card-cover'>
									<img
										src='img/inner-pages/blog/11.webp'
										alt='cover'
										className='mil-scale-img'
										data-value-1={1}
										data-value-2='1.2'
									/>
								</div>
								<div className='mil-descr'>
									<p className='mil-text-xs mil-accent mil-mb-15'>{trans('product-updates')}</p>
									<h4>{trans('new-features-finote-enterprise')}</h4>
								</div>
							</Link>
						</div>
						<div className='col-xl-4 col-md-6'>
							<Link href='publication' className='mil-blog-card mil-mb-30 mil-up'>
								<div className='mil-card-cover'>
									<img
										src='img/inner-pages/blog/12.webp'
										alt='cover'
										className='mil-scale-img'
										data-value-1={1}
										data-value-2='1.2'
									/>
								</div>
								<div className='mil-descr'>
									<p className='mil-text-xs mil-accent mil-mb-15'>{trans('savings-tips')}</p>
									<h4>{trans('save-on-international-transactions')}</h4>
								</div>
							</Link>
						</div>
					</div>
					<div className='mil-text-center mil-mt-30 mil-up'>
						<a href='#' className='mil-btn mil-m mil-add-arrow'>
							{trans('loads-more-publications')}
						</a>
					</div>
				</div>
			</div>
			{/* blog list end */}
		</PageLayout>
	);
};

export default page;
