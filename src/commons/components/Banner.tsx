import { useTranslations } from 'next-intl';
import Link from 'next/link';

const Banner = ({
	title = 'Your Ally for Financial Control',
	subTitle = 'Send money globally with Finote',
	img = '/img/home-3/1.webp',
	style = { maxWidth: '135%', transform: 'translateX(5%)' },
	dark = false,
}) => {
	const trans = useTranslations('LandingPage');

	return (
		<div className={`mil-banner mil-dissolve ${dark ? 'mil-dark-2' : ''}`}>
			<div className='container'>
				<div className='row align-items-center'>
					<div className='col-xl-6'>
						<div className='mil-banner-text'>
							<h6 className='mil-text-gradient-2 mil-mb-20'>{subTitle}</h6>
							<h1 className='mil-display mil-text-gradient-3 mil-mb-60'>{title}</h1>
							<div className='mil-buttons-frame'>
								<Link href='register' className='mil-btn mil-md mil-add-arrow'>
									{trans('banner-register')}
								</Link>
								<a
									href='https://www.youtube.com/watch?v=gRhoYxy9Oss'
									className='mil-btn mil-md mil-light mil-add-play has-popup-video'
								>
									{trans('banner-register')}
								</a>
							</div>
						</div>
					</div>
					<div className='col-xl-6'>
						<div className='mil-banner-img'>
							<img src={img} alt='banner' style={style} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Banner;

export const PageBanner = ({
	title = 'More than a Platform, a Financial Revolution',
	pageName = 'about',
}) => {
	const trans = useTranslations('Navigation');

	return (
		<div className='mil-banner mil-banner-inner mil-dissolve'>
			<div className='container'>
				<div className='row align-items-center justify-content-center'>
					<div className='col-xl-8'>
						<div className='mil-banner-text mil-text-center'>
							<div className='mil-text-m mil-mb-20'>{trans(pageName as any) ?? pageName}</div>
							<h1 className='mil-mb-60'>{title}</h1>
							<ul className='mil-breadcrumbs mil-center'>
								<li>
									<Link href='/'>{trans('home')}</Link>
								</li>
								<li>
									<a href='#'>{trans(pageName as any) ?? pageName}</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
