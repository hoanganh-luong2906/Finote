import { useTranslations } from 'next-intl';
import Link from 'next/link';
const Footer = ({ bg = true, margin = 160 }) => {
	const trans = useTranslations('Navigation');

	return (
		<footer className={`${bg ? 'mil-footer-with-bg' : ''} mil-p-${margin}-0 `}>
			<div className='container'>
				<div className='row'>
					<div className='col-xl-3'>
						<a href='#.' className='mil-footer-logo mil-mb-60'>
							<img src='img/logo.svg' alt='Finote' width={120} height={35} />
						</a>
					</div>
					<div className='col-xl-3 mil-mb-60'>
						<h6 className='mil-mb-60'>{trans('nav-desc')}</h6>
						<ul className='mil-footer-list'>
							<li className='mil-text-m mil-soft mil-mb-15'>
								<Link href='/'>{trans('home')}</Link>
							</li>
							<li className='mil-text-m mil-soft mil-mb-15'>
								<Link href='about'>{trans('about')}</Link>
							</li>
							<li className='mil-text-m mil-soft mil-mb-15'>
								<Link href='contact'>{trans('contact')}</Link>
							</li>
							<li className='mil-text-m mil-soft mil-mb-15'>
								<Link href='services'>{trans('services')}</Link>
							</li>
							<li className='mil-text-m mil-soft mil-mb-15'>
								<Link href='price'>{trans('pricing')}</Link>
							</li>
						</ul>
					</div>
					<div className='col-xl-3 mil-mb-60'>
						<h6 className='mil-mb-60'>{trans('contact-desc')}</h6>
						<ul className='mil-footer-list'>
							<li className='mil-text-m mil-soft mil-mb-15'>
								{trans.rich('location', {
									br: () => <br />,
								})}
							</li>
							<li className='mil-text-m mil-soft mil-mb-15'>{trans('phone')}</li>
							<li className='mil-text-m mil-soft mil-mb-15'>{trans('email')}</li>
						</ul>
					</div>
					<div className='col-xl-3 mil-mb-80'>
						<h6 className='mil-mb-60'>{trans('helper-desc')}</h6>
						<p className='mil-text-xs mil-soft mil-mb-15'>{trans('helper-title')}</p>
						<form id='subscribeForm' className='mil-subscripe-form-footer'>
							<input className='mil-input' name='EMAIL' type='email' placeholder='Email' />
							<button type='submit'>
								<i className='far fa-envelope-open mil-dark' />
							</button>
							<div className='mil-checkbox-frame mil-mt-15'>
								<div className='mil-checkbox'>
									<input type='checkbox' id='checkbox' defaultChecked />
									<label htmlFor='checkbox' />
								</div>
								<p className='mil-text-xs mil-soft'>{trans('helper-cta')}</p>
							</div>
						</form>
					</div>
				</div>
				<div className='mil-footer-bottom'>
					<div className='row'>
						<div className='col-xl-6'>
							<p className='mil-text-s mil-soft'>{trans('helper-copyright')}</p>
						</div>
						<div className='col-xl-6'>
							<p className='mil-text-s mil-text-right mil-sm-text-left mil-soft'>
								{trans('ref')}{' '}
								<a href='https://github.com/hoanganh-luong2906' target='blank'>
									hoanganh-luong2906
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
