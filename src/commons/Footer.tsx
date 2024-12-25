import Link from 'next/link';
const Footer = ({ bg = true, margin = 160 }) => {
	return (
		<footer className={`${bg ? 'mil-footer-with-bg' : ''} mil-p-${margin}-0 `}>
			<div className='container'>
				<div className='row'>
					<div className='col-xl-3'>
						<a href='#.' className='mil-footer-logo mil-mb-60'>
							<img src='img/logo-2.png' alt='Plax' width={28} height={32} />
						</a>
					</div>
					<div className='col-xl-3 mil-mb-60'>
						<h6 className='mil-mb-60'>Usefull Links</h6>
						<ul className='mil-footer-list'>
							<li className='mil-text-m mil-soft mil-mb-15'>
								<Link href='/'>Home</Link>
							</li>
							<li className='mil-text-m mil-soft mil-mb-15'>
								<Link href='about'>About Us</Link>
							</li>
							<li className='mil-text-m mil-soft mil-mb-15'>
								<Link href='contact'>Contact Us</Link>
							</li>
							<li className='mil-text-m mil-soft mil-mb-15'>
								<Link href='services'>Services</Link>
							</li>
							<li className='mil-text-m mil-soft mil-mb-15'>
								<Link href='price'>Pricing</Link>
							</li>
						</ul>
					</div>
					<div className='col-xl-3 mil-mb-60'>
						<h6 className='mil-mb-60'>Help</h6>
						<ul className='mil-footer-list'>
							<li className='mil-text-m mil-soft mil-mb-15'>
								999 Rue du Cherche-Midi, 7755500666 Paris, <br />
								France
							</li>
							<li className='mil-text-m mil-soft mil-mb-15'>+001 (808) 555-0111</li>
							<li className='mil-text-m mil-soft mil-mb-15'>hoanganh.luong2906@gmail.com</li>
						</ul>
					</div>
					<div className='col-xl-3 mil-mb-80'>
						<h6 className='mil-mb-60'>Newsletter</h6>
						<p className='mil-text-xs mil-soft mil-mb-15'>
							Subscribe to get the latest news form us
						</p>
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
								<p className='mil-text-xs mil-soft'>Subscribe to get the latest news</p>
							</div>
						</form>
					</div>
				</div>
				<div className='mil-footer-bottom'>
					<div className='row'>
						<div className='col-xl-6'>
							<p className='mil-text-s mil-soft'>© 2024 Finote &amp; Financial Report Web Application</p>
						</div>
						<div className='col-xl-6'>
							<p className='mil-text-s mil-text-right mil-sm-text-left mil-soft'>
								Developed by{' '}
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
