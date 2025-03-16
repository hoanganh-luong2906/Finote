import PageLayout from '@/components/commons/PageLayout';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export const metadata = {
	icons: ['/img/logo-2.svg'],
	title: 'Finote | Publication',
	description: 'Finote - Your Financial Companion',
};

const page = () => {
	const trans = useTranslations('Publication');
	const navTrans = useTranslations('Navigation');

	return (
		<PageLayout>
			<div className='mil-banner mil-banner-inner mil-dissolve'>
				<div className='container'>
					<div className='row align-items-center justify-content-center'>
						<div className='col-xl-8'>
							<div className='mil-banner-text mil-text-center'>
								<div className='mil-text-m mil-mb-20'>{navTrans('blog')}</div>
								<h1 className='mil-mb-60'>{trans('virtual-card-benefits')}</h1>
								<ul className='mil-breadcrumbs mil-pub-info mil-center'>
									<li className='tracking-widest'>
										<Link href='home-3'>09/12/2023</Link>
									</li>
									<li>
										<Link href='about'>{trans('48-comments')}</Link>
									</li>
									<li>
										<Link href='about'>{trans('356-shared')}</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* banner end */}
			{/* publication */}
			<div className='mil-blog-list mil-p-0-160'>
				<div className='container'>
					<div className='row justify-content-center'>
						<div className='col-xl-12'>
							<div className='mil-pub-cover mil-up'>
								<img
									src='img/inner-pages/blog/2.webp'
									alt='cover'
									className='mil-scale-img'
									data-value-1={1}
									data-value-2='1.2'
								/>
							</div>
						</div>
						<div className='col-xl-9 mil-p-80-80'>
							<h2 className='mil-mb-60 mil-up'>{trans('delving-into-digital-finance')}</h2>
							<p className='mil-text-m mil-soft mil-mb-30 mil-up'>
								{trans('virtual-cards-transform-finances')}
							</p>
							<p className='mil-text-m mil-soft mil-mb-30 mil-up'>
								{trans('additional-layer-security')}
							</p>
							<p className='mil-text-m mil-soft mil-mb-60 mil-up'>
								{trans('philosophical-explanation')}
							</p>
							<div className='mil-mb-60 mil-up'>
								<blockquote className='mil-text-xl mil-mb-30'>
									{trans('virtual-cards-quote')}
								</blockquote>
								<p className='mil-text-m'> {trans('author')}</p>
							</div>
							<h4 className='mil-mb-60 mil-up'>{trans('no-one-rejects')}</h4>
							<p className='mil-text-m mil-soft mil-mb-30 mil-up'>
								{trans('no-one-rejects-pleasure')}
							</p>
							<p className='mil-text-m mil-soft mil-up'>
								{trans('the-wise-man-selection-principle')}
							</p>
						</div>
					</div>
					<div className='row'>
						<div className='col-sm-6 mil-up'>
							<div className='mil-pub-cover mil-inner mil-mb-30'>
								<img
									src='img/inner-pages/blog/3.webp'
									alt='cover'
									className='mil-scale-img'
									data-value-1={1}
									data-value-2='1.2'
								/>
							</div>
						</div>
						<div className='col-sm-6 mil-up'>
							<div className='mil-pub-cover mil-inner mil-mb-30'>
								<img
									src='img/inner-pages/blog/4.webp'
									alt='cover'
									className='mil-scale-img'
									data-value-1={1}
									data-value-2='1.2'
								/>
							</div>
						</div>
					</div>
					<div className='row justify-content-center'>
						<div className='col-xl-9 mil-p-50-80'>
							<h4 className='mil-mb-60'>{trans('business-obligations')}</h4>
							<p className='mil-text-m mil-soft mil-mb-30 mil-up'>{trans('free-hour-pleasure')}</p>
							<p className='mil-text-m mil-soft mil-mb-60 mil-up'>
								{trans('mistaken-idea-pleasure')}
							</p>
							<ul className='mil-pup-tags mil-mb-80 mil-up'>
								<li>
									<a href='#.'>{trans('search')}</a>
								</li>
								<li>
									<a href='#.'>{trans('virtual-card')}</a>
								</li>
								<li>
									<a href='#.'>{trans('digital-finance')}</a>
								</li>
								<li>
									<a href='#.'>{trans('transaction-flexibility')}</a>
								</li>
							</ul>
							<div className='mil-share-frame mil-mb-80 mil-up'>
								<h6>Share:</h6>
								<ul className='mil-pup-share'>
									<li>
										<a href='#.'>
											<i className='fab fa-facebook-f' />
											Facebook
										</a>
									</li>
									<li>
										<a href='#.'>
											<i className='fab fa-twitter' />
											Twitter
										</a>
									</li>
									<li>
										<a href='#.'>
											<i className='fab fa-linkedin-in' />
											LinkedIn
										</a>
									</li>
								</ul>
							</div>
							<div className='mil-next-post'>
								<Link href='publication' className='mil-descr mil-up'>
									<p className='mil-text-m mil-soft mil-mb-15'>{trans('read-next-posts')}</p>
									<h5>{trans('optimize-business-payments')}</h5>
								</Link>
								<Link href='publication' className='mil-cover mil-up'>
									<img src='img/inner-pages/blog/3.webp' alt='cover' />
									<i className='fas fa-arrow-right' />
								</Link>
							</div>
						</div>
						<div className='col-xl-9'>
							<h4 className='mil-mb-60 mil-up'>{trans('comments')}</h4>
							<ul className='mil-comments mil-mb-80'>
								<li>
									<div className='mil-comment mil-up'>
										<div className='mil-avatar'>
											<img src='img/faces/1.jpg' alt='user' />
										</div>
										<div className='mil-comment-text'>
											<h6 className='mil-mb-10'>Samir Holm</h6>
											<p className='mil-text-xs mil-soft mil-mb-15'>December 10, 2023 at 10:13</p>
											<p className='mil-text-s mil-soft'>
												But I must explain to you how all this mistaken idea of denouncing pleasure
												and praising pain was born and I will give you a complete account of the
												system, and expound the actual teachings of the great explorer of the truth
											</p>
											<a href='#.' className='mil-reply'>
												Reply
											</a>
										</div>
									</div>
								</li>
								<li>
									<div className='mil-comment mil-up'>
										<div className='mil-avatar'>
											<img src='img/faces/2.jpg' alt='user' />
										</div>
										<div className='mil-comment-text'>
											<h6 className='mil-mb-10'>Menphik Bakke</h6>
											<p className='mil-text-xs mil-soft mil-mb-15'>December 10, 2023 at 10:13</p>
											<p className='mil-text-s mil-soft'>
												But I must explain to you how all this mistaken idea of denouncing pleasure
												and praising pain was born and I will give you a complete account of the
												system, and expound the actual teachings of the great explorer of the truth
											</p>
											<a href='#.' className='mil-reply'>
												Reply
											</a>
										</div>
									</div>
									<ul>
										<li>
											<div className='mil-comment mil-up'>
												<div className='mil-avatar'>
													<img src='img/faces/3.jpg' alt='user' />
												</div>
												<div className='mil-comment-text'>
													<h6 className='mil-mb-10'>Zaida Andresen</h6>
													<p className='mil-text-xs mil-soft mil-mb-15'>10/12/2023 · 10:13 AM</p>
													<p className='mil-text-s mil-soft'>
														These cases are perfectly simple and easy to distinguish. In a free
														hour, when our power of choice is untrammelled and when nothing prevents
														our being able to do what we like best, every pleasure is to be welcomed
														and every pain avoided.
													</p>
													<a href='#.' className='mil-reply'>
														Reply
													</a>
												</div>
											</div>
										</li>
									</ul>
								</li>
								<li>
									<div className='mil-comment mil-up'>
										<div className='mil-avatar'>
											<img src='img/faces/4.png' alt='user' />
										</div>
										<div className='mil-comment-text'>
											<h6 className='mil-mb-10'>Amin Lien</h6>
											<p className='mil-text-xs mil-soft mil-mb-15'>December 10, 2023 at 10:13</p>
											<p className='mil-text-s mil-soft'>
												These cases are perfectly simple and easy to distinguish. In a free hour,
												when our power of choice is untrammelled and when nothing prevents our being
												able to do what we like best, every pleasure is to be welcomed and every
												pain avoided.
											</p>
											<a href='#.' className='mil-reply'>
												Reply
											</a>
										</div>
									</div>
								</li>
								<li>
									<div className='mil-comment mil-up'>
										<div className='mil-avatar'>
											<img src='img/faces/5.png' alt='user' />
										</div>
										<div className='mil-comment-text'>
											<h6 className='mil-mb-10'>Yamina Frediksen</h6>
											<p className='mil-text-xs mil-soft mil-mb-15'>December 10, 2023 at 10:13</p>
											<p className='mil-text-s mil-soft'>
												These cases are perfectly simple and easy to distinguish. In a free hour,
												when our power of choice is untrammelled and when nothing prevents our being
												able to do what we like best, every pleasure is to be welcomed and every
												pain avoided.
											</p>
											<a href='#.' className='mil-reply'>
												Reply
											</a>
										</div>
									</div>
									<ul>
										<li>
											<div className='mil-comment mil-up'>
												<div className='mil-avatar'>
													<img src='img/faces/1.jpg' alt='user' />
												</div>
												<div className='mil-comment-text'>
													<h6 className='mil-mb-10'>Haidar Knudsen</h6>
													<p className='mil-text-xs mil-soft mil-mb-15'>10/12/2023 · 10:13 AM</p>
													<p className='mil-text-s mil-soft'>
														But I must explain to you how all this mistaken idea of denouncing
														pleasure and praising pain was born and I will give you a complete
														account of the system, and expound the actual teachings of the great
														explorer of the truth.
													</p>
													<a href='#.' className='mil-reply'>
														Reply
													</a>
												</div>
											</div>
										</li>
										<li>
											<div className='mil-comment mil-up'>
												<div className='mil-avatar'>
													<img src='img/faces/6.png' alt='user' />
												</div>
												<div className='mil-comment-text'>
													<h6 className='mil-mb-10'>Jane Boonboots</h6>
													<p className='mil-text-xs mil-soft mil-mb-15'>10/12/2023 · 10:13 AM</p>
													<p className='mil-text-s mil-soft'>
														Was born and I will give you a complete account of the system, and
														expound the actual teachings of the great explorer of the truth.
													</p>
													<a href='#.' className='mil-reply'>
														Reply
													</a>
												</div>
											</div>
										</li>
										<li>
											<div className='mil-comment mil-up'>
												<div className='mil-avatar'>
													<img src='img/faces/2.jpg' alt='user' />
												</div>
												<div className='mil-comment-text'>
													<h6 className='mil-mb-10'>Amin Lien</h6>
													<p className='mil-text-xs mil-soft mil-mb-15'>10/12/2023 · 10:13 AM</p>
													<p className='mil-text-s mil-soft'>
														But I must explain to you how all this mistaken idea
													</p>
													<a href='#.' className='mil-reply'>
														Reply
													</a>
												</div>
											</div>
										</li>
									</ul>
								</li>
							</ul>
						</div>
						<div className='col-xl-9'>
							<h4 className='mil-mb-60 mil-up'>{trans('leave-comment')}</h4>
							<form>
								<div className='row'>
									<div className='col-md-6 mil-mb-30'>
										<input className='mil-input mil-up' placeholder={trans('first-name')} />
									</div>
									<div className='col-md-6 mil-mb-30'>
										<input className='mil-input mil-up' placeholder={trans('your-email')} />
									</div>
									<div className='col-xl-12 mil-mb-30'>
										<input className='mil-input mil-up' placeholder={trans('your-website')} />
									</div>
									<div className='col-xl-12 mil-mb-30 '>
										<textarea
											cols={30}
											rows={10}
											className='mil-up'
											placeholder={trans('write-comment')}
											defaultValue={''}
										/>
									</div>
								</div>
								<div className='mil-checkbox-frame mil-mb-30 mil-up'>
									<div className='mil-checkbox'>
										<input type='checkbox' id='checkbox' />
										<label htmlFor='checkbox' />
									</div>
									<p className='mil-text-xs mil-soft'>{trans('agree-to-data')}</p>
								</div>
								<div className='mil-up'>
									<button type='submit' className='mil-btn mil-m'>
										{trans('post-comment')}
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			{/* publication end */}
		</PageLayout>
	);
};
export default page;
